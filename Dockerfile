FROM node:14-alpine
FROM python:3.10-alpine

RUN mkdir /project

RUN apk add --update npm

RUN pip install poetry

COPY docker_entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

CMD /entrypoint.sh