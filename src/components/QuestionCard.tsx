type QuestionCardProps = {
  questionNumber: number;
  totalQuestions: number;
  question: string;
};

export function QuestionCard({
  questionNumber,
  totalQuestions,
  question,
}: QuestionCardProps) {
  return (
    <section className="question-card" aria-labelledby="question-title">
      <p className="question-count">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2 id="question-title">{question}</h2>
    </section>
  );
}
