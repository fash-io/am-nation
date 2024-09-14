// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgcBn5hKY81IoeFsO5id5Cedy_n_TthSY",
  authDomain: "am-nation.firebaseapp.com",
  projectId: "am-nation",
  storageBucket: "am-nation.appspot.com",
  messagingSenderId: "873977042966",
  appId: "1:873977042966:web:8a134be07d5fe6e677fd37",
  measurementId: "G-3TF190SL8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const signup = async (name, email, password, type) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    const userDOcRef = doc(db, "users", user.uid);
    await setDoc(userDOcRef, {
      uid: user.uid,
      type: type,
      name,
      authProvider: "local",
      email,
    });
    window.location = "/";
  } catch (err) {
    handleAuthError(err);
  }
};

const handleAuthError = (err) => {
  switch (err.code) {
    case "auth/wrong-password":
      return "Incorrect password, please try again.";
    case "auth/user-not-found":
      return "No user found with this email.";
    default:
      return "An error occurred. Please try again later.";
  }
};

const login = async (email, password) => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;

    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const userType = userData.type;

      if (userType === "1") {
        console.log("Access granted for user type 1");
        window.location = "/type1-dashboard";
      } else if (userType === "2") {
        console.log("Access granted for user type 2");
        window.location = "/type2-dashboard";
      } else {
        throw new Error("Invalid user type");
      }
    } else {
      throw new Error("User document not found");
    }
  } catch (err) {
    console.error(err);
    handleAuthError(err);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    window.location = "/";
  } catch (err) {
    handleAuthError(err);
  }
};

const handleAddEvents = async (event) => {
  try {
    const eventsCollectionRef = collection(db, "events");
      await addDoc(eventsCollectionRef, {
        // id: event.aid,
        name: event.name,
        organizers: event.organizers,
        date: event.date,
        hero_img: event.hero_img,
        // top_img: event.top_img,
        // main_img: event.main_img,
        // imgSrc: event.imgSrc,
        // altText: event.altText,
        location: event.location_name,
        country: event.country,
        // rating: event.rating,
        curr: event.curr,
        // isActive: event.isActive,
        link_name: event.out_link,
        // tickets: event.tickets,
        artistId: event.artists_id,
        organizersId: event.organizerId,
      });
    console.log("Success");
  } catch (err) {
    console.error(err);
  }
};
export { auth, db, storage, signup, login, logout, handleAddEvents };
