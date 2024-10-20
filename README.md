# PROJECT OVERVIEW:

This project is a React-based E-commerce Listing Page UI, built according to the
provided Figma design. Th UI allows userd to view a list of products and either view a 
"Thank You" Page upon selecting a product or add the product to the cart via a modal.
The design includes pagination for product navigation, a search bar, profile and cart icons,
and a responsive layout.

**# Approach Taken:**

## 1. Componentization:

### This application is devided into reusable components**
*Header*     : Contains the header bar, nav bar
*ProductCard* : disply individual product details like image, name, price, and action buttons.
*CartModalPage* : Diaplays a pop according to the Figma design and a conformation and close buttons for the modal actions
*ThankYouPage* : After cliking View Product button redirect to a thank you message with the according product name.

## 2.Routing

 Used React Router to manage navigation between the product listing page and custom "Thank you page"

## 3.State Management

Utilized React Hooks for managing component state, particularly forhandling the modal visibility, pagination functionality, 
Search the products with their name.

## 4. Static Data

Used static data to simulate product listings. This data is ued to disply information handle pagination.



# Challenges Faced

### 1. Modal Implementaion:
    Ensuring the modal behaves responsively acroos different screen sizes andopens properly when adding a product to the cart.
### 2. Pagination:
    Implementing pagination to handle static data efficienly while maintaining proper 
    navigation between product pages.


# HOW TO RUN THE PROJECT

#### Prerequisites
    Node.js installed on your system.
#### Steps
1. Clone the repository:
        `git clone <respository-rul>`

2. Navigate into the project directory:
        `cd <project-directory>

3. Install the dependencies
        `npm install`

4. Run the project
        `npm start`
        
5. Open the application in your browser
        [http://localhost:300]

    
# Features Implemented

1. Header Section:
    navbar with logo,profile, and cart icons

2. Product List Section:
    Displays products with an image, name, price, and action buttons for "view product" and
    "Add to cart"

3. Add To Cart Modal:
    A modal opens when the user clicks the "Add to Cart" Button , displying 
    the product details and a confirmation button.

4. Thank You Page:
    after clicking "View Product", users are redirected to a custom "Thank you" page
    that acknowledge their action.

# TECHNOLOGIES USED 
=> React js
=> React Router for navigation
=> Static data for simulating listings.
=> CSS for styling based on Figma design



