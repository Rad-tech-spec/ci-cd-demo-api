FROM node:20-alpine

# WORKDIR /app sets /app as the working directory for all following commands.
WORKDIR /app

# COPY package*.json ./ copies package.json and package-lock.json (or any matching package files) into the workdir to install deps deterministically.
COPY package*.json ./
RUN npm install --omit=dev

# COPY . . copies the rest of the application code into the workdir.
COPY . .

# Set environment variable for the port the app will run on
ENV PORT=3000
EXPOSE 3000

# HEALTHCHECK sets up a command to check the health of the container.
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1

# CMD ["npm", "start"] specifies the command to run the application.
CMD ["npm", "start"]
