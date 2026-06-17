FROM node:26-slim AS builder

WORKDIR /app

# Install deps first for better layer caching
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build for production
RUN npm run build

# Production image
FROM node:26-slim

WORKDIR /app

# Non-root user for security
RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 nextjs

# Copy built application from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set ownership to non-root user
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
