# Paradise Nursery

## Project Description

Paradise Nursery is a React-based online plant shopping application. 
The application allows users to browse different categories of plants,
add plants to a shopping cart, change quantities, remove items, and view
the total cost of their selected plants.

## Features

- Responsive landing page
- About Us section
- Plant categories
- Multiple plants in each category
- Add to Cart functionality
- Dynamic cart item count
- Increase and decrease plant quantities
- Delete plants from the cart
- Individual plant totals
- Overall cart total
- Continue Shopping functionality
- Checkout button with "Coming Soon" message
- Redux state management
- React Router navigation

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- Redux Toolkit
- React Redux
- CSS

## Project Structure

```text
src/
├── components/
│   ├── AboutUs.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Navbar.jsx
│   └── ProductList.jsx
│
├── data/
│   └── plants.js
│
├── redux/
│   ├── CartSlice.jsx
│   └── store.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx