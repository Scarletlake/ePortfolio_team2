# ePortfolio

### Overview
This ePortfolio system  is a web application which allows users to create their personal website or online portfolio by uploading photos and texts to demonstrate their basic information, the studying and working experience, their extracurricular activities and so on. After publishing the personal website, the user can share this website by sharing the link to this website or by exporting the pdf version of this website.

The personal website created by this application would have four pages: 
- one page showing the user's introduction; 
- one formal page showing the studying/working experience; 
- one page showing the leisure activities.
- one page showing the contact information of the user


### Team members:

- Heitong Chan
- Jiashuai Yu
- Jielin Zheng
- Ouyang Hui
- Zhuolun Wu


## Functionalities description

### Group 1: User Authentication

- Log in to access web features to add and edit his hor her personal portfolio, share portfolio with someone else, etc
- Sign up allows user to register for an account which could be used to logged into the system
- Log out from frontend


#### Related files for functionality

| Functionality | View                            | Route                                                        | Controller                            | Model                   |
| ------------- | ------------------------------- | ------------------------------------------------------------ | ------------------------------------- | ----------------------- |
| Sign in     | client/src/pages/SignInPage.js  | client/src/api/userAPI.js<br />backend/routes/usersRouter.js | backend/controllers/usersContrller.js| backend/models/User.js |
| Sign up     | client/src/pages/SignUpPage.js  | client/src/API/userAPI.js<br />backend/routers/usersRouter.js | backend/controllers/usersContrller.js|backend/models/User.js |
| Log out     | client/src/components/App/Navbar.js | client/src/API/userAPI.js<br />backend/routers/usersRouter.  | backend/controllers/usersContrller.js|backend/models/User.js |

### Group 2: Portfolio

- Access the portfolio by passing the id of the portfolio as params in url
- Create a new portfolio and reuse the information of user profile
- Update an exisiting portfolio and use the original data as default input
- Delete an existing portfolio in the home page


#### Related files for functionality

| Functionality | View                            | Route                                                        | Controller                            | Model                   |
| ------------- | ------------------------------- | ------------------------------------------------------------ | ------------------------------------- | ----------------------- |
| Get Portfolio | client/src/pages/PortfolioPage.js| client/src/api/portfolioAPI.js<br />backend/routes/portfoliosRouter.js | backend/controllers/portfoliosContrller.js| backend/models/Portfolio.js |
| Create Portfolio       | client/src/pages/PortfolioEditorPage.js  | client/src/API/portfolioAPI.js<br />backend/routers/portfoliosRouter.js | backend/controllers/portfoliosContrller.js | backend/models/Portfolio.js<br />backend/models/User.js|
| Update Portfolio      | client/src/pages/PortfolioEditorPage.js   | client/src/API/portfolioAPI.js<br />backend/routers/portfoliosRouter.js | backend/controllers/portfoliosContrller.js | backend/models/Portfolio.js <br />backend/models/User.js|
| Delete Portfolio      | client/src/pages/HomePage.js   | client/src/API/portfolioAPI.js<br />backend/routers/portfoliosRouter.js | backend/controllers/portfoliosContrller.js | backend/models/Portfolio.js<br />backend/models/User.js |

## Deployment
This app is deployed to Heroku. 

| Page          | Link                            | 
| ------------- | ------------------------------- |
| Landing Page     | https://pandaeportfolio.herokuapp.com  |
| SignIn Page     | https://pandaeportfolio.herokuapp.com/user/signin | 
| SignUp Page      |https://pandaeportfolio.herokuapp.com/user/signup |
| Home Page   |  https://pandaeportfolio.herokuapp.com/user/home  |
| Profile Page  | https://pandaeportfolio.herokuapp.com/user/profile |  
| Template Page |  https://pandaeportfolio.herokuapp.com/portfolio/template |

## Install dependencies

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Install material-ui

```bash
cd client
npm install @material-ui/core
```

### Install mocha

```bash
npm install -D mocha chai supertest sinon
```

### Run the integration tests

Before running the integration tests
- Install Mocha

```bash
npm test
```

### Install Selenium

```bash
pip install -U selenium
```

### Run the unit tests

Before running the unit tests
- Install Python
- Install Selenium
- Install ChromeDriver that matches the version of your Chrome

```bash
cd test/unit
python runall.py
```
