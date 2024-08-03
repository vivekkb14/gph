# build environment
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm run build
RUN ls

EXPOSE 3000

CMD ["npm", "start"]
