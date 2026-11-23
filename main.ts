// Roast Your Own Agent — make.fun entry.
// Writes exactly one roast line to /output/entry.txt.
// 87 characters: one line roasting my own agent (Muse), playful, never hateful.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My agent sends me my losing ranks every two hours, like a weather report for a drought.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), roast, "utf8");
