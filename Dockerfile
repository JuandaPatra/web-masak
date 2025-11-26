# Gunakan Node.js versi terbaru (Node 22 LTS)
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy entire project
COPY . .

# Expose Next.js port
EXPOSE 3000

# Command untuk dev mode
CMD ["npm", "run", "dev"]
