export type Rename<T, K extends keyof T, N extends string> = { [P in N]: T[K] };

export type ThrowsError = never;

export type Nullable<T> = T | null;
