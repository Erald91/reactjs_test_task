# React JS Test Task

The goal of this task is to implement a web application that gives the user the ability to see the available products, add new ones and edit the existing products. All data should be stored in browser locally. There should not be any implemented server side code. When app starts for the first time it should be filled with 5 mockup products. The JSX usage is required and JS Harmony (ES6) usage is up to the developer. Developer should assume that this is a small part of a big application and create several independent components that can be reused. For example, having product component separated from the product list is a good idea because it will give an ability to reuse the same component in wish list or purchased products list. Package Manager usage is also acceptable (like bower or npm) but not for adding JQuery like libraries or frameworks, it can be used to add routing ability https://github.com/reactjs/react-router  or any other useful package for this project.

## Product in our application should have these properties

**ID** – Product unique number
**Price** – The cost of product
**Name** – The name of product
**Description** – Product detailed explanation
**Creation Date** – The date where product was created

All these properties should be editable. It is a good practice to have separate react component (form based) for editing these properties. The data should be stored in local storage. External package usage like webstorage - [https://www.npmjs.com/package/react-webstorage](https://www.npmjs.com/package/react-webstorage) is acceptable.

## Web Application should have sections listed below

**List of Products** – Page shows all products from local storage. User can remove product from this page or navigation to product view or edit pages.
**Edit Product** – Page to edit one of the stored products
**View Product** – Page to view product details