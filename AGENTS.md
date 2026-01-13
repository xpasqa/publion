# Repository Guidelines

## Project Structure & Module Organization
- Root HTML pages: `index.html`, `home.html`, `login.html`, `register.html`.
- Static assets: `images/` (PNG logos and graphics).
- No build system or source subdirectories; edits are made directly in the HTML files.

## Build, Test, and Development Commands
- No build or test tooling is configured for this repository.
- Local preview: open `index.html` (or another page) directly in a browser.

## Coding Style & Naming Conventions
- Keep HTML formatting consistent and readable; use 2-space indentation for nested elements.
- Use kebab-case for new file names and asset names (e.g., `about-us.html`, `hero-image.png`).
- Prefer semantic HTML elements (`header`, `nav`, `main`, `section`, `footer`) when adding structure.

## Testing Guidelines
- No automated tests are present.
- If you add scripts or tests, document the command(s) in this file and keep names descriptive.

## Commit & Pull Request Guidelines
- Existing commits use short, lowercase, imperative messages (e.g., `init`, `recolor`).
- Keep commit subjects under ~50 characters and focused on a single change.
- PRs should describe the user-facing change and include screenshots for visual updates.

## Configuration & Security Notes
- There are no environment variables or secrets in use.
- Keep assets optimized and avoid committing sensitive data to the repository.
