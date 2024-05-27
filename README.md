# Turbo-powered Payment Application Monorepo

This repository leverages Turbo to manage a monorepo for a payment application.  It includes the following services:

* **Webhook Backend (Express.js):** This service handles interactions with bank APIs via webhooks. It's built with Express.js to provide a robust and scalable foundation.
* **Withdrawal Manager (Express.js):** A dedicated Express.js server manages withdrawal requests. It implements an efficient queuing system for sequential processing, ensuring smooth and reliable withdrawals.
* **End-User & Merchant Applications (Next.js):** Two separate Next.js applications cater to the needs of both end-users and merchants. This full-stack approach allows for a dynamic and user-friendly experience.
* **Unified PostgreSQL Database:** A central PostgreSQL database serves as the single source of truth for all application data. This ensures consistency and simplifies data management across the entire ecosystem.

**Benefits of Turbo Monorepo:**

* **Fast Development:** Turbo's caching and optimizations streamline development workflows.
* **Efficient Dependency Management:** Manage all project dependencies within the monorepo for centralized control.
* **Simplified Scaling:** Turbo facilitates easy scaling of individual services as needed.

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system.

**Setup:**

1. Clone this repository:

```bash
git clone https://github.com/swataswayam-14/Paytm-Project-monorepo.git
