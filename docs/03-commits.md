# Commits

A **commit** is a saved snapshot of your project at a point in time. Think of it like a photograph — each commit records exactly what every tracked file looked like at that moment.

## The two-step process

Git uses a **staging area** (also called the index) between your working files and a commit. This lets you choose exactly which changes go into each commit.

**Step 1 — Stage your changes:**

```bash
git add filename.txt       # stage one file
git add .                  # stage everything changed in this folder
```

**Step 2 — Commit the staged changes:**

```bash
git commit -m "Describe what changed and why"
```

## Writing good commit messages

A commit message should complete the sentence: *"If applied, this commit will…"*

- **Good:** `Add login form validation`
- **Bad:** `stuff`, `fix`, `asdfgh`

The message is for your future self and your collaborators — make it meaningful.

## Viewing history

```bash
git log          # full history
git log --oneline  # compact one-line-per-commit view
```

## Checking current status

```bash
git status
```

Shows which files are modified, staged, or untracked.

## Related concepts

- [Creating a repository](02-creating-a-repository.md)
- [Branching](04-branching.md)
- [The staging area](07-staging-area.md)
