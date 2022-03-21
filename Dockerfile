FROM node:16-stretch-slim as builder

# Prepare dependencies stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -g @nestjs/cli
RUN npm install --no-cache


# Build stage
COPY . .
RUN npm run build

# Cleanup stage
RUN npm prune --production

FROM node:16-stretch-slim
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/dist /usr/src/app/dist

# Startup
CMD [ "node", "dist/main.js" ]