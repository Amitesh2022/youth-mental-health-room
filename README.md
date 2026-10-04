# Youth Mental Health Room

## One-sentence benefit
Helps animal-welfare authorities coordinate safer journeys, contingency safeguards and accountable reviews.

## Live demo
Run the Java service and Angular application locally to use the complete experience.

## Screenshots
![Animal journey welfare workspace](docs/screenshot.png)

## Main features
Search wellbeing plans, create a contingency review, progress safeguards and monitor approval and high-priority risks.

## Technology used
Angular, TypeScript, signals, computed state, server rendering, Spring Boot and Java.

## Installation instructions
Start the backend with `cd backend && mvn spring-boot:run`. In another terminal run `npm install && npm start`.

## Commercial licensing/contact
Commercial licensing and implementation support are available through the repository owner.

## Business problem and users
Veterinary authorities, support coordinators and inspectors need shared evidence for protection needs, referrals and access to justice.

## Key workflows
Teams can find a journey, add a validated contingency review and advance safeguards to approval.

## Angular framework highlights
The interface uses standalone components, signals, computed values, OnPush change detection, built-in control flow and SSR-safe loading.

## Java backend highlights
The Spring Boot service provides real list, search, create and update endpoints, validation, clear errors, health reporting and tests.

## Architecture and state flow
Angular HttpClient connects signal-based state to the Java API and updates the visible board after every write.

## Accessibility and responsive behaviour
Semantic structure, labelled controls, visible focus, high contrast and compact responsive tables support varied users and devices.

## Verification commands
Use `npm test -- --watch=false`, `npm run build`, and `cd backend && mvn test package`.

## Structure
`src` contains the Angular experience, `backend` contains the Java service, and `docs` contains verified media.

## Tradeoffs
Records are held in memory for demonstration speed; operational use would add identity, durable storage and cross-border referral integration.

## Roadmap
Add route telemetry, weather alerts, veterinarian sign-off, multilingual notices and audit-ready persistence.
