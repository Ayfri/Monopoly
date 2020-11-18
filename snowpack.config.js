module.exports = {
	mount:          {
		public: '/',
		src:    '/dist',
	},
	plugins:        ['@snowpack/plugin-typescript'],
	install:        [
		'pixi.js'
	],
	installOptions: {
		installTypes: true,
	},
	devOptions:     {
	
	},
	buildOptions:   {
	
	}
};
