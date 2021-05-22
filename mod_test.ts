import { promisify } from "./mod.ts";
import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.97.0/testing/asserts.ts";

Deno.test("Basic", () => {
  function add(a: number, b: number, cb: (sum: number) => void) {
    cb(a + b);
  }

  promisify(add)(2, 4).then((val) => void assertEquals(val, 6));
});

Deno.test("Advanced", async () => {
  function wait(time: number, cb: () => void) {
    setTimeout(cb, time);
  }

  let start = performance.now();

  await promisify(wait)(500);

  assert(performance.now() - 600 < start);
});
