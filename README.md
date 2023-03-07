# Description

Welcome to our full-stack e-commerce website dedicated to Harry Potter fans! Here, you can purchase wands, dragons, potions, and more.

## Technologies Used
React for the frontend, Java for the backend, MySQL for the database

## Screenshots
<img width="1154" alt="Screenshot 2023-03-06 at 5 11 32 PM" src="https://user-images.githubusercontent.com/100975883/223293922-7177cf15-1ae3-4ba1-ae16-2e1b3487f615.png">

## Admin login:
Username: vu  
Password: 123456

## Checkout:
Credit card: 4242424242424242

## Design:
Sitemap: https://www.figma.com/file/H3TjR7Zb8P87y2tRjANuiE/Wands-%26-Dragons%3A-Site-Map?node-id=0%3A1    
Wireframe desktop: https://www.figma.com/file/DWLXMCN4bye4eOwBD8wEmE/Desktop-Designs    
Wireframe mobile: https://www.figma.com/file/u0hP11shopPMVwXBFxjgJ4/Wands-%26-Dragons%3A-Wireframe  

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Note: This project was built and tested using Node.js v19.0.1 and npm v8.19.2. If you encounter any issues with the dependencies, please ensure you have these versions installed.

## Installation

1. Clone the repository to your local machine
   ```sh
   https://github.com/phuongv8/wands-and-dragons.git
   ```
2. Change into the project directory
   ```sh
   cd wands-and-dragons
   ```
3. Install all required dependencies for frontend and backend
   ```sh
   npm install
   mvn install
   ```
4. Start the development server
   ```sh
   npm start
   ```
## Configuration
1. Create a MySQL database for the project
2. In the server directory, navigate to src/main/resources/application.properties
3. Update the following properties with your own MySQL configuration:
   ```sh
   spring.datasource.url=jdbc:mysql://<host>:<port>/<database-name>?useSSL=false
   spring.datasource.username=<username>
   spring.datasource.password=<password>
   ```
## Running the project
1. In the server directory, run ```mvn spring-boot:run``` to start the backend server
2. In the client directory, run ```npm start``` to start the frontend server
3. Open a web browser and navigate to http://localhost:3000 to access the website

# Features
- User registration and authentication
- Shopping cart functionality
- Product search and filtering
- Secure payment processing

# Future Enhancements
- [ ] Implement order tracking and shipping information
- [ ] Add more Harry Potter merchandise to the website
- [ ] Deploy on AWS
- [ ] Update Installation instruction
