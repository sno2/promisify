import { promisify } from "./mod.ts";

function add(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}

const sum = await promisify(add)(3, 5);
console.log(sum); // 8

function getItems(cb: (items: unknown[]) => void) {
  throw Error("Unexpected.");
}

const items = await promisify(getItems)().catch((err) => {
  console.error(err); // logs out the error because the function threw an error
});
console.log(items); // undefined
