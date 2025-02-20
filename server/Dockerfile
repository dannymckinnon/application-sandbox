# Development stage (using Docker Compose to override this)
FROM node:23-alpine AS development

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install all dependencies (both dev and prod) for development
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the port (adjust based on your app's port)
EXPOSE 3000

# Run the development server (adjust the command based on your setup)
CMD ["npm", "run", "dev"]


# Base image for building the app
FROM node:23-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install all dependencies (both dev and prod) during the build stage
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app (adjust the command based on your setup)
RUN npm run build


# Production image
FROM node:23-alpine AS production

# Set NODE_ENV to production by default
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json (or yarn.lock) for production
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Run the application as a non-root user.
USER node

# Copy the dist folder from the build stage
COPY --from=build /usr/src/app/dist ./dist

# Expose the port (adjust based on your app's port)
EXPOSE 3000

# Run the production server (adjust the command based on your setup)
CMD ["npm", "run", "start"]


