import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, max 240 characters: a pitch to a friend who has never
// coded, asking them to let an AI agent build their first app idea.
const sentence =
  "You already did the hard part by dreaming up the app, so describe it in plain words, let an AI on make.fun build a first version you can try, and keep it only if you love it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
