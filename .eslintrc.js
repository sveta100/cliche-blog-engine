module.exports = {
	root: true,
	env: {
		// this section will be used to determine which APIs are available to us
		// (i.e are we running in a browser environment or a node.js env)
		node: true,
		browser: true,
		jest: true
	},
	parserOptions: {
		parser: "babel-eslint",
		// specifying a module sourcetype prevent eslint from marking import statements as errors
		sourceType: "module",
	},
	extends: [
		// use the recommended rule set for plain javascript and vue
		"airbnb-base",
		"plugin:vue/recommended",
		"plugin:jest/recommended",
	],
	rules: {
		indent: [2, "tab"],
		"no-tabs": 0,
		// we should always disable console logs and debugging in production
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
	},
};
