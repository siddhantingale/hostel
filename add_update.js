// Step 1: Import Firebase Functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Step 2: Firebase Configuration (Replace with your project details)
const firebaseConfig = {
  apiKey: "AIzaSyA4x_Zv_6AFS7itw920mkkWQsqu_IEE-24",
  authDomain: "hostel-update.firebaseapp.com",
  projectId: "hostel-update",
  storageBucket: "hostel-update.firebasestorage.app",
  messagingSenderId: "240631144802",
  appId: "1:240631144802:web:9c0cce69be5df8f5330c3b"
};

// Step 3: Initialize Firebase App and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Step 4: Form Submission Listener
const updateForm = document.getElementById("updateForm");
updateForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent page reload

  // Step 5: Get Input Values
  const title = document.getElementById("updateTitle").value;
  const description = document.getElementById("updateDescription").value;
  const timestamp = Date.now(); // Current time in milliseconds

  try {
    // Step 6: Add Document to Firestore
    await setDoc(doc(db, "updates", `update_${timestamp}`), {
      title,
      description,
      timestamp
    });

    alert("Update added successfully!"); // Feedback to user
    updateForm.reset(); // Clear the form after submission
  } catch (error) {
    console.error("Error adding update: ", error);
    alert("Failed to add update. Please try again.");
  }
});
