FROM node:20-slim

WORKDIR /app

# Non-root user for security
RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 nextjs

# Install deps first for better layer caching
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Set ownership to non-root user
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["npm", "run", "dev"]
