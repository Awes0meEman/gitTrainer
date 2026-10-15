# Branching

A **branch** is an independent line of development. It lets you work on a new feature or fix without touching the main, working version of your project.

## The default branch

When you create a repo, Git creates a default branch — typically named `main` (or `master` in older repos). This is usually the stable, "official" version of the project.

## Creating and switching branches

```bash
git branch my-feature        # create a branch
git switch my-feature        # switch to it
```

Or combine both steps:

```bash
git switch -c my-feature
```

## What actually happens

A branch is just a pointer to a commit. When you make a new commit on `my-feature`, that pointer moves forward — but `main` stays where it was. Your changes are completely isolated until you decide to merge them.

```
main:       A --- B --- C
                         \
my-feature:               D --- E
```

## Listing branches

```bash
git branch        # local branches
git branch -a     # local + remote branches
```

## Deleting a branch

Once a branch is merged and no longer needed:

```bash
git branch -d my-feature
```

## Related concepts

- [Commits](03-commits.md)
- [Merging](05-merging.md)
