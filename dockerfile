FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm fetch -proddocker run -p
RUN pnpm install -r -offline -prod
COPY . ./
RUN pnpm build
EXPOSE 4000
CMD ["pnpm", "start:prod"]