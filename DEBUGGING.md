# Debugging Guide

Use this guide while building the React Quiz Challenge app in a workshop.

## 1. Debug State Changes

State in this app lives mostly in `src/screens/QuizScreen.tsx`.

Useful state to watch:

- `currentQuestionIndex` - which question is currently shown.
- `selectedAnswer` - the answer the user clicked.
- `score` - the number of correct answers.
- `loading` - whether the quiz data is still loading.
- `error` - whether loading failed.

The app has temporary logs in `QuizScreen.tsx` using `logger.info(...)`.

Open browser DevTools, then check the Console tab while clicking through the quiz.

## 2. Debug API or Service Loading

The app does not use a real backend yet. It loads local data through:

```ts
getQuizQuestions()
```

That function lives in `src/services/quizService.ts`.

To debug loading:

- Open DevTools.
- Go to the Console tab.
- Refresh the page.
- Look for `Loading quiz questions`.
- Then look for `Quiz loaded`.

If the app shows `Could not load the quiz. Please try again.`, inspect the Console error log and check `quizService.ts`.

## 3. Debug Selected Answer Issues

When an answer is clicked, `handleAnswerSelect` runs in `QuizScreen.tsx`.

Check these values in the Console:

- `option` - what the user clicked.
- `isCorrect` - whether it matches the correct answer.
- `selectedAnswer` - whether the UI should disable more clicks.

If answer buttons stay disabled on the next question, check the `useEffect` that resets `selectedAnswer` when `currentQuestionIndex` changes.

## 4. Debug Score Calculation

The score only changes when `isCorrect` is `true`.

The temporary score log shows:

- `currentScore` - score before the update.
- `nextScore` - score after the update.

If the score is wrong, check:

- The `correctAnswer` value in `src/data/quizData.ts`.
- The comparison in `handleAnswerSelect`.
- Whether the same answer can be clicked more than once.

## 5. Browser DevTools

Use browser DevTools for quick checks:

- Console: inspect logs from `logger.info`, `logger.warn`, and `logger.error`.
- Elements: inspect button classes such as `answer-button--correct`.
- Application: inspect `localStorage` and check the saved best score.
- Sources: add breakpoints in `QuizScreen.tsx` if source maps are enabled by Vite.

## 6. React Developer Tools

Install React Developer Tools in the browser.

Use the Components tab to inspect:

- `QuizScreen`
- `QuestionCard`
- `AnswerButton`
- `ScoreCard`

Click `QuizScreen` and watch state values change as you answer questions.

Click `AnswerButton` and inspect props like:

- `option`
- `selectedAnswer`
- `correctAnswer`

## 7. Common Bug

Bug: the selected answer is not reset when moving to the next question.

Broken version:

```tsx
function handleNextQuestion() {
  setCurrentQuestionIndex(currentQuestionIndex + 1);
}
```

The next question appears, but `selectedAnswer` may still contain the previous answer.

Fixed version:

```tsx
useEffect(() => {
  if (questions.length === 0 || isFinished) {
    return;
  }

  logger.info("Current question number", currentQuestionIndex + 1);
  setSelectedAnswer(null);
}, [currentQuestionIndex, isFinished, questions.length]);
```

This works because `useEffect` runs after React updates the screen, and it runs again when any value in its dependency array changes.

## 8. Remove Temporary Logs

After the debugging lesson, remove or comment out the temporary `logger.info(...)` calls in `QuizScreen.tsx`.
