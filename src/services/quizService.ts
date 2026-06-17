import { quizData } from "../data/quizData";
import type { QuizQuestion } from "../types/quiz";
import { getRandomItems } from "../utils/random";

const QUESTIONS_PER_GAME = 5;

export function getQuizQuestions(): Promise<QuizQuestion[]> {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(getRandomItems(quizData, QUESTIONS_PER_GAME));
    }, 500);
  });
}
