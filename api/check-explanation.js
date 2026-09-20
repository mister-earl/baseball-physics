import { score, TypeSafeClient } from "@typesafe-ai/sdk";

const client = new TypeSafeClient();

const REFERENCE = {
  pitch: 'The engine behind all pitch movement is the Magnus effect. When a spinning ball moves through air, one side creates higher air pressure and the other lower. That pressure difference becomes a force — and that force is what makes a curveball dive, a fastball "rise," and a slider cut late.',
};

const LEVELS = {
  pitch: [
    "Doesn't mention spin or any force/pressure mechanism at all",
    "Says spin causes the movement, but doesn't explain how spin becomes a force",
    "Explains spin creates an air pressure difference across the ball, but is vague about how that produces a directional force",
    "Correctly explains that spin creates an air pressure difference (Magnus effect), and that difference produces the force that redirects the ball's path",
  ],
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "POST only" });
    return;
  }

  const { section, explanation } = req.body ?? {};
  const reference = REFERENCE[section];
  const levels = LEVELS[section];

  if (!reference || !levels) {
    res.status(400).json({ error: `Unsupported section: ${section}` });
    return;
  }
  if (typeof explanation !== "string" || explanation.trim().length < 5) {
    res.status(400).json({ error: "Explanation is missing or too short" });
    return;
  }

  try {
    const response = await client.systemOne({
      state: {
        referenceExplanation: reference,
        userExplanation: explanation,
      },
      questions: {
        understanding: score(
          "How completely does `userExplanation` explain the same mechanism as `referenceExplanation`, in the user's own words?",
          levels
        ),
      },
    });

    const answer = response.answers.understanding;
    res.status(200).json({
      score: answer.score,
      confidence: answer.confidence,
      maxScore: levels.length - 1,
    });
  } catch (err) {
    console.error("TypeSafe request failed:", err);
    res.status(502).json({ error: "judgment service unavailable" });
  }
}
