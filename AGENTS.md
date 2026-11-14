# Agent instructions

## Temporary files

Always use a temporary folder inside the project: `.tmp/` at the repository root.

- Create it if it does not exist: `mkdir -p .tmp`
- Write scratch files, previews, exports and other temporary artifacts there.
- Never use system temp directories such as `/tmp` or `$TMPDIR` for this project.
- `.tmp/` is git-ignored and should not be committed.
