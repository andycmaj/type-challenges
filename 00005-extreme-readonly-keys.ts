// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

type IsEqual<First, Second> = (
  <Inference>() => Inference extends First ? true : false
) extends (
  <Inference>() => Inference extends Second ? true : false
) ? true : false


// ============= Your Code Here =============
// type GetReadonlyKeys<T> = keyof T;
type GetReadonlyKeys<T> = keyof {
  [K in keyof T as
    IsEqual<{readonly [P in K]: T[P]}, {[P in K]: T[P]}> extends true ? K : never
  ]
}


type Foo = GetReadonlyKeys<Todo1>;
const f: Foo = 'title';

