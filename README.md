<div align="center">
  <h1>Commentto</h1>
  <p>
    <a href="#getting-started">Getting Started</a>
     • <a href="#tech-stack">Tech stack</a>
  </p>
</div>

<img width="1657" alt="Screenshot 2022-01-04 at 16 08 34" src="https://user-images.githubusercontent.com/59574576/148071237-06fc0f86-f6e6-4258-9517-80043f73c150.png">

# Getting Started

### This is a firebase authentication in React with a sign up and login form.

### If you want to use Firebase with this project you have to create a project on firebase console. 
- Then create a ``.env`` file on the root of this app and add the keys that firebase gives you such as ``REACT_APP_FIREBASE_API_KEY="APIFPFGIEGIRIVGRVJR"``.

First, install dependencies (preferably using Yarn 1.x), then run the development server:

`yarn dev or npm run dev`

Open http://localhost:3000 with your browser to see the result.

# Tech stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/) - for user authentication and deployment
- [Formik](https://formik.org/) - form management
- [Yup](https://github.com/jquense/yup) - form validation
- [Chart.js](https://www.chartjs.org/docs/latest/) - for chart illustration
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Theme UI](https://theme-ui.com/)
  Theme UI is a library for creating themeable user interfaces based on constraint-based design principles.
- [Jest](https://jestjs.io/)

### Useful yarn commands

- `yarn dev` - starts the project
- `yarn lint` - lint the codebase
- `yarn run type-check` - type check the codebase

### Generate components

It is highly recommended that you use the commands below when you need to create a new component, hook, or util function.
These commands will create new files in the correct locations following the project's guidelines.

yarn new

#### create a new `About` page component

yarn new:page about

#### create a new `useToggle` React hook

yarn new:hook useToggle

