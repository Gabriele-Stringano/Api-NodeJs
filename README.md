<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Api-NodeJs by Gabriele Stringano</h3>

  <p align="center">
  RESTful JSON API for a travel agency
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#how-it-work">How it Work</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## 💡About The Project

As a Start2impact student, I developed this application to put my newly acquired knowledge of Node.js and MongoDB into practice.

<p align="right">(<a href="#top">back to top</a>)</p>

<ol>

### Built With


* [![Javascript][Javascript.js]][Javascript-url]
* [![NodeJs][NodeJs.js]][NodeJs-url]
* <a href="https://www.mongodb.com/">External Service-> MongoDb Cloud</a>

<p align="right">(<a href="#top">back to top</a>)</p>

</ol>

<!-- How it Work + ScreenShot -->

## ⚙️Endpoints

### Users

You can get the entire users list with a GET request:

`/api/users`

or GET data for a specific user:

`/api/users/:userID`

<strong>:userID</strong> must be a valid MongoDB id.  
You can PATCH or DELETE user data with the same endpoint.

You can add a new user with a POST request:

`/api/users`

```json
{
    "name": "insert an alphanumeric string",
    "surname": "insert an alphanumeric string"
    "email": "insert a valid email"
}
```

### Products

You can get the entire products list with a GET request:

`/api/products`

or GET data for a specific product:

`/api/products/:productID`

<strong>:productID</strong> must be a valid MongoDB id.  
You can PATCH or DELETE product data with the same endpoint.

You can add a new product with a POST request:

`/api/products`

```json
{
    "name": "insert an alphanumeric string"
}
```

### Orders

You can get the entire orders list with a GET request:

`/api/orders`

or GET data for a specific order by ID:

`/api/orders/:orderId`

<strong>:orderId</strong> must be a valid MongoDB id.  
You can PATCH or DELETE an order with the same endpoint.

GET data for orders by date:

`/api/orders/by-date/:date`

GET data for orders by product:

`/api/orders/by-product/:product`

Update an order by addind new users and/or products to the existing array with a PUT request:

`/api/orders/add-infos/:orderId`

Update an order by removing users and/or products to the existing array with a PUT request:

`/api/orders/remove-infos/:orderId`

You can add a new order with a POST request:

`/api/orders`

Products and Users' ID must exist in the mongoDB!

```json
{
  "products": "an array of Products' ID",
  "users": "an array of Users' ID",
  "date": "a valid ISO date"
}
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## ❗Getting Started

To get a local copy up and running follow these simple example steps:
<ol>
<li> Go to  https://github.com/Gabriele-Stringano/Pocket-Library and press the green button </li>
<li> Select Download zipper </li>
<li> Open the zipper and extract the folder </li>
<li> Open a text editor and add the extracted folder </li>
<li> Install the dependencies: npm install</li>
<li> Run the Program: npm start</li>
<li> 
Connect your MongoDB database:</br>
Create, if don't exist, a .env file and the insert an enviroment variable named DB_URIwith your MongoDB connection string
</li>
<li> Test it with a client, like Postman</li>
</ol>

<!-- CONTACT -->
## 📲Contact

Gabriele Stringano Email: - gabrielestringano@gmail.com

My Projects: - https://github.com/Gabriele-Stringano/
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## 📚Acknowledgments

List of resources I used:

* [GitHub](https://github.com)
* [Start2Impact](https://www.start2impact.it/)
* [Visual-Studio](https://code.visualstudio.com/)
* [Best-README-Template](https://github.com/ferneynava/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[Javascript.js]: https://img.shields.io/static/v1?message=JAVASCRIPT&logo=JavaScript&labelColor=5c5c5c&color=efd81d&logoColor=white&label=%20&style=FOR-THE-BADGE
[Javascript-url]: https://en.wikipedia.org/wiki/JavaScript
[NodeJs.js]: https://img.shields.io/badge/Js-Node.js-brightgreen
[NodeJs-url]: https://nodejs.org/en/
