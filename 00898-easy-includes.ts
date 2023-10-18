// ============= Test Cases =============
import {Tail} from "List/_api";
import type {Equal, Expect} from "./test-utils";

type cases = [
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
  >,
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], {a: "A"}>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{a: "A"}], {readonly a: "A"}>, false>>,
  Expect<Equal<Includes<[{readonly a: "A"}], {a: "A"}>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>
];

// ============= Your Code Here =============

// https://stackoverflow.com/questions/64947040/typescript-testing-conditional-type-equality-understanding-the-syntax
// https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
// https://github.com/microsoft/TypeScript/pull/42525/files
type IsEqual<First, Second> = (<Inference>() => Inference extends First
  ? true
  : false) extends <Inference>() => Inference extends Second ? true : false
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [
  infer HEAD,
  ...infer TAIL
]
  ? IsEqual<HEAD, U> extends true
    ? true
    : Includes<TAIL, U>
  : false;
