# PRD Builder — Project Memory

Local AI app builder that wraps Claude Code via CLI subprocess. See ./CLAUDE.md for full rules.

## Current State

- **Test count**: 12 (8 in hello-world.spec.ts + 4 in smoke.spec.ts)
- **Deploy URL**: https://hello-world-443521829717.us-central1.run.app
- **GitHub repo**: https://github.com/jephtta/hello-world
- **Smoke test status**: PASSING
- **Last major change**: Final review pass — quality, accessibility, docs

## Topic Files

No topic files yet. Create as patterns emerge.

| File | When to load |
|---|---|
| prompt-engineering.md | Editing server/src/prompt.ts |
| preflight.md | Changing preflight check logic |
| websocket.md | Debugging streaming or reconnection |
| phase-detection.md | Modifying phase keyword logic |

## Memory File Rules

- One topic per file, 30–80 lines
- Terse: tables, bullets, code — no prose
- Update this index when creating or removing files
