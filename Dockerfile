FROM node:20.9.0-alpine AS deps

# Build args
# ARG NEXT_PUBLIC_MODE
# ARG NEXT_PUBLIC_URL_CUSTOMER
# ARG NEXT_PUBLIC_URL_LOMILES_LOGISTIK
# ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID

# Environment vars
# NEXT_PUBLIC_MODE can be "DEV" / "NEARLIVE" / "PROD"
# ENV NEXT_PUBLIC_MODE="PROD" 
# ENV NEXT_PUBLIC_URL_CUSTOMER=https://gateway.lomiles.com
# ENV NEXT_PUBLIC_URL_LOMILES_LOGISTIK=https://gateway.lomiles.com
# ENV NEXT_PUBLIC_GOOGLE_CLIENT_ID=988720068436-3htsevuji7e94q5to7m116at1upc09kk.apps.googleusercontent.com

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

CMD ["npm", "start"]