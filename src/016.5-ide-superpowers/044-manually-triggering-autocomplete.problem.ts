type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  bar: 1,
  baz: true,
  foo: "foo",
});

document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
});
