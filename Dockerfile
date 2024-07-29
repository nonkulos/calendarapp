FROM node:lts-slim
WORKDIR /calendarapp
COPY /public/ /calendarapp/public
COPY /src/ /calendarapp/src
COPY /package.json /calendarapp/
RUN npm install
CMD ["npm", "start"]