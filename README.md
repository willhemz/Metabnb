# Metabnb website

A site developed by `Williams Balogun`

## Process

- Firstly, created a copy of the figma design and studied the \
  contents of the designs, properties and layouts.
- Then, ensured I had latest versions of **nvm**, **node** and **yarn** installed.
- Then, I set up my development environment using `create-react-app`.

* So, I removed dependency and files not needed in the project that \
  was included by default.
* Next step was to install the necessary dependencies. Dependencies \
  integrated into this project are:
  - react-router-dom
  - react-icons
  - Tailwindcss dependencies (tailwind, autoprefixer, postcss)
    - The tailwindcss was then initiated and configured for the \
      project
    * Two tailwind config file exists. The tailwind.config.js and \
      tailwind-default.config.js. The first is where all added styling suffixes are added.
* Then, the Red Rose font was imported to be used in the project as \
  the default font character of the text.
* A route folder was then created inside the src folder to contain:
  - Home.js
  - Places.js
  - Footer.js
  - Root.js - containing the links to various routes in the page
  * subpages folder containing:
    - About.js
    - Wallet.js
    - PhotoSlides.js
* In the src folder, created:
  - Navbar.js - contains the menu bar section of the page. This is \
    where the Root.js was utilized.
  * Error.js - An error page that displays when a clicked route does\
    not exist.
* Then, set up the **index.js** to render effectively using \
  createBrowserRouter, RouterProvider and Router from `react-router-dom`.
  - The _Navbar.js_ and _Home.js_ was set to display on first load\
    and other route displays on click.
* Proceeded to writing my codes based on the figma layout provided \
  into the relative components related to webpage and routes.
* The styling was then done using tailwind css to give the site a \
  good layout, beauty and responsiveness.

`**Site**`
[Visit Site](https://ihemz-metabnb.netlify.app)
