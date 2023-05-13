# Security — Encryption, Authentication, Authorization

## Access the REST API with Authentication

[mesel14.onrender.com](https://mesel14.onrender.com/)

### Enpoints

|                     |                                           |
| :------------------ | :---------------------------------------- |
| POST/sellers        | Create a new seller with authenticatied   |
| POST/products       | Create a new product with authenticatied  |
| PUT/products        | Update detail product with authenticatied |
| DELETE/products/:id | Delete product with authenticatied        |
| GET/products/?q=cat | Get all products that contains cat        |
| GET/products/:id    | Get product by id                         |
| POST/register       | Create a new user, ( password hashing)    |
| POST/login          | login DB                                  |
| GET/logout          | logout (clear cookies )                   |
