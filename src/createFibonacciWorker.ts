import { FunctionInfo, implementFunctionWorkerExternal, Worker } from
    "kiss-worker";

// Import the type only
import type { fibonacci } from "./fibonacci.ts";

export const createFibonacciWorker = implementFunctionWorkerExternal(
    // A function that creates a worker running the script serving
    // the function
    () => new Worker(
        new URL("fibonacci.ts", import.meta.url),
        { type: "module" },
    ),
    new FunctionInfo<typeof fibonacci>(),
);
