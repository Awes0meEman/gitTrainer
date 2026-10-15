# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a git learning resource — documentation for teaching git concepts, paired with a zero-dependency example project learners can inspect and modify locally.

## Repository Structure

- `docs/` — Markdown files explaining individual git concepts (one concept per file)
- `example/` — Barebones HTML/CSS/JS hello world; no build step, no frameworks, open directly in a browser

## Content Guidelines

- Docs target people who are learning git for the first time; keep explanations concrete and avoid jargon without definition
- Each doc in `docs/` should cover a single concept and link to related concepts where helpful
- The `example/` project must stay dependency-free — no npm, no bundlers, no frameworks; a learner should be able to open `example/index.html` directly in a browser

## Viewing the Example

Open `example/index.html` directly in a browser — no server required.
