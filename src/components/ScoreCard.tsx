type ScoreCardProps = {
  score: number;
  totalQuestions: number;
  bestScore: number;
  onReview: () => void;
  onRestart: () => void;
};

export function ScoreCard({
  score,
  totalQuestions,
  bestScore,
  onReview,
  onRestart,
}: ScoreCardProps) {
  return (
    <section className="score-card" aria-labelledby="score-title">
      <p className="score-eyebrow">Quiz complete</p>
      <h2 id="score-title">
        You scored {score} out of {totalQuestions}
      </h2>
      <p className="best-score">Best score: {bestScore}</p>
      <button className="secondary-button" type="button" onClick={onReview}>
        Review Answers
      </button>
      <button className="primary-button" type="button" onClick={onRestart}>
        Try Again
      </button>
    </section>
  );
}
