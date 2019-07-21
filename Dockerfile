FROM node:lts-jessie

WORKDIR /usr/src/pg-ripe-banana

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]