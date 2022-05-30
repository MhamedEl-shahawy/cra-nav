const deps = require("./package.json").dependencies;

module.exports = {
  name: "nav",
  exposes: {
      "./Header": "./src/Header",
  },
  remotes: {
    store: "host@https://host-mfe.vercel.app/remoteEntry.js",
    
},
  filename: "remoteEntry.js",
  
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
      
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
    // react: { singleton: true, eager: true, requiredVersion: deps.react },
    // "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] }

  },
};