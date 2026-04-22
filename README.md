# The Physics of Baseball

An interactive long-form explainer built for curious fans who've watched the game for years and still want to understand what's actually happening on the field.

![Baseball Physics Site](https://img.shields.io/badge/built%20with-vanilla%20HTML%2FCS%2FJS-c8882a) ![Status](https://img.shields.io/badge/status-live-4a9e6b)

## What it is

This started as a personal question — I've been following baseball closely for about ten years, and I still couldn't fully explain the physics behind what I was watching. So I built a site that walks through it from the ground up, section by section, with interactive visuals you can actually play with.

Five sections, each tackling a different part of the play:

- **The Pitch** — how spin creates movement, and why all pitch types come down to the same principle (Magnus effect)
- **The Decision** — the hitter has 0.17 seconds to commit to a swing; this section shows exactly what they're reading and when
- **The Contact** — what happens in the one millisecond a bat meets a ball, and why bat speed matters more than pitch speed
- **The Arc** — launch angle, exit velocity, and why one degree of difference can mean 10 feet of carry
- **The Defense** — how outfielders read a ball off the bat before it's 30 feet in the air, plus park factors and how Oracle Park's bay air actually suppresses home runs

## Interactive features

- Pitch type selector with an animated spinning baseball (showing spin direction + movement arrow for each pitch)
- Decision timeline scrubber — drag through the 0.40s flight to see when the hitter hits the commit point
- Exit velocity calculator — adjust bat speed and pitch speed, get a live EV readout with a Statcast-style quality label
- Launch angle explorer — drag the angle and watch the trajectory arc update in real time
- Park factors table with HR impact vs. league average

## Built with

Pure HTML, CSS, and vanilla JavaScript. No frameworks, no build step, no dependencies. Canvas API for the interactive diagrams. Google Fonts (Cormorant Garamond + DM Sans + DM Mono) for the editorial feel.

Deployed on Vercel as a static site.

## Background

This is part of a broader portfolio of data-driven sports and product work. The design direction was intentional — I wanted something that felt like a cross between Baseball Savant's clean data aesthetic, The Athletic's long-form editorial tone, and the interactive explainer style of The Pudding. Dark theme, editorial serif headers, monospace for all the numbers.

The origin story: I became a baseball fan working behind the scenes at what was then AT&T Park (now Oracle Park) during a Giants internship. Cutting replay footage on the EVS machine during live games, learning the park, learning the rhythms of the sport from the production side. This site is kind of a ten-years-later answer to questions I first started asking from behind a camera in the outfield.

## Other projects

- [NFL Big Data Bowl 2026 — QB Performance Dashboard](https://github.com/mister-earl/nfl-pass-dashboard) — React dashboard analyzing quarterback performance against defensive coverage schemes
- [AI Job Coach](https://github.com/mister-earl/ai-job-coach-v2) — Claude-powered career coaching app built with React 18 and a serverless proxy

---

Data references: MLB Statcast, Baseball Savant, FanGraphs Park Factors.
