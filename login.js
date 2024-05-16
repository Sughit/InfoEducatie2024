// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApT-gHPS0DnfuV1n9BtstXScuPuNoBnrE",
  authDomain: "fizix-57ec5.firebaseapp.com",
  projectId: "fizix-57ec5",
  storageBucket: "fizix-57ec5.appspot.com",
  messagingSenderId: "443770625652",
  appId: "1:443770625652:web:5a88975649d8121ec8fb21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getDatabase(app);

var user;

if(window.location.pathname == "/login.html")
{
    const login = document.getElementById('login');
    login.addEventListener("click", function(event){
        event.preventDefault();
        
        var email = document.getElementById('emailLogInput').value;
        var password = document.getElementById('passwordLogInput').value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            user = userCredential.user;
            alert('Loggin in');
            window.location.href = "index.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
    });
}

if(window.location.pathname == "/index.html")
{
    var profileDiv = document.getElementById('profileDiv');
    var connectBtn = document.getElementById('connectBtn');
    var disconnectBtn = document.getElementById('disconnectBtn');

    var profileUsername = document.getElementById('profileUsername');
    onAuthStateChanged(auth, user => {
        if(user) 
        {
            profileDiv.style.display = "block";
            connectBtn.style.display = "none";

            get(child(ref(db), 'users/' + user.uid))
            .then((snapshot) => {
                if(snapshot.exists())
                {
                    profileUsername.textContent = JSON.stringify(snapshot.val().username).replace(/\"/g, "");
                }
            })
            .catch((error) => {
                alert(error.message);
            })
        }
        else 
        {
            profileDiv.style.display = "none";
            connectBtn.style.display = "block";
        }
    });
    disconnectBtn.addEventListener("click", function(event){
        event.preventDefault();

        signOut(auth)
        .then(() => {
            alert('Signed out');
        })
        .catch(error => {
            alert(error.message);
        })
    });
};

function validate_email(email)
{

}

function validate_password(password)
{

}

function validate_fields(field)
{

}