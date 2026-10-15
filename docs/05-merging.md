# Merging

**Merging** brings the changes from one branch into another. It's how work done in isolation gets combined back into the main project.

## Basic merge

Switch to the branch you want to merge *into*, then run `git merge`:

```bash
git switch main
git merge my-feature
```

Git takes the commits from `my-feature` and replays them onto `main`.

## Fast-forward merge

If `main` hasn't changed since you branched off, Git simply moves the `main` pointer forward — no merge commit needed. This is called a **fast-forward**.

```
Before:  main: A --- B
                      \
         feature:      C --- D

After:   main: A --- B --- C --- D
```

## Merge commit

If both branches have new commits, Git creates a **merge commit** that ties the two histories together.

```
main:    A --- B ------- M
                \       /
feature:         C --- D
```

## Merge conflicts

A **conflict** happens when the same part of the same file was changed differently on both branches. Git can't automatically decide which version is correct, so it asks you to resolve it manually.

Conflicted files will contain markers like:

```
<<<<<<< HEAD
This is the version from main.
=======
This is the version from my-feature.
>>>>>>> my-feature
```

Edit the file to keep what you want, remove the markers, then:

```bash
git add the-file.txt
git commit
```

## Related concepts

- [Branching](04-branching.md)
- [Working with remotes](06-remotes.md)
