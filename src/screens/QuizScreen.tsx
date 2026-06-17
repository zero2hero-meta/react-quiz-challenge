import { useEffect, useState } from "react";
import { AnswerButton } from "../components/AnswerButton";
import { QuestionCard } from "../components/QuestionCard";
import { ReviewAnswers } from "../components/ReviewAnswers";
import { ScoreCard } from "../components/ScoreCard";
import { getQuizQuestions } from "../services/quizService";
import { getBestScore, saveBestScore } from "../storage/scoreStorage";
import type { QuizQuestion } from "../types/quiz";
import { logger } from "../utils/logger";

export function QuizScreen() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => getBestScore());
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);

  useEffect(() => {
    loadQuestions();
  }, []);

  async function loadQuestions() {
    setLoading(true);
    setError(null);

    try {
      // Temporary debugging log: confirms the service call starts.
      logger.info("Loading quiz questions");

      const loadedQuestions = await getQuizQuestions();
      setQuestions(loadedQuestions);

      // Temporary debugging log: confirms the service returned data.
      logger.info("Quiz loaded", loadedQuestions);
    } catch (loadError) {
      setError("Could not load the quiz. Please try again.");

      // Temporary debugging log: shows service or data-loading errors.
      logger.error("Quiz loading failed", loadError);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (questions.length === 0 || isFinished) {
      return;
    }

    // useEffect runs after React updates the screen.
    // Because currentQuestionIndex is in the dependency array, this effect
    // runs when the user moves from one question to another.
    logger.info("Current question number", currentQuestionIndex + 1);

    // Clear the previous answer so each new question starts unanswered.
    setSelectedAnswer(null);
  }, [currentQuestionIndex, isFinished, questions.length]);

  function handleAnswerSelect(option: string) {
    if (selectedAnswer) {
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.correctAnswer;

    setSelectedAnswer(option);
    setUserAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: option,
    }));

    // Temporary debugging log: check selected answer and correctness.
    logger.info("Answer selected", { option, isCorrect });

    if (isCorrect) {
      setScore((currentScore) => {
        const nextScore = currentScore + 1;

        // Temporary debugging log: check score calculation.
        logger.info("Score updated", { currentScore, nextScore });

        return nextScore;
      });
    }
  }

  function handleNextQuestion() {
    const nextQuestionIndex = currentQuestionIndex + 1;

    // Temporary debugging log: check question navigation.
    logger.info("Next question clicked", {
      currentQuestionIndex,
      nextQuestionIndex,
    });

    if (nextQuestionIndex === questions.length) {
      finishQuiz();
      return;
    }

    setCurrentQuestionIndex(nextQuestionIndex);
  }

  function finishQuiz() {
    const finalScore = score;

    if (finalScore > bestScore) {
      saveBestScore(finalScore);
      setBestScore(finalScore);
    }

    setIsFinished(true);
  }

  async function restartQuiz() {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswers({});
    setScore(0);
    setIsFinished(false);
    setIsReviewing(false);
    await loadQuestions();
  }

  function showReview() {
    setIsReviewing(true);
  }

  function showScore() {
    setIsReviewing(false);
  }

  if (loading) {
    return (
      <main className="app-shell">
        <p className="status-message">Loading quiz...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="app-shell">
        <p className="status-message status-message--error">{error}</p>
      </main>
    );
  }

  if (isFinished) {
    if (isReviewing) {
      return (
        <main className="app-shell">
          <ReviewAnswers
            questions={questions}
            userAnswers={userAnswers}
            onBackToScore={showScore}
          />
        </main>
      );
    }

    return (
      <main className="app-shell">
        <ScoreCard
          score={score}
          totalQuestions={questions.length}
          bestScore={bestScore}
          onReview={showReview}
          onRestart={restartQuiz}
        />
      </main>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main className="app-shell">
      <section className="quiz-panel" aria-label="React Quiz Challenge">
        <header className="quiz-header">
          <p className="app-label">React Quiz Challenge</p>
          <p className="score-pill">Score: {score}</p>
        </header>

        <QuestionCard
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          question={currentQuestion.question}
        />

        <div className="answer-list">
          {currentQuestion.options.map((option) => (
            <AnswerButton
              key={option}
              option={option}
              isDisabled={selectedAnswer !== null}
              isCorrect={option === currentQuestion.correctAnswer}
              isSelected={option === selectedAnswer}
              onSelect={handleAnswerSelect}
            />
          ))}
        </div>

        <button
          className="primary-button"
          type="button"
          disabled={!selectedAnswer}
          onClick={handleNextQuestion}
        >
          {currentQuestionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </section>
    </main>
  );
}
