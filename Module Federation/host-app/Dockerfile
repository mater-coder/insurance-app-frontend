FROM node:18.13.0 as node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

RUN npm install -g @angular/cli

RUN npm install

# Copy the rest of the application files to the container
COPY . .

RUN ng build

FROM nginx:alpine

# Copy built Angular application to Nginx server
COPY --from=node /app/dist/host-app /usr/share/nginx/html

