# E2E Test Automation Framework | TypeScript & Playwright

Test automation framework designed to verify the functionality of the website.
It utilizes the [Playwright](https://playwright.dev/) tool for browser automation and follows the Page Object Model (POM) design pattern for maintainability and scalability.

## 🏗️ Project Structure

The project follows a structured approach to keep the test code organized:

- **`page-objects/`**: Contains the Page Object Model (POM) classes. Each file represents a specific page or component of the application:
    - **`pageManager.ts`**: Centralized manager to initialize and access all page objects.

- **`fixtures/`**: Custom test fixtures that extend the base Playwright test object:
    - **`test-base.ts`**: Defines custom fixtures like `pm` (PageManager) to simplify test files.

- **`tests/`**: Contains the actual test specifications and setup files:
    - **`search-auctions.spec.ts`**: E2E scenarios for search auction functionality.
    - **`global.setup.ts`**: Global configuration and setup logic (e.g., handling authentication or cookies).

## 🚀 Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

*   **Node.js**: Version 24 or higher.
*   **npm**: Installed automatically with Node.js.

### Setup

Follow these steps to set up and run the project:

1.  **Clone the repository** (if you haven't already).

2.  **Install dependencies**
    Run the following command to install the required node modules:
    ```bash
    npm install
    ```

3.  **Install Playwright Browsers**
    This command downloads the browser binaries required to run the tests:
    ```bash
    npx playwright install
    ```

## 🧪 Running Tests

You can run the E2E tests using the standard Playwright commands:

**Run all tests:**

```bash
npx playwright test
```


## 📊 Test Reports

This project uses Playwright's built-in HTML reporter to generate detailed test execution reports, including screenshots, videos, and traces for failed tests.

### Viewing the Report

After the tests have completed, you can view the report by running:
```bash
npx playwright show-report
```

This will start a local web server and open the HTML report in your default browser.