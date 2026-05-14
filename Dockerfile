FROM node:22 AS build

WORKDIR /app

COPY . .

RUN npm install -g deno
RUN deno task build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
