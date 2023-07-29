## Guiding principles:
- `Limit Third Party Services`: If we can reasonably build, deploy, maintain it ourselves, do it. This saves on cost and reduces complexity.
- `Include Only Most Common Use Cases`: As a project generator, it is expected that some code will necessarily be deleted, but implementing support for every possible type of feature is literally impossible. The starter app is not docs, so to demonstrate a feature or give an example, put that in the docs instead of in the starter app.
- `Minimize Setup Friction`: Try to keep the amount of time it takes to get an app to production as small as possible. If a service is necessary, see if we can defer signup for that service until its services are actually required. Additionally, while the target audience for this stack is apps that need scale you have to pay for, we try to fit within the free tier of any services used during the exploration phase.
- `Optimize for Adaptability`: While we feel great about our opinions, ever-changing product requirements sometimes necessitate swapping trade-offs. So while we try to keep things simple, we want to ensure teams using the Epic Stack are able to adapt by switching between third party services to custom-built services and vice-versa.

## Stack:
- `Remix` is the Web Framework of choice
- Fly app deployment with `Docker`
- Multi-region, distributed, production-ready `SQLite` Database with `LiteFS`.
- Healthcheck endpoint for `Fly backups region fallbacks`
- `Grafana` Dashboards of the running app
- `GitHub Actions` with testing and deploy on merge for both production and staging environments
- Email/Password Authentication with `cookie-based sessions`
- Transaction email with `Mailgun` and forgot password/password reset support.
- Progressively Enhanced and fully type safe forms with `Conform`
- Database ORM with `Prisma`
- Role-based User Permissions.
- Custom built image hosting
- Caching via `cachified`: Both in-memory and SQLite-based (with `better-sqlite3`)
- Styling with `Tailwind`
- An excellent, customizable component library with `Radix UI`
- End-to-end testing with `Playwright`
- Local third party request mocking with `MSW`
- Unit testing with `Vitest` and `Testing Library` with pre-configured Test Database
- Code formatting with `Prettier`
- Linting with `ESLint`
- Static Types with `TypeScript`
- Runtime schema validation with `zod`

## Pending:
- Powerful, yet simple sitemap control
- Error monitoring with `Sentry`
- Ecommerce support with `Stripe`
- Ethical site analytics with `fathom`
- Internationalization
- Image optimization route and component
- Feature flags
- Light/Dark/System mode (without a flash of incorrect theme)
- Documentation on production data seeding process
