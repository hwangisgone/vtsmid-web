FROM node:20.13.1-alpine3.20 AS builder

WORKDIR /app

# Copy dependencies list
COPY package.json package-lock.json ./

# Install only dependencies from package-lock.json & uses Docker image cache instead of NPM cache
RUN npm ci && npm cache clean --force

COPY . .
RUN npm run build
RUN npm prune --production


FROM node:20.13.1-alpine3.20

# As non-root user
# Copy files as a non-root user. The `node` user is built in the Node image.
WORKDIR /usr/src/app
RUN chown node:node ./
USER node

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

EXPOSE 3000

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

CMD [ "node", "build" ]