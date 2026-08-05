# Hamara Adhikar Government Knowledge Base

A structured, validated, and production-ready knowledge base of **Bihar Government Welfare Schemes**.

This repository standardizes government welfare scheme information into a unified JSON format and provides a complete data pipeline for validating, managing, and importing scheme data into PostgreSQL.

The repository serves as the official data source for the **Hamara Adhikar** platform, which aims to make government welfare schemes more accessible through AI-powered search, recommendation, and voice assistance.

---

# Vision

Government welfare information is often scattered across multiple departments, PDFs, circulars, and official websites.

Citizens frequently struggle to answer questions like:

- Which schemes am I eligible for?
- Where should I apply?
- Which documents are required?
- Is this scheme still active?

The goal of this repository is to convert fragmented government information into a structured, machine-readable knowledge base that can power:

- AI Assistants
- Voice Search
- Smart Scheme Recommendation Systems
- REST APIs
- Mobile Applications
- Web Applications
- Government Analytics Platforms

---

# Repository Overview

This repository is **not a backend application**.

It is a centralized government knowledge repository responsible for:

- Collecting verified government scheme information
- Standardizing every scheme into a single JSON format
- Validating data consistency
- Importing data into PostgreSQL
- Providing a reusable data source for backend APIs and AI systems

---

# Repository Statistics

Current Status

- State: Bihar
- Government Schemes: 30
- JSON Validation: 30 / 30 Passed
- Database Import: 30 / 30 Imported
- Database: PostgreSQL
- Runtime: Node.js
- Validation Library: Zod
- Schema Version: 1.0.0

---

# Architecture

```
Official Government Websites
                │
                ▼
     Manual Data Collection
                │
                ▼
     Standardized JSON Files
                │
                ▼
        Zod Validation
                │
                ▼
      Import Pipeline
                │
                ▼
       PostgreSQL Database
                │
                ▼
       Express REST APIs
                │
                ▼
      AI Recommendation Engine
                │
                ▼
     React Frontend Application
```

This repository is responsible only for everything above PostgreSQL.

---

# Features

- Standardized JSON structure
- One JSON file per government scheme
- Schema validation using Zod
- Automated validation pipeline
- PostgreSQL database schema
- Automated PostgreSQL import pipeline
- Consistent metadata
- Modular import utilities
- AI-ready structured data
- Developer-friendly architecture

---

# Project Structure

```
hamara-adhikar-knowledge-base/

├── README.md
├── LICENSE
├── package.json
├── package-lock.json
│
├── database/
│   └── schema.sql
│
├── schema/
│   └── scheme.schema.js
│
├── schemes/
│   ├── Bihar_Student_Credit_Card_Scheme.json
│   ├── Bihar_Makhana_Vikas_Yojana.json
│   ├── Bihar_Niji_Talabon_Ka_Jirnoddhar_Ki_Yojana.json
│   └── ...
│
├── scripts/
│   ├── db.js
│   ├── validate.js
│   ├── import.js
│   ├── test-db.js
│   │
│   └── utils/
│       ├── insertScheme.js
│       ├── insertCategories.js
│       ├── insertTags.js
│       └── insertContent.js
```

---

# Folder Explanation

## database/

Contains the PostgreSQL database schema.

Responsible for creating all database tables required to store government scheme information.

Current Tables

- schemes
- scheme_categories
- scheme_tags
- scheme_content

---

## schema/

Contains the master Zod schema.

Every government scheme must satisfy this schema before being imported into PostgreSQL.

Validation ensures:

- Required fields exist
- Correct data types
- Consistent object structure
- No malformed JSON
- Nested object validation

---

## schemes/

Contains the actual government knowledge base.

Each scheme is stored as an independent JSON document.

Every scheme follows exactly the same structure.

Example

```
Bihar_Student_Credit_Card_Scheme.json
```

---

## scripts/

Contains all automation scripts.

### validate.js

Validates every JSON file using Zod.

### db.js

Creates the PostgreSQL connection.

### test-db.js

Tests PostgreSQL connectivity.

### import.js

Imports every validated JSON file into PostgreSQL.

---

## scripts/utils/

Contains reusable helper functions used by the import pipeline.

Instead of writing one large import script, responsibilities are separated.

Current utilities:

- insertScheme.js
- insertCategories.js
- insertTags.js
- insertContent.js

Each utility performs one specific database operation.

---

# Standard Scheme Structure

Every scheme follows the same structure.

```
Scheme

├── scheme_name
├── department
├── state
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

This guarantees consistency across every scheme.

---

# Validation Pipeline

Every JSON file is validated before being committed.

Validation includes:

- Required fields
- Data types
- Nested objects
- Arrays
- Invalid JSON
- Missing properties

Run validation

```bash
node scripts/validate.js
```

Example Output

```
Starting Scheme Validation...

PASS : Bihar_Student_Credit_Card_Scheme.json
PASS : Bihar_Makhana_Vikas_Yojana.json
PASS : Bihar_Niji_Talabon_Ka_Jirnoddhar_Ki_Yojana.json

Validation Summary

Total Files : 30
Passed      : 30
Failed      : 0

All scheme files are valid.
```

---

# PostgreSQL Database

Validated schemes are imported into PostgreSQL.

Database Design

```
schemes
    │
    ├───────────────┐
    │               │
    ▼               ▼
scheme_categories   scheme_tags
        │
        ▼
scheme_content
```

This normalized structure minimizes duplication while keeping JSON-heavy content inside PostgreSQL JSONB columns.

---

# Import Pipeline

After validation, every scheme is imported automatically.

Pipeline

```
Read JSON

↓

Validate

↓

BEGIN Transaction

↓

Insert Scheme

↓

Insert Categories

↓

Insert Tags

↓

Insert Content

↓

COMMIT

↓

Next File
```

Transactions ensure that partially imported data is automatically rolled back if an error occurs.

Run Import

```bash
node scripts/import.js
```

Example Output

```
Found 30 scheme files.

Importing Bihar_Student_Credit_Card_Scheme.json

✓ Bihar Student Credit Card Scheme imported

...

All Schemes Imported Successfully
```

---

# Adding a New Scheme

Step 1

Collect scheme information from an official government source.

Step 2

Create a new JSON file inside

```
schemes/
```

Step 3

Follow the standard schema.

Step 4

Run validation

```bash
node scripts/validate.js
```

Step 5

Import into PostgreSQL

```bash
node scripts/import.js
```

---

# Development Workflow

```
Official Government Sources

↓

Manual Verification

↓

Standard JSON

↓

Validate using Zod

↓

Import into PostgreSQL

↓

Backend APIs

↓

AI Recommendation Engine

↓

Frontend Integration
```

---

# Why Standardization?

Government departments publish information in different formats.

Some schemes contain:

- Objectives

Others contain:

- Benefits

Others only publish PDFs.

Some provide structured application processes.

Some provide only notifications.

This repository converts every scheme into one unified format.

Benefits

- Easier Search
- Consistent UI
- Database Friendly
- AI Ready
- API Ready
- Easy Maintenance

---

# Data Source

All information is collected manually from publicly available official government websites, portals, notifications, and departmental resources.

Every scheme is manually reviewed before being converted into the standardized JSON format.

Official source links are preserved whenever available.

---

# Tech Stack

Current

- Node.js
- JavaScript
- JSON
- PostgreSQL
- Zod

Upcoming

- Express.js
- React
- OpenAI API
- Vector Search

---

# Roadmap

## Version 1.0

- Standard JSON Schema
- Bihar Government Knowledge Base
- Zod Validation
- PostgreSQL Schema
- Database Import Pipeline

Status: ✅ Completed

---

## Version 1.1

- Express Backend
- Search API
- Filter API
- Recommendation API

Status: 🚧 Next Phase

---

## Version 2.0

- AI Recommendation Engine
- Natural Language Search
- Voice Assistant
- Eligibility Matching
- Semantic Search

Status: 📋 Planned

---

# Related Repositories

This repository is part of the **Hamara Adhikar** ecosystem.

- hamara-adhikar-knowledge-base (Government Knowledge Repository)
- hamara-adhikar-backend (REST APIs & Business Logic)
- hamara-adhikar-frontend (React Web Application)

---

# Maintained By

**Hamara Adhikar**

Building an AI-powered platform that makes government welfare schemes easier to discover, understand, and access for every citizen.