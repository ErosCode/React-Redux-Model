import logMiddleware from './logMiddleware';

// By exporting an array you can use multiple middlewares in one file. Here : index.js
export default [
    logMiddleware,
];
  