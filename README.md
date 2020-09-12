# ePortfolio

### Overview
This ePortfolio system  is a web application which allows users to create their personal website or online portfolio by uploading photos and texts to demonstrate their basic information, the studying and working experience, their extracurricular activities and so on. After publishing the personal website, the user can share this website by sharing the link to this website or by exporting the pdf version of this website.


### Team members:

- Heitong Chan
- Jiashuai Yu
- Jielin Zheng
- Ouyang Hui
- Zhuolun Wu

### Functionalities description

#### Group 1: Authentication

- Log in to access web features to add and edit his hor her personal portfolio, share portfolio with someone else, etc
- Sign up allows user to register for an account which could be used to logged into the system
- Log out from frontend

#### Related files for functionality

| Functionality | View                            | Route                                                        | Controller                            | Model                   |
| ------------- | ------------------------------- | ------------------------------------------------------------ | ------------------------------------- | ----------------------- |
| Sign in       | client/src/pages/SignInPage.js  | client/src/api/userAPI.js<br />backend/routes/usersRouter.js | backend/controllers/usersContrller.js | backend/models/users.js |
| Signup        | client/src/pages/SignUpPage.js  | client/src/API/userAPI.js<br />backend/routers/usersRouter.js | backend/controllers/usersContrller.js | backend/models/users.js |
| Log out       | client/src/components/Navbar.js | client/src/API/userAPI.js<br />backend/routers/usersRouter.  | backend/controllers/usersContrller.js | backend/models/users.js |


### Install material-ui

```bash
cd client
npm install @material-ui/core
```

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

### Run unit tests

```bash
pip install -U selenium
cd test/unit
python runall.py
```

### Run integration tests

```bash
npm install -D mocha chai supertest sinon
npm test
```
