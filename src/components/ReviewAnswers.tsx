import type { QuizQuestion } from "../types/quiz";

type ReviewAnswersProps = {
  questions: QuizQuestion[];
  userAnswers: Record<number, string>;
  onBackToScore: () => void;
};

export function ReviewAnswers({
  questions,
  userAnswers,
  onBackToScore,
}: ReviewAnswersProps) {
  return (
    <section className="review-panel" aria-labelledby="review-title">
      <div className="review-header">
        <p className="score-eyebrow">Answer review</p>
        <button className="secondary-button" type="button" onClick={onBackToScore}>
          Back to Score
        </button>
      </div>

      <h2 id="review-title">Review your answers</h2>

      <div className="review-list">
        {questions.map((question, index) => {
          const userAnswer = userAnswers[question.id];
          const isCorrect = userAnswer === question.correctAnswer;

          return (
            <article className="review-item" key={question.id}>
              <p className="question-count">Question {index + 1}</p>
              <h3>{question.question}</h3>
              <p className={isCorrect ? "review-answer correct" : "review-answer incorrect"}>
                Your answer: {userAnswer}
              </p>
              {!isCorrect && (
                <p className="review-answer correct">
                  Correct answer: {question.correctAnswer}
                </p>
              )}
              <p className="review-explanation">{question.explanation}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
