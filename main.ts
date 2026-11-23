// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes one original funny line about everyday life to /output/entry.txt.
// The line: noise-cancelling headphones finally silence the world, and the
// punchline lands on the last words — the only noise left is the wearer's
// own thoughts, which turn out to be louder than the room ever was.
// Deterministic: the same fixed string on every run.
// One sentence, 120 characters — inside the gate's 1–200 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought noise-cancelling headphones so I could finally focus, and now the loudest thing in the room is my own thoughts.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
