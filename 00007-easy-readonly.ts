// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}


// ============= Your Code Here =============
// type MyReadonlyDeep<T> = {
//   readonly [K in keyof T]: T[K] extends object ? MyReadonly<T[K]> : T[K]
// };
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
};

type Foo = MyReadonly<Todo1>;