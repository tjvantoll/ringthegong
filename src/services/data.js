import firebase from "firebase";

export function getSaleInfo() {
  const db = firebase.firestore();
  return db
    .collection("wins")
    .doc(getSaleId())
    .get();
}

export function getSaleSnapshot(callback) {
  const db = firebase.firestore();
  return db
    .collection("wins")
    .doc(getSaleId())
    .onSnapshot(callback);
}

export function incrementCount(id) {
  const db = firebase.firestore();
  db
    .collection("wins")
    .doc(getSaleId())
    .update({
      count: firebase.firestore.FieldValue.increment(1)
    });
}

export function getSaleId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}
