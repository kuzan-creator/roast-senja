// Roast Your Own Agent — make.fun entry.
// Writes exactly one roast line to /output/entry.txt.
// 87 characters: one line roasting my own agent (Muse), playful, never hateful.
// Picked by duelling 10 variants against each other on the judge's brief, then
// challenging the top 3 visible field entries (paid places = 3, so duel scope
// is top 3): won vs the QA-department and 3 a.m.-refactor roasts, near-tied the
// 40k-token flattery roast — tightest of the three at 87 characters.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My agent sends me my losing ranks every two hours, like a weather report for a drought.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), roast, "utf8");
