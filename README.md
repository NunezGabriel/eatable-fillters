# Eatable - Food for Everyone

![Eatable protoype](/public/eatable.jpg)

Eats Inc. is developing a new idea in the food-tech industry: "Eatable". They have hired your team to build an MVP for the web app. The stakes are high and the time is short but you and your team are confident in your abilities to finish on time.
Requirements 

## Resources

- Design: [here](https://www.figma.com/file/9iX52juOI5ZghyewK0svxO/Eatable?node-id=0%3A1)
- Github Classroom repo: [here](https://classroom.github.com/a/XoL4_21_)
- Backend: [here](https://github.com/codeableorg/eatable-api) (includes insomnia json file)

## The requirements

The MVP should follow these technical requirements:

- It should be built with React reusable components.
- It should use Context and Reducers to manage the global app- state.
- It should include Unit tests for, at least a correct render- of each component.
- It should connect to an external API to fetch and persist- data.
- It should use CSS in JS for the styles using Emotion.
- It should handle token-based authentication. All pages- except Login and Sign-Up should be protected.
- It should be able to handle page refreshes without losing- the current state of the app. (LocalStorage or- SessionStorage are both valid).
- It should handle errors by showing useful messages to the user.

## Main user stories

As a user I want to...

- Create an account with only my email and password and th- complete extra info if I wish.
- Log in to the app with my email and password
- Update my profile: name, phone, address, and avatar.
- See a list of products by category showing the pictur- name, and price of each product.
- See the details of one product including the pictur- price, description, and a button to Add the product to - cart. This button should be disabled if the product - already in the cart.
- Search a product by name.
- Add products to my cart.
- See the list of products on my cart.
- Increase or decrease the number of items for each produ- on my cart. When the amount decreases to 0, the produ- should be removed from my cart.
- See the total cost of my order before doing the checkout.
- Confirm my address for delivery. I can change it if I wan- (a user only has 1 address at any time).
- Complete my order and store it on my history.
- See the history of all my orders showing the date, t- number of items, and the total cost.
- Expand the details of an order on my history to see t- detailed list of items and the delivery address used wh- ordered.
- See "empty-state" messages when my search does not have any coincidences, my history does not have any orders yet or my cart is empty.

# How to run this App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
