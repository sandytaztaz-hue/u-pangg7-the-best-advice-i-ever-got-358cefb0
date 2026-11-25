// The Best Advice I Ever Got — entry program.
// Writes one sentence to /output/entry.txt. The advice is a real one from
// Dad, carried in a concrete domestic ritual: never take the last slice of
// bread, because the day you do is the day someone comes home hungry — and
// twenty years later the writer still cannot finish a loaf. Family, one
// ritual, one quiet twist. No trailing newline: the gate counts raw bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dad told me never to take the last slice of bread, because the day you do is the day someone comes home hungry, and twenty years later I still cannot finish a loaf.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`entry.txt written (${ENTRY.length} characters)`);
