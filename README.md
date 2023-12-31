# webpack-proj-template

Webpack
Step 1: Set up a new project Create a new directory for your project and navigate to it in your terminal.
mkdir my-webpack-project
cd my-webpack-project

Step 2: Initialize the project Initialize a new Node.js project by running the following command and following the prompts:
npm init
This will create a package.json file in your project directory to manage your project dependencies.

Step 3: Install Webpack To install Webpack, run the following command:
npm install webpack webpack-cli --save-dev
This will install Webpack and its command-line interface (CLI) as dev dependencies in your project.

Step 4: Create a basic configuration file named webpack.config.js in your project directory. This file will contain the configuration for Webpack.
code webpack.config.js

This configuration sets the entry point of your application (./src/app.js) and the output file (bundle.js) in the dist directory.

Step 5: Create a sample JavaScript file Create a new directory named src in your project directory, and inside it, create a file named app.js. This will be your main JavaScript file.
code src/app.js

Step 6: Build your project To build your project using Webpack, you can run the following command:
npx webpack
This command will bundle your code based on the configuration in webpack.config.js and create a bundle.js file in the dist directory.

Step 7: Test your build You can now test your build by opening the index.html file in your browser and checking the console. Make sure you have an index.html file that includes the bundle.js file.
Congratulations! You have successfully installed and set up Webpack for your project.
Note: This is a basic setup to get you started with Webpack. As your project grows, you may need to configure additional loaders, plugins, or other features provided by Webpack to handle different file types and optimize your build process.