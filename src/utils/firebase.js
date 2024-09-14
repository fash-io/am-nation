// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  getDocs, 
  where, 
  query,
  updateDoc
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your Firebase configuration
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

// Functions
const signup = async (name, email, password, type) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, {
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
        window.location = "/";
      } else if (userType === "2") {
        console.log("Access granted for user type 2");
        window.location = "/";
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
      name: event.name,
      organizers: event.organizers,
      date: event.date,
      hero_img: event.hero_img,
      top_img: event.top_img,
      main_img: event.main_img,
      location: event.location_name,
      country: event.country,
      curr: event.curr,
      link_name: event.out_link,
      artistId: event.artists_id,
      organizersId: event.organizerId,
    });
    console.log("Success");
  } catch (err) {
    console.error(err);
  }
};

const uploadImage = async (file) => {
  if (!file) return "";

  const storageRef = ref(storage, `images/${file.name}`);
  try {
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (err) {
    console.error("Error uploading image: ", err);
    throw new Error("Failed to upload image.");
  }
};

const getEventsByOrganizer = async (organizerId) => {
  try {
    console.log("Querying with organizerId:", organizerId); // Log organizerId
    const eventsRef = collection(db, "events");
    const q = query(eventsRef, where("organizersId", "==", organizerId));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return [];
    }

    const events = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log("Events found:", events);
    return events;
  } catch (err) {
    console.error("Error fetching events: ", err);
    return [];
  }
};

// Function to fetch an event by ID
export const getEventById = async (eventId) => {
  try {
    const eventRef = doc(db, 'events', eventId); // Reference to the event document
    const docSnap = await getDoc(eventRef); // Fetch the document
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }; // Return event data including the ID
    } else {
      throw new Error("No such event!");
    }
  } catch (error) {
    console.error("Error fetching event:", error);
    throw error;
  }
};

// Function to update an event
export const updateEvent = async (eventId, updatedData) => {
  try {
    const eventRef = doc(db, 'events', eventId); // Reference to the event document
    await updateDoc(eventRef, updatedData); // Update the document with new data
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
};

const changeUserAuthorization = async (user) => {
  try {
    const userDocRef = doc(db, "users", user.uid);
    await updateDoc(userDocRef, { type: 1 });
  } catch (error) {
    console.error("Error changing user authorization:", error);
    throw error;
  }
};

// Export all functions and objects
export { auth, db, storage, signup, login, logout, handleAddEvents, uploadImage, getEventsByOrganizer, changeUserAuthorization };
