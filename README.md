Ecommerce Store using Redux Toolkit
This project is a small ecommerce store built using Redux Toolkit to manage the state of the application. It utilizes JSON data from the Dummy JSON API to simulate a product listing and shopping cart functionality.

Features
Product listing: Displays a list of products fetched from the Dummy JSON API.
Shopping cart: Allows users to add and remove items from the shopping cart.
Quantity control: Users can increase or decrease the quantity of items in the cart.
Loading state: Displays a loading message while fetching the product data.
Error handling: Handles errors that may occur during the API call.
Technologies Used
React: A JavaScript library for building user interfaces.
Redux Toolkit: A package that simplifies the process of managing state in Redux.
React Redux: A library that integrates Redux with React components.
React Router: A library for handling routing in a React application.
Material-UI: A popular UI component library for React.
Dummy JSON API: An API that provides dummy JSON data for testing and prototyping.
Getting Started
Follow the steps below to get the project up and running on your local machine:

Clone the repository:

bash
Copy code
git clone https://github.com/JKGhartey/ecommerce-store.git
Navigate to the project directory:

bash
Copy code
cd react-redux
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and visit http://localhost:3000 to see the application running.

Project Structure
The project follows a typical React folder structure:

src/: Contains the main source code for the application.
components/: Contains reusable UI components used in the application.
features/: Contains Redux slices representing different features or domains of the application.
pages/: Contains the main pages or views of the application.
App.js: The root component of the application that handles routing.
index.js: The entry point of the application.
Redux Store
The Redux store is configured using Redux Toolkit. It consists of two slices:

productSlice: Manages the state related to products, including fetching the product list from the API.
cartSlice: Manages the state of the shopping cart, including adding and removing items and adjusting quantities.
The store is created and configured in the store.js file using the configureStore function from Redux Toolkit.

API Integration
The project fetches product data from the Dummy JSON API using the fetch function. The callProductListApi async thunk action is responsible for making the API call and dispatching the corresponding actions based on the API response.

The API response is handled in the extraReducers section of the productSlice. The state is updated accordingly, including setting the loading and error flags.

Routes
The application uses React Router for handling routes. Currently, there are two routes:

/: The home page that displays the product listing.
/cart: The cart page that displays the items in the shopping cart.
Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Acknowledgments
This project was built based on a tutorial and aims to demonstrate the practical use of Redux Toolkit in a small ecommerce store. Thanks to the creators