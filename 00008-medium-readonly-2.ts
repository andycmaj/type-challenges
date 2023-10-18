// ============= Test Cases =============
import type {Alike, Expect, UnionToIntersection} from "./test-utils";

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

// ============= Your Code Here =============
type MyReadonly2<T, K = {}> = {
  readonly [P in keyof T as K extends keyof T
    ? P extends K
      ? P
      : never
    : P]: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type T = MyReadonly2<Todo1>;
