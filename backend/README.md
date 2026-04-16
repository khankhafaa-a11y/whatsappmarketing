# WhatsApp Marketing SaaS Platform

## Overview
WhatChimp is a multi-tenant SaaS platform designed to help businesses leverage the WhatsApp Business API for bulk marketing, automated customer support, and AI-driven conversations. This platform allows users to connect their WhatsApp Business Accounts (WABA) seamlessly and manage their marketing campaigns effectively.

## Features
- **Meta Embedded Signup**: Simplified onboarding process for connecting WABA and phone numbers.
- **Messaging & Compliance**: Message queue system that adheres to Meta's rate limits and conversation window rules.
- **AI & Automation**:
  - Chatbot Builder for FAQs and lead qualification.
  - Visual Campaign Builder for bulk message broadcasts.
- **Shared Team Inbox**: Unified dashboard for agents to manage customer interactions.
- **Integration Layer**: API endpoints for integration with E-commerce platforms.
- **Pricing & Billing**: Automated invoicing and cost tracking based on Meta's conversation costs.

## Technology Stack
- **Backend**: Node.js (NestJS) or Python (FastAPI)
- **Database**: PostgreSQL
- **Queue**: Redis
- **Frontend**: React
- **Deployment**: Docker

## Getting Started

### Prerequisites
- Node.js and npm installed for backend and frontend development.
- Docker and Docker Compose for containerization.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/whatsapp-saas-platform.git
   cd whatsapp-saas-platform
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

To run the application using Docker Compose, execute the following command from the root directory:
```
docker-compose up --build
```

### API Documentation
Refer to the backend documentation for API endpoints and usage.

### Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.