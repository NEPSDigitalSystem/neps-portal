# neps-portal
NEPS Digital: Frontend Portal

## Getting Started

### 1. Set up environment variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
By default, `NEXT_PUBLIC_API_URL` is set to `http://localhost:8000`, which points to our backend's mock REDCap API.

### 2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) to view it.

## Mock REDCap API Usage
We've added TypeScript types and an API client helper to interact with the backend's mock REDCap API:

### TypeScript Types
Located in `app/types/redcap.ts` - includes types for participants, surveys, distress screenings, etc.

### API Client
Located in `app/lib/api.ts` - use the exported `apiClient` to make requests:
```tsx
import { apiClient } from "@/app/lib/api";

// Example: Get all participants
const { data: participants } = await apiClient.getParticipants();

// Example: Get project stats
const stats = await apiClient.getProjectStats();
```

## Learn More about Next.js
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Metrics

The frontend exposes a `/api/metrics` endpoint for Prometheus scraping. This endpoint depends on the `prom-client` package being installed. If you're building or running the portal locally or in a container, ensure `prom-client` is present in `package.json` and run `npm ci` (or your package manager of choice) so the metrics endpoint can be served correctly.
