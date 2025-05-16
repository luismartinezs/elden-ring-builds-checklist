# Memory-bank file and folder structure:

(files)
- README.md
- metadata.md: site URL, github repo URL, etc
- system-overview.md: general tech reference, documents project structure: API routes, data model, service catalogue, cron jobs, integration URLs, etc
- project-milestones.md
(folders)
- prompts
- templates
- issues
- features: “how it works” write-ups
- business-logic: domain rules, pricing, user roles, etc
- cheatsheets: cheatsheets prepared for LLM that describe tech usage (e.g. library, plugin, framework, etc)
- decisions: files describing the reasoning behind a decision, i.e. tech choice, etc
- metrics: codebase quality metrics and logs
- design: images, wireframes, figma exports, style guides, etc
- audits: refactoring reports, performance and a11y audit reports, etc


# Decision files

Example decision file:


```md
# 0002 – Adopt OAuth 2.0 + JWT for user authentication
Date: 2025-05-18
Status: Accepted

## Context
We need SSO across XYZSite and ABCSite.

## Decision
Use OAuth 2.0 with JWT tokens issued by Auth0.

## Consequences
* Pros: battle-tested, reduces custom code.
* Cons: Vendor lock-in, monthly cost ≈ €50.
```

Decision files help future devs (and the LLM) understand why something exists

# project-milestones.md

If this is setup from github via github milestones, then this file might be skipped, or auto-generated nightly. In any case, avoid maintaining two different sources of truth

Roadmap at a Glance. Captures where the project is headed—high-level deliverables with target dates. Gives both humans and LLM prioritisation context. During clarify and plan steps the AI can ask: “Does this ticket block the next milestone?” or “This refactor touches code due to be replaced in M3—skip?”

Update: After each sprint or major merge, run record_milestone (MCP tool) or hand-edit

Milestones bundle many issues into a headline goal

Example project-milestones.md file:

```md
# Project Milestones

## Milestone 1: Implement OAuth 2.0 + JWT for user authentication
2025-06-30
🟢 On track

## Milestone 2: Implement SSO across XYZSite and ABCSite
2025-07-30
🔵 Planned

## Milestone 3: Add a new feature to the project
2025-08-30
🟡 At risk

```

# system-overview.md

general tech reference, documents project structure: API routes, data model, service catalogue, cron jobs, integration URLs, etc

Update mechanism: nightly script (or CI job) parses migrations, route files, cron configs, and patches sections. Manual edits allowed for edge cases

It should look like an index, not a copy, e.g. refer to db/scheam.sql

Only meta-info that cannot be inferred from code (business meaning, constraints, “why the table exists”) is written here. That keeps duplication minimal while giving LLMs a single landing page

Example system-overview.md file:

```md
# Technical Reference

## REST API
Routes:
- `/api/v1/datasets` (GET): List datasets
- `/api/v1/datasets/{id}` (PUT): Update dataset metadata

## Database (MariaDB)
`datasets` table columns:
- id (INT): Primary key
- title (VARCHAR(255)): Indexed column

## Services
* **EmailService** (`services/email_service.php`) – wraps SMTP; injected via DI.
* **SearchIndex** (`lib/search/index.js`) – abstracts Elastic queries.

> *Auto-update job parses migrations & routes nightly.*
```


Initialize the memory-bank:


```sh
mkdir -p memory-bank/{prompts,templates,issues,features,business-logic,cheatsheets,decisions,metrics,design,audits} \
&& touch memory-bank/{README.md,metadata.md,project-milestones.md,system-overview.md}
```