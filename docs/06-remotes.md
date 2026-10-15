# Working with Remotes

A **remote** is a version of your repository hosted somewhere else — typically on GitHub, GitLab, or a company server. Remotes let you back up your work and collaborate with others.

## Viewing remotes

```bash
git remote -v
```

When you `git clone` a repo, Git automatically adds a remote called `origin` pointing back to where you cloned from.

## Pushing

**Push** sends your local commits to the remote:

```bash
git push origin main
```

The first time you push a new branch, tell Git to track it:

```bash
git push -u origin my-feature
```

After that, `git push` with no arguments is enough.

## Pulling

**Pull** fetches new commits from the remote and merges them into your current branch:

```bash
git pull
```

This is the same as running `git fetch` followed by `git merge`.

## Fetch

**Fetch** downloads new commits from the remote but does *not* merge them. This lets you inspect what changed before integrating it:

```bash
git fetch origin
git log origin/main   # see what's new on the remote
git merge origin/main # merge when ready
```

## Typical collaboration flow

1. `git pull` — get the latest changes from your team
2. Make changes and commit locally
3. `git pull` again to catch anything new since you started
4. Resolve any conflicts
5. `git push` — share your work

## Related concepts

- [Creating a repository](02-creating-a-repository.md)
- [Branching](04-branching.md)
- [Merging](05-merging.md)
