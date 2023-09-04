import { initializeApp } from "firebase/app";
import "firebase/firestore";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { subYears } from "date-fns";

const firebaseConfig = {
  apiKey: "AIzaSyA3g_AgTxtRSS3qjxpC_-iahGYI0KIyiDM",
  authDomain: "nxbostore.firebaseapp.com",
  projectId: "nxbostore",
  storageBucket: "nxbostore.appspot.com",
  messagingSenderId: "718443366114",
  appId: "1:718443366114:web:15d6695b7aeaed8042c0bb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts() {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);
  const products = snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
  return products;
}

export async function getLatestReleases() {
  const oneYearAgo = subYears(new Date(), 1);

  const productsRef = collection(db, "products");
  const q = query(
    productsRef,
    where("date", ">=", oneYearAgo),
    orderBy("date", "desc")
  );

  const snapshot = await getDocs(q);
  const products = snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
  return products;
}

export async function getLastAvailable() {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("stock", "<", 10));
  const snapshot = await getDocs(q);
  const products = snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
  return products;
}

export async function getDiscountedProducts() {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("discount", ">", 0));
  const snapshot = await getDocs(q);
  const products = snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
  return products;
}

export default db;