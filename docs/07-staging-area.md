# The Staging Area

The **staging area** (also called the index) is a holding zone between your working files and a commit. It gives you fine-grained control over exactly what goes into each commit.

## Why it exists

Without a staging area, every unsaved change would go into every commit. The staging area lets you group related changes into a single, meaningful commit even if you've been editing several unrelated things at once.

## Visualizing the three areas

```
Working directory  →  Staging area  →  Repository (history)
  (your files)          (git add)         (git commit)
```

## Staging changes

```bash
git add file.txt           # stage one file
git add .                  # stage all changes in current folder
git add -p                 # interactively choose chunks within files
```

`git add -p` (patch mode) is powerful — it walks you through each changed section and asks whether to stage it. Great for when one file has two unrelated edits.

## Unstaging

Changed your mind about something you staged?

```bash
git restore --staged file.txt
```

This removes it from the staging area but leaves your working file unchanged.

## Discarding working directory changes

To throw away unsaved edits in a file entirely:

```bash
git restore file.txt
```

> This is destructive — the changes are gone. Use with care.

## Checking what's staged vs unstaged

```bash
git status         # overview
git diff           # changes NOT yet staged
git diff --staged  # changes that ARE staged (what the next commit will include)
```

## Related concepts

- [Commits](03-commits.md)
