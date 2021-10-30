# react_data_flow
Understanding React Data Flow

Create a project folder named ‘react_data_flow’


cd ‘react_data_flow’

npm init


npm install react react-dom --save


npm install @babel/core @babel/preset-env @babel/preset-react --save-dev


Add following for babel property in package.json -

“babel”: { “presets”: [ “@babel/preset-env”, “@babel/preset-react” ] }


npm install webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin --save-dev


Create a file named ‘webpack.config.js’ and add required config to it


Add ‘execution and build’ commands to script property in package.json


Create ‘.gitignore’ file and add required files/folders

