export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type PartialKey<T, K extends PropertyKey = PropertyKey> = Partial<
  Pick<T, Extract<keyof T, K>>
> &
  Omit<T, K> extends infer O
  ? { [P in keyof O]: O[P] }
  : never;
export type SingleKeyValuePair<K extends string | number | symbol, V> = {
  [key in K]: V;
};

export type Primitive = string | number | boolean;

export type Nullable<T> = T | null;
