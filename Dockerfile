
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PGHOST=postgres
ENV PGUSER=postgres
ENV PGDATABASE=udomdb
ENV PGPASSWORD=Kulwa-08608
ENV PGPORT=5432
ENV PORT=5000

EXPOSE 5000

CMD ["node", "index.js"]
