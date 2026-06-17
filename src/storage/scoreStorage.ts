const BEST_SCORE_KEY = "react-quiz-challenge-best-score";

export function getBestScore(): number {
  const savedScore = localStorage.getItem(BEST_SCORE_KEY);
  return savedScore ? Number(savedScore) : 0;
}

export function saveBestScore(score: number): void {
  localStorage.setItem(BEST_SCORE_KEY, String(score));
}
