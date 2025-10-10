export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio-processor.js","icon.svg","piz_compressed.exr","pwa-192x192.png","pwa-512x512.png"]),
	mimeTypes: {".js":"text/javascript",".svg":"image/svg+xml",".exr":"image/aces",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DW6Q4eHr.js",app:"_app/immutable/entry/app.Bty1YDt1.js",imports:["_app/immutable/entry/start.DW6Q4eHr.js","_app/immutable/chunks/CxoC7-um.js","_app/immutable/chunks/D63t2gaR.js","_app/immutable/chunks/PT1dyEdA.js","_app/immutable/entry/app.Bty1YDt1.js","_app/immutable/chunks/PT1dyEdA.js","_app/immutable/chunks/D63t2gaR.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/wVZxdE04.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
