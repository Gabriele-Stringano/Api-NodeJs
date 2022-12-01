<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="logo.png" alt="Logo" width="80" height="80">

  <h3 align="center">Pocket-Library by Gabriele Stringano</h3>

  <p align="center">
  A tool to search for information about books. Powered by  APIs
    <br />
    <a href="https://glistening-lily-15ec07.netlify.app/"><strong>Try the program »</strong></a>
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

As a Start2impact student, I developed this application to put my newly acquired knowledge of JavaScript into practice.

<p align="right">(<a href="#top">back to top</a>)</p>

<ol>

### Built With


* [![Html][Html.js]][Html-url]
* [![Css][Css.js]][Css-url]
* [![Javascript][Javascript.js]][Javascript-url]
* [![NodeJs][NodeJs.js]][NodeJs-url]
* <a href="https://openlibrary.org/developers/api">External Service-> Open Library</a>

<p align="right">(<a href="#top">back to top</a>)</p>

</ol>

<!-- How it Work + ScreenShot -->

## ⚙️How it Work

- The site allows users to search for books by desired genre and view information such as: title, authors, and description. All in the English language.</br>
The text box is an Input element. By pressing on the Search button, the browser will contact the external service (Open Library) to get the list of books according to the genre indicated in the text box.
![product-screenshot1]
- A limited number of books are printed on the screen; it's possible to display other books by pressing on the following button, and it's possible to go back with the previous button. The 2 buttons work due to an eventListener each and a counter called offsett, which keeps in memory the position reached in the dataset.
![product-screenshot2]
- Pressing in the box of any book will execute a new request to the external service; the previously saved key is passed as the ID of the item. 
The desciption of the book is then displayed on the page
[![product-screenshot3]]

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
<li> Run the Program: npm run dev</li>
<li> The browser should open automatically</li>
<li> Check out for index.html in the /dist folder for manual start </li>
</ol>

### Prerequisites
You need to own these programs:
<ul>
    <li> A text editor-IDE </li>
    <li> A program to unzip files</li>
    <li> Instal Node.js</li>
</ul>


<!-- CONTACT -->
## 📲Contact

Gabriele Stringano Email: - gabrielestringano@gmail.com

My Project: - https://github.com/Gabriele-Stringano/
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

[product-screenshot1]: src/img/JsScreenshot1.png
[product-screenshot2]: src/img/JsScreenshot2.png
[product-screenshot3]: src/img/JsScreenshot3.png
[Html.js]: https://img.shields.io/static/v1?message=HTML5&logo=HTML5&labelColor=5c5c5c&color=c31111&logoColor=white&label=%20&style=FOR-THE-BADGE
[Html-url]: https://www.html.it/
[Css.js]: https://img.shields.io/static/v1?message=CSS3&logo=css3&labelColor=5c5c5c&color=1111c3&logoColor=white&label=%20&style=FOR-THE-BADGE
[Css-url]: https://en.wikipedia.org/wiki/CSS
[Javascript.js]: https://img.shields.io/static/v1?message=JAVASCRIPT&logo=JavaScript&labelColor=5c5c5c&color=efd81d&logoColor=white&label=%20&style=FOR-THE-BADGE
[Javascript-url]: https://en.wikipedia.org/wiki/JavaScript
[NodeJs.js]: https://img.shields.io/badge/Js-Node.js-brightgreen
[NodeJs-url]: https://nodejs.org/en/
