# Coffee Shop
## NOTES
- The application divide into 3 seperate domains:
* Backend
* Frontend
* Coffee-admin

### Installation
1. Go to repository: https://github.com/AlexGamer29/coffee-shop
2. Clone the repository
   ```sh
   git clone https://github.com/AlexGamer29/coffee-shop.git
   ```
3. Navigate to the root folder
   ```sh
   cd coffee-shop
   ```
#### Back-end
1. Change the directory to backend folder
   ```sh
   cd backend
   ```
2. Create a copy of .env file from .env.example and edit the following fields:
Note: INITIAL_USER_NAME, INITIAL_USER_EMAIL, INITIAL_USER_PASSWORDHASH wrap in double-quotes
   ```sh
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=coffee-shop
   DB_USERNAME=root
   DB_PASSWORD=
   
   INITIAL_USER_NAME="Your admin name"
   INITIAL_USER_EMAIL="Your email"
   INITIAL_USER_PASSWORDHASH="Your password"
   ``` 
3. Install Composer packages
   ```sh
   composer install
   ```
4. Create database
   ```sh
   php artisan migrate
   ```
5. Seed database
   ```sh
   php artisan db:seed
   ```
6. Create key for Passport authentication service 
   ```sh
   php artisan passport:install
   ```
7. Reset config for app
   ```sh
   php artisan key:generate
   php artisan config:cache
   ```
8. Start the laravel app at https:/localhost:8000/
   ```sh
   php artisan serve
   ```
   
#### Front-end
1. Navigate back to the root folder
   ```sh
   cd ..
   ```
2. Change the directory to frontend folder
   ```sh
   cd frontend
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the web at https:/localhost:3000/
   ```sh
   npm start
   ```

#### Coffee-admin
1. Navigate back to the root folder
   ```sh
   cd ..
   ```
2. Change the directory to coffee-admin folder
   ```sh
   cd coffee-admin
   ```
3. Install NPM packages
   ```sh
   npm install --force
   ```
4. Start the admin dashboard at https:/localhost:3001/
   ```sh
   npm start --force
   ```
5. Navigate to http:/localhost:3001/ and login with email and password in INITIAL_USER_EMAIL, INITIAL_USER_PASSWORDHASH
6. From there, we can start to change table in database
