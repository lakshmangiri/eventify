# App Name: Eventify

## Description
An Event management web application where one can browse events and buy tickets to attend the event. Also, one can advertise the event to the users.

## Tech Stack

* React with NextJs - https://nextjs.org/
* TypeScript - https://www.typescriptlang.org/
* Tailwind CSS - https://tailwindcss.com/
* Shadecn - https://ui.shadcn.com/ (Component library of choice, natively supports Tailwind Css)
* ClerkProvider - https://clerk.com/docs/components/clerk-provider (A library provides a set of components for authentication)
* StripeJs - https://stripe.com/docs/js

## Notes

* Created NextJs App with the following command `npx create-next-app@14.0.4 ./` or for latest version `npx create-next-app@latest ./`
* Run the application in http://localhost:3000
* Install ShadeCn using the following command `npx shadcn-ui@latest init`
* Installed Button package from ShadeCn using the following command `npx shadcn-ui@latest add button`, the best part with ShadeCn is that whatever the components that are required can be installed using CLI and it is added as an UI component inside the `components` folder.
* Copied global.css and tailwind.config.ts file from the github repo from adrian (https://github.com/adrianhajdin/event_platform/blob/main/README.md)
* Installed uploadthing, a npm package used for file upload using the following command `npm install uploadthing @uploadthing/react`.
* Create a new folder named `(root)` inside the `app` folder and move the `page.tsx` file to it.
* Also, create a new folder named `(auth)` inside the `app` folder. This will have the logics for authentication. Only, the layout.tsx will in the app folder.
* Add `Poppins` font in the layout.tsx file by replacing the existing default font `Inter`. Any fonts can be used and totally depends on the project.
* Add any additional information if needed, here i have added `weights` to the font and defined a variable for the font which can be used in the code.
* Modify the meta data to update the `title` and `description` of the application. Also, I have added `icons` to the meta data, the icons are obtained from the github repo of adrian (https://github.com/adrianhajdin/event_platform/blob/main/README.md). Extract and replace the `public` folder in the project with the downloaded `public` folder. Move the `favicon.ico` to the `app` folder.
* [NextJs tip], A new layout can be created inside the `(root)` folder, which will be similar to the layout in the app folder. this will control the layout of the root page where the components such as navbar, footer will not appear during the signin/signup page.
* All the components associated with the (root) app is created in the folder named `shared` inside the components folder.
* Create two new components named `Header` and `Footer` in the `Shared` folder. Define these components in the layout.tsx in the `(root)` folder.
* Start modifying the layout.tsx with class name and start working on Header component.
* Go to clerkprovider site (https://clerk.com/?utm_source=sponsorship&utm_medium=youtube&utm_campaign=js-mastery&utm_content=meetup-clone), sign in or register and start by creating application. This clerk provider will create sign in component and we can integrate that into our code.
* Copy the environmental variables and paste it into the `.env.local` file  at the root directory. Then, continue with docs to setup the authentication part.
* Install the clerk in the project using the following command `npm install @clerk/nextjs`
* Wrap the app using clerkprovider.
* For the clerkprovider, we need middleware and from the docs, copy the middleware source and paste it in the `middleware.ts` in the root directory.
* Now by reloading the page, it will take us to Login page. Instead of creating sign in page, auth guard, clerk provider will take care of everything.
* We can add other types of user authentication in the clerkprovider dashboard.
* Add the public routes and igored routes in the `middleware.ts` file.
* Add the Header component to the authentication page and let's take the application to authentication part from the Header component from `Login` button.
* When navigated to Login page, the url is different from `localhost:3000`. Here, this can be modified using clerk. In the `(auth)` folder inside the app folder, create a folder named `sign-in`, inside that create an another folder named `[[...sign-in]]` and a file named `page.tsx`. Similarly for `sign-up` component. Then, update the environmental variables with the url. (https://clerk.com/docs/references/nextjs/custom-signup-signin-pages).
* The UI need to be updated and for that create a new layout.tsx file in the `app` folder.
* Once all are set up, we can create account, login to test it.
* Added Profile section in the SignedIn root page, by adding the `SignedIn` component in the `Header.tsx` component.
* Add Navbar component. A new component named `NavItems` is created in the Shared component folder.
* Call the `NavItems` component in the `Header` component.
* Add a new `MobileNav.tsx` for mobile based Navbar component.
* Add few components from ShadeCn in the MobileNav component. They are `Sheet` and `Seperator`.
* Create a constant file and use that in the `NavItems` component to render the items.
* In the repo provided by Adrian, copy the index.ts file from the constants folder.
* Call the array in the `NavItems` component and the Nav items are displayed.
* Now, to make it which page is active, define a variable named `pathName` in the NavItems component. use the `usePathname()` property from nextjs to define the active link.
* Header part is done, moving to footer. Add the code for the footer and style it.
* Starting the Hero Section. The hero section header, description, image are added.
* Next moving on to the database part, that will have the events.
* Create a folder named `database` inside the `lib` folder and then within that create a file named `index.ts`. This will have the logics for the MongoDB setup.
* Install two packages `mongodb` and `mongoose` using the following command `npm i mongodb mongoose`
* In the MongoDB atlas, a new Project is created and named as `Eventify`. A database is built with the free version and the username and password is noted. `username` and `password`
* Setup the DB and get the connection string. `<MongoDb_Uri>` and store it in the .env file, replace the password as well.
* Let's start adding data, by starting with creation of models. Inside the database folder, create folder named `models` and in that folder models can be created.
* Starting with `user.model.ts`, where we will have the model schema related to the user information.
* Next we create the models for the events, which will be created in the `event.model.ts`.
* An interface is also created in the event model.
* Now, that we have a clerk user, we should make sure that as soon as a clerk user is created, it should be created in the DB as well. This is done using `Webhooks`. It is an `event trigger`, trigger something and process that event. Using the webhooks, the user data is synced to the backend as soon as user creates his account.


