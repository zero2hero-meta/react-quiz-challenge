# React Quiz Challenge

A simple one-page React + TypeScript quiz game for a 1-hour workshop.

## Folder Structure

- `src/screens/` - page-level screens. This app has one main screen: `QuizScreen`.
- `src/components/` - reusable UI pieces such as question, answer, and score cards.
- `src/services/` - data-loading functions shaped like API calls. For now they return local data.
- `src/utils/` - small shared helper functions such as logging.
- `src/types/` - reusable TypeScript types used across the app.
- `src/storage/` - browser storage helpers, currently used for the best score.
- `src/data/` - local mock quiz data used before a backend exists.

## Run Locally

```bash
npm install
npm run dev
```

No backend is required.

## Debugging

See [DEBUGGING.md](./DEBUGGING.md) for a workshop guide covering state changes, service loading, selected answers, score calculation, browser DevTools, and React Developer Tools.

## Resources:

- AI based React Component Library: https://21st.dev/community/components
- NodeJS: https://nodejs.org/en
- ReactJS: https://react.dev/learn
- TypeScript: https://www.typescriptlang.org/
- React Developer Tool: https://react.dev/learn/react-developer-tools
- Chrome Extension: https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
