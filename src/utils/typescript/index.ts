export type Rename<T, K extends keyof T, N extends string> = { [P in N]: T[K] };
