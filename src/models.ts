export interface Route<T> {
    path: string,
    method: string
    functionName: keyof T
}

export interface Routes<T> {
 [index: string]: Route<T>
}
