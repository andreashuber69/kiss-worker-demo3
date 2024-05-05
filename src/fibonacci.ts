import { serveFunction } from "kiss-worker";

// The function we want to execute on a worker thread
const fibonacci = (n: number): number =>
    ((n < 2) ? Math.floor(n) : fibonacci(n - 1) + fibonacci(n - 2));

// Serve the function so that it can be called from the thread executing
// implementFunctionWorkerExternal
serveFunction(fibonacci);

export type { fibonacci };
