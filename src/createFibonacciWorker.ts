import { FunctionInfo, implementFunctionWorkerExternal } from
    "kiss-worker";

// Import the type only
import type { fibonacci } from "./fibonacci.js";

export const createFibonacciWorker = implementFunctionWorkerExternal(
    // A function that creates a web worker running the script serving
    // the function
    () => new Worker(
        new URL("fibonacci.js", import.meta.url),
        { type: "module" },
    ),
    new FunctionInfo<typeof fibonacci>(),
);
