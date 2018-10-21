const functions = require('firebase-functions');
const admin = require('firebase-admin');
// const AuthModule = require('./AuthModule');
// const FirestoreSheetsSync = require('./FirestoreSheetsSync');

const serviceAccount = require('./credentials/uOweMe-firebase-adminsdk-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://uoweme-hacktx.firebaseio.com'
});

// admin.initializeApp(functions.config().firebase);

// exports.assignUserRole = AuthModule.assignUserRole(functions, admin);
// exports.changeUserRole = AuthModule.changeUserRole(functions, admin);
// exports.appendUserToSheets = FirestoreSheetsSync.appendUserToSheets(functions);
