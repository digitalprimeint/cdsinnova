FROM really/node-pm2-git
LABEL maintainer="marco@plugdo.com"

WORKDIR /usr/src/app
EXPOSE 3000

CMD ["pm2-runtime", "pm2.json"]
