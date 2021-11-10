const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");
const antdVariables = require("./src/styles/antd");

module.exports = {
	style: {
		postcss: {
			plugins: [require("tailwindcss"), require("autoprefixer")],
		},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: antdVariables,
						javascriptEnabled: true,
					},
				},
			},
		},
		{
			plugin: CracoAlias,
			options: {
				source: "tsconfig",
				// baseUrl SHOULD be specified
				// plugin does not take it from tsconfig
				baseUrl: "./src",
				/* tsConfigPath should point to the file where "baseUrl" and "paths" 
				 are specified*/
				tsConfigPath: "./tsconfig.paths.json",
			},
		},
	],
};
