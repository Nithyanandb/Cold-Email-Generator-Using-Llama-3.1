# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use an official Nginx image to serve the React app
FROM nginx:stable-alpine

# Copy the React app build to the Nginx HTML directory
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 for the application
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
