FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm fetch
RUN pnpm install -r --offline
COPY . ./
RUN pnpm build
EXPOSE 4000
CMD ["pnpm", "start:prod"]
