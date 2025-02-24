const firstName = "Codelicks";
const lastName = "Academy";
const fullname = `${firstName} ${lastName}`;

type FirstName = "Codelicks";
type LastName = "Academy";

type Name = `${FirstName} ${LastName}`;

const div = someQuerySelector("div:last-child"); // `HTMLDivElement | null` instead of `HTMLElement | null`

type Hey = `Hey, ${"dude"}`;

type Id = 50;

type Activity = `users[${Id}].isBanned`;

type IsActive = `${Activity} === ${false}`;

type MyObject = { "0": 100 };
type MyIndex = 0;

type FetchValue<T, K extends keyof T> = T[K];

type ResultA = FetchValue<MyObject, MyIndex>;
type ResultB = FetchValue<MyObject, `${MyIndex}`>; // ✅

type FirstName2 = "Jack";

type Jack = `${FirstName2} ${string}`;

const t1: Jack = "Jack Johnson"; // ✅
const t2: Jack = "Jack Someone else"; // ✅
const t3: Jack = "Jack "; // ✅ (empty string is also valid )
const t4: Jack = "Hey dude!"; // ❌ (does not start with "Jack ")
const t5: Jack = "Wehere is Jack"; // ❌

// "Jack ${string} ~ /Jack .*/.

type Intro = `I am Jack and I am ${number}.`;

const i1: Intro = "I am Jack and I am 25."; // ✅
const i2: Intro = "I am Jack and I am 3.14."; // ✅
const i3: Intro = "I am Jack and I am so old"; // ❌

type LocalDomain = `localhost:${number}`;

function sendPing(domain: LocalDomain): void {
  //...
}

sendPing("localhost:8080");

type StringifiableTypes = string | number | boolean | bigint | null | undefined;

type Dimension = "small" | "medium" | "large";

type CssClassName = `dimension-${Dimension}`;

type Theme = "light" | "dark";

type ComponentClass = `${Theme}-${Dimension}`;

type Horizontal = "east" | "west";
type Vertical = "north" | "south";

function getDirection(horizontal: Horizontal, vertical: Vertical) {
  const direction = `${horizontal}-${vertical}` as const;
  /*                              			        👆                         
                          `as const` tells TypeScript to infer this 
                            type as `${Horizontal}-${vertical}` instead of `string`.   
                                                */

  switch (direction) {
    case "west-north":
      return "↖";
    case "west-south":
      return "↙";
    case "east-north":
      return "↗";
    case "east-south":
      return "↘";

    default:
      return ensureExhaustive(direction);
  }
}

function ensureExhaustive(arg: never): never {
  throw new Error("Unhandled case detected.");
}

type UT1 = Uppercase<"hey">;

type LT = Lowercase<"HEY">;

type CT = Capitalize<"hey, dude">;

type UC = Uncapitalize<"Hey, dude">;

type Action = "GET" | "POST";
type Entity = "product" | "order" | "post";

type AttributeName = `${Lowercase<Action>}${Capitalize<Entity>}`;

type HTTPService = Record<AttributeName, Function>;

const httpService = {
  getProduct: () => Promise.resolve({ title: "Some product" }),
  postProduct: (product: { title: string }) => Promise.resolve(),
  getOrder: () => Promise.resolve({ title: "some text" }),
  postOrder: (order: { title: string }) => Promise.resolve(),
} satisfies HTTPService;

const product = await httpService.getProduct();

type ExtractNames<FullName> = FullName extends `${infer First} ${infer Rest}`
  ? [First, ExtractLastWord<Rest>]
  : never;

type ExtractLastWord<Str> = Str extends `${string} ${infer Rest}`
  ? ExtractLastWord<Rest>
  : Str;

type ENT2 = ExtractNames<"Jack Bla BlaBla BlaBlaBla Jackson">;

type ENT = ExtractNames<"Jack Jackson">;

type DecomposeDomain<DomainName> =
  DomainName extends `${infer Sub}.${infer Domain}.${infer Ext}`
    ? [Sub, Domain, Ext]
    : never;
type DDT = DecomposeDomain<"www.google.com">;

type SplitString<Input> = Input extends `${infer First}${infer Last}`
  ? [First, Last]
  : never;

type SS1 = SplitString<"SomeText">;

type SplitTuple<T> = T extends [infer First, ...infer Rest]
  ? [First, Rest]
  : never;

type ST = SplitTuple<["A", "B", "C", "D"]>;
