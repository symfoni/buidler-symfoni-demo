Our Contribution to the ETHOnline hackathon
=========================================

### We wish to improve the output of Buidler, and include Textile out of the box.

There are three Github repositories as part of our project. They are all part of the hackathon:

* buidler-symfoni-demo (this project)
* [buidler-react](https://github.com/symfoni/buidler-react)
* [buidler-plugins](https://github.com/symfoni/buidler-plugins)

![](https://ethglobal.s3.amazonaws.com/rec9bgGRjbJFSIGFF/MicrosoftTeams-image.png)

### Description

We wish to improve the output of Buidler, and include Textile. We combine Buidler, Buidler plugins and Textile. The developer includes their solidity code, and we generate an react app:

- pluggable react context with contract loading
- web3modal
- ethers v5
- typed interfaces (!)
- storage context with easy access to Textile

This is so that for application developers, get a good, typed starting point from their contracts. Also it gives them a way to store stuff outside of the blockchain e.g. to solve the GDPR challenges with personal data and blockchain. We also wish to include more storage options i.e. to handle accounts, groups, roles and encryption, and store and retrieve the data fra arbitrary destinations. This is so enterprises can store part of their data on premise.

### How It's Made

We're building an aggregated CLI accross Buidler, Buidler plugins and Textile. This is done in Typescript.

### Team

 [🇳🇴 Jon Ramvi](https://github.com/ramvi/),  [🇳🇴 Robin Pedersen](https://github.com/RobertoSnap),   🇩🇪 Hendrik Bilges

# Development 

This chapter is only relevant if you want to contribute to the project. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
