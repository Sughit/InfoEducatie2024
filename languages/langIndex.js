const lagnEl = document.getElementById('langWrap');
const btns = document.querySelectorAll('#btn-lang');

//variabile din index.html
const titleSet = document.getElementById('titleSet');
const titleLogin = document.getElementById('titleLogin');
const titleLang = document.getElementById('titleLang');
const titleMec = document.getElementById('titleMec');
const titleTer = document.getElementById('titleTer');
const titleElec = document.getElementById('titleElec');
const titleOp = document.getElementById('titleOp');

//variabile din mecanica.html


btns.forEach(el => {
    el.addEventListener('click', () => {
        // lagnEl.querySelector('.active-lang-btn').classList.remove('active-lang-btn');
        // el.classList.add('active-lang-btn');

        //asta contine limbi curenta
        const attr = el.getAttribute('language');

        titleSet.textContent = data[attr].titleSet;
        titleLogin.textContent = data[attr].titleLogin;
        titleLang.textContent = data[attr].titleLang;
        titleMec.textContent = data[attr].titleMec;
        titleTer.textContent = data[attr].titleTer;
        titleElec.textContent = data[attr].titleElec;
        titleOp.textContent = data[attr].titleOp;
    });
});

var data = {
    "engleza":
    {
        "titleSet": "Settings",
        "titleLogin": "Login",
        "titleLang": "Languages",
        "titleMec": "Mechanics",
        "titleTer": "Thermodynamics",
        "titleElec": "Electromechanics",
        "titleOp": "Optics"
    },
    "romana":
    {
        "titleSet": "Setări",
        "titleLogin": "Conectează-te",
        "titleLang": "Limbi",
        "titleMec": "Mecanică",
        "titleTer": "Termodinamică",
        "titleElec": "Electromecanică",
        "titleOp": "Optică"
    },
    "maghiara":
    {
        "titleSet": "Beállítások",
        "titleLogin": "Bejelentkezés",
        "titleLang": "Nyelvek",
        "titleMec": "Mechanika",
        "titleTer": "Termodinamika",
        "titleElec": "Elektromechanikai",
        "titleOp": "Optikai"
    },
    "germana":
    {
        "titleSet": "Einstellungen",
        "titleLogin": "Anmelden",
        "titleLang": "Fremdsprachen",
        "titleMec": "Mechanik",
        "titleTer": "Thermodynamik",
        "titleElec": "Elektromechanisch",
        "titleOp": "Optisch"
    },
    "franceza":
    {
        "titleSet": "Paramètres",
        "titleLogin": "Se connecter",
        "titleLang": "Langues",
        "titleMec": "Mécanique",
        "titleTer": "Thermodynamique",
        "titleElec": "Électromécanique",
        "titleOp": "Optique"
    },
    "rusa":
    {
        "titleSet": "Настройки",
        "titleLogin": "Bойти",
        "titleLang": "Конечность",
        "titleMec": "Механика",
        "titleTer": "Термодинамика",
        "titleElec": "Электромеханический",
        "titleOp": "Оптический"
    }
}