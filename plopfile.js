const plopProject = (plop) => {

	// This file is used by Plop; a tool that saves you time
	// and hel build new files and folders using templates.
	// The Templates are located in the plop-templates
	// folder. More information about plop can be seen at
	// https://github.com/William-Owen

	const componentRoot = "./src/components"
	const templateRoot = "plop-templates"

	plop.setHelper("createFileName", (s) => s.replace(/[^a-z0-9]/gi, "_").toLowerCase())

	plop.setGenerator("Component", {
		description: "A new react component",
		prompts: [

			{
				type: "input",
				name: "componentName",
				message: "Component name",
			},

		],
		actions: [

			{
				type: "add",
				path: `${componentRoot}/{{componentName}}/{{componentName}}.tsx`,
				templateFile: `${templateRoot}/component/componentName.tsx.hbs`,
			},
			{
				type: "add",
				path: `${componentRoot}/{{componentName}}/{{componentName}}.test.tsx`,
				templateFile: `${templateRoot}/component/componentName.test.tsx.hbs`,
			},
			{
				type: "add",
				path: `${componentRoot}/{{componentName}}/{{componentName}}.module.sass`,
				templateFile: `${templateRoot}/component/componentName.sass.hbs`,
			},
			{
				type: "add",
				path: `${componentRoot}/{{componentName}}/index.tsx`,
				templateFile: `${templateRoot}/component/index.tsx.hbs`,
			},

		],
	})

}

module.exports = plopProject
