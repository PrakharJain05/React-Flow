# Getting Started with Flow

## Babel Configuration

### Install and add the following babel preset in package.json

`@babel/preset-flow` <br/>
`"babel": { "presets": [ "react-app", "@babel/preset-flow" ] },`

## Flow Installation

### Install flow using npm

`npm i flow-bin`

### Add the following script in package.json

`"flow": "flow"`

### Now run the following commands

`npm run flow init`<br/>
It will create a .flowconfig file in root directory.

`npm run flow`<br/>
It will start a continuos server which will watch files included in .flowconfig or files that start with //@flow. To stop the server simply use
`npm run flow stop`

Note: To write types in .js files in VS Code go to setting.json and add the following line `"javascript.validate.enable": false`

## Third Party Type definition

### Install flow-typed using npm

`npm i flow-typed`

### Add the following script in package.json

`"flow-typed": "flow-typed"`

### Add a third party type definition

`npm run flow-types install <package name>`
This will create a flow-typed directory and files will present in npm directory inside it.

Note: Move all the type definition files that are under npm directory to directly under flow-typed directory.
