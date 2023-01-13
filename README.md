# Coffee Shop

## Project Management
- [__Trello__](https://trello.com/invite/coffeeshopvip/ATTI676c23d1d6c467a1dd6bcef6298658c249C651CF)
- [__Figma__](https://www.figma.com/file/tXyBUM1iei1CxWhBGuTyi1/Coffee-Shop?node-id=0%3A1&t=l1O029u53ICjLUHV-1)

## NOTES
The application divide into 3 seperate domains:
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

## Coffee-admin Instructions
### [1. Login]()
1. In order to login account, navigate to [__http:/localhost:3001/__](http:/localhost:3001/).
![Login](https://i.imgur.com/CgipS9c.png)

2. User required to enter __email__ and __password__ defined in .env file above and click ‘__Sign in__’.

### [2. Category]()
#### Notes: It is required to create category first.
1. In order to access Category table, navigate to click to __Category__ tab.

2. To create new Category, click on __Create Category__ button and fill only __name__ field. It is not required to enter __id__ field, it leads to an error.
![Category](https://i.imgur.com/rltVRw5.png)

3. To edit Category, click on __Edit Category__ icon and fill __name__ field and click __"Save"__.
![Category](https://i.imgur.com/ZCDKCRH.png)

4. To delete Category, click on __Delete Category__ icon.

![Category](https://i.imgur.com/P9RZK3n.png)

5. To search Category, fill in search bar.

![Category](https://i.imgur.com/aQ6mFfb.png)

6. To filter columns, click __Show/hide filters__ icon and enter value to filter box.

![Category](https://i.imgur.com/iAMnNJp.png)

7. You can show/hide columns in the table.

![Category](https://i.imgur.com/F9Mo6JB.png)

9. Also, you can change numbers of row in the table and navigate to other pages.

![Category](https://i.imgur.com/Fswhscn.png)

8. Finally, you can trigger fullscreen mode.

![Category](https://i.imgur.com/ILH1lhp.png)

### [3. Sub-category]()
#### Notes: After create Category, please remember your Category Id to create Sub-category
1. In order to access Sub-category table, navigate to click to __Sub-category__ tab.

2. To create new Sub-category, click on __Create Sub-category__ button and fill only __Category Id__ field and __name__ field. It is not required to enter __id__ field, it leads to an error.

![Sub-category](https://i.imgur.com/MrnDsGM.png)

3. To edit Sub-category, click on __Edit Sub-category__ icon and fill __Category Id__ field and __name__ field and click __"Save"__.

![Sub-category](https://i.imgur.com/CFuhGis.png)

4. To delete Sub-category, click on __Delete Sub-category__ icon.

![Sub-category](https://i.imgur.com/P9RZK3n.png)

5. To search Sub-category, fill in search bar.

![Sub-category](https://i.imgur.com/aQ6mFfb.png)

6. To filter columns, click __Show/hide filters__ icon and enter value to filter box.

![Sub-category](https://i.imgur.com/iAMnNJp.png)

7. You can show/hide columns in the table.

![Sub-category](https://i.imgur.com/F9Mo6JB.png)

9. Also, you can change numbers of row in the table and navigate to other pages.

![Sub-category](https://i.imgur.com/Fswhscn.png)

8. Finally, you can trigger fullscreen mode.

![Sub-category](https://i.imgur.com/ILH1lhp.png)

### [4. Products]()
#### Notes: After create Category and Sub-category, please remember your Category Id and Sub-category Id to create Products
1. In order to access Products table, navigate to click to __Products__ tab.

2. To create new Products, click on __Create Products__ button and fill only __Category Id__ field, __Sub-category Id__ field, __name__ field and __price__ field. It is not required to enter __id__ field, it leads to an error.

![Products](https://i.imgur.com/eBi55RN.png)

3. To edit Products, click on __Edit Products__ icon and fill __Category Id__ field, __Sub-category Id__ field, __name__ field and __price__ field and click __"Save"__.

![Products](https://i.imgur.com/oyERhf1.png)

4. To delete Products, click on __Delete Products__ icon.

![Products](https://i.imgur.com/P9RZK3n.png)

5. To search Products, fill in search bar.

![Products](https://i.imgur.com/aQ6mFfb.png)

6. To filter columns, click __Show/hide filters__ icon and enter value to filter box.

![Products](https://i.imgur.com/iAMnNJp.png)

7. You can show/hide columns in the table.

![Products](https://i.imgur.com/F9Mo6JB.png)

9. Also, you can change numbers of row in the table and navigate to other pages.

![Products](https://i.imgur.com/Fswhscn.png)

8. Finally, you can trigger fullscreen mode.

![Products](https://i.imgur.com/ILH1lhp.png)

### [5. Logout]()
1. To log out your account, click on "Log Out" icon in the TopBar.
