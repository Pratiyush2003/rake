ARG IMAGE=node:20.14.0-alpine

FROM ${IMAGE} AS builder

WORKDIR /build

COPY . .

RUN yarn --frozen-lockfile && yarn build

FROM nginx:alpine

WORKDIR /bundle

COPY --from=builder /build/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
