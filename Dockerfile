# Use the official Node.js image as the base image
FROM node:21-alpine
# Set the working directory in the container
WORKDIR /var/www
# Expose port
EXPOSE 3000
