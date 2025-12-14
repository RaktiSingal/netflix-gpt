Netfix gpt

1. create app using npx create-react-app netfix-gpt
2. configure tailwindcss follow https://www.geeksforgeeks.org/installation-guide/how-to-install-tailwind-css-with-create-react-app/
3. Add new repo in github
4. Create components for body, header, login, browser page
5. install npm -i react-router-dom
6. In body component start the router
7. '/' will take to login, '/brower' will take login page
8. Start Login page
   a. Netflix logo in header
   b. netflix background image
   c. basic form for sign in and sign up
   d. form validations, useRef hook for inputs
9. Set up firebase
   a. create new project
   b. install and deploy firebase -> https://netflixgpt-60289.web.app
10. Used firebase fn to sign in and sign up
11. Created redux store to have user informationuser details and if user is not sign in then navigate it back
12. In header add

Features

- Homepage (login / sing up page)

  - Sign in/ sign up form redirect to browse page

- Browse page (after authentication)
  header

  - main movie
    - background movie
    - title discription play button
  - Movie suggestions
    - movie list (vertical scroll)

- netflix gpt
  search bar
  show us movie suggestions
