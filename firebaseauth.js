// firebaseauth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// ✅ Your Firebase config — replace with your actual project credentials
const firebaseConfig = {
  apiKey: "AIzaSyDzfzvaquFokcKi80iBDJ2WvcSqi-rO2g0",
  authDomain: "hostel-login-a211d.firebaseapp.com",
  projectId: "hostel-login-a211d",
  storageBucket: "hostel-login-a211d.firebasestorage.app",
  messagingSenderId: "490570402263",
  appId: "1:490570402263:web:dadeed895488d1077c6392"
};

// 🔌 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Login Handler
document.getElementById("loginFormElement").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "student_login.html"; // or "tenant.html" depending on role
  } catch (error) {
    const loginMsg = document.getElementById("loginMessage");
    loginMsg.style.display = "block";
    loginMsg.textContent = error.message;
  }
});

// ✅ Sign Up Handler
document.getElementById("submitSignUp").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;
  const confirm = document.getElementById("ConfirmPassword").value;

  const signUpMsg = document.getElementById("signUpMessage");

  if (password !== confirm) {
    signUpMsg.style.display = "block";
    signUpMsg.textContent = "Passwords do not match.";
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    window.location.href = "student_login.html";
  } catch (error) {
    signUpMsg.style.display = "block";
    signUpMsg.textContent = error.message;
  }
});
