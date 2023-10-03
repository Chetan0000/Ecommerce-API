# Ecommerce-API


This is a RESTful API built with Node.js, Express.js, and MongoDB. It can be used to add, update, delete, and render products and product details.

### Features

* Add, update, and delete products
* Render product and product details

### Installation and Usage

1. Clone the repo: [git clone](https://github.com/Chetan0000/Ecommerce-API.git)  `https://github.com/Chetan0000/Ecommerce-API.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`
4. Access the API in your browser: [here](https://ecommerce-api-2l2f.onrender.com/)  `https://ecommerce-api-2l2f.onrender.com/`

### Usage

The API exposes the following endpoints:

* `/products`: Get a list of all products.
* `/products/create`: Add a new product.
* `/products/:id/update_quantity/?number=`: Update a specific product by ID.
* `/products/:id`: Delete a specific product by ID.

To use the API, you will need to send requests in JSON format. The responses will also be in JSON format.

For example, to get a list of all products, you can send a GET request to the `/products` endpoint. The response will be an array of JSON objects, each representing a product.

To add a new product, you can send a POST request to the `/products/create` endpoint with a JSON object representing the new product. The response will be the ID of the new product.

To update a specific product, you can send a PUT request to the `/products/:id/update_quantity/?number=10` endpoint, where `:id` is the ID of the product and number is to increament or decerement of product quantity . The request body should be a JSON object representing the updated product details. The response will be `updated product details` if the product was updated successfully, or `false` otherwise.

To delete a specific product, you can send a DELETE request to the `/products/:id` endpoint, where `:id` is the ID of the product. The response will be `true` if the product was deleted successfully, or `false` otherwise.

### Contact

If you have any questions or feedback, please feel free to contact me at dropmailtochetan@gmail.com.
