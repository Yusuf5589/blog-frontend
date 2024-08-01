# Resmi Node.js 20 görüntüsünü kullanıyoruz
FROM node:20-alpine

# Uygulama dizinini oluştur ve çalışma dizini olarak ayarla
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulamanın geri kalanını kopyala
COPY . .

# Uygulamanın derlenmesi
RUN /bin/sh -c /bin/sh -c npm run build

# Uygulamayı başlat
CMD ["npm", "run", "dev"]

# Uygulamanın dışarıya açılacak olan portu
EXPOSE 3000