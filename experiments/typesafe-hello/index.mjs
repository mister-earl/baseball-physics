// Throwaway script: first real call to TypeSafe, nothing wired into the site yet.
// Sanity check before building anything: does a judgment come back, and does it look right?

import { choice, noul, TypeSafeClient } from "@typesafe-ai/sdk";

const client = new TypeSafeClient();

const question = "why does a curveball drop more than gravity alone would explain";

const response = await client.systemOne({
  state: { question },
  questions: {
    onTopic: noul("Is `question` actually about the physics of baseball?"),
    section: choice("Which section of a baseball-physics explainer would answer `question` best?", {
      pitch: "spin, grip, and the Magnus effect on pitch movement",
      decision: "the batter's reaction window and swing decision",
      contact: "bat-ball collision physics",
      arc: "launch angle, exit velocity, and trajectory",
      defense: "fielder positioning, reads, and park factors",
    }),
  },
});

console.log("question:", question);
console.log("on topic (probability):", response.answers.onTopic.noul);
console.log("routed section:", response.answers.section.choice);
console.log("section confidence:", response.answers.section.confidence);
