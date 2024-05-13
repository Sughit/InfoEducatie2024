const lagnEl = document.getElementById('langWrap');
const btns = document.querySelectorAll('#btn-lang');


//variabile din mecanica.html


btns.forEach(el => {
    el.addEventListener('click', () => {
        // lagnEl.querySelector('.active-lang-btn').classList.remove('active-lang-btn');
        // el.classList.add('active-lang-btn');

        //asta contine limbi curenta
        const attribute = el.getAttribute('language');
        localStorage.setItem('limba', JSON.stringify(attribute));

        loadLanguages(JSON.parse(localStorage.getItem('limba')));
    });
});

function loadLanguages(attr)
{
    //variabile din index.html
    const titleSet = document.getElementById('titleSet');
    const titleLogin = document.getElementById('titleLogin');
    const titleLang = document.getElementById('titleLang');
    const titleMec = document.getElementById('titleMec');
    const titleTer = document.getElementById('titleTer');
    const titleElec = document.getElementById('titleElec');
    const titleOp = document.getElementById('titleOp');

    //variabile din register.html
    const goBackReg = document.getElementById('goBackReg');
    const titleReg = document.getElementById('titleReg');
    var placeHolderEmailReg = document.getElementById('emailReg');
    var placeHolderPasswordReg = document.getElementById('passwordReg');
    const register = document.getElementById('register');
    const footerReg = document.getElementById('footerReg');
    const footerRegBtn = document.getElementById('footerRegBtn');

    //variabile din login.html
    const goBackLog = document.getElementById('goBackLog');
    const titleLog = document.getElementById('titleLog');
    const placeHolderEmailLog = document.getElementById('emailLog');
    const placeHolderPasswordLog = document.getElementById('passwordLog');
    const login = document.getElementById('login');
    const footerLog = document.getElementById('footerLog');
    const footerLogBtn = document.getElementById('footerLogBtn');

    //variabile din mecanica.html
    const mecanicaTitle = document.getElementById('mecanicaTitle');
    const principiiTitle = document.getElementById('principiiTitle');
    const teoremeTitle = document.getElementById('teoremeTitle');
    const principiiRez = document.getElementById('principiiRez');
    const teoremeRez = document.getElementById('teoremeRez');

    const invataTitle = document.querySelectorAll('#invataTitle');
    const inchideBtn = document.querySelectorAll('#inchideBtn');
    const teorieBtn = document.querySelectorAll('#teorieBtn');
    const testBtn = document.querySelectorAll('#testBtn');
    const acasaBtn = document.getElementById('acasaBtn');

    //index.html
    if(window.location.pathname == "/index.html")
    {
        titleSet.textContent = data[attr].titleSet;
        titleLogin.textContent = data[attr].titleLogin;
        titleLang.textContent = data[attr].titleLang;
        titleMec.textContent = data[attr].titleMec;
        titleTer.textContent = data[attr].titleTer;
        titleElec.textContent = data[attr].titleElec;
        titleOp.textContent = data[attr].titleOp;
    }

    //register.html
    if(window.location.pathname == "/register.html")
    {
        goBackReg.textContent = data[attr].goBackReg;
        titleReg.textContent = data[attr].titleReg;
        placeHolderEmailReg.placeholder.textContent = data[attr].emailReg;
        placeHolderPasswordReg.placeholder.textContent = data[attr].passwordReg;
        register.textContent = data[attr].register;
        footerReg.textContent = data[attr].footerReg;
        footerRegBtn.textContent = data[attr].footerRegBtn;
    }

    //login.html
    if(window.location.pathname == "/login.html")
    {
        goBackLog.textContent = data[attr].goBackLog
        titleLog.textContent = data[attr].titleLog
        placeHolderEmailLog.placeholder.textContent = data[attr].emailLog;
        placeHolderPasswordLog.placeholder.textContent = data[attr].passwordLog;
        login.textContent = data[attr].login;
        footerLog.textContent = data[attr].footerLog;
        footerLogBtn.textContent = data[attr].footerLogBtn;
    }

    //macanica.html
    if(window.location.pathname == "/mecanica.html")
    {
        mecanicaTitle.textContent = data[attr].mecanicaTitle;
        principiiTitle.textContent = data[attr].principiiTitle;
        teoremeTitle.textContent = data[attr].teoremeTitle;
        principiiRez.innerHTML = data[attr].principiiRez;
        teoremeRez.innerHTML = data[attr].teoremeRez;
        invataTitle.forEach(el => {
            el.textContent = data[attr].invataTitle;
        });
        inchideBtn.forEach(el => {
            el.textContent = data[attr].inchideBtn;
        });
        teorieBtn.forEach(el => {
            el.textContent = data[attr].teorieBtn;
        });
        testBtn.forEach(el => {
            el.textContent = data[attr].testBtn;
        });
        acasaBtn.textContent = data[attr].acasaBtn;
    }
}

var data = {
    "engleza":
    {
        "titleSet": "Settings",
        "titleLogin": "Log in",
        "titleLang": "Languages",
        "titleMec": "Mechanics",
        "titleTer": "Thermodynamics",
        "titleElec": "Electromechanics",
        "titleOp": "Optics",

        "goBackReg": "go back",
        "titleReg": "Enter your registration credentials",
        "emailReg": "Enter your email",
        "passwordReg": "Enter your password",
        "register": "Register account",
        "footerReg": "Already have an account?",
        "footerRegBtn": "Log in",

        "goBackLog": "go back",
        "titleLog": "Enter your login credentials",
        "emailLog": "Enter your email",
        "passwordLog": "Enter your password",
        "login": "Log in",
        "footerLog": "Not registered?",
        "footerLogBtn": "Create an account",

        "mecanicaTitle": "Mechanics",
        "principiiTitle": "Principles and laws",
        "teoremeTitle": "Variation theorems and conservation laws",
        "principiiRez": ('<li>'+'Movement and rest'+'</li>'+
                         '<li>'+'First principle of mechanics'+'</li>'+
                         '<li>'+'Second principle of mechanics'+'</li>'+
                         '<li>'+'The third principle of mechanics'+'</li>'+
                         '<li>'+'Hooke\'s law and tension in the wire'+'</li>'+
                         '<li>'+'The laws of sliding friction'+'</li>'),
        "teoremeRez": ('<li>'+'Mechanical work and mechanical power'+'</li>'+
                        '<li>'+'Kinetic energy variation theorem'+'</li>'+
                        '<li>'+'Gravitational potential energy'+'</li>'+
                        '<li>'+'The law of conservation of mechanical energy'+'</li>'+
                        '<li>'+'The momentum variation theorem'+'</li>'+
                        '<li>'+'Law of conservation of momentum'+'</li>'),

        "invataTitle": "In this part of the chapter you will learn concepts such as:",
        "inchideBtn": "Close",
        "teorieBtn": "Theory",
        "testBtn": "Start a test",
        "acasaBtn": "Home",
    },
    "romana":
    {
        "titleSet": "Setări",
        "titleLogin": "Conectează-te",
        "titleLang": "Limbi",
        "titleMec": "Mecanică",
        "titleTer": "Termodinamică",
        "titleElec": "Electromecanică",
        "titleOp": "Optică",

        "goBackReg": "înapoit",
        "titleReg": "Introduceți acreditările dvs. de înregistrare",
        "emailReg": "Introduceți adresa dvs. de email",
        "passwordReg": "Introduceți parola",
        "register": "Înregistrează-te",
        "footerReg": "Deja aveți un cont?",
        "footerRegBtn": "Conectați-vă",

        "goBackLog": "înapoi",
        "titleLog": "Introduceți datele dvs. de conectare",
        "emailLog": "Introduceți adresa dvs. de email",
        "passwordLog": "Introduceți parola",
        "login": "Autentifică-te",
        "footerLog": "Nu sunteți înregistrat?",
        "footerLogBtn": "Creați un cont",

        "mecanicaTitle": "Mecanică",
        "principiiTitle": "Principii și legi",
        "teoremeTitle": "Teoreme de variație și legi de conservare",
        "principiiRez": ('<li>'+'Mișcare și repaus'+'</li>'+
                         '<li>'+'Principiul I al mecanicii'+'</li>'+
                         '<li>'+'Principiul al II-lea al mecanicii'+'</li>'+
                         '<li>'+'Principiul al III-lea al mecanicii'+'</li>'+
                         '<li>'+'Legea lui Hooke și tensiunea în fir'+'</li>'+
                         '<li>'+'Legile frecării la alunecare'+'</li>'),
        "teoremeRez": ('<li>'+'Lucrul mecanic și puterea mecanică'+'</li>'+
                        '<li>'+'Teorema variației energiei cinetice'+'</li>'+
                        '<li>'+'Energia potențială gravitațională'+'</li>'+
                        '<li>'+'Legea conservării energiei mecanice'+'</li>'+
                        '<li>'+'Teorema variației impulsului'+'</li>'+
                        '<li>'+'Legea conservării impulsului'+'</li>'),

        "invataTitle": "În această parte a capitolului vei învăța noțiuni precum:",
        "inchideBtn": "Închide",
        "teorieBtn": "Teorie",
        "testBtn": "Începe un test",
        "acasaBtn": "Acasă",
    },
    "maghiara":
    {
        "titleSet": "Beállítások",
        "titleLogin": "Bejelentkezés",
        "titleLang": "Nyelvek",
        "titleMec": "Mechanika",
        "titleTer": "Termodinamika",
        "titleElec": "Elektromechanikai",
        "titleOp": "Optikai",

        "goBackReg": "vissza",
        "titleReg": "Adja meg regisztrációs hitelesítő adatait",
        "emailReg": "Írd be az email címed",
        "passwordReg": "Írja be a jelszót",
        "register": "Regisztrálj",
        "footerReg": "Már van fiókja?",
        "footerRegBtn": "Bejelentkezés",

        "goBackLog": "vissza",
        "titleLog": "Adja meg bejelentkezési adatait",
        "emailLog": "Írd be az email címed",
        "passwordLog": "Írja be a jelszót",
        "login": "Bejelentkezés",
        "footerLog": "Nem regisztrált?",
        "footerLogBtn": "Hozzon létre egy fiókot",

        "mecanicaTitle": "Mechanika",
        "principiiTitle": "Elvek és törvények",
        "teoremeTitle": "Variációs tételek és megmaradási törvények",
        "principiiRez": ('<li>'+'Mozgás és pihenés'+'</li>'+
                         '<li>'+'A mechanika első elve'+'</li>'+
                         '<li>'+'A mechanika második elve'+'</li>'+
                         '<li>'+'A mechanika harmadik alapelve'+'</li>'+
                         '<li>'+'Hooke törvénye és a vezeték feszültsége'+'</li>'+
                         '<li>'+'A csúszósúrlódás törvényei'+'</li>'),
        "teoremeRez": ('<li>'+'Mechanikai munka és mechanikai teljesítmény'+'</li>'+
                        '<li>'+'A mozgási energia változásának tétele'+'</li>'+
                        '<li>'+'Gravitációs potenciális energia'+'</li>'+
                        '<li>'+'A mechanikai energia megmaradásának törvénye'+'</li>'+
                        '<li>'+'Az impulzusváltozás tétele'+'</li>'+
                        '<li>'+'A lendület megmaradásának törvénye'+'</li>'),

        "invataTitle": "A fejezet ezen részében olyan fogalmakat fogsz megtanulni, mint például:",
        "inchideBtn": "Rakd le",
        "teorieBtn": "Elmélet",
        "testBtn": "Kezdj el egy tesztet",
        "acasaBtn": "Az otthon",
    },
    "germana":
    {
        "titleSet": "Einstellungen",
        "titleLogin": "Anmelden",
        "titleLang": "Fremdsprachen",
        "titleMec": "Mechanik",
        "titleTer": "Thermodynamik",
        "titleElec": "Elektromechanisch",
        "titleOp": "Optisch",

        "goBackReg": "zurück",
        "titleReg": "Geben Sie Ihre Anmeldedaten ein",
        "emailReg": "Geben sie ihre E-Mailadresse ein",
        "passwordReg": "Geben Sie das Passwort ein",
        "register": "Melden Sie sich an",
        "footerReg": "Sie haben bereits ein Konto?",
        "footerRegBtn": "Anmelden",

        "goBackLog": "zurück",
        "titleLog": "Geben Sie Ihre Anmeldedaten ein",
        "emailLog": "Geben sie ihre E-Mailadresse ein",
        "passwordLog": "Geben Sie das Passwort ein",
        "login": "Anmelden",
        "footerLog": "Nicht registriert?",
        "footerLogBtn": "Ein Konto erstellen",

        "mecanicaTitle": "Mechanik",
        "principiiTitle": "Prinzipien und Gesetze",
        "teoremeTitle": "Variationssätze und Erhaltungssätze",
        "principiiRez": ('<li>'+'Bewegung und Ruhe'+'</li>'+
                         '<li>'+'Erstes Prinzip der Mechanik'+'</li>'+
                         '<li>'+'Zweites Prinzip der Mechanik'+'</li>'+
                         '<li>'+'Das dritte Prinzip der Mechanik'+'</li>'+
                         '<li>'+'Hookesches Gesetz und Spannung im Draht'+'</li>'+
                         '<li>'+'Die Gesetze der Gleitreibung'+'</li>'),
        "teoremeRez": ('<li>'+'Mechanische Arbeit und mechanische Kraft'+'</li>'+
                        '<li>'+'Satz der Variation der kinetischen Energie'+'</li>'+
                        '<li>'+'Gravitationspotentialenergie'+'</li>'+
                        '<li>'+'Das Gesetz der Erhaltung der mechanischen Energie'+'</li>'+
                        '<li>'+'Der Impulsvariationssatz'+'</li>'+
                        '<li>'+'Gesetz der Impulserhaltung'+'</li>'),

        "invataTitle": "In diesem Teil des Kapitels lernen Sie Konzepte kennen wie:",
        "inchideBtn": "Auflegen",
        "teorieBtn": "Theorie",
        "testBtn": "Starten Sie einen Test",
        "acasaBtn": "Das Zuhause",
    },
    "franceza":
    {
        "titleSet": "Paramètres",
        "titleLogin": "Se connecter",
        "titleLang": "Langues",
        "titleMec": "Mécanique",
        "titleTer": "Thermodynamique",
        "titleElec": "Électromécanique",
        "titleOp": "Optique",

        "goBackReg": "dos",
        "titleReg": "Entrez vos identifiants d'inscription",
        "emailReg": "Entrez votre adresse email",
        "passwordReg": "Entrer le mot de passe",
        "register": "S'inscrire",
        "footerReg": "Vous avez déjà un compte?",
        "footerRegBtn": "Se connecter",

        "goBackLog": "dos",
        "titleLog": "Entrez vos informations de connexion",
        "emailLog": "Entrez votre adresse email",
        "passwordLog": "Entrer le mot de passe",
        "login": "Se connecter",
        "footerLog": "Non enregistré?",
        "footerLogBtn": "Créer un compte",

        "mecanicaTitle": "Mécanique",
        "principiiTitle": "Principes et lois",
        "teoremeTitle": "Théorèmes de variation et lois de conservation",
        "principiiRez": ('<li>'+'Mouvement et repos'+'</li>'+
                         '<li>'+'Premier principe de la mécanique'+'</li>'+
                         '<li>'+'Deuxième principe de la mécanique'+'</li>'+
                         '<li>'+'Le troisième principe de la mécanique'+'</li>'+
                         '<li>'+'Loi de Hooke et tension dans le fil'+'</li>'+
                         '<li>'+'Les lois du frottement par glissement'+'</li>'),
        "teoremeRez": ('<li>'+'Travail mécanique et puissance mécanique'+'</li>'+
                        '<li>'+'Théorème de variation de l\'énergie cinétique'+'</li>'+
                        '<li>'+'Énergie potentielle gravitationnelle'+'</li>'+
                        '<li>'+'La loi de conservation de l\'énergie mécanique'+'</li>'+
                        '<li>'+'Le théorème de variation de quantité de mouvement'+'</li>'+
                        '<li>'+'Loi de conservation de la quantité de mouvement'+'</li>'),

        "invataTitle": "Dans cette partie du chapitre, vous apprendrez des concepts tels que :",
        "inchideBtn": "Raccrocher",
        "teorieBtn": "Théorie",
        "testBtn": "Démarrer un test",
        "acasaBtn": "Á la maison",
    },
    "rusa":
    {
        "titleSet": "Настройки",
        "titleLogin": "Bойти",
        "titleLang": "Конечность",
        "titleMec": "Механика",
        "titleTer": "Термодинамика",
        "titleElec": "Электромеханический",
        "titleOp": "Оптический",

        "goBackReg": "Hазад",
        "titleReg": "",
        "emailReg": "Введите ваш адрес электронной почты",
        "passwordReg": "Введите пароль",
        "register": "Зарегистрироваться",
        "footerReg": "У вас уже есть аккаунт?",
        "footerRegBtn": "Войти",

        "goBackLog": "Hазад",
        "titleLog": "Введите данные для входа",
        "emailLog": "Введите ваш адрес электронной почты",
        "passwordLog": "Введите пароль",
        "login": "Авторизоваться",
        "footerLog": "Не зарегистрирован?",
        "footerLogBtn": "Завести аккаунт",

        "mecanicaTitle": "Механика",
        "principiiTitle": "Принципы и законы",
        "teoremeTitle": "Вариационные теоремы и законы сохранения",
        "principiiRez": ('<li>'+'Движение и отдых'+'</li>'+
                         '<li>'+'Первый принцип механики'+'</li>'+
                         '<li>'+'Второй принцип механики'+'</li>'+
                         '<li>'+'Третий принцип механики'+'</li>'+
                         '<li>'+'Закон Гука и натяжение проволоки.'+'</li>'+
                         '<li>'+'Законы трения скольжения'+'</li>'),
        "teoremeRez": ('<li>'+'Механическая работа и механическая мощность'+'</li>'+
                        '<li>'+'Теорема об изменении кинетической энергии'+'</li>'+
                        '<li>'+'Гравитационно потенциальная энергия'+'</li>'+
                        '<li>'+'Закон сохранения механической энергии'+'</li>'+
                        '<li>'+'Теорема об изменении импульса'+'</li>'+
                        '<li>'+'Закон сохранения импульса'+'</li>'),

        "invataTitle": "В этой части главы вы познакомитесь с такими понятиями, как:",
        "inchideBtn": "Вешать трубку",
        "teorieBtn": "Теория",
        "testBtn": "Начать тест",
        "acasaBtn": "Дом",
    }
}

window.onload = function()
{
    loadLanguages(JSON.parse(localStorage.getItem('limba')));
}