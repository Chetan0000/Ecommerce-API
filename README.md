# Ecommerce-API
## Ecommerce API

This is a RESTful API built with Node.js, Express.js, and MongoDB. It can be used to add, update, delete, and render products and product details.

### Features

* Add, update, and delete products
* Render product and product details
* Authentication and authorization
* Error handling

### Installation and Usage

1. Clone the repo: `git clone https://github.com/Chetan0000/Ecommerce-API.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`
4. Access the API in your browser: `http://localhost:3000/api/v1`

### Usage

The API exposes the following endpoints:

* `/products`: Get a list of all products.
* `/products/create`: Add a new product.
* `/products/:id/update`: Update a specific product by ID.
* `/products/:id/delete`: Delete a specific product by ID.

To use the API, you will need to send requests in JSON format. The responses will also be in JSON format.

For example, to get a list of all products, you can send a GET request to the `/products` endpoint. The response will be an array of JSON objects, each representing a product.

To get the details of a specific product, you can send a GET request to the `/products/:id/details` endpoint, where `:id` is the ID of the product. The response will be a JSON object representing the product details.

To add a new product, you can send a POST request to the `/products/add` endpoint with a JSON object representing the new product. The response will be the ID of the new product.

To update a specific product, you can send a PUT request to the `/products/:id/update` endpoint, where `:id` is the ID of the product. The request body should be a JSON object representing the updated product details. The response will be `true` if the product was updated successfully, or `false` otherwise.

To delete a specific product, you can send a DELETE request to the `/products/:id/delete` endpoint, where `:id` is the ID of the product. The response will be `true` if the product was deleted successfully, or `false` otherwise.

### Contact

If you have any questions or feedback, please feel free to contact me at dropmailtochetan@gmail.com.
