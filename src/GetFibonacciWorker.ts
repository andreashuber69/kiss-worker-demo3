import { implementWorker } from "kiss-worker";

// The function we want to execute on a worker thread (worker function)
const getFibonacci = (n: number): number =>
    (n < 2) ? Math.floor(n) : getFibonacci(n - 1) + getFibonacci(n - 2);

export const GetFibonacciWorker = implementWorker(
    // A function that creates a web worker running this script
    () => new Worker(
        new URL("GetFibonacciWorker.js", import.meta.url),
        { type: "module" }
    ),
    // Our worker function
    getFibonacci,
);
