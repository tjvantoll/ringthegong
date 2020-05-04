const functions = require("firebase-functions");
const admin = require("firebase-admin");
// const serviceAccount = require("./admin.json");

admin.initializeApp();
/*
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ringthegong-6053d.firebaseio.com"
});
*/

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.ring = functions.https.onRequest((request, response) => {
  const win = db
  .collection("wins")
  .doc("2");

  function handleError(err) {
    console.error(err);
    response.send("Error!");
  }

  win
  .get()
  .then(doc => {
    var count = parseInt(doc.data().count, 10);
    count = (count + 1).toString();
    return win.update({
      count: count
    }).then(() => {
      return response.send("Success");
    }).catch(handleError);
  })
  .catch(handleError);
});
