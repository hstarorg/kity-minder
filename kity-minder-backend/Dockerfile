FROM docker.neg/base/nodejs:8.1.0-alpine

LABEL author="hm910705@163.com"

COPY dumb-init /usr/local/bin/dumb-init

COPY dist/ /dist

# RUN cd /dist && npm i --production
RUN chmod 777 /usr/local/bin/dumb-init

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

WORKDIR /dist

EXPOSE 7000

CMD ["node", "index.js"]
