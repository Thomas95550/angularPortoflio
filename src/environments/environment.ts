// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Url DEV
  apiUrl: 'http://localhost:3000/api/',
  firebase: {
    apiKey: 'AIzaSyCOzkJpcxQJi-jv6jGmSAaoIvYM3WIYVZg',
    authDomain: 'portfolio-9097b.firebaseapp.com',
    databaseURL: 'https://portfolio-9097b.firebaseio.com',
    projectId: 'portfolio-9097b',
    storageBucket: 'portfolio-9097b.appspot.com',
    messagingSenderId: '758340012896'
  }
};
