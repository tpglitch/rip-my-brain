FROM node:18-alpine3.17

RUN npm i --dev
RUN npm run build

CMD ["npm", "run", "start:prod"]