import firebase from "firebase";

export function getSaleInfo() {
  const db = firebase.firestore();
  return db
    .collection("wins")
    .doc(getSaleId())
    .get();
}

export function getGongWatcher(callback) {
  const db = firebase.firestore();
  return db
    .collection("wins")
    .doc(getSaleId())
    .collection("gongs")
    .onSnapshot(callback);
}

export function getSaleSnapshot(callback) {
  const db = firebase.firestore();
  return db
    .collection("wins")
    .doc(getSaleId())
    .onSnapshot(callback);
}

export function incrementCount() {
  const db = firebase.firestore();
  const doc = db
    .collection("wins")
    .doc(getSaleId());

  doc.update({
    count: firebase.firestore.FieldValue.increment(1)
  });

  /*
  doc.update({
    count: firebase.firestore.FieldValue.increment(1)
  }).then(() => {
    doc
    .collection("gongs")
    .doc()
    .set({
      name: "Whoever"
    });
  });
  */
}

export function getSaleId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}
