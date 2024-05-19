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
    var corecte = parseInt(localStorage.getItem('corecte'));
    var gresite = parseInt(localStorage.getItem('gresite'));

    var corecteTot = 0;
    var gresiteTot = 0;

    if(!isNaN(localStorage.getItem('corecteTot')) && !isNaN(localStorage.getItem('gresiteTot')))
    {
        corecteTot = parseInt(localStorage.getItem('corecteTot'));
        gresiteTot = parseInt(localStorage.getItem('gresiteTot'));
        corecteTot += corecte;
        gresiteTot += gresite;
        localStorage.setItem('corecte', 0);
        localStorage.setItem('gresite', 0);
        localStorage.setItem('corecteTot', parseInt(corecteTot));
        localStorage.setItem('gresiteTot', parseInt(gresiteTot));
    }
    else
    {
        localStorage.setItem('corecteTot', parseInt(corecteTot));
        localStorage.setItem('gresiteTot', parseInt(gresiteTot));
    }

    onAuthStateChanged(auth, user => {
        if(user) 
        {   
            if(corecte > 0 && gresite > 0)
            {
                set(ref(db, 'users/' + user.uid + '/corecte'), {
                    corecte: parseInt(localStorage.getItem('corecteTot'))
                });
                set(ref(db, 'users/' + user.uid + '/gresite'), {
                    gresite: parseInt(localStorage.getItem('gresiteTot'))
                });
            }
        }
        else
        {
            localStorage.setItem('corecteTot', 0);
            localStorage.setItem('gresiteTot', 0);
        }
    });

    
    var xValues = [data[JSON.parse(localStorage.getItem('limba'))].corecte, data[JSON.parse(localStorage.getItem('limba'))].gresite];
    var yValues = [corecteTot, gresiteTot];
    var barColors = [
        "#06293d",
        "#9DBEBB"
    ];
    Chart.defaults.global.defaultFontColor = "#fff";
    
    var chart = new Chart("statistici", {
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
    var values = [data[JSON.parse(localStorage.getItem('limba'))].corecte, data[JSON.parse(localStorage.getItem('limba'))].gresite];
    chart.data.labels = values;
    chart.update();
}

