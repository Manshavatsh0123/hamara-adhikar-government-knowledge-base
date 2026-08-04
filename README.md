# Hamara Adhikar Government Knowledge Base

A structured, validated, and developer-friendly knowledge base of **Bihar Government Welfare Schemes**.

This repository standardizes government scheme information into a unified JSON format, making it easy to search, validate, import into databases, build REST APIs, and power AI-driven government assistance platforms.

This repository serves as the official knowledge base for the **Hamara Adhikar** platform.

---

# Vision

Government scheme information is often scattered across multiple websites, PDFs, and departments, making it difficult for citizens to discover schemes they are eligible for.

The goal of this project is to transform that fragmented information into a standardized, machine-readable knowledge base that can power:

- AI Assistants
- Voice Search
- Smart Scheme Recommendations
- Government Service Applications
- REST APIs
- Mobile Applications
- Analytics

---

# Project Goals

- Standardize Bihar Government scheme data
- Maintain one consistent JSON structure
- Eliminate inconsistent data formats
- Enable AI-powered scheme recommendations
- Simplify backend API development
- Support PostgreSQL import
- Provide validated data for frontend applications
- Build a reusable government knowledge repository

---

# Repository Statistics

Current Status

- State: Bihar
- Total Government Schemes: 30
- Validation Status: 30 / 30 Passed
- Schema Version: 1.0.0
- Format: JSON
- Validation Library: Zod
- Runtime: Node.js

---

# Features

- Standardized JSON structure
- One JSON file per government scheme
- Schema validation using Zod
- Automatic validation script
- Consistent metadata
- Developer-friendly structure
- Easily extendable
- Ready for PostgreSQL import
- AI-ready structured data

---

# Repository Structure

```
hamara-adhikar-government-knowledge-base/

│
├── README.md
├── LICENSE
├── package.json
├── package-lock.json
│
├── schemas/
│   └── scheme.schema.js
│
├── schemes/
│   ├── Bihar_Student_Credit_Card_Scheme.json
│   ├── Bihar_Niji_Talabon_Ka_Jirnoddhar_Ki_Yojana.json
│   ├── Bihar_Chief_Minister_Divyangjan_Empowerment_Scheme.json
│   └── ...
│
├── scripts/
│   ├── validate.js
│   ├── import.js (Upcoming)
│   └── export.js (Upcoming)
│
└── docs/
    ├── schema.md (Upcoming)
    ├── roadmap.md (Upcoming)
    └── contribution.md (Upcoming)
```

---

# Folder Explanation

## schemes/

Contains all government welfare schemes.

Each scheme is stored as an independent JSON document following the same structure.

Example

```
Bihar_Student_Credit_Card_Scheme.json
```

---

## schemas/

Contains the master Zod schema used to validate every scheme before it is committed.

This ensures:

- Required fields exist
- Correct data types
- Consistent structure
- No malformed JSON

---

## scripts/

Contains utility scripts used during development.

Current:

```
validate.js
```

Upcoming:

```
import.js
export.js
```

---

## docs/

Project documentation.

Future documentation includes:

- Schema documentation
- Contribution guide
- PostgreSQL structure
- Roadmap

---

# Standard Scheme Structure

Every government scheme follows the same structure.

```
Scheme

├── id
├── scheme_code
├── scheme_name
├── state
├── department
├── categories
├── description
├── objectives
├── benefits
├── eligibility
├── application_process
├── documents_required
├── official_source
├── important_notes
├── faqs
└── metadata
```

This standardized structure allows every scheme to be processed identically.

---

# Example Scheme

```json
{
  "id": 1,
  "scheme_name": "Bihar Student Credit Card Scheme",
  "state": "Bihar",
  "department": "Education",
  "categories": [
    "Education",
    "Financial Assistance"
  ],
  "description": "...",
  "benefits": [],
  "eligibility": [],
  "documents_required": [],
  "application_process": {},
  "official_source": {},
  "metadata": {}
}
```

---

# Validation

Every JSON file is validated before being added to the repository.

Validation includes:

- Required fields
- Missing fields
- Invalid JSON
- Data types
- Arrays
- Nested objects

Powered by **Zod**.

Run validation:

```bash
node scripts/validate.js
```

Example output

```
Starting Scheme Validation...

PASS : Bihar_Student_Credit_Card_Scheme.json
PASS : Bihar_Mukhyamantri_Nijee_Nalkup_Yojana.json
PASS : Bihar_Niji_Talabon_Ka_Jirnoddhar_Ki_Yojana.json

Validation Summary

Total Files : 30
Passed      : 30
Failed      : 0

All scheme files are valid.
```

---

# Adding a New Scheme

## Step 1

Collect information from an official government source.

---

## Step 2

Create a new JSON file inside

```
schemes/
```

---

## Step 3

Follow the standard structure.

Do **not** change property names.

---

## Step 4

Run validation.

```bash
node scripts/validate.js
```

---

## Step 5

If validation passes

Commit the changes.

---

# Development Workflow

```
Collect Government Scheme

↓

Convert into Standard JSON

↓

Validate using Zod

↓

Fix Validation Errors

↓

Commit

↓

Import into PostgreSQL (Upcoming)

↓

REST API (Upcoming)

↓

AI Recommendation Engine (Upcoming)

↓

Frontend Integration
```

---

# Why Standardization?

Government schemes are published by different departments.

Every department uses a different format.

Some contain:

- Objectives

Others don't.

Some use

Benefits

Others use

Financial Assistance

Others provide PDF notifications.

This repository converts all of them into one unified structure.

Benefits:

- Easier Search
- AI Ready
- Consistent UI
- Database Friendly
- Easy Maintenance
- API Ready

---

# Data Source

All government scheme information is collected from publicly available official government portals and notifications.

Each scheme is manually reviewed and converted into the standard JSON format before being added to this repository.

Whenever possible, every scheme retains links to its official source for verification.

---

# Current Roadmap

## Version 1.0

- Standard JSON schema
- Bihar Government Schemes
- Validation using Zod
- GitHub Repository

Completed

---

## Version 1.1

- PostgreSQL Import Script
- Database Schema
- Export Script

In Progress

---

## Version 1.2

- Express REST API
- Search API
- Filter API

Planned

---

## Version 2.0

- AI Recommendation Engine
- Natural Language Search
- Voice Search Support
- Eligibility Matching

Planned

---

# Tech Stack

- Node.js
- JavaScript
- JSON
- Zod

Upcoming

- PostgreSQL
- Express.js
- OpenAI API / LLM
- React

---

# Future Integrations

This repository is designed to integrate with:

- Hamara Adhikar Backend
- PostgreSQL Database
- AI Recommendation Engine
- Voice Assistant
- Web Application
- Mobile Application

---

# Contributing

Contributions are welcome.

Before submitting a new scheme:

- Use the standard JSON structure
- Validate using Zod
- Verify information from official government sources
- Keep naming conventions consistent

---

# License

This project is licensed under the MIT License.

See the LICENSE file for more details.

---

# Maintained By

**Hamara Adhikar**

Building an AI-powered platform to make government welfare schemes more accessible, understandable, and easier to discover for every citizen.