# Creating a Repository

A **repository** (or "repo") is a folder that Git is tracking. It contains your project files plus a hidden `.git` folder where Git stores the entire history.

## Starting a new repo

Navigate to your project folder and run:

```bash
git init
```

That's it. Git is now tracking that folder. You'll see a `.git` directory appear (hidden by default on most systems).

## Cloning an existing repo

If a repository already exists (on GitHub, for example), you copy it to your machine with:

```bash
git clone https://github.com/some-user/some-repo.git
```

This downloads the full project history, not just the current files.

## What's in `.git`?

You rarely need to look inside `.git` directly — Git manages it for you. It contains the complete history of every commit, your configuration for that repo, and information about remote servers.

> Don't manually edit files inside `.git`. Let Git commands do it.

## Related concepts

- [What is Git?](01-what-is-git.md)
- [Commits](03-commits.md)
- [Working with remotes](06-remotes.md)
