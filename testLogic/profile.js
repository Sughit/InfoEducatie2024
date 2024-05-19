// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase, ref, set, get, child, update } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

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

if(window.location.pathname == "/index.html")
{
    var currCorecte;
    var currGresite;
    var corecte = localStorage.getItem('corecte');
    var gresite = localStorage.getItem('gresite');
    console.log(corecte);
    console.log(gresite);

    onAuthStateChanged(auth, user => {
        if(user) 
        {
            get(child(ref(db), 'users/' + user.uid))
            .then((snapshot) => {
                if(snapshot.exists())
                {
                    currCorecte = snapshot.val().corecte;
                    currGresite = snapshot.val().gresite;
                }
            })
            .catch((error) => {
                alert(error.message);
            });

            let totCorecte = corecte+currCorecte;
            let totGresite = gresite+currGresite; 

            //aici se seteaza datele
            update(ref(db, 'users/' + user.uid), {
                corecte: totCorecte,
                gresite: totGresite
            });
        }
    });
    
    var xValues = ['Corecte', 'Gresite'];
    var yValues = [corecte, gresite];
    var barColors = [
        "#06293d",
        "#9DBEBB"
    ];
    Chart.defaults.global.defaultFontColor = "#fff";
    
    new Chart("statistici", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            responsive: true,
            plugins: {
                dataLabels: {
                    font: {
                        color: "#000000",
                        size: 25
                    },
                    color: "#000000"
                },
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Rezultatele tale de la teste'
                },
            }
        }
    });
}

