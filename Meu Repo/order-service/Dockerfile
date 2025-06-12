FROM node:18
WORKDIR /app
COPY app.js .
RUN npm init -y && npm install express pg body-parser cors
CMD ["node", "app.js"]
