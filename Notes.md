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
* Run the application in http://localhost:3000 using the following command `npm run dev`
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
* Install the clerk in the project using the following command `npm install @clerk/nextjs`, also for dark themed page install `npm install @clerk/themes`.
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
* Now, that we have a clerk user, we should make sure that as soon as a user is created through clerkProvider, it should be created(updated) in the DB as well. This is done using `Webhooks`. It is an `event trigger` concept, that triggers something and process that event. Using the webhooks, the user data is synced to the backend as soon as user creates his account. (https://clerk.com/docs/users/sync-data)
* In order to pull the data from the clerkProvider and pass to the DB, we need the endpoint URL (DB URL). Since, we have the DB in the localhost, this will not work and it is quite complicated. Thus, we need to deploy the end point url in order to store the data in the DB.
* Before that, we need to install some packages, namely `svix`. This can be installed using the following command `npm install svix`.
* Then, we will create the end point in the application, the end point creation steps are mentioned in the clerkProvider documentation.
* Copy the endpoint source code from the documentation (https://clerk.com/docs/users/sync-data) and paste it into the following file. Create a new folder named `api` inside the `app` folder and within the `api` folder, create an another folder named `webhooks`, within that `webhooks` folder, create an another folder named `clerk`. Within that `clerk` folder, create a file named `route.ts`, paste the source code here.
* Once the code is copied, we have to modify the getter Id and its type, so when an event is triggered we have to ensure what are all the data we are getting. Wrap that into an object and send that to an actions function that we create in the database logic.
* To create the function, in the `lib` folder, we create a new folder named `actions`, and inside that we create a file named `user.actions.ts`. The function is defined here. To define the type for the data we are passing inside the function, we create a folder named `types` in the root of the project. Inside that folder, we create a file named `index.ts` which will have the predefined types for the data we pass in the function. This file not only has the types for the data that we pass inside the `createUser` function but also for all other functions. The code for the `index.ts` can be found in the github repo from adrian's.
* Let's work on the user actions, first we start with a error handling using try...catch block. We create a custom error handling function that is present in the `utils.ts` inside the `lib` folder. This was created automatically by `shadcn` library, but we will be working on top it adding some more error handling functions. Those functions are available from the github repo of Adrian's.
* When we copy the source code into `utils.ts`, there will be an error on `query-string`, this is simply because we need to install a package named `query-string`. This can be done by the following command `npm i query-string`.
* Let's call the `handleError` function from the `utils.ts` file. Then, we need to hit the data to the server which will pass the data to DB. Since, we use NextJs, we do not need to run a server in a seperate port all the time. That's were `vercel` comes into play, using the `vercel functions` it enables running compute on-demand without needing to manage your own infrastructure, provision servers, or upgrade hardware. It is used to write server side functions and it executes it. (https://vercel.com/docs/functions)
* Once we write the server function, we call that function in the `route.ts`. There, we also write a if.. check to check whether the user data exist and then obtains that data using the ClerkId, which can be seen in the schema.
* Similarly, let's update the source code for the following function as well `updateUser`, `deleteUser`. Copy the `route.ts` code and `utils.ts` code from the github repo which is done in the similar way as the `createUser`.
* Then, lets create model for category and order model in the `models` folder follows the same method as user model and event model.
* Now its time to deploy our application only then we can work with data hitting the MongoDB while signing in using the clerkProvider. To deploy, we are using `Vercel`. First, create an account with `Vercel` if not done already.
* Select, Add New Project and connect to Github as the project is pushed into GitHub. Once the connection is done, all the repositories from the GitHub can be seen in the Vercel too.
* Select `eventify` project(repo) and select import. The framework is set to be `NextJs`, the root directory is `./`, the env need to be processed. So, the contents from `.env` file is copied and pasted there. Before deploying, make sure you have the project in the Git repo and it is not an empty repo. Once deployed, the site can be seen live through the URL provided by vercel.
* In the clerkProvider dashboard, we need to add the endpoint as the application is now in the live, we have to pass the url of the live application. The end point url can be something that will look like this `https://eventify-tau.vercel.app/api/webhooks/clerk` and we have to select `user` specific activites in the Events.
* Copy the secret key from the dashboard and add it to the `.env` file locally and in the vercel deployment dashboard as well. It can be done in the settings under the project, add the `env` and hit save. then, move to deployment and select the project and `redeploy`.
* Delete the previously created user and sign in once again, this time the data will be stored in the DB as well. if the data is not storing, then go to Clerk provider dashboard, and in that enable personal information under `user information` section. This will help us while creating the data.
* Lets now jump into creation of events. Go to `(root)` folder and create a folder named `events`. and inside create an another folder named `create`. Create a file named `page.tsx` inside that.
* Create a class named `CreateEvent` this class will be used to create events.
* Also, we create an another UI component named `EventForm` where we will render the form fields. This component will be reusable for `UpdateEvent` class as well. 
* The `UpdateEvent` class is created inside the `(root)` folder with a new folder named `[id]` -> `update` -> `page.tsx`.
* We will use React Hook form, a component provided by `shadcn` library for the forms. https://ui.shadcn.com/docs/components/form
* This can be installed using the following command `npx shadcn-ui@latest add form`.
* Once installed, follow the documentation in the shadcn and create the forms.
* Install input with the following command, `npx shadcn-ui@latest add input`, after that follow the next step in the documentation, copy the actual form and paste to EventForm component.
* Inside the `lib` folder create a new file named `validator.ts`, this will take care of the form validation controls.
* Then, work on the form fields to change that into what we want, create forms that are related to the event app. Modifications like removing <formlabel>, <formdescription>, modifying classes.
* Next form field is going to be a drop down, so create a dropdown component in the `shared component` folder. Call the DropDown component in the Events form.
* Next, work on the DropDown component by creating required props and using the shadcn component `select`. can be installed using the following command `npx shadcn-ui@latest add select`.
* Copy all the imports from the documentation and paste it. (https://ui.shadcn.com/docs/components/select).
* Copy the Select code from the document and paste it as well, then we can modify it according to our needs. 
* Dynamically, call the category model and based on that we can add categories to the drop down. There is also a feature to add new categories by the user itself, this will make a new alert appear on the screen, the user can enter the new category and save it.
* To Create this, `alert dialog` component from shadcn is used. This component can be installed using the following commnad `npx shadcn-ui@latest add alert-dialog`. The documentation is here (https://ui.shadcn.com/docs/components/dialog).
* Follow the documentation, copy the imports and example form. Paste it to the dropdown component and modify wherever required.
* Create other forms, similarly for textarea, copy the following command from the shadcn document to install `npx shadcn-ui@latest add textarea` textarea component.
* Next, for image upload, we will create another component in the `shared` folder named `FileUploader`. this component will be called in the EventForm component. To upload the image, this is taken care of by a seperate library named `uploadthing`. (https://docs.uploadthing.com/)
* Sign in with Github into uploadthing. Create an app, using the dashboard. Follow the documentation and install upload thing if not installed already. It can be installed using the following command `npm install uploadthing @uploadthing/react`.
* Next step is to add the env variables. Copy the API keys from the dashboard of the application and paste it to the .env file in the local.
* After that, we need to setup a file router, all the files uploaded to upload thing are associated with a file router. we have to add that within the api. Copy the `FileRouter.ts` file from the documentation and paste it to a new file created in the `app->api->uploadthing->core.ts`.
* Similarly, to create a next.js api route using the filerouter, copy the code from the document and paste to a new file created in the `app->api->uploadthing->route.ts`.
* To create upload thing components, copy the source code and paste it at `lib->uploadthing.ts`.
* We will call the component from the uploadThing and will use that. we will use `useDropZone` and will use that in the fileUploader.ts 
* follow the video and copy the adrian's code of fileuploader and watch him explaing the code or do self learn. you will come with a FilePath import error. (https://stackoverflow.com/questions/77941451/module-uploadthing-react-has-no-exported-member-filewithpath) refer the following stackoverflow to fix the error.
* Next, we create form for the location and followed by StartDateTime and EndDateTime. For this, we will use react date picker package. This can be installed using `npm install react-datepicker --save`.
* By importing date picker, use the date picker in the form. Should also install the types since we are using typeScript. `npm i --save-dev @types/react-datepicker`.
Next, we move on to Price and Url form. Re writing the same form field and modifying the name this can be implemented.
* For the price field, there is a checkbox and to implement that, checkbox component from `shadcn` need to be installed. To install, the following command can be used `npx shadcn-ui@latest add checkbox`
* Implement a checkbox form and place the code inside the price form field.
* Then, reimplement an another form field to get the url of the event.
* Now, that we have all the forms, test it by selecting submit button to see if you can get all the form values in the console log. 
* Once, that is done, we can move to category form to add categories for the event.
* Let; get to the dropdown component and create the logic for adding the categories.
* In the action folder, create a new action file named `category.action.ts`. This will contain the logic to add category to the category dropdown. This is used to get all the categories and also to get individual categories.
* After creating the logic to add categories to database, the categories can be now added using the small alert dialog and it will stored in the db.
* Now, that we have all the values for the the event, let's pass that to the backend to submit in the Database. Let's work on the onSubmit function in the EventForm.
* The logic for the front end is done for creating an event in the above function. To connect with the backend, we need a create a function named `createEvent` in the `event.action.ts`.
* Once, the `createEvent` logic is added in the event.action.ts, we can try creating a event. Make sure you are logged in with the user. When you try to create a event, had an error stating user Id was undefined. Let's fix this.
* Since we use clerk for login, we have to customize the session in the clerk. Go to `clerk dashboard->sessions->edit->`. There we have to expose our user meta data that is like first name, last name.
* Then, we have to make sure we get the right user meta data (user id) in the create page. Once, that is been verified, the event form will now submit and will store the data in the Event collection in the DB.
* Upon successful submission, it will take the user back to the Events detail page, unfortunately it is not created which we will start now.
* In the events folder under `events->[id]`, we create a file named page.tsx, which will act as event details page.
* Go to the Event action which has functions related to Event actions like Create, get, edit. As of now only create was defined, let's define action for `getEventById` to get individual events by Id. This will connect to the database and will get that event where we have passed the event Id. Write a populate function to run a query to get the data based on the user, category and then id.
* Now, call the getEventById function in the EventDetailsPage to obtain the data. Once called, check in the console if the Event details are obtained.
* Once, obtained, start with the UI for the Event details page.
* Sometimes, next.js protects the app from rendering images from unknown sources. In order to fix this, the upload thing server must be added to `next.config.js` file. A reload is required in order to fix the next.js environment
* Once the Event Id page UI is done, move to home page and start working on  Collection component. mainly the collection component will show all the list of events available.
* Go to event action and create an another function named getAllEvents. Using this action get all the events and display in the Collection section.
* All the available events are displayed using  `Card` component (shared component). All the information regarding the Events and which organizer created the event, to which category the event is associated, everything are displayed.
* Additionally, some conditions are rendered in the Event card like, if it is free, they will be no amount displayed and will be shown free. If it has the same user logged in and event created the same user, then `Edit and Delete` button are shown, so that the User can Edit or Delete the Event.
* For `Edit` the create component UI is reused. The Event information are fetched and displayed in the form, making it easier for the user to modify the contents that they wish too.
* Once the Edit event is completed, we will move to make sure that the modified event is updated in the DB by writing the function for `Update` type. if the form type is `Update` and `onSubmit` function, the modified data are updated in the DB.