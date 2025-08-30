import { Equal, Expect } from "@total-typescript/helpers";

const appElement = document.getElementById("app");

if(!appElement){
    throw new Error("Could not find appElement")
}

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
