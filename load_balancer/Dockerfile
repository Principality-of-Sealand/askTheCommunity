FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/lib/nginx/cache
RUN apt-get update && apt-get install -y vim

COPY nginx.conf /etc/nginx/nginx.conf
COPY /static /etc/nginx/static
