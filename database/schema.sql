CREATE TABLE IF NOT EXISTS schemes (

    id SERIAL PRIMARY KEY,

    scheme_code TEXT,

    scheme_name TEXT NOT NULL,

    department TEXT NOT NULL,

    state VARCHAR(100) NOT NULL,

    description TEXT,

    search_text TEXT,

    metadata JSONB,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS scheme_categories (

    id SERIAL PRIMARY KEY,

    scheme_id INTEGER NOT NULL,

    category VARCHAR(100) NOT NULL,

    CONSTRAINT fk_category_scheme
    FOREIGN KEY (scheme_id)
    REFERENCES schemes(id)
    ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS scheme_tags (

    id SERIAL PRIMARY KEY,

    scheme_id INTEGER NOT NULL,

    tag VARCHAR(100) NOT NULL,

    CONSTRAINT fk_tag_scheme
    FOREIGN KEY (scheme_id)
    REFERENCES schemes(id)
    ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS scheme_content (

    id SERIAL PRIMARY KEY,

    scheme_id INTEGER NOT NULL UNIQUE,

    objectives JSONB,

    benefits JSONB,

    eligibility JSONB,

    application_process JSONB,

    documents_required JSONB,

    official_source JSONB,

    important_notes JSONB,

    faqs JSONB,

    CONSTRAINT fk_content_scheme
    FOREIGN KEY (scheme_id)
    REFERENCES schemes(id)
    ON DELETE CASCADE
);