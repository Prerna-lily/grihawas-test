# Use a Node.js base image that includes Debian Bullseye
FROM node:16-bullseye

# Install Apache, PHP, and Supervisor
RUN apt-get update && \
    apt-get install -y apache2 libapache2-mod-php php php-cli php-curl php-mbstring supervisor && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Configure Apache to listen on ports 80 and 442
RUN echo "Listen 80\nListen 443" > /etc/apache2/ports.conf

# Create a basic Apache site configuration to serve PHP from the backend folder
RUN echo "<VirtualHost *:80>\n\
    DocumentRoot /app/backend\n\
    <Directory /app/backend>\n\
        Options Indexes FollowSymLinks\n\
        AllowOverride All\n\
        Require all granted\n\
    </Directory>\n\
</VirtualHost>\n\n\
<VirtualHost *:443>\n\
    DocumentRoot /app/backend\n\
    <Directory /app/backend>\n\
        Options Indexes FollowSymLinks\n\
        AllowOverride All\n\
        Require all granted\n\
    </Directory>\n\
    SSLEngine on\n\
    SSLCertificateFile /etc/ssl/certs/ssl-cert-snakeoil.pem\n\
    SSLCertificateKeyFile /etc/ssl/private/ssl-cert-snakeoil.key\n\
</VirtualHost>" > /etc/apache2/sites-available/000-default.conf

# Enable the SSL module in Apache
RUN a2enmod ssl

# Set the working directory to /app
WORKDIR /app

# Copy and install frontend dependencies (assumes package.json is in the client folder)
COPY package*.json ./
RUN npm install

# Copy and install backend dependencies (if any, from backend/package.json)
COPY backend/package*.json backend/
RUN cd backend && npm install

# Copy the entire project into the container
COPY . .

# Copy Supervisor configuration into the container
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose the ports:
# 3000 for your frontend (npm start), 80 and 442 for Apache (serving PHP)
EXPOSE 3000 80 443

# Start Supervisor to run all three services concurrently
CMD ["/usr/bin/supervisord", "-n"]
