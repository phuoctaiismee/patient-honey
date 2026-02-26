
# Prismic Core Landing Page – Full Setup Guide

## Purpose

This document explains how to create a Prismic repository correctly, clone the Prismic Core Landing Page,
run it locally, connect it to Prismic CMS, and edit page types and slices using Slice Machine
(localhost:9999).

This guide is designed for **reusable, multi-locale, multi-project setups**.

The core project already includes:
- Header
- Footer
- Hero section
- Base content sections

---

## ⚠️ Critical Principle (Read First)

**Prismic repository must be created BEFORE initializing Slice Machine.**

Why:
- Repository name is immutable
- Locale configuration must exist before schemas are generated
- Slice Machine binds schema + locale at init time
- Adding locales later causes schema drift and content issues

This guide follows the **correct and scalable order**.

---

## Step 0: Create a Blank Prismic Repository (Mandatory)

> Do NOT skip this step.

### 0.1 Create Repository

1. Go to https://prismic.io/dashboard
2. Click **Create repository**
3. Choose:
   - Repository name (example: `ph-landingpage`)
   - Starter: **Blank**
4. Confirm creation

Notes:
- Repository name is permanent
- This name will be used in `.env.local` and Slice Machine initialization
- One repository = one content space

---

### 0.2 Configure Locales (Critical)

Immediately after repository creation:

1. Go to **Settings → Languages**
2. Configure locales as needed, for example:
   - `en-us` (default)
   - `vi-vn`
   - `ja-jp`
3. Set the default locale
4. Save changes

Why this must be done **before Slice Machine init**:
- Slice schemas are generated per locale
- Late locale additions cause:
  - Missing fields
  - Broken previews
  - Manual schema fixes

If this step is skipped, the core will NOT be safely reusable.

---

## Step 1: Clone the Core Source

Clone the core landing page repository:

```bash
git clone <CORE_REPOSITORY_URL>
cd <project-folder>
```

Install dependencies:

```bash
yarn install
# or
npm install
```

---

## Step 2: Configure Environment Variables

Create a `.env.local` file:

```bash
touch .env.local
```

Add the Prismic repository name created in **Step 0**:

```env
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=<prismic-repository-name>
```

Example:

```env
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=ph-landingpage
```

Rules:
- Must exactly match the repository name
- No quotes
- No trailing spaces

---

## Step 3: Initialize Slice Machine

Run Slice Machine initialization:

```bash
npx @slicemachine/init@latest --repository ph-landingpage
```

This step will:
- Connect the local project to the Prismic repository
- Sync existing Custom Types and Slices
- Generate Slice Machine config files
- Enable Slice Machine UI
- Bind schemas to configured locales

⚠️ If locales were not configured before this step, STOP and fix Step 0 first.

---

## Step 4: Run the Project Locally

Start the Next.js development server:

```bash
yarn dev
```

The site will be available at:
```
http://localhost:3000
```

Start Slice Machine:

```bash
yarn slicemachine
```

Slice Machine UI will be available at:
```
http://localhost:9999
```

---

## Step 5: Edit Page Types (Custom Types)

1. Open http://localhost:9999
2. Go to **Custom Types**
3. Select a page type:
   - Page
   - Homepage
   - Landing Page
4. Edit fields:
   - Text
   - Rich Text
   - Image
   - Group
   - Select
5. Save changes

Notes:
- All schema changes are stored locally
- No changes are applied to Prismic until pushed

---

## Step 6: Edit Slices

1. Open the **Slices** tab in Slice Machine
2. Select a slice:
   - Hero
   - Content Section
   - Feature List
   - CTA
3. Edit:
   - Fields
   - Variations
   - Layout
4. Save changes

Slice updates are reflected immediately in the local project.

---

## Step 7: Push Schema Changes to Prismic CMS

After all schema changes are finalized:

```bash
yarn slicemachine --push
```

Or use **Push to Prismic** in Slice Machine UI.

Push only when:
- Schema is stable
- No breaking changes to existing content
- Local testing is complete

---

## Step 8: Verify in Prismic Dashboard

1. Open Prismic Dashboard
2. Verify:
   - Custom Types updated
   - Slices updated
3. Go to **Content**
4. Create or edit documents
5. Confirm frontend renders correctly

---

## Completion Checklist

- [ ] Blank Prismic repository created
- [ ] Locales configured
- [ ] Core repository cloned
- [ ] Dependencies installed
- [ ] `.env.local` configured
- [ ] Slice Machine initialized
- [ ] Site running on localhost:3000
- [ ] Slice Machine running on localhost:9999
- [ ] Page types editable
- [ ] Slices editable
- [ ] Schema pushed to Prismic
- [ ] Content verified

---

## Important Rules

- ❌ Do NOT edit schemas in Prismic Dashboard
- ✅ Always use Slice Machine for schema changes
- ✅ Configure locales before schema creation
- ✅ Test locally before pushing

---

## Standard Workflow Summary

Create Prismic Repo  
→ Configure Locales  
→ Clone Core  
→ Configure Environment  
→ Init Slice Machine  
→ Edit Page Types & Slices  
→ Push Schema  
→ Fill Content  
→ Deploy

---

## Strategic Note

This setup treats the landing page as a **productized CMS template**, not a one-off site.

Benefits:
- Clone-and-run for new clients
- Multi-locale ready
- No schema drift
- Clean separation between:
  - Core codebase
  - Content ownership

If this order is violated, Prismic becomes technical debt instead of leverage.