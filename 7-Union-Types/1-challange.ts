import { Equal, Expect } from "..";

//colors: "red", "orange" and "blue"

type LogLevel = "error" | "warning" | "info";

export type StatusColor<Level extends LogLevel> = TODO;

type result1 = StatusColor<"error">;
type test1 = Expect<Equal<result1, "red">>;

type result2 = StatusColor<"error" | "warning">;
type test2 = Expect<Equal<result2, "red" | "orange">>;

type result3 = StatusColor<"warning" | "info">;
type test3 = Expect<Equal<result3, "orange" | "blue">>;

type result4 = StatusColor<"error" | "warning" | "info">;
type test4 = Expect<Equal<result4, "red" | "orange" | "blue">>;
