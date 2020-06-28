# Eat a Burger

![badge](https://img.shields.io/badge/license-MIT-blue.svg)  ![badge](https://img.shields.io/badge/JavaScript-52%25-yellow) ![badge](https://img.shields.io/badge/HTML-34%25-red) ![badge](https://img.shields.io/badge/CSS-13%25-9cf) ![badge](https://img.shields.io/badge/TSQL-2%25-lightgrey) ![badge](https://img.shields.io/github/repo-size/gheptig/burger)

## Heroku URL 

### https://shrouded-oasis-47853.herokuapp.com/

## Brief Description

Eat a Burger is a simple food log application that allows a user to keep a running tally of burgers they have either devoured or not devoured.  A user is presented an area titled "Add a Burger", where they enter a new burger name and either select "Devoured" (they have eaten the burger before) or not devoured (they have yet to eat the burger). If a user has yet to eat the burger it is then added to the "Burgers Not Devoured" area and the name is displayed with a button that says "Devour!" next to it.  When the user clicks the "Devour!" button the burger is then added to the "Burgers Devoured" area where the burger name is now displayed with an "Eject" button next to it.  If the user has devoured too many burgers they can then select the "Eject" button and the burger will be removed from the "Burgers Devoured" area.  Conversely, when a user selects "Devoured" when adding a new burger, it will be displayed in the "Burgers Devoured" area.


This a responsive fullstack application that utilizes a Node.js backend using a RESTful API built with Express and a CRUD implemented MySQL database. The RESTful API makes requests to MySQL database and depending on the CRUD model a user is then rendered a Handlebars HTML template.

## Preview 

![burger-app](https://media.giphy.com/media/hWSY6nxTpJU2UJuz2K/giphy.gif)

## Technologies Used

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - This application is written and programmed using ES6 JavaScript.

- [Node.js](https://nodejs.org/en/about/) - Used to execute code for application on backend.

- [Express](https://www.npmjs.com/package/express) - Used to route and build RESTful API and make requests/responses between database and client.

- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - Used to build and generate HTML template. 

- [MySQL](https://www.npmjs.com/package/MySQL) - NPM package used to make connection with MySQL database.

- [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL GUI used to architect, test, and manage MySQL database.

- [jQuery](https://jquery.com/) -  Used on frontend to simplify JavaScript code and DOM traversal.

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used to style the html elements/application.

- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - Grid/Column system used to create responsive page layout/structure.  Also used to create and style elements such as buttons, modals, and list-groups.

- [Heroku](https://www.heroku.com/) - Used to host working application. (see app link above).


## Local Installation

 After a user clones the repository, they will need to install the NPM packages associated with the application by running `npm install`. The user will then need to duplicate the `schema.sql` and `seeds.sql` files in their MySQL GUI to create the `burgers_db` database.

Finally, a user can launch the application by running `node server.js` in their terminal, and access the application at ```http://localhost:8080```

## License

MIT License

Copyright (c) 2020 Augustus Heptig

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributors/Authors

- Augustus Heptig - Author/Creator