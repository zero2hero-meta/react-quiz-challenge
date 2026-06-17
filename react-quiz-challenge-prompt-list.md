# React Quiz App

Use these prompts with Copilot Chat/AI assistant while building your React App + TypeScript app.

## 1) Project Setup

### Prerequisites

- NodeJS installation
- NPM installation

Please note: Do not try to create a project in one shot!

- Create one piece and test!

### Prompt 0 — Scaffold app

```
You are a senior React engineer.

React + TypeScript app with be created , app name is “React Quiz Challenge”.

create a Scaffold app first
```

### Prompt 1 — Scaffold app

```
You are a senior React engineer.

The app should be a one-page quiz game.

Create a professional but simple folder structure:

src/
  screens/
  components/
  services/
  utils/
  types/
  storage/
  data/

Requirements:
- Explain each folder briefly
- Create example files for each folder
- Use TypeScript
- Keep the app simple and suitable for a 1-hour workshop
- Do not use backend yet
```

### Prompt 2 — Install dependencies

```
npm install
```

### Prompt 3 — Create Quiz Data

```
You are a senior React engineer.

Create local quiz data for the React Quiz Challenge app.

Requirements:
- Create a file: src/data/quizData.ts
- Add at least 5 quiz questions
- Each question should have:
  - id
  - question
  - options
  - correctAnswer
- Use TypeScript
- Create a reusable QuizQuestion type in src/types/quiz.ts
- Export the quiz data so it can be used in the app
```

### Prompt 4 - Create the Main Quiz Screen

```
You are a senior React engineer.

Create the main quiz screen for React Quiz Challenge.

Requirements:
- File: src/screens/QuizScreen.tsx
- Import quiz data from src/data/quizData.ts
- Use useState to manage:
  - currentQuestionIndex
  - selectedAnswer
  - score
  - isFinished
- Show one question at a time
- Show answer options as buttons
- When the user selects an answer:
  - store the selected answer
  - check if it is correct
  - update the score if correct
- Add a “Next Question” button
- At the end, show the final score
- Keep the code clean and understandable
```

### Prompt 5 - Create Reusable Components

```
You are a senior React engineer.

Refactor the React Quiz Challenge app by creating reusable components.

Create these files:

src/components/QuestionCard.tsx
src/components/AnswerButton.tsx
src/components/ScoreCard.tsx

Requirements:
- QuestionCard should display the question text
- AnswerButton should display each answer option
- ScoreCard should display the final score
- Use TypeScript props
- Keep components simple
- Update QuizScreen.tsx to use these components
```

### Prompt 6 - Add useEffect Example

Actually, better to work with mock data until the backend RestAPI is ready!

```
You are a senior React engineer.

Create a REST API style service for the React Quiz Challenge app.

For now, use local data, but structure it like a real API call.

Create file:
src/services/quizService.ts

Requirements:
- Create a function getQuizQuestions()
- Return quizData using a Promise
- Add a small fake delay using setTimeout
- Use TypeScript return types
- This should prepare the app for a real backend API later
```

### Prompt 7 - Connect the Screen to the Service

```
You are a senior React engineer.

Update QuizScreen.tsx to load quiz questions from quizService instead of importing data directly.

Requirements:
- Use useState for:
  - questions
  - loading
  - error
- Use useEffect to call getQuizQuestions()
- Show “Loading quiz...” while loading
- Show an error message if loading fails
- Show the quiz when data is loaded
- Keep the app fully working with local data through the service
```

### Prompt 8 - Add Storage for Best Score

```
You are a senior React engineer.

Add localStorage support for saving the best score.

Create file:
src/storage/scoreStorage.ts

Requirements:
- Create getBestScore()
- Create saveBestScore(score)
- Use localStorage
- Update QuizScreen.tsx so that:
  - final score is compared with best score
  - best score is saved if the new score is higher
  - best score is displayed on the final screen
```

### Prompt 9 - Add Debugging Examples

```
You are a senior React engineer.

Add a debugging guide for the React Quiz Challenge app.

Requirements:
- Explain how to debug:
  - state changes
  - API/service loading
  - selected answer issues
  - score calculation
- Add useful console logs temporarily
- Show where to use browser DevTools
- Show how to inspect components with React Developer Tools
- Include one common bug and the fixed version
```

### Prompt 10 — Add Logging Utility

```
You are a senior React engineer.

Create a simple logging utility for the React Quiz Challenge app.

Create file:
src/utils/logger.ts

Requirements:
- Add logger.info()
- Add logger.warn()
- Add logger.error()
- Use console internally
- Replace random console.log calls with logger
- Log:
  - quiz loaded
  - question changed
  - answer selected
  - error happened
- Keep it simple and suitable for students
```

### Final Prompt — Make Everything Work Together

```
You are a senior React engineer.

Now combine everything into a fully working React + TypeScript project called React Quiz Challenge.

Requirements:
- Use local quiz data
- Load questions through quizService
- Use components:
  - QuestionCard
  - AnswerButton
  - ScoreCard
- Use folders:
  - screens
  - components
  - services
  - utils
  - types
  - storage
  - data
- Use useState and useEffect
- Show loading state
- Show error state
- Show quiz questions one by one
- Calculate score
- Show final score
- Save and display best score using localStorage
- Add simple logger utility
- Provide all required files with full code
- Make sure the app runs without backend
- Include npm install and npm run dev instructions
- Create a README.md file for beginner level
```

### Improvement

more questions..

```
create 20 questions, and randomly choose 5 questions each time. and put review button to review the answers section at the end of the quiz
```

correct answers

```
explain the correct answers on the review section
```

- header section
- footer section
- burger menu
- light and dark theme
