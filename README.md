# Freecharge-Assignment

To run the application clone the repository and then run npm install to download all the dependencies. After downloading the dependencies run "node index.js" to run the 
server on port 5000 . It will automatically connect to the database.

The database used for the application is mongoDB atlas, where a cluster is created. This cluster has two collections-
  1 User-The user details like emailid and password is stored here for login and signup purpose
  2 FileUpload- All the files are stored here with the username.
  
Mongoose Models-
  Two mongoose Schema are defined to implement the required functionality. First is the users Schema which has email-id and password. The second Schema is for the files where
  the username and various attributes of the files like its name, encoding,fieldname,size are stored.

PostMan has been used to provide post, get and delete request. Multer has been used as a middleware to upload files. This method enables us to read the form-data. All the 
files are stored through the form-data in postman where the username and file is provided.

The routes for login, signup ,uploading files and deleting files have been set up in the index.js file.


MVC architecture of the application-
 MVC stands for model, view and controller. Model is the database part where we define the structure of schema for database. View is where the user interacts with the application to send data and perform any operation.
 Controller interacts with both the model and the view. It takes input from the view and then updates the database after performing the required operations.
 In this applications we have models for the database, and routes that act as controller. View is not included since User Interface was not required.

.env file-
All the environment variables have been stored in an .env file which has been added to the .gitignore file

Passwords have been hashed using bcryptjs. A salt is provided to create hash of the password
