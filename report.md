# Leaderboard Clone – Approach Write-Up

## Overview

The goal of this task was to clone an existing internal leaderboard application — replicating its layout, filtering/sorting behavior, and visual design — without access to the original source code or real data.

## How I Approached the Task

### 1. Understanding the UI from Screenshots

Since I couldn't share access to the original codebase or live data, I fully replaced the data in the real app and generated screenshots of the original leaderboard with mocked data. I used those screenshots as a visual reference for GitHub Copilot to understand the component structure: the header, the top-three leaders podium section, the filter/sort bar, and the scrollable members list with expandable activity rows.

I shared the screenshots with GitHub Copilot and described the logic and the purpose of the app. Together, we planned the structure of the project and defined clear steps to implement it.
I then used the generated plan and prompts to implement and recreate the original leaderboard application.

### 2. Mocking the Data

Because the original app used real user data I couldn't share, I fully mocked everything.
I asked GitHub Copilot to design a data model with employees, activity types, point values per category, and date-based filtering by year and quarter.

I asked Copilot to write a small seed dataset. Then, to scale up to 50 members quickly, I asked GitHub Copilot to auto-generate the full list — prompting it to produce varied names, job titles, and activity histories that fit my existing schema. This saved a lot of time compared to writing all 50 records by hand, and the result was a diverse, consistent dataset.
It allowed me to implement the app without sharing any sensitive data.

### 3. How I Used GitHub Copilot

I used GitHub Copilot as an agentic collaborator throughout the project, not just for code completion:

- **Scaffolding components**: I described the behavior I wanted in plain language and Copilot generated the initial JSX and Tailwind structure, which I then reviewed and adjusted.
- **Business logic**: For the filtering and scoring utilities, I described the data shape and what the functions should do, and Copilot drafted `dataUtils.js` and `activityUtils.js` for me.
- **Data generation**: I asked Copilot to generate 50 employee records with realistic activity histories using my defined date format (`DD-Mon-YYYY`) and category set.
- **Unit tests**: I asked Copilot to write test coverage for all utility functions using Vitest, describing the expected inputs and outputs for each.
- **Code review**: I requested a Copilot review on the PR and it flagged real issues — redundant score calculations inside a sort comparator, unreliable date parsing, and duplicated constants. I then asked Copilot to fix those too.

### 4. Prompting and Agentic Techniques

Throughout the implementation I applied several deliberate prompting and agentic techniques:

- **Multimodal prompting (image + text)**: I provided screenshots of the original leaderboard alongside a text description of the app's logic. This gave Copilot enough visual and contextual grounding to produce an accurate component structure without access to the real source.

- **Plan-first prompting**: Before writing any code, I asked Copilot to generate a structured, step-by-step implementation plan based on the description and screenshots. Using an explicit plan as a shared reference made each subsequent prompt more focused and predictable.

- **Role prompting**: I consistently framed Copilot as an "agentic collaborator" rather than an autocomplete tool — asking it to reason about architecture decisions, not just generate code snippets.

- **Iterative refinement**: Each major output (components, utilities, tests) went through at least one review-and-refine cycle. I reviewed what Copilot generated, identified gaps or issues, and re-prompted with specific corrections.

- **Constrained generation**: When generating mock data, I gave Copilot explicit schema constraints (field names, date format, allowed categories, point values) to keep the output consistent and immediately usable.

- **Agentic task delegation**: For repetitive or well-defined tasks — generating 50 employee records, writing unit tests, fixing PR review comments — I delegated the entire task to Copilot rather than doing it incrementally. This kept me focused on higher-level decisions while Copilot handled the volume.

- **Review-driven iteration**: After opening the PR, I used Copilot's automated code review to surface issues I might have missed, then fed those review comments back into Copilot as new prompts to fix them — closing a full feedback loop entirely within the tool.

---

## Summary

My approach was to use GitHub Copilot as a true agentic assistant — for planning, scaffolding, data generation, testing, and code review — rather than just a code autocomplete tool. Starting from screenshots of the original app, describing its structure to Copilot, defining a step-by-step plan, and auto-generating fully mocked data, I was able to deliver a faithful, well-tested clone efficiently.
