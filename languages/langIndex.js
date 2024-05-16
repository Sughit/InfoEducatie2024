const lagnEl = document.getElementById('langWrap');
const btns = document.querySelectorAll('#btn-lang');

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
    const titleDisconnect = document.getElementById('titleDisconnect');
    const titleLang = document.getElementById('titleLang');
    const titleMec = document.getElementById('titleMec');
    const titleTer = document.getElementById('titleTer');
    const titleElec = document.getElementById('titleElec');
    const titleOp = document.getElementById('titleOp');

    //variabile din register.html
    const goBackReg = document.getElementById('goBackReg');
    const titleReg = document.getElementById('titleReg');
    const usernameReg = document.getElementById('usernameReg');
    const emailReg = document.getElementById('emailReg');
    const passwordReg = document.getElementById('passwordReg');
    const register = document.getElementById('register');
    const footerReg = document.getElementById('footerReg');
    const footerRegBtn = document.getElementById('footerRegBtn');

    //variabile din login.html
    const goBackLog = document.getElementById('goBackLog');
    const titleLog = document.getElementById('titleLog');
    const emailLog = document.getElementById('emailLog');
    const passwordLog = document.getElementById('passwordLog');
    const login = document.getElementById('login');
    const footerLog = document.getElementById('footerLog');
    const footerLogBtn = document.getElementById('footerLogBtn');

    //variabile din mecanica.html
    const mecanicaTitle = document.getElementById('mecanicaTitle');
    const principiiTitle = document.getElementById('principiiTitle');
    const teoremeTitle = document.getElementById('teoremeTitle');
    const principiiTitleModal = document.getElementById('principiiTitleModal');
    const teoremeTitleModal = document.getElementById('teoremeTitleModal');
    const principiiRez = document.getElementById('principiiRez');
    const teoremeRez = document.getElementById('teoremeRez');

    //variabile din termodinamica.html
    const termodinamicaTitle = document.getElementById('termodinamicaTitle');
    const notiuniTitle = document.getElementById('notiuniTitle');
    const principiuITitle = document.getElementById('principiuITitle');
    const motoareTitle = document.getElementById('motoareTitle');
    const principiuIITitle = document.getElementById('principiuIITitle');
    const notiuniTitleModal = document.getElementById('notiuniTitleModal');
    const principiuITitleModal = document.getElementById('principiuITitleModal');
    const motoareTitleModal = document.getElementById('motoareTitleModal');
    const principiuIITitleModal = document.getElementById('principiuIITitleModal'); 
    const notiuniRez = document.getElementById('notiuniRez');
    const principiuIRez = document.getElementById('principiuIRez');
    const motoareRez = document.getElementById('motoareRez');
    const principiuIIRez = document.getElementById('principiuIIRez');

    //variabile din electromecanica.html
    const electromecanicaTitle = document.getElementById('electromecanicaTitle');
    const curentulTitle = document.getElementById('curentulTitle');
    const ohmTitle = document.getElementById('ohmTitle');
    const kirchhoffTitle = document.getElementById('kirchhoffTitle');
    const grupareTitle = document.getElementById('grupareTitle');
    const energieTitle = document.getElementById('energieTitle');
    const curentulTitleModal = document.getElementById('curentulTitleModal');
    const ohmTitleModal = document.getElementById('ohmTitleModal');
    const kirchhoffTitleModal = document.getElementById('kirchhoffTitleModal');
    const grupareTitleModal = document.getElementById('grupareTitleModal');
    const energieTitleModal = document.getElementById('energieTitleModal');
    const curentulRez = document.getElementById('curentulRez');
    const ohmRez = document.getElementById('ohmRez');
    const kirchhoffRez = document.getElementById('kirchhoffRez');
    const grupareRez = document.getElementById('grupareRez');
    const energieRez = document.getElementById('energieRez');

    //variabile din optica.html
    const opticaTitle = document.getElementById('opticaTitle');
    const geometricaTitle = document.getElementById('geometricaTitle');
    const ondulatorieTitle = document.getElementById('ondulatorieTitle');
    const cuanticaTitle = document.getElementById('cuanticaTitle');
    const geometricaTitleModal = document.getElementById('geometricaTitleModal');
    const ondulatorieTitleModal = document.getElementById('ondulatorieTitleModal');
    const cuanticaTitleModal = document.getElementById('cuanticaTitleModal');
    const geometricaRez = document.getElementById('geometricaRez');
    const ondulatorieRez = document.getElementById('ondulatorieRez');
    const cuanticaRez = document.getElementById('cuanticaRez');

    //variabile din teorieMecanica.html
    const teorieMecanicaTitle = document.getElementById('teorieMecanicaTitle');
    const teorieMecanica = document.getElementById('teorieMecanica');

    //variabile din teorieTermodinamica.html
    const teorieTermodinamicaTitle = document.getElementById('teorieTermodinamicaTitle');
    const teorieTermodinamica = document.getElementById('teorieTermodinamica');

    //variabile comune din cele 4 teorii
    const teorieInapoiBtn = document.getElementById('teorieInapoiBtn');

    //variabile comune din cele 4 fisiere index
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
        titleDisconnect.textContent = data[attr].titleDisconnect;
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
        usernameReg.textContent = data[attr].usernameReg;
        emailReg.textContent = data[attr].emailReg;
        passwordReg.textContent = data[attr].passwordReg;
        register.textContent = data[attr].register;
        footerReg.textContent = data[attr].footerReg;
        footerRegBtn.textContent = data[attr].footerRegBtn;
    }

    //login.html
    if(window.location.pathname == "/login.html")
    {
        goBackLog.textContent = data[attr].goBackLog
        titleLog.textContent = data[attr].titleLog
        emailLog.textContent = data[attr].emailLog;
        passwordLog.textContent = data[attr].passwordLog;
        login.textContent = data[attr].login;
        footerLog.textContent = data[attr].footerLog;
        footerLogBtn.textContent = data[attr].footerLogBtn;
    }

    //mecanica.html
    if(window.location.pathname == "/mecanica.html")
    {
        mecanicaTitle.textContent = data[attr].mecanicaTitle;
        principiiTitle.textContent = data[attr].principiiTitle;
        teoremeTitle.textContent = data[attr].teoremeTitle;
        principiiTitleModal.textContent = data[attr].principiiTitleModal;
        teoremeTitleModal.textContent = data[attr].teoremeTitleModal;
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

    //termodinamica.html
    if(window.location.pathname == "/termodinamica.html")
    {
        termodinamicaTitle.textContent = data[attr].termodinamicaTitle;
        notiuniTitle.textContent = data[attr].notiuniTitle;
        principiuITitle.textContent = data[attr].principiuITitle;
        motoareTitle.textContent = data[attr].motoareTitle;
        principiuIITitle.textContent = data[attr].principiuIITitle;
        notiuniTitleModal.textContent = data[attr].notiuniTitleModal;
        principiuITitleModal.textContent = data[attr].principiuITitleModal;
        motoareTitleModal.textContent = data[attr].motoareTitleModal;
        principiuIITitleModal.textContent = data[attr].principiuIITitleModal;
        notiuniRez.innerHTML = data[attr].notiuniRez;
        principiuIRez.innerHTML = data[attr].principiuIRez;
        motoareRez.innerHTML = data[attr].motoareRez;
        principiuIIRez.innerHTML = data[attr].principiuIIRez;
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

    //electromecanica.html
    if(window.location.pathname == "/electromecanica.html")
    {
        electromecanicaTitle.textContent = data[attr].electromecanicaTitle;
        curentulTitle.textContent = data[attr].curentulTitle;
        ohmTitle.textContent = data[attr].ohmTitle;
        kirchhoffTitle.textContent = data[attr].kirchhoffTitle;
        grupareTitle.textContent = data[attr].grupareTitle;
        energieTitle.textContent = data[attr].energieTitle;
        curentulTitleModal.textContent = data[attr].curentulTitleModal;
        ohmTitleModal.textContent = data[attr].ohmTitleModal;
        kirchhoffTitleModal.textContent = data[attr].kirchhoffTitleModal;
        grupareTitleModal.textContent = data[attr].grupareTitleModal;
        energieTitleModal.textContent = data[attr].energieTitleModal;
        curentulRez.innerHTML = data[attr].curentulRez;
        ohmRez.innerHTML = data[attr].ohmRez;
        kirchhoffRez.innerHTML = data[attr].kirchhoffRez;
        grupareRez.innerHTML = data[attr].grupareRez;
        energieRez.innerHTML = data[attr].energieRez;
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

    //optica.html
    if(window.location.pathname == "/optica.html")
    {
        opticaTitle.textContent = data[attr].opticaTitle;
        geometricaTitle.textContent = data[attr].geometricaTitle;
        ondulatorieTitle.textContent = data[attr].ondulatorieTitle;
        cuanticaTitle.textContent = data[attr].cuanticaTitle;
        geometricaTitleModal.textContent = data[attr].geometricaTitleModal;
        ondulatorieTitleModal.textContent = data[attr].ondulatorieTitleModal;
        cuanticaTitleModal.textContent = data[attr].cuanticaTitleModal;
        geometricaRez.innerHTML = data[attr].geometricaRez;
        ondulatorieRez.innerHTML = data[attr].ondulatorieRez;
        cuanticaRez.innerHTML = data[attr].cuanticaRez;
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

    //teorieMecanica.html
    if(window.location.pathname == "/teorieMecanica.html")
    {
        teorieMecanicaTitle.textContent = data[attr].teorieMecanicaTitle;
        teorieMecanica.innerHTML = data[attr].teorieMecanica;
        teorieInapoiBtn.textContent = data[attr].teorieInapoiBtn;
    }

    //teorieTermodinamica.html
    if(window.location.pathname == "/teorieTermodinamica.html")
    {
        teorieTermodinamicaTitle.textContent = data[attr].teorieTermodinamicaTitle;
        teorieTermodinamica.innerHTML = data[attr].teorieTermodinamica;
        teorieInapoiBtn.textContent = data[attr].teorieInapoiBtn;
    }
}

var data = {
    "engleza":
    {
        //index.html
        "titleSet": "Settings",
        "titleLogin": "Log in",
        "titleDisconnect": "Sign Out",
        "titleLang": "Languages",
        "titleMec": "Mechanics",
        "titleTer": "Thermodynamics",
        "titleElec": "Electromechanics",
        "titleOp": "Optics",

        //register.html
        "goBackReg": "go back",
        "titleReg": "Enter your registration credentials",
        "usernameReg": "Enter your username",
        "emailReg": "Enter your email",
        "passwordReg": "Enter your password",
        "register": "Register account",
        "footerReg": "Already have an account?",
        "footerRegBtn": "Log in",

        //login.html
        "goBackLog": "go back",
        "titleLog": "Enter your login credentials",
        "emailLog": "Enter your email",
        "passwordLog": "Enter your password",
        "login": "Log in",
        "footerLog": "Not registered?",
        "footerLogBtn": "Create an account",

        //mecanica.html
        "mecanicaTitle": "Mechanics",
        "principiiTitle": "Principles and laws",
        "teoremeTitle": "Variation theorems and conservation laws",
        "principiiTitleModal": "Principles and laws of classical mechanics",
        "teoremeTitleModal": "Variation theorems and conservation laws",
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

        //termodinamica.html
        "termodinamicaTitle": "Thermodynamics",
        "notiuniTitle": "Getting started",
        "principiuITitle": "The first principle",
        "motoareTitle": "Thermal engines",
        "principiuIITitle": "The second principle",
        "notiuniTitleModal": "Basic concepts in thermodynamics",
        "principiuITitleModal": "The first principle of thermodynamics",
        "motoareTitleModal": "Thermal engines",
        "principiuIITitleModal": "The second principle of thermodynamics",
        "notiuniRez": ('<li>'+'Molecular mass'+'</li>'+
                        '<li>'+'Relative molecular mass'+'</li>'+
                        '<li>'+'Amount of substance'+'</li>'+
                        '<li>'+'Molar mass'+'</li>'+
                        '<li>'+'Molar volume'+'</li>'+
                        '<li>'+'Avogadro\'s number'+'</li>'+
                        '<li>'+'Thermal balance'+'</li>'+
                        '<li>'+'Correspondence between numerical value of temperature in Celsius scale and numerical value x'+'</li>'),
        "principiuIRez": ('<li>'+'Mechanical work in thermodynamics, process quantity'+'</li>'+
                        '<li>'+'Geometric interpretation of mechanical work in thermodynamics'+'</li>'+
                        '<li>'+'Internal energy of a thermodynamic system, state quantity'+'</li>'+
                        '<li>'+'Heat, process size'+'</li>'+
                        '<li>'+'Adiabatic shell'+'</li>'+
                        '<li>'+'The first principle of thermodynamics'+'</li>'+
                        '<li>'+'Caloric coefficients (definition relations, SI units)'+'</li>'+
                        '<li>'+'The Robert-Mayer relationship'+'</li>'+
                        '<li>'+'Application of the First Principle of thermodynamics to ideal gas transformations:'+'<br>'+
                            '<ul>'+
                                '<li>'+'Internal energy of ideal gas (monoatomic, diatomic, polyatomic)'+'</li>'+	
                                '<li>'+'Variation of internal energy, mechanical work and amount of heat for simple ideal gas transformations (isobaric, isochoric, isothermal, adiabatic)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'Explaining the functionality of a heat engine'+'</li>'+
                    '<li>'+'Description of the main thermodynamic cycles – Otto, Diesel – based on which heat engines work'+'</li>'+
                    '<li>'+'The efficiency of a heat engine'+'</li>'),
        "principiuIIRez": ('<li>'+'The Carnot cycle, the efficiency of the Carnot cycle'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Electromechanics",
        "curentulTitle": "Electricity",
        "ohmTitle": "Ohm's law",
        "kirchhoffTitle": "Kirchhoff's law",
        "grupareTitle": "Grouping of resistors and generators",
        "energieTitle": "Energy and electrical power",
        "curentulTitleModal": "Electricity",
        "ohmTitleModal": "Ohm's law",
        "kirchhoffTitleModal": "Kirchhoff's law",
        "grupareTitleModal": "Grouping of resistors and generators",
        "energieTitleModal": "Energy and electrical power",
        "curentulRez": ('<li>'+'Electricity'+'</li>'+
                        '<li>'+'The intensity of the electric current'+'</li>'+
                        '<li>'+'The unit of measurement of the intensity of the electric current'+'</li>'+
                        '<li>'+'Simple electrical circuit'+'</li>'+
                        '<li>'+'The electromotive voltage of an electric generator, the voltage at the generator terminals, the voltage drop inside the generator'+'</li>'),
        "ohmRez": ('<li>'+'Electrical resistance'+'</li>'+
                    '<li>'+'Ohm\'s law for a portion of a circuit and for the entire circuit'+'</li>'+
                    '<li>'+'The unit of measure for electrical resistance'+'</li>'+
                    '<li>'+'Electrical resistance, dependence of electrical resistivity on temperature'+'</li>'),
        "kirchhoffRez": ('<li>'+'The electrical network'+'</li>'+
                        '<li>'+'The network node'+'</li>'+
                        '<li>'+'The network eye'+'</li>'+
                        '<li>'+'Kirchhoff\'s laws'+'</li>'),
        "grupareRez": ('<li>'+'The equivalent electrical resistance of series, parallel or mixed grouping of several resistors'+'</li>'+
                        '<li>'+'The equivalent electrical resistance and the equivalent electromotive voltage corresponding to the series/parallel grouping of several electrical generators'+'</li>'),
        "energieRez": ('<li>'+'The expression of the energy transmitted by the generator to the consumer in a time interval'+'</li>'+
                        '<li>'+'Expression of the energy dissipated inside the generator'+'</li>'+
                        '<li>'+'The efficiency of a simple electric circuit'+'</li>'+
                        '<li>'+'Electric power, relationships that characterize electric power'+'</li>'),

        //optica.html
        "opticaTitle": "Optics",
        "geometricaTitle": "Geometric optics",
        "ondulatorieTitle": "Wave optics",
        "cuanticaTitle": "Elements of quantum physics",
        "geometricaTitleModal": "Geometric optics",
        "ondulatorieTitleModal": "Wave optics",
        "cuanticaTitleModal": "Elements of quantum physics",
        "geometricaRez": ('<li>'+'Light reflection'+'</li>'+
                            '<li>'+'Refraction of light'+'</li>'+
                            '<li>'+'The laws of reflection'+'</li>'+
                            '<li>'+'The laws of refraction'+'</li>'+
                            '<li>'+'Refractive index'+'</li>'+
                            '<li>'+'Conjugate points'+'</li>'+
                            '<li>'+'Fasciculele paraxiale'+'</li>'+
                            '<li>'+'Real/virtual images'+'</li>'+
                            '<li>'+'Optical lens'+'</li>'+
                            '<li>'+'The characteristic elements of a thin lens (axes, optical center, foci)'+'</li>'+
                            '<li>'+'Convergence of a thin lens'+'</li>'+
                            '<li>'+'Thin lens formulas'+'</li>'+
                            '<li>'+'Images of real/viral objects in thin lenses'+'</li>'+
                            '<li>'+'Lens systems'+'</li>'),
        "ondulatorieRez": ('<li>'+'Conditions for obtaining stationary interference'+'</li>'+
                            '<li>'+'The wavelength'+'</li>'+
                            '<li>'+'Components of Young\'s device'+'</li>'+
                            '<li>'+'Interference fringes'+'</li>'+
                            '<li>'+'Optical path difference'+'</li>'+
                            '<li>'+'Maximum and minimum interference conditions'+'</li>'+
                            '<li>'+'Interfringe'+'</li>'),
        "cuanticaRez": ('<li>'+'The laws of the external photoelectric effect'+'</li>'+
                        '<li>'+'Planck\'s hypothesis. Einstein\'s hypothesis. Einstein\'s equation'+'</li>'+
                        '<li>'+'Interpretation of the laws of the external photoelectric effect'+'</li>'),
        
        //teorieMecanica.html
        "teorieMecanicaTitle": "Mechanics theory",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Principles and laws'+'</h2>'+'<br>'+'<br>'+' <br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Speed'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formula: '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Measurement unit: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</ li>'+
                                    '<li>'+'Average speed: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b >'+'</li>'+
                                    '<li>'+'Velocity vector has the same meaning as displacement: v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+ ' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Acceleration'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formula: '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Measurement unit: '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+ '</sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'The Galileo formula:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+') '+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Speed ​​law: '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</ li>'+
                        '</ul>'+    
                        '<h2 class=\"p-3\">'+'Law of motion:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0 '+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Principle I of mechanics:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Any body maintains its state of rest or uniform rectilinear motion as long as no other forces act on it or the sum of the forces acting on it is zero.'+'</li>'+
                            '<li>'+'In short: Velocity is '+'<b>'+'constant'+'</b>'+' if '+'<b>'+'the resultant of the forces applied to the body'+' </b>'+' is 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Second principle of mechanics:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The change in the amount of motion of a body is directly proportional to the applied force and occurs in the direction in which the force acts.'+'</li>'+
                            '<li>'+'Said in other words: a force acting on a body gives it an acceleration, proportional to the force and inversely proportional to the mass of the body.'+'</li>'+
                            '<li>'+'Formula: F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Third principle of mechanics:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'When one body acts on another body with a force (called the action force), the second body also acts on the first body with a force (called the reaction force) of the same magnitude and direction, but opposite. This principle is also known as the Principle of Action and Reaction.'+'</li>'+
                            '<li>'+'Written as a formula: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub >'+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Hooke\'s law:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The elongation of a spring is directly proportional to the deforming Force (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Directly proportional to the Initial Spring Length (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br >'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'Inversely proportional to the cross-sectional area of ​​the spring:'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Hooke\'s law:'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Wire tension:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The tension in the wire ( T ) represents the reaction force of the inextensible wire (which does not elongate) to the force exerted on it.'+'</li>'+'<br>'+
                            '<li>'+'When we suspend a body from an inextensible thread, two paired forces appear:'+'<br>'+'<br>'+
    
                                'The pressing force of the body (F) is the force with which the body acts on the wire (it is equal to the weight of the body).'+'<br>'+'<br>'+
                                
                                'The tension in the wire (T) is the force with which the wire acts on the body suspended on it.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Laws of sliding friction:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'First Law of Friction:'+'<br>'+'<br>'+
                            
                                'The value of the sliding friction force depends on the nature and degree of processing of the surfaces in contact. The dependence is characterized by a dimensionless quantity, called sliding friction coefficient, which takes values ​​between 0 and 1 and is denoted by μ.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'The Second Law of Friction:'+'<br>'+'<br>'+
                                'The value of the sliding friction force does not depend on the area of ​​the contact surface between the bodies.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'Third Law of Friction:'+'<br>'+'<br>'+
                                'The value of the sliding friction force depends on the pressing force exerted by the body on the sliding surface, which is equal in magnitude to the normal reaction force at the contact surface between the bodies.'+'<br>'+'<br>' +
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'The formula of the frictional force is given by the relation:'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Theorems of variation and conservation laws'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Mechanical work:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The mechanical work (L) of a constant force acting on a body in the direction and direction of the body\'s displacement is the scalar physical quantity equal to the product of the modulus of the force (F) and the modulus of the displacement of the body (d).' +'</li>'+'<br>'+
                            '<li>'+'Calculation formula: L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Sign conventions:'+'<br>'+
                                '1. The mechanical work of a force is positive if the force helps move the body. This happens if the force has the same direction and sense as the movement of the body.'+'<br>'+'<br>'+
                                '2. The mechanical work of a force is negative if the force opposes the motion of the body. This happens if the component of the force vector in the direction of motion is opposite to the body\'s motion.'+'<br>'+'<br>'+
                                '3. The mechanical work of a force is zero if the force neither helps the body move nor opposes the movement. This happens if the force vector is perpendicular to the direction of the body\'s movement.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Mechanical power:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Mechanical power (P) is the scalar physical quantity equal to the ratio between the mechanical work (L) performed and the time (Δt) during which this mechanical work is performed.'+'</li>'+'<br>'+
                            '<li>'+'P = Mechanical work / time = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Kinetic energy:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Mechanical energy (E) is the physical quantity that characterizes the ability of a body to perform mechanical work, the unit of measure being the joule (J).'+'</li>'+'<br>' +
                            '<li>'+'Kinetic energy (E'+'<sub>'+'c'+'</sub>'+') is the energy that a moving body has.'+'</li> '+'<br>'+
                            '<li>'+'The kinetic energy of a moving body with a certain speed is calculated with the formula:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+ '</li>'+'<br>'+
                            '<li>'+'The law of variation of kinetic energy:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Total'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Gravitational potential energy:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Gravitational potential energy (E'+'<sub>'+'pg'+'</sub>'+') is the energy that a body has at a certain height from the ground. '+'</li>'+'<br>'+
                            '<li>'+'The gravitational potential energy of a body is equal to: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</li >'+'<br>'+
                            '<li>'+'Law of variation of gravitational potential energy:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>' +'<br>'+
                            '<li>'+'A force that does mechanical work that is independent of the path traveled and depends only on the extreme positions (initial and final) is called a conservative force.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Conservation of mechanical energy:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The law of conservation of mechanical energy:'+'<br>'+'<br>'+
    
                                '\"The mechanical energy of a body is conserved if only conservative forces act on it.\"'+'<br>'+'<br>'+
                            
                                'E = constant, if the body is isolated from the outside and F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Momentum Variation Theorem:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The momentum of the body is denoted by the Law of Conservation of Momentum and has the formula:'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\" vertical-align : 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'Theorem of variation of mechanical impulse'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical- align : 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'The law of conservation of momentum:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'When the mechanical system is isolated, the resultant force F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margin- left : -1.5px\">'+'&#8407;'+'</span> '+'is zero.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R' +'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'The law of conservation of mechanical momentum in SRI:'+'<br>'+'<br>'+
                                'The mechanical momentum of isolated mechanical systems is conserved.'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, i.e. Δp'+'<span style=\ "vertical-align : 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align : 4px; margin-left : -25px \">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                                '<li>'+'In the case of isolated mechanical systems, their total momentum cannot change under the action of internal forces.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Thermodynamic theory",
        "teorieTermodinamica": "",

        "teorieInapoiBtn": "Back to the selection menu",
        "invataTitle": "In this part of the chapter you will learn concepts such as:",
        "inchideBtn": "Close",
        "teorieBtn": "Theory",
        "testBtn": "Start a test",
        "acasaBtn": "Home",
    },
    "romana":
    {
        //index.html
        "titleSet": "Setări",
        "titleLogin": "Conectează-te",
        "titleDisconnect": "Deconectează-te",
        "titleLang": "Limbi",
        "titleMec": "Mecanică",
        "titleTer": "Termodinamică",
        "titleElec": "Electromecanică",
        "titleOp": "Optică",

        //register.html
        "goBackReg": "înapoi",
        "titleReg": "Introduceți acreditările dvs. de înregistrare",
        "usernameReg": "Introduceți numele dvs. de utilizator",
        "emailReg": "Introduceți adresa dvs. de email",
        "passwordReg": "Introduceți parola",
        "register": "Înregistrează-te",
        "footerReg": "Deja aveți un cont?",
        "footerRegBtn": "Conectați-vă",

        //login.html
        "goBackLog": "înapoi",
        "titleLog": "Introduceți datele dvs. de conectare",
        "emailLog": "Introduceți adresa dvs. de email",
        "passwordLog": "Introduceți parola",
        "login": "Autentifică-te",
        "footerLog": "Nu sunteți înregistrat?",
        "footerLogBtn": "Creați un cont",

        //mecanica.html
        "mecanicaTitle": "Mecanică",
        "principiiTitle": "Principii și legi",
        "teoremeTitle": "Teoreme de variație și legi de conservare",
        "principiiTitleModal": "Principii și legi ale mecanicii clasice",
        "teoremeTitleModal": "Teoreme de variație și legi de conservare",
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

        //termodinamica.html
        "termodinamicaTitle": "Termodinamică",
        "notiuniTitle": "Noțiuni de bază",
        "principiuITitle": "Principiul I",
        "motoareTitle": "Motoare termice",
        "principiuIITitle": "Principiul al II-lea",
        "notiuniTitleModal": "Noțiuni de bază în termodinamică",
        "principiuITitleModal": "Principiul I al termodinamicii",
        "motoareTitleModal": "Motoare termice",
        "principiuIITitleModal": "Principiul al II-lea al termodinamicii",
        "notiuniRez": ('<li>'+'Masă moleculară'+'</li>'+
                        '<li>'+'Masă moleculară relativă'+'</li>'+
                        '<li>'+'Cantitatea de substanță'+'</li>'+
                        '<li>'+'Masă molară'+'</li>'+
                        '<li>'+'Volumul molar'+'</li>'+
                        '<li>'+'Numărul lui Avogadro'+'</li>'+
                        '<li>'+'Echilibrul termic'+'</li>'+
                        '<li>'+'Corespondența între valoarea numerică a temperaturii în scara Celsius și valoarea numerică x'+'</li>'),
        "principiuIRez": ('<li>'+'Lucrul mecanic în termodinamică, mărime de proces'+'</li>'+
                        '<li>'+'Interpretarea geometrică a lucrului mecanic în termodinamică'+'</li>'+
                        '<li>'+'Energia internă a unui sistem termodinamic, mărime de stare'+'</li>'+
                        '<li>'+'Căldura, mărime de proces'+'</li>'+
                        '<li>'+'Înveliș adiabatic'+'</li>'+
                        '<li>'+'Principiul I al termodinamicii'+'</li>'+
                        '<li>'+'Coeficienți calorici (relații de definiție, unități de măsură în SI)'+'</li>'+
                        '<li>'+'Relația Robert-Mayer'+'</li>'+
                        '<li>'+'Aplicarea Principiului I al termodinamicii la transformările gazului ideal:'+'<br>'+
                            '<ul>'+
                                '<li>'+'Energia internă a gazului ideal (monoatomic, diatomic, poliatomic)'+'</li>'+	
                                '<li>'+'Variația energiei interne, lucrul mecanic și cantitatea de căldură pentru transformările simple ale gazului ideal (izobară, izocoră, izotermă, adiabatică)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'Explicarea funcționalității unui motor termic'+'</li>'+
                    '<li>'+'Descrierea principalelor cicluri termodinamice – Otto, Diesel – pe baza cărora funcționează motoarele termice'+'</li>'+
                    '<li>'+'Randamentul unui motor termic'+'</li>'),
        "principiuIIRez": ('<li>'+'Ciclul Carnot, randamentul ciclului Carnot'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Electromecanică",
        "curentulTitle": "Curentul electric",
        "ohmTitle": "Legea lui Ohm",
        "kirchhoffTitle": "Legea lui Kirchhoff",
        "grupareTitle": "Gruparea rezistoarelor si generatoarelor",
        "energieTitle": "Energia și puterea electrică",
        "curentulTitleModal": "Curentul electric",
        "ohmTitleModal": "Legea lui Ohm",
        "kirchhoffTitleModal": "Legea lui Kirchhoff",
        "grupareTitleModal": "Gruparea rezistoarelor și generatoarelor",
        "energieTitleModal": "Energia și puterea electrică",
        "curentulRez": ('<li>'+'Curentul electric'+'</li>'+
                        '<li>'+'Intensitatea curentului electric'+'</li>'+
                        '<li>'+'Unitatea de măsură a intensității curentului electric'+'</li>'+
                        '<li>'+'Circuitul electric simplu'+'</li>'+
                        '<li>'+'Tensiunea electromotoare a unui generator electric, tensiunea la bornele generatorului, căderea de tensiune în interiorul generatorului'+'</li>'),
        "ohmRez": ('<li>'+'Rezistența electrică'+'</li>'+
                    '<li>'+'Legea lui Ohm pentru o porțiune de circuit și pentru întreg circuitul'+'</li>'+
                    '<li>'+'Unitatea de măsură pentru rezistența electrică'+'</li>'+
                    '<li>'+'Rezistența electrică, dependența rezistivității electrice de temperatură'+'</li>'),
        "kirchhoffRez": ('<li>'+'Rețeaua electrică'+'</li>'+
                        '<li>'+'Nodul de rețea'+'</li>'+
                        '<li>'+'Ochiul de rețea'+'</li>'+
                        '<li>'+'Legile lui Kirchhoff'+'</li>'),
        "grupareRez": ('<li>'+'Rezistența electrică echivalentă a grupării serie, paralel sau mixtă a mai multor rezistori'+'</li>'+
                        '<li>'+'Rezistența electrică echivalentă și tensiunea electromotoare echivalentă corespunzătoare grupării serie/paralel a mai multor generatoare electrice'+'</li>'),
        "energieRez": ('<li>'+'Expresia energiei transmise de generator consumatorului într-un interval de timp'+'</li>'+
                        '<li>'+'Expresia energiei disipate în interiorul generatorului'+'</li>'+
                        '<li>'+'Randamentul unui circuit electric simplu'+'</li>'+
                        '<li>'+'Puterea electrică, relații ce caracterizează puterea electrică'+'</li>'),

        //optica.html
        "opticaTitle": "Optică",
        "geometricaTitle": "Optica geometrică",
        "ondulatorieTitle": "Optica ondulatorie",
        "cuanticaTitle": "Elemente de fizică cuantică",
        "geometricaTitleModal": "Optica geometrică",
        "ondulatorieTitleModal": "Optica ondulatorie",
        "cuanticaTitleModal": "Elemente de fizică cuantică",
        "geometricaRez": ('<li>'+'Reflexia luminii'+'</li>'+
                            '<li>'+'Refracția luminii'+'</li>'+
                            '<li>'+'Legile reflexiei'+'</li>'+
                            '<li>'+'Legile refracției'+'</li>'+
                            '<li>'+'Indicele de refracție'+'</li>'+
                            '<li>'+'Punctele conjugate'+'</li>'+
                            '<li>'+'Fasciculele paraxiale'+'</li>'+
                            '<li>'+'Imaginile reale/virtuale'+'</li>'+
                            '<li>'+'Lentila optică'+'</li>'+
                            '<li>'+'Elementele caracteristice ale unei lentile subțiri (axe, centru optic, focare)'+'</li>'+
                            '<li>'+'Convergența unei lentile subțiri'+'</li>'+
                            '<li>'+'Formulele lentilelor subțiri'+'</li>'+
                            '<li>'+'Imaginile obiectelor reale/virtuale în lentile subțiri'+'</li>'+
                            '<li>'+'Sisteme de lentile'+'</li>'),
        "ondulatorieRez": ('<li>'+'Condiții de obținere a interferenței staționare'+'</li>'+
                            '<li>'+'Lungimea de undă'+'</li>'+
                            '<li>'+'Elementele componente ale dispozitivului Young'+'</li>'+
                            '<li>'+'Franje de interferență'+'</li>'+
                            '<li>'+'Diferența de drum optic'+'</li>'+
                            '<li>'+'Condițiile de maxim, respectiv de minim de interferență'+'</li>'+
                            '<li>'+'Interfranja'+'</li>'),
        "cuanticaRez": ('<li>'+'Legile efectului fotoelectric extern'+'</li>'+
                        '<li>'+'Ipoteza lui Planck. Ipoteza lui Einstein. Ecuația lui Einstein'+'</li>'+
                        '<li>'+'Interpretarea legilor efectului fotoelectric extern'+'</li>'),

        //teorieMecanica.html
        "teorieMecanicaTitle": "Mecanică teorie",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Principii și legi'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Viteza'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formula: '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Unitate de măsură: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</li>'+
                                    '<li>'+'Viteza medie: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b>'+'</li>'+
                                    '<li>'+'Vectorul viteză are același sens cu deplasarea: v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Accelerația'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Fomula: '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Unitatea de măsură: '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+'</sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Formula Galilei:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+')'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legea vitezei: '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legea de mișcare:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0'+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Principiul I al mecanicii:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Orice corp își menține starea de repaus sau de mișcare rectilinie uniformă atât timp cât asupra sa nu acționează alte forțe sau suma forțelor care acționează asupra sa este nulă.'+'</li>'+
                            '<li>'+'Pe scurt: Viteza este '+'<b>'+'constantă'+'</b>'+' dacă '+'<b>'+'rezultanta forțelor aplicate asupra corpului'+'</b>'+' este 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Principiul al II-lea al mecanicii:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Modificarea cantității de mișcare a unui corp este direct proporțională cu forța aplicată și are loc pe direcția pe care acționează forța.'+'</li>'+
                            '<li>'+'Spus în alte cuvinte:  o forță care acționează asupra unui corp îi imprimă acestuia o accelerație, proporțională cu forța și invers proporțională cu masa corpului.'+'</li>'+
                            '<li>'+'Formulă: F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Principiul al III-lea al mecanicii:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Când un corp acționează asupra altui corp cu o forță (numită forță de acțiune), cel de-al doilea corp acționează și el asupra primului cu o forță (numită forță de reacțiune) de aceeași mărime și de aceeași direcție, dar de sens contrar. Acest principiu este cunoscut și sub numele de Principiul acțiunii și reacțiunii.'+'</li>'+
                            '<li>'+'Scris sub formă de formulă: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub>'+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legea lui Hooke:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Alungirea unui resort este direct proporțională cu Forța deformatoare (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Direct proporțională cu Lungimea inițială a resortului (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br>'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'Invers proporțională cu aria secțiunii transversale a resortului:'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Legea lui Hooke:'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Tensiunea în fire:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Tensiunea din fir ( T ) reprezintă forța de reacțiune a firului inextensibil (care nu se alungește) la forța exercitată asupra lui.'+'</li>'+'<br>'+
                            '<li>'+'Când suspendăm un corp de un fir inextensibil apar două forțe pereche:'+'<br>'+'<br>'+  
    
                                'Forța de apăsare a corpului (F) este forța cu care corpul acționează asupra firului (ea este egală cu greutatea corpului).'+'<br>'+'<br>'+
                                
                                'Tensiunea în fir (T) este forța cu care firul acționează asupra corpului suspendat pe el.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legile frecării la alunecare:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Legea I a frecării:'+'<br>'+'<br>'+
                            
                                'Valoarea forței de frecare la alunecare depinde de natura și de gradul de prelucrare al suprafețelor aflate în contact. Dependența este caracterizată de o mărime adimensională, numită coeficient de frecare al alunecare, ce ia valori între 0 și 1 și se notează cu μ.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'Legea II a frecării:'+'<br>'+'<br>'+
                                'Valoarea forței de frecare la alunecare nu depinde de aria suprafeței de contact dintre corpuri.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'Legea a III-a a frecării:'+'<br>'+'<br>'+
                                'Valoarea forței de frecare la alunecare depinde de forța de apăsare exercitată de corp pe suprafața de alunecare, care este egală în mărime cu forța de reacțiune normală la suprafața de contact dintre corpuri.'+'<br>'+'<br>'+
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'Formula forței de frecare este dată de relația:'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Teoreme de variație și legi de conservare'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Lucrul mecanic:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Lucrul mecanic (L) al unei forțe constante ce acționează asupra unui corp pe direcția și în sensul deplasării corpului este mărimea fizică scalară egală cu produsul dintre modulul forței (F) și modulul deplasării corpului (d).'+'</li>'+'<br>'+
                            '<li>'+'Formula de calcul: L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Convenții de semne:'+'<br>'+
                                '1. Lucrul mecanic al unei forțe este pozitiv dacă forța ajută la deplasarea corpului. Aceasta se întâmplă în cazul în care forța are aceeași direcție și sens cu mișcarea corpului.'+'<br>'+'<br>'+
                                '2. Lucrul mecanic al unei forțe este negativ dacă forța se opune deplasării corpului. Aceasta se întâmplă în cazul în care componenta vectorului forță pe direcția mișcării are sens opus mișcării corpului.'+'<br>'+'<br>'+
                                '3. Lucrul mecanic al unei forțe este nul dacă forța nici nu ajută la deplasarea corpului, nici nu se opune deplasării. Aceasta se întâmplă în cazul în care vectorul forță este perpendicular pe direcția mișcării corpului.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Puterea mecanică:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Puterea mecanică (P) este mărimea fizică scalară egală cu raportul dintre lucrul mecanic (L) efectuat și timpul (Δt) în care se efectuează acest lucru mecanic.'+'</li>'+'<br>'+
                            '<li>'+'P = Lucru mecanic / timp = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Energia cinetică:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Energia mecanică (E) este mărimea fizică ce caracterizează capacitatea unui corp de a efectua lucru mecanic, nitatea de măsură fiind este joulul (J).'+'</li>'+'<br>'+
                            '<li>'+'Energia cinetică (E'+'<sub>'+'c'+'</sub>'+') este energia pe care o are un corp în mișcare.'+'</li>'+'<br>'+
                            '<li>'+'Energia cinetică a unui corp în mișcare, cu o anumită viteză se calculează cu formula:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+'</li>'+'<br>'+
                            '<li>'+'Legea variației energiei cinetice:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Total'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Energia potențială gravitațională:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Energia potențială gravitațională (E'+'<sub>'+'pg'+'</sub>'+') este energia pe care o are un corp aflat la o anumită înălțime față de sol.'+'</li>'+'<br>'+
                            '<li>'+'Energia potențială gravitațională a unui corp este egală cu: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</li>'+'<br>'+
                            '<li>'+'Legea variației energiei potențiale gravitaționale:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>'+'<br>'+
                            '<li>'+'O forță care efectuează un lucru mecanic care este independent de drumul parcurs și depinde numai de pozițiile extreme (inițială și cea finală) se numește forță conservativă.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Conservarea energiei mecanice:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Legea conservării energiei mecanice:'+'<br>'+'<br>'+
    
                                '\“Energia mecanică a unui corp se conservă dacă asupra sa acționează numai forțe conservative.\“'+'<br>'+'<br>'+
                            
                                'E = constantă, dacă corpul este izolat de exterior și F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Teorema variației impulsului:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Impulsul corpului este notat cu Legea conservării impulsului si are formula:'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'Teorema de variație a impulsului mecanic'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legea conservării impulsului:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Când sistemul mecanic este izolat, forța rezultantă F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span> '+'este zero.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'Legea conservării impulsului mecanic în SRI:'+'<br>'+'<br>'+
                                'Impulsul mecanic al sistemelor mecanice izolate se conservă.'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, adică Δp'+'<span style=\"vertical-align : 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align : 4px; margin-left : -25px\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+ 
                                '<li>'+'În cazul sistemelor mecanice izolate, impulsul total al acestora nu se poate modifica sub acțiunea forțelor interne.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Termodinamică teorie",
        "teorieTermodinamica": "",

        "teorieInapoiBtn": "Înapoi la meniul de selecție",
        "invataTitle": "În această parte a capitolului vei învăța noțiuni precum:",
        "inchideBtn": "Închide",
        "teorieBtn": "Teorie",
        "testBtn": "Începe un test",
        "acasaBtn": "Acasă",
    },
    "maghiara":
    {
        //index.html
        "titleSet": "Beállítások",
        "titleLogin": "Bejelentkezés",
        "titleDisconnect": "Kijelentkezés",
        "titleLang": "Nyelvek",
        "titleMec": "Mechanika",
        "titleTer": "Termodinamika",
        "titleElec": "Elektromechanikai",
        "titleOp": "Optikai",

        //register.html
        "goBackReg": "vissza",
        "titleReg": "Adja meg regisztrációs hitelesítő adatait",
        "usernameReg": "Írd be a felhasználóneved",
        "emailReg": "Írd be az email címed",
        "passwordReg": "Írja be a jelszót",
        "register": "Regisztrálj",
        "footerReg": "Már van fiókja?",
        "footerRegBtn": "Bejelentkezés",

        //login.html
        "goBackLog": "vissza",
        "titleLog": "Adja meg bejelentkezési adatait",
        "emailLog": "Írd be az email címed",
        "passwordLog": "Írja be a jelszót",
        "login": "Bejelentkezés",
        "footerLog": "Nem regisztrált?",
        "footerLogBtn": "Hozzon létre egy fiókot",

        //mecanica.html
        "mecanicaTitle": "Mechanika",
        "principiiTitle": "Elvek és törvények",
        "teoremeTitle": "Variációs tételek és megmaradási törvények",
        "principiiTitleModal": "A klasszikus mechanika alapelvei és törvényei",
        "teoremeTitleModal": "Variációs tételek és megmaradási törvények",
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

        //termodinamica.html
        "termodinamicaTitle": "Termodinamika",
        "notiuniTitle": "Elkezdeni",
        "principiuITitle": "I. alapelv",
        "motoareTitle": "Hőmotorok",
        "principiuIITitle": "A második elv",
        "notiuniTitleModal": "Termodinamikai alapfogalmak",
        "principiuITitleModal": "A termodinamika első elve",
        "motoareTitleModal": "Hőmotorok",
        "principiuIITitleModal": "A termodinamika második elve",
        "notiuniRez": ('<li>'+'Molekulatömeg'+'</li>'+
                        '<li>'+'Relatív molekulatömeg'+'</li>'+
                        '<li>'+'Anyagmennyiség'+'</li>'+
                        '<li>'+'Moláris tömeg'+'</li>'+
                        '<li>'+'Moláris térfogat'+'</li>'+
                        '<li>'+'Avogadro száma'+'</li>'+
                        '<li>'+'Termikus egyensúly'+'</li>'+
                        '<li>'+'A hőmérséklet Celsius-skálán mért számértéke és x számértéke közötti megfelelés'+'</li>'),
        "principiuIRez": ('<li>'+'Termodinamikai mechanikai munka, folyamatmennyiség'+'</li>'+
                        '<li>'+'Mechanikai munka geometriai értelmezése a termodinamikában'+'</li>'+
                        '<li>'+'Termodinamikai rendszer belső energiája, állapotmennyiség'+'</li>'+
                        '<li>'+'Hő, folyamat mérete'+'</li>'+
                        '<li>'+'Adiabatikus héj'+'</li>'+
                        '<li>'+'A termodinamika első elve'+'</li>'+
                        '<li>'+'Kalóriaegyütthatók (definíciós összefüggés, mértékegységek SI-ben)'+'</li>'+
                        '<li>'+'A Robert-Mayer kapcsolat'+'</li>'+
                        '<li>'+'A termodinamika első elvének alkalmazása ideális gázátalakításokra:'+'<br>'+
                            '<ul>'+
                                '<li>'+'Ideális gáz belső energiája (egyatomos, kétatomos, többatomos)'+'</li>'+	
                                '<li>'+'A belső energia, a mechanikai munka és a hőmennyiség változása egyszerű ideális gázátalakításokhoz (izobár, izochor, izoterm, adiabatikus)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'A hőgép működésének magyarázata'+'</li>'+
                    '<li>'+'A főbb termodinamikai ciklusok – Otto, Diesel – leírása, amelyek alapján a hőmotorok működnek'+'</li>'+
                    '<li>'+'A hőmotor hatásfoka'+'</li>'),
        "principiuIIRez": ('<li>'+'A Carnot-ciklus, a Carnot-ciklus hatékonysága'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Elektromechanikai",
        "curentulTitle": "Elektromosság",
        "ohmTitle": "Ohm törvénye",
        "kirchhoffTitle": "Kirchhoff törvénye",
        "grupareTitle": "Az ellenállások és generátorok csoportosítása",
        "energieTitle": "Energia és elektromos energia",
        "curentulTitleModal": "Elektromosság",
        "ohmTitleModal": "Ohm törvénye",
        "kirchhoffTitleModal": "Kirchhoff törvénye",
        "grupareTitleModal": "Az ellenállások és generátorok csoportosítása",
        "energieTitleModal": "Energia és elektromos energia",
        "curentulRez": ('<li>'+'Elektromosság'+'</li>'+
                        '<li>'+'Az elektromos áram intenzitása'+'</li>'+
                        '<li>'+'Az elektromos áram intenzitásának mértékegysége'+'</li>'+
                        '<li>'+'Egyszerű elektromos áramkör'+'</li>'+
                        '<li>'+'Az elektromos generátor elektromotoros feszültsége, a feszültség a generátor kapcsain, a feszültségesés a generátor belsejében'+'</li>'),
        "ohmRez": ('<li>'+'Elektromos ellenállás'+'</li>'+
                    '<li>'+'Ohm törvénye az áramkör egy részére és az egész áramkörre'+'</li>'+
                    '<li>'+'Az elektromos ellenállás mértékegysége'+'</li>'+
                    '<li>'+'Elektromos ellenállás, az elektromos ellenállás függése a hőmérséklettől'+'</li>'),
        "kirchhoffRez": ('<li>'+'Az elektromos hálózat'+'</li>'+
                        '<li>'+'A hálózati csomópont'+'</li>'+
                        '<li>'+'A hálózati szem'+'</li>'+
                        '<li>'+'Kirchhoff törvényei'+'</li>'),
        "grupareRez": ('<li>'+'Több ellenállás soros, párhuzamos vagy vegyes csoportosításának egyenértékű elektromos ellenállása'+'</li>'+
                        '<li>'+'Több villamos generátor soros/párhuzamos csoportosításának megfelelő egyenértékű elektromos ellenállás és egyenértékű elektromotoros feszültség'+'</li>'),
        "energieRez": ('<li>'+'A generátor által a fogyasztónak adott időintervallumban továbbított energia kifejezése'+'</li>'+
                        '<li>'+'A generátoron belül disszipált energia kifejezése'+'</li>'+
                        '<li>'+'Egy egyszerű elektromos áramkör hatásfoka'+'</li>'+
                        '<li>'+'Villamos teljesítmény, a villamos energiát jellemző összefüggések'+'</li>'),

        //optica.html
        "opticaTitle": "Optikai",
        "geometricaTitle": "Geometrikus optika",
        "ondulatorieTitle": "Hullám optika",
        "cuanticaTitle": "A kvantumfizika elemei",
        "geometricaTitleModal": "Geometrikus optika",
        "ondulatorieTitleModal": "Hullám optika",
        "cuanticaTitleModal": "A kvantumfizika elemei",
        "geometricaRez": ('<li>'+'Fényvisszaverődés'+'</li>'+
                            '<li>'+'Fénytörés'+'</li>'+
                            '<li>'+'A tükrözés törvényei'+'</li>'+
                            '<li>'+'A fénytörés törvényei'+'</li>'+
                            '<li>'+'Törésmutató'+'</li>'+
                            '<li>'+'Konjugált pontok'+'</li>'+
                            '<li>'+'Paraxiális facsontok'+'</li>'+
                            '<li>'+'Valós/virtuális képek'+'</li>'+
                            '<li>'+'Optikai lencse'+'</li>'+
                            '<li>'+'A vékony lencse jellemző elemei (tengelyek, optikai középpont, gócok)'+'</li>'+
                            '<li>'+'Vékony lencse konvergenciája'+'</li>'+
                            '<li>'+'Vékony lencse formulák'+'</li>'+
                            '<li>'+'Valós/virtuális tárgyak képei vékony lencsékkel'+'</li>'+
                            '<li>'+'Lencserendszerek'+'</li>'),
        "ondulatorieRez": ('<li>'+'Stacionárius interferencia keletkezésének feltételei'+'</li>'+
                            '<li>'+'A hullámhossz'+'</li>'+
                            '<li>'+'Young készülékének alkatrészei'+'</li>'+
                            '<li>'+'Interferencia peremek'+'</li>'+
                            '<li>'+'Optikai út különbség'+'</li>'+
                            '<li>'+'Maximális és minimális interferencia feltételek'+'</li>'+
                            '<li>'+'Interfringe'+'</li>'),
        "cuanticaRez": ('<li>'+'A külső fotoelektromos hatás törvényei'+'</li>'+
                        '<li>'+'Planck hipotézise. Einstein hipotézise. Einstein egyenlete'+'</li>'+
                        '<li>'+'A külső fotoelektromos hatás törvényeinek értelmezése'+'</li>'),

        //teorieMecanica.html
        "teorieMecanicaTitle": "Mechanika elmélet",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Elvek és törvények'+'</h2>'+'<br>'+'<br>'+' <br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Sebesség'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Képlet: '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Mérési egység: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</ li >'+
                                    '<li>'+'Átlagsebesség: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b >'+'</li>'+
                                    '<li>'+'A sebességvektor jelentése ugyanaz, mint az elmozdulás: v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>' + ' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Gyorsulás'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Képlet: '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Mérési egység: '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+' </sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A Galileo képlet:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+') '+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Sebességszabály: '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</b>'+'</ li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Mozgás törvénye:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0 '+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A mechanika I. elve:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Minden test megtartja nyugalmi állapotát vagy egyenletes egyenes vonalú mozgását mindaddig, amíg semmilyen más erő nem hat rá, vagy a rá ható erők összege nulla.'+'</li>'+
                            '<li>'+'Röviden: A sebesség '+'<b>'+'konstans'+'</b>'+', ha '+'<b>'+'az erőkre kifejtett erők eredője. body'+' </b>'+' értéke 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A mechanika második elve:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Egy test mozgási mennyiségének változása egyenesen arányos az alkalmazott erővel, és abban az irányban következik be, amelyben az erő hat.'+'</li>'+
                            '<li>'+'Más szavakkal mondva: a testre ható erő az erővel arányos és a test tömegével fordítottan arányos gyorsulást ad.'+'</li>'+
                            '<li>'+'Képlet: F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A mechanika harmadik alapelve:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Amikor az egyik test egy másik testre erővel hat (amelyet cselekvési erőnek neveznek), akkor a második test is ugyanolyan nagyságú és irányú erővel (úgynevezett reakcióerővel) hat az első testre, de szemben. Ez az elv a cselekvés és reakció elveként is ismert.'+'</li>'+
                            '<li>'+'Képletként írva: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub > '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Hooke törvénye:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Egy rugó megnyúlása egyenesen arányos a deformáló erővel (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Közvetlenül arányos a rugó kezdeti hosszával (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br >'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'A rugó keresztmetszeti területével fordítottan arányos:'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Hooke törvénye:'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Vezeték feszültsége:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A huzalban lévő feszültség ( T ) a nyújthatatlan huzal (amely nem nyúlik meg) reakcióerejét jelenti a rá kifejtett erőre.'+'</li>'+'<br>' +
                            '<li>'+'Ha egy testet felfüggesztünk egy nyújthatatlan szálra, két páros erő jelenik meg:'+'<br>'+'<br>'+
    
                                'A test nyomóereje (F) az az erő, amellyel a test a huzalra hat (ez egyenlő a test súlyával).'+'<br>'+'<br>'+
                                
                                'A huzalban lévő feszültség (T) az az erő, amellyel a huzal a rajta felfüggesztett testre hat.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A csúszósúrlódás törvényei:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A súrlódás első törvénye:'+'<br>'+'<br>'+
                            
                                'A csúszó súrlódási erő értéke az érintkező felületek jellegétől és megmunkáltságának mértékétől függ. A függőséget egy dimenzió nélküli mennyiség, az úgynevezett csúszósúrlódási tényező jellemzi, amely 0 és 1 közötti értékeket vesz fel, és μ-vel jelöljük.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'A súrlódás második törvénye:'+'<br>'+'<br>'+
                                'A csúszó súrlódási erő értéke nem függ a testek közötti érintkezési felület területétől.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'A súrlódás harmadik törvénye:'+'<br>'+'<br>'+
                                'A csúszó súrlódási erő értéke a test által a csúszófelületre kifejtett nyomóerőtől függ, amely nagysága megegyezik a testek érintkezési felületén fellépő normál reakcióerővel.'+'<br>'+'<br>' +
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'A súrlódási erő képletét a következő összefüggés adja meg:'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Tételek változatossági és természetvédelmi törvényei'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Gépészeti munka:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A testre a test elmozdulásának irányában és irányában ható állandó erő mechanikai munkája (L) az a skaláris fizikai mennyiség, amely egyenlő az erő modulusának (F) és a a test elmozdulási modulusa (d).' +'</li>'+'<br>'+
                            '<li>'+'Számítási képlet: L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Aláírási konvenciók:'+'<br>'+
                                '1. Egy erő mechanikai munkája akkor pozitív, ha az erő segíti a test mozgatását. Ez akkor fordul elő, ha az erőnek ugyanolyan iránya és értelme van, mint a test mozgásának.'+'<br>'+'<br>'+
                                '2. Egy erő mechanikai munkája negatív, ha az erő ellentétes a test mozgásával. Ez akkor fordul elő, ha az erővektor mozgási irányú komponense ellentétes a test mozgásával.'+'<br>'+'<br>'+
                                '3. Egy erő mechanikai munkája nulla, ha az erő sem nem segíti a testet mozgásban, sem nem áll ellen a mozgásnak. Ez akkor történik, ha az erővektor merőleges a test mozgási irányára.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Mechanikai teljesítmény:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A mechanikai teljesítmény (P) az a skaláris fizikai mennyiség, amely megegyezik az elvégzett mechanikai munka (L) és a mechanikai munka elvégzésének időtartama (Δt) arányával.'+'</li> '+'<br>'+
                            '<li>'+'P = Mechanikai munka / idő = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Kinetikus energia:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A mechanikai energia (E) az a fizikai mennyiség, amely a test mechanikai munkavégzésére való képességét jellemzi, mértékegysége a joule (J).'+'</li>'+'<br>' +
                            '<li>'+'A kinetikus energia (E'+'<sub>'+'c'+'</sub>'+') az az energia, amellyel egy mozgó test rendelkezik.'+'</li> '+ '<br>'+
                            '<li>'+'Egy bizonyos sebességgel mozgó test mozgási energiáját a következő képlettel számítjuk ki:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+ '</li>'+'<br>'+
                            '<li>'+'A mozgási energia változásának törvénye:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Összesen'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Gravitációs potenciálenergia:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A gravitációs potenciálenergia (E'+'<sub>'+'pg'+'</sub>'+') az az energia, amellyel egy test a talajtól egy bizonyos magasságban rendelkezik. '+'</li>'+'<br>'+
                            '<li>'+'Egy test gravitációs potenciálenergiája egyenlő: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</ li >'+'<br>'+
                            '<li>'+'A gravitációs potenciálenergia változásának törvénye:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>' +'<br>'+
                            '<li>'+'Azt az erőt, amely a megtett úttól független mechanikai munkát végez, és csak a szélső pozícióktól (kezdeti és végső) függ, konzervatív erőnek nevezzük.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Mechanikai energia megőrzése:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A mechanikai energia megmaradásának törvénye:'+'<br>'+'<br>'+
    
                                '\"Egy test mechanikai energiája megmarad, ha csak konzervatív erők hatnak rá.\"'+'<br>'+'<br>'+
                            
                                'E = állandó, ha a test kívülről el van szigetelve, és F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Momentum variációs tétel:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A test lendületét a lendület megmaradásának törvénye jelöli, és a képlete:'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\" vertical-align : 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'A mechanikai impulzus változásának tétele'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A lendület megmaradásának törvénye:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Ha a mechanikai rendszer le van választva, az eredő erő F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margó balra : -1.5px\">'+'&#8407;'+'</span> '+' nulla.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R' +'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'A mechanikai impulzus megmaradásának törvénye az SRI-ben:'+'<br>'+'<br>'+
                                'Az izolált mechanikai rendszerek mechanikai lendülete megmarad.'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, azaz Δp'+'<span style=\ "vertical-align : 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align : 4px; margin-left : -25px \">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                                '<li>'+'Izolált mechanikai rendszerek esetében a teljes impulzus nem változhat belső erők hatására.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Termodinamikai elmélet",
        "teorieTermodinamica": "",

        "teorieInapoiBtn": "Vissza a kiválasztási menühöz",
        "invataTitle": "A fejezet ezen részében olyan fogalmakat fogsz megtanulni, mint például:",
        "inchideBtn": "Rakd le",
        "teorieBtn": "Elmélet",
        "testBtn": "Kezdj el egy tesztet",
        "acasaBtn": "Az otthon",
    },
    "germana":
    {
        //index.html
        "titleSet": "Einstellungen",
        "titleLogin": "Anmelden",
        "titleDisconnect": "Abmelden",
        "titleLang": "Fremdsprachen",
        "titleMec": "Mechanik",
        "titleTer": "Thermodynamik",
        "titleElec": "Elektromechanisch",
        "titleOp": "Optisch",

        //register.html
        "goBackReg": "zurück",
        "titleReg": "Geben Sie Ihre Anmeldedaten ein",
        "usernameReg": "Geben Sie Ihren Benutzernamen ein",
        "emailReg": "Geben sie ihre E-Mailadresse ein",
        "passwordReg": "Geben Sie das Passwort ein",
        "register": "Melden Sie sich an",
        "footerReg": "Sie haben bereits ein Konto?",
        "footerRegBtn": "Anmelden",

        //login.html
        "goBackLog": "zurück",
        "titleLog": "Geben Sie Ihre Anmeldedaten ein",
        "emailLog": "Geben sie ihre E-Mailadresse ein",
        "passwordLog": "Geben Sie das Passwort ein",
        "login": "Anmelden",
        "footerLog": "Nicht registriert?",
        "footerLogBtn": "Ein Konto erstellen",

        //mecanica.html
        "mecanicaTitle": "Mechanik",
        "principiiTitle": "Prinzipien und Gesetze",
        "teoremeTitle": "Variationssätze und Erhaltungssätze",
        "principiiTitleModal": "Prinzipien und Gesetze der klassischen Mechanik",
        "teoremeTitleModal": "Variationssätze und Erhaltungssätze",
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

        //termodinamica.html
        "termodinamicaTitle": "Thermodynamik",
        "notiuniTitle": "Erste Schritte",
        "principiuITitle": "Prinzip I",
        "motoareTitle": "Wärmekraftmaschinen",
        "principiuIITitle": "Das zweite Prinzip",
        "notiuniTitleModal": "Grundbegriffe der Thermodynamik",
        "principiuITitleModal": "Das erste Prinzip der Thermodynamik",
        "motoareTitleModal": "Wärmekraftmaschinen",
        "principiuIITitleModal": "Das zweite Prinzip der Thermodynamik",
        "notiuniRez": ('<li>'+'Molekulare Masse'+'</li>'+
                        '<li>'+'Relative Molekülmasse'+'</li>'+
                        '<li>'+'Menge der Substanz'+'</li>'+
                        '<li>'+'Molmasse'+'</li>'+
                        '<li>'+'Molares Volumen'+'</li>'+
                        '<li>'+'Avogadros Nummer'+'</li>'+
                        '<li>'+'Wärmehaushalt'+'</li>'+
                        '<li>'+'Entsprechung zwischen Zahlenwert der Temperatur in Celsius-Skala und Zahlenwert x'+'</li>'),
        "principiuIRez": ('<li>'+'Mechanische Arbeit in der Thermodynamik, Prozessgröße'+'</li>'+
                        '<li>'+'Geometrische Interpretation mechanischer Arbeit in der Thermodynamik'+'</li>'+
                        '<li>'+'Innere Energie eines thermodynamischen Systems, Zustandsgröße'+'</li>'+
                        '<li>'+'Wärme, Prozessgröße'+'</li>'+
                        '<li>'+'Adiabatische Schale'+'</li>'+
                        '<li>'+'Das erste Prinzip der Thermodynamik'+'</li>'+
                        '<li>'+'Kalorienkoeffizienten (Definitionsrelationen, SI-Einheiten)'+'</li>'+
                        '<li>'+'Die Robert-Mayer-Beziehung'+'</li>'+
                        '<li>'+'Anwendung des ersten Prinzips der Thermodynamik auf ideale Gasumwandlungen:'+'<br>'+
                            '<ul>'+
                                '<li>'+'Innere Energie des idealen Gases (einatomig, zweiatomig, mehratomig)'+'</li>'+	
                                '<li>'+'Variation der inneren Energie, der mechanischen Arbeit und der Wärmemenge für einfache ideale Gasumwandlungen (isobar, isochor, isotherm, adiabatisch)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'Erklären der Funktionsweise einer Wärmekraftmaschine'+'</li>'+
                    '<li>'+'Beschreibung der wichtigsten thermodynamischen Kreisläufe – Otto, Diesel – auf deren Grundlage Wärmekraftmaschinen funktionieren'+'</li>'+
                    '<li>'+'Der Wirkungsgrad einer Wärmekraftmaschine'+'</li>'),
        "principiuIIRez": ('<li>'+'Der Carnot-Zyklus, die Effizienz des Carnot-Zyklus'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Elektromechanisch",
        "curentulTitle": "Elektrizität",
        "ohmTitle": "Ohm'sches Gesetz",
        "kirchhoffTitle": "Kirchhoffs Gesetz",
        "grupareTitle": "Gruppierung von Widerständen und Generatoren",
        "energieTitle": "Energie und Strom",
        "curentulTitleModal": "Elektrizität",
        "ohmTitleModal": "Ohm'sches Gesetz",
        "kirchhoffTitleModal": "Kirchhoffs Gesetz",
        "grupareTitleModal": "Gruppierung von Widerständen und Generatoren",
        "energieTitleModal": "Energie und Strom",
        "curentulRez": ('<li>'+'Elektrizität'+'</li>'+
                        '<li>'+'Die Intensität des elektrischen Stroms'+'</li>'+
                        '<li>'+'Die Maßeinheit für die Intensität des elektrischen Stroms'+'</li>'+
                        '<li>'+'Einfacher Stromkreis'+'</li>'+
                        '<li>'+'Die elektromotorische Spannung eines elektrischen Generators, die Spannung an den Generatorklemmen, der Spannungsabfall innerhalb des Generators'+'</li>'),
        "ohmRez": ('<li>'+'Elektrischer Wiederstand'+'</li>'+
                    '<li>'+'Ohmsches Gesetz für einen Teil eines Stromkreises und für den gesamten Stromkreis'+'</li>'+
                    '<li>'+'Die Maßeinheit für den elektrischen Widerstand'+'</li>'+
                    '<li>'+'Elektrischer Widerstand, Abhängigkeit des elektrischen Widerstands von der Temperatur'+'</li>'),
        "kirchhoffRez": ('<li>'+'Das Stromnetz'+'</li>'+
                        '<li>'+'Der Netzwerkknoten'+'</li>'+
                        '<li>'+'Das Netzwerkauge'+'</li>'+
                        '<li>'+'Kirchhoffs Gesetze'+'</li>'),
        "grupareRez": ('<li>'+'Der äquivalente elektrische Widerstand einer Reihen-, Parallel- oder Mischgruppierung mehrerer Widerstände'+'</li>'+
                        '<li>'+'Der äquivalente elektrische Widerstand und die äquivalente elektromotorische Spannung entsprechen der Reihen-/Parallelschaltung mehrerer elektrischer Generatoren'+'</li>'),
        "energieRez": ('<li>'+'Der Ausdruck der Energie, die der Generator in einem Zeitintervall an den Verbraucher überträgt'+'</li>'+
                        '<li>'+'Ausdruck der im Generator abgegebenen Energie'+'</li>'+
                        '<li>'+'Der Wirkungsgrad eines einfachen Stromkreises'+'</li>'+
                        '<li>'+'Elektrische Energie, Beziehungen, die elektrische Energie charakterisieren'+'</li>'),

        //optica.html
        "opticaTitle": "Optisch",
        "geometricaTitle": "Geometrische Optik",
        "ondulatorieTitle": "Wellenoptik",
        "cuanticaTitle": "Elemente der Quantenphysik",
        "geometricaTitleModal": "Geometrische Optik",
        "ondulatorieTitleModal": "Wellenoptik",
        "cuanticaTitleModal": "Elemente der Quantenphysik",
        "geometricaRez": ('<li>'+'Lichtreflexion'+'</li>'+
                            '<li>'+'Lichtbrechung'+'</li>'+
                            '<li>'+'Die Gesetze der Reflexion'+'</li>'+
                            '<li>'+'Die Brechungsgesetze'+'</li>'+
                            '<li>'+'Brechungsindex'+'</li>'+
                            '<li>'+'Konjugierte Punkte'+'</li>'+
                            '<li>'+'Paraxiale Faszikel'+'</li>'+
                            '<li>'+'Reale/virtuelle Bilder'+'</li>'+
                            '<li>'+'Optische Linse'+'</li>'+
                            '<li>'+'Die charakteristischen Elemente einer dünnen Linse (Achsen, optisches Zentrum, Brennpunkte)'+'</li>'+
                            '<li>'+'Konvergenz einer dünnen Linse'+'</li>'+
                            '<li>'+'Formeln für dünne Linsen'+'</li>'+
                            '<li>'+'Bilder realer/virtueller Objekte in dünnen Linsen'+'</li>'+
                            '<li>'+'Linsensysteme'+'</li>'),
        "ondulatorieRez": ('<li>'+'Bedingungen für den Erhalt stationärer Interferenzen'+'</li>'+
                            '<li>'+'Die Wellenlänge'+'</li>'+
                            '<li>'+'Komponenten von Youngs Gerät'+'</li>'+
                            '<li>'+'Interferenzstreifen'+'</li>'+
                            '<li>'+'Optischer Wegunterschied'+'</li>'+
                            '<li>'+'Maximale und minimale Interferenzbedingungen'+'</li>'+
                            '<li>'+'Eingreifen'+'</li>'),
        "cuanticaRez": ('<li>'+'Die Gesetze des äußeren photoelektrischen Effekts'+'</li>'+
                        '<li>'+'Plancks Hypothese. Einsteins Hypothese. Einsteins Gleichung'+'</li>'+
                        '<li>'+'Interpretation der Gesetze des externen photoelektrischen Effekts'+'</li>'),

        //teorieMecanica.html
        "teorieMecanicaTitle": "Theorie der Mechanik",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Prinzipien und Gesetze'+'</h2>'+'<br>'+'<br>'+' <br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Geschwindigkeit'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formel: '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Maßeinheit: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</ li >'+
                                    '<li>'+'Durchschnittsgeschwindigkeit: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b >'+'</li>'+
                                    '<li>'+'Geschwindigkeitsvektor hat die gleiche Bedeutung wie Verschiebung: v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>' + ' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Acceleration'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formel: '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Maßeinheit: '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+ ' </sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Die Galileo-Formel:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+') '+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Geschwindigkeitsgesetz: '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</ li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Bewegungsgesetz:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0 '+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Prinzip I der Mechanik:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Jeder Körper behält seinen Ruhezustand oder seine gleichförmige geradlinige Bewegung bei, solange keine anderen Kräfte auf ihn einwirken oder die Summe der auf ihn einwirkenden Kräfte Null ist.'+'</li>'+
                            '<li>'+'Kurz gesagt: Die Geschwindigkeit ist '+'<b>'+'konstant'+'</b>'+', wenn '+'<b>'+'die Resultierende der auf sie ausgeübten Kräfte ist body'+' </b>'+' ist 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Zweites Prinzip der Mechanik:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Die Änderung der Bewegungsmenge eines Körpers ist direkt proportional zur ausgeübten Kraft und erfolgt in der Richtung, in die die Kraft wirkt.'+'</li>'+
                            '<li>'+'Mit anderen Worten ausgedrückt: Eine auf einen Körper einwirkende Kraft verleiht ihm eine Beschleunigung, die proportional zur Kraft und umgekehrt proportional zur Masse des Körpers ist.'+'</li>'+
                            '<li>'+'Formel: F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Drittes Prinzip der Mechanik:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Wenn ein Körper mit einer Kraft (Aktionskraft genannt) auf einen anderen Körper einwirkt, wirkt der zweite Körper ebenfalls mit einer Kraft (Reaktionskraft genannt) gleicher Größe und Richtung auf den ersten Körper ein, aber Gegenteil. Dieses Prinzip ist auch als Aktions- und Reaktionsprinzip bekannt.'+'</li>'+
                            '<li>'+'Als Formel geschrieben: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub > '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Hookes Gesetz:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Die Dehnung einer Feder ist direkt proportional zur Verformungskraft (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Direkt proportional zur anfänglichen Federlänge (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br >'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'Umgekehrt proportional zur Querschnittsfläche der Feder:'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Hookes Gesetz:'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Drahtspannung:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Die Spannung im Draht (T) stellt die Reaktionskraft des nicht dehnbaren Drahtes (der sich nicht verlängert) auf die auf ihn ausgeübte Kraft dar.'+'</li>'+'<br>' +
                            '<li>'+'Wenn wir einen Körper an einem nicht dehnbaren Faden aufhängen, treten zwei gepaarte Kräfte auf:'+'<br>'+'<br>'+
    
                                'Die Druckkraft des Körpers (F) ist die Kraft, mit der der Körper auf den Draht einwirkt (sie ist gleich dem Gewicht des Körpers).'+'<br>'+'<br>'+
                                
                                'Die Spannung im Draht (T) ist die Kraft, mit der der Draht auf den daran hängenden Körper einwirkt.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Gleitreibungsgesetze:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Erstes Reibungsgesetz:'+'<br>'+'<br>'+
                            
                                'Der Wert der Gleitreibungskraft hängt von der Art und dem Grad der Bearbeitung der sich berührenden Oberflächen ab. Die Abhängigkeit wird durch eine dimensionslose Größe, den sogenannten Gleitreibungskoeffizienten, charakterisiert, der Werte zwischen 0 und 1 annimmt und mit μ bezeichnet wird.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'Das Zweite Gesetz der Reibung:'+'<br>'+'<br>'+
                                'Der Wert der Gleitreibungskraft hängt nicht von der Fläche der Kontaktfläche zwischen den Körpern ab.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'Drittes Reibungsgesetz:'+'<br>'+'<br>'+
                                '„Der Wert der Gleitreibungskraft hängt von der Anpresskraft ab, die der Körper auf die Gleitfläche ausübt und deren Größe der normalen Reaktionskraft an der Kontaktfläche zwischen den Körpern entspricht.“'+'<br>'+'<br>' +
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'Die Formel der Reibungskraft ergibt sich aus der Beziehung:'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Theoreme der Variations- und Erhaltungsgesetze'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Mechanische Arbeit:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Die mechanische Arbeit (L) einer konstanten Kraft, die auf einen Körper in Richtung und Richtung der Verschiebung des Körpers wirkt, ist die skalare physikalische Größe, die dem Produkt des Moduls der Kraft (F) und der entspricht Modul der Verschiebung des Körpers (d).' +'</li>'+'<br>'+
                            '<li>'+'Berechnungsformel: L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Zeichenkonventionen:'+'<br>'+
                                '1. Die mechanische Arbeit einer Kraft ist positiv, wenn die Kraft dabei hilft, den Körper zu bewegen. Dies geschieht, wenn die Kraft die gleiche Richtung und den gleichen Sinn hat wie die Bewegung des Körpers.'+'<br>'+'<br>'+
                                '2. Die mechanische Arbeit einer Kraft ist negativ, wenn die Kraft der Bewegung des Körpers entgegenwirkt. Dies geschieht, wenn die Komponente des Kraftvektors in Bewegungsrichtung der Bewegung des Körpers entgegengesetzt ist.'+'<br>'+'<br>'+
                                '3. Die mechanische Arbeit einer Kraft ist Null, wenn die Kraft weder zur Bewegung des Körpers beiträgt noch der Bewegung entgegenwirkt. Dies geschieht, wenn der Kraftvektor senkrecht zur Bewegungsrichtung des Körpers steht.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Mechanische Leistung:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Mechanische Leistung (P) ist die skalare physikalische Größe, die dem Verhältnis zwischen der geleisteten mechanischen Arbeit (L) und der Zeit (Δt) entspricht, während der diese mechanische Arbeit verrichtet wird.'+'</li> '+'<br>'+
                            '<li>'+'P = Mechanische Arbeit / Zeit = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Kinetische Energie:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Mechanische Energie (E) ist die physikalische Größe, die die Fähigkeit eines Körpers charakterisiert, mechanische Arbeit zu verrichten. Die Maßeinheit ist Joule (J).'+'</li>'+'< br>' +
                            '<li>'+'Kinetische Energie (E'+'<sub>'+'c'+'</sub>'+') ist die Energie, die ein sich bewegender Körper hat.'+'</li> '+ '<br>'+
                            '<li>'+'Die kinetische Energie eines sich bewegenden Körpers mit einer bestimmten Geschwindigkeit wird mit der Formel berechnet:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+ '</li>'+'<br>'+
                            '<li>'+'Das Gesetz der Variation der kinetischen Energie:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Total'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Gravitationspotentialenergie:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Gravitationspotentialenergie (E'+'<sub>'+'pg'+'</sub>'+') ist die Energie, die ein Körper in einer bestimmten Höhe über dem Boden hat'+'</li>'+'<br>'+
                            '<li>'+'Die potentielle Gravitationsenergie eines Körpers ist gleich: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</ li >'+'<br>'+
                            '<li>'+'Gesetz der Variation der potentiellen Gravitationsenergie:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>' +'<br>'+
                            '<li>'+'Eine Kraft, die mechanische Arbeit verrichtet, die unabhängig vom zurückgelegten Weg ist und nur von den Extrempositionen (Anfangs- und Endposition) abhängt, wird als konservative Kraft bezeichnet.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Erhaltung der mechanischen Energie:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Das Gesetz der Erhaltung der mechanischen Energie:'+'<br>'+'<br>'+
    
                                '\"Die mechanische Energie eines Körpers bleibt erhalten, wenn nur konservative Kräfte auf ihn einwirken.\"'+'<br>'+'<br>'+
                            
                                'E = konstant, wenn der Körper von außen isoliert ist und F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Momentum Variation Theorem:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Der Impuls des Körpers wird durch das Gesetz der Impulserhaltung beschrieben und hat die Formel:'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'Theorem der Variation des mechanischen Impulses'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Das Gesetz der Impulserhaltung:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Wenn das mechanische System isoliert ist, beträgt die resultierende Kraft F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margin- left : -1.5px\">'+'&#8407;'+'</span> '+'ist Null.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R' +'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'Das Gesetz der Erhaltung des mechanischen Impulses im SRI:'+'<br>'+'<br>'+
                                'Der mechanische Impuls isolierter mechanischer Systeme bleibt erhalten.'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, d. h. Δp'+'<span style=\ "vertical-align : 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align : 4px; margin-left : -25px \">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                                '<li>'+'Bei isolierten mechanischen Systemen kann sich ihr Gesamtimpuls unter Einwirkung innerer Kräfte nicht ändern.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Theorie der Thermodynamische",
        "teorieTermodinamica": "",

        "teorieInapoiBtn": "Zurück zum Auswahlmenü",
        "invataTitle": "In diesem Teil des Kapitels lernen Sie Konzepte kennen wie:",
        "inchideBtn": "Auflegen",
        "teorieBtn": "Theorie",
        "testBtn": "Starten Sie einen Test",
        "acasaBtn": "Das Zuhause",
    },
    "franceza":
    {
        //index.html
        "titleSet": "Paramètres",
        "titleLogin": "Se connecter",
        "titleDisconnect": "Se déconnecter",
        "titleLang": "Langues",
        "titleMec": "Mécanique",
        "titleTer": "Thermodynamique",
        "titleElec": "Électromécanique",
        "titleOp": "Optique",

        //register.html
        "goBackReg": "dos",
        "titleReg": "Entrez vos identifiants d'inscription",
        "usernameReg": "Entrez votre nom d'utilisateur",
        "emailReg": "Entrez votre adresse email",
        "passwordReg": "Entrer le mot de passe",
        "register": "S'inscrire",
        "footerReg": "Vous avez déjà un compte?",
        "footerRegBtn": "Se connecter",

        //login.html
        "goBackLog": "dos",
        "titleLog": "Entrez vos informations de connexion",
        "emailLog": "Entrez votre adresse email",
        "passwordLog": "Entrer le mot de passe",
        "login": "Se connecter",
        "footerLog": "Non enregistré?",
        "footerLogBtn": "Créer un compte",

        //mecanica.html
        "mecanicaTitle": "Mécanique",
        "principiiTitle": "Principes et lois",
        "teoremeTitle": "Théorèmes de variation et lois de conservation",
        "principiiTitleModal": "Principes et lois de la mécanique classique",
        "teoremeTitleModal": "Théorèmes de variation et lois de conservation",
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

        //termodinamica.html
        "termodinamicaTitle": "Thermodynamique",
        "notiuniTitle": "Commencer",
        "principiuITitle": "Principe I",
        "motoareTitle": "Moteurs thermiques",
        "principiuIITitle": "Le deuxième principe",
        "notiuniTitleModal": "Concepts de base en thermodynamique",
        "principiuITitleModal": "Le premier principe de la thermodynamique",
        "motoareTitleModal": "Moteurs thermiques",
        "principiuIITitleModal": "Le deuxième principe de la thermodynamique",
        "notiuniRez": ('<li>'+'Masse moléculaire'+'</li>'+
                        '<li>'+'Masse moléculaire relative'+'</li>'+
                        '<li>'+'Une quantité de substance'+'</li>'+
                        '<li>'+'Masse molaire'+'</li>'+
                        '<li>'+'Volume molaire'+'</li>'+
                        '<li>'+'Le numéro d\'Avogadro'+'</li>'+
                        '<li>'+'Bilan thermique'+'</li>'+
                        '<li>'+'Correspondance entre la valeur numérique de la température sur l\'échelle Celsius et la valeur numérique x'+'</li>'),
        "principiuIRez": ('<li>'+'Travaux mécaniques en thermodynamique, quantité de processus'+'</li>'+
                        '<li>'+'Interprétation géométrique du travail mécanique en thermodynamique'+'</li>'+
                        '<li>'+'Énergie interne d\'un système thermodynamique, quantité d\'état'+'</li>'+
                        '<li>'+'Chaleur, taille du processus'+'</li>'+
                        '<li>'+'Coque adiabatique'+'</li>'+
                        '<li>'+'Le premier principe de la thermodynamique'+'</li>'+
                        '<li>'+'Coefficients caloriques (relation de définition, unités de mesure en SI)'+'</li>'+
                        '<li>'+'La relation Robert-Mayer'+'</li>'+
                        '<li>'+'Application du premier principe de la thermodynamique aux transformations des gaz parfaits :'+'<br>'+
                            '<ul>'+
                                '<li>'+'Énergie interne du gaz parfait (monoatomique, diatomique, polyatomique)'+'</li>'+	
                                '<li>'+'Variation de l\'énergie interne, du travail mécanique et de la quantité de chaleur pour des transformations simples de gaz parfaits (isobare, isochore, isotherme, adiabatique)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'Expliquer le fonctionnement d\'un moteur thermique'+'</li>'+
                    '<li>'+'Description des principaux cycles thermodynamiques – Otto, Diesel – sur lesquels fonctionnent les moteurs thermiques'+'</li>'+
                    '<li>'+'L\'efficacité d\'un moteur thermique'+'</li>'),
        "principiuIIRez": ('<li>'+'Le cycle Carnot, l\'efficacité du cycle Carnot'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Électromécanique",
        "curentulTitle": "Électricité",
        "ohmTitle": "La loi d'Ohm",
        "kirchhoffTitle": "La loi de Kirchhoff",
        "grupareTitle": "Regroupement de résistances et de générateurs",
        "energieTitle": "Énergie et puissance électrique",
        "curentulTitleModal": "Électricité",
        "ohmTitleModal": "La loi d'Ohm",
        "kirchhoffTitleModal": "La loi de Kirchhoff",
        "grupareTitleModal": "Regroupement de résistances et de générateurs",
        "energieTitleModal": "Énergie et puissance électrique",
        "curentulRez": ('<li>'+'Électricité'+'</li>'+
                        '<li>'+'L\'intensité du courant électrique'+'</li>'+
                        '<li>'+'L\'unité de mesure de l\'intensité du courant électrique'+'</li>'+
                        '<li>'+'Circuit électrique simple'+'</li>'+
                        '<li>'+'La tension électromotrice d\'un générateur électrique, la tension aux bornes du générateur, la chute de tension à l\'intérieur du générateur'+'</li>'),
        "ohmRez": ('<li>'+'Résistance électrique'+'</li>'+
                    '<li>'+'Loi d\'Ohm pour une partie d\'un circuit et pour l\'ensemble du circuit'+'</li>'+
                    '<li>'+'L\'unité de mesure de la résistance électrique'+'</li>'+
                    '<li>'+'Résistance électrique, dépendance de la résistivité électrique à la température'+'</li>'),
        "kirchhoffRez": ('<li>'+'Le réseau électrique'+'</li>'+
                        '<li>'+'Le noeud du réseau'+'</li>'+
                        '<li>'+'L\'oeil du réseau'+'</li>'+
                        '<li>'+'Les lois de Kirchhoff'+'</li>'),
        "grupareRez": ('<li>'+'La résistance électrique équivalente d\'un groupement série, parallèle ou mixte de plusieurs résistances'+'</li>'+
                        '<li>'+'La résistance électrique équivalente et la tension électromotrice équivalente correspondant au regroupement série/parallèle de plusieurs générateurs électriques'+'</li>'),
        "energieRez": ('<li>'+'L\'expression de l\'énergie transmise par le générateur au consommateur dans un intervalle de temps'+'</li>'+
                        '<li>'+'Expression de l\'énergie dissipée à l\'intérieur du générateur'+'</li>'+
                        '<li>'+'L\'efficacité d\'un simple circuit électrique'+'</li>'+
                        '<li>'+'L\'énergie électrique, les relations qui caractérisent l\'énergie électrique'+'</li>'),

        //optica.html
        "opticaTitle": "Optique",
        "geometricaTitle": "Optique géométrique",
        "ondulatorieTitle": "Optique ondulatoire",
        "cuanticaTitle": "Éléments de physique quantique",
        "geometricaTitleModal": "Optique géométrique",
        "ondulatorieTitleModal": "Optique ondulatoire",
        "cuanticaTitleModal": "Éléments de physique quantique",
        "geometricaRez": ('<li>'+'Réflexion de la lumière'+'</li>'+
                            '<li>'+'Réfraction de la lumière'+'</li>'+
                            '<li>'+'Les lois de la réflexion'+'</li>'+
                            '<li>'+'Les lois de la réfraction'+'</li>'+
                            '<li>'+'Indice de réfraction'+'</li>'+
                            '<li>'+'Points conjugués'+'</li>'+
                            '<li>'+'Fascicules paraxiaux'+'</li>'+
                            '<li>'+'Images réelles/virtuelles'+'</li>'+
                            '<li>'+'Lentille optique'+'</li>'+
                            '<li>'+'Les éléments caractéristiques d\'une lentille mince (axes, centre optique, foyers)'+'</li>'+
                            '<li>'+'Convergence d\'une lentille mince'+'</li>'+
                            '<li>'+'Formules de lentilles fines'+'</li>'+
                            '<li>'+'Images d\'objets réels/virtuels dans des lentilles fines'+'</li>'+
                            '<li>'+'Systèmes de lentilles'+'</li>'),
        "ondulatorieRez": ('<li>'+'Conditions d\'obtention d\'interférences stationnaires'+'</li>'+
                            '<li>'+'La longueur d\'onde'+'</li>'+
                            '<li>'+'Composants de l\'appareil de Young'+'</li>'+
                            '<li>'+'Franges d\'interférence'+'</li>'+
                            '<li>'+'Différence de chemin optique'+'</li>'+
                            '<li>'+'Conditions d\'interférence maximales et minimales'+'</li>'+
                            '<li>'+'Interfrange'+'</li>'),
        "cuanticaRez": ('<li>'+'Les lois de l\'effet photoélectrique externe'+'</li>'+
                        '<li>'+'L\'hypothèse de Planck. L\'hypothèse d\'Einstein. L\'équation d\'Einstein'+'</li>'+
                        '<li>'+'Interprétation des lois de l\'effet photoélectrique externe'+'</li>'),

        //teorieMecanica.html
        "teorieMecanicaTitle": "Théorie de la mécanique",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Principes et lois'+'</h2>'+'<br>'+'<br>'+' <br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Vitesse'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formule : '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Unité de mesure : '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</ li >'+
                                    '<li>'+'Vitesse moyenne : '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b >'+'</li>'+
                                    '<li>'+'Le vecteur vitesse a la même signification que le déplacement : v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>' + ' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Accélération'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formule : '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Unité de mesure : '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+ ' </sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Formule galiléenne :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+') '+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Loi de vitesse : '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</ li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Loi du mouvement :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0 '+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Principe I de la mécanique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Tout corps maintient son état de repos ou de mouvement rectiligne uniforme tant qu\'aucune autre force n\'agit sur lui ou que la somme des forces agissant sur lui est nulle.'+'</li>'+
                            '<li>'+'En bref : la vitesse est '+'<b>'+'constante'+'</b>'+' si '+'<b>'+'la résultante des forces appliquées au corps'+' </b>'+' vaut 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Deuxième principe de la mécanique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Le changement dans l\'ampleur du mouvement d\'un corps est directement proportionnel à la force appliquée et se produit dans la direction dans laquelle la force agit.'+'</li>'+
                            '<li>'+'Dit autrement : une force agissant sur un corps lui donne une accélération, proportionnelle à la force et inversement proportionnelle à la masse du corps.'+'</li>'+
                            '<li>'+'Formule : F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Troisième principe de la mécanique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Lorsqu\'un corps agit sur un autre corps avec une force (appelée force d\'action), le deuxième corps agit également sur le premier corps avec une force (appelée force de réaction) de même ampleur et direction, mais opposé. Ce principe est également connu sous le nom de principe d\'action et de réaction.'+'</li>'+
                            '<li>'+'Écrit sous forme de formule : '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub > '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Loi de Hooke :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'L\'allongement d\'un ressort est directement proportionnel à la Force déformante (F) :'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Directement proportionnel à la longueur initiale du ressort (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br >'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'Inversement proportionnel à la surface de la section transversale du ressort :'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Loi de Hooke :'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Tension du fil :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'La tension dans le fil ( T ) représente la force de réaction du fil inextensible (qui ne s\'allonge pas) à la force exercée sur lui.'+'</li>'+'<br>' +
                            '<li>'+'Lorsque l\'on suspend un corps à un fil inextensible, deux forces appariées apparaissent :'+'<br>'+'<br>'+
    
                                'La force de pression du corps (F) est la force avec laquelle le corps agit sur le fil (elle est égale au poids du corps).'+'<br>'+'<br>'+
                                
                                'La tension dans le fil (T) est la force avec laquelle le fil agit sur le corps qui y est suspendu.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Lois du frottement par glissement :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Première loi de friction :'+'<br>'+'<br>'+
                            
                                'La valeur de la force de frottement de glissement dépend de la nature et du degré de traitement des surfaces en contact. La dépendance est caractérisée par une quantité sans dimension, appelée coefficient de frottement de glissement, qui prend des valeurs comprises entre 0 et 1 et est notée μ.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'La deuxième loi du frottement :'+'<br>'+'<br>'+
                                'La valeur de la force de frottement de glissement ne dépend pas de la surface de contact entre les corps.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'Troisième loi de friction :'+'<br>'+'<br>'+
                                'La valeur de la force de frottement de glissement dépend de la force de pression exercée par le corps sur la surface de glissement, qui est égale en ampleur à la force de réaction normale à la surface de contact entre les corps.'+'<br>'+'<br>' +
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'La formule de la force de frottement est donnée par la relation :'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Théorèmes des lois de variation et de conservation'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Travaux mécaniques :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Le travail mécanique (L) d\'une force constante agissant sur un corps dans la direction et la direction du déplacement du corps est la grandeur physique scalaire égale au produit du module de la force (F) et du module de déplacement du corps (d).' +'</li>'+'<br>'+
                            '<li>'+'Formule de calcul : L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Conventions de signe :'+'<br>'+
                                '1. Le travail mécanique d’une force est positif si la force aide à déplacer le corps. Cela se produit si la force a la même direction et le même sens que le mouvement du corps.'+'<br>'+'<br>'+
                                '2. Le travail mécanique d’une force est négatif si la force s’oppose au mouvement du corps. Cela se produit si la composante du vecteur force dans la direction du mouvement est opposée au mouvement du corps.'+'<br>'+'<br>'+
                                '3. Le travail mécanique d’une force est nul si la force n’aide pas le corps à bouger ni ne s’oppose au mouvement. Cela se produit si le vecteur force est perpendiculaire à la direction du mouvement du corps.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Puissance mécanique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'La puissance mécanique (P) est la grandeur physique scalaire égale au rapport entre le travail mécanique (L) effectué et le temps (Δt) pendant lequel ce travail mécanique est effectué.'+'</li> '+'<br>'+
                            '<li>'+'P = Travail mécanique / temps = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Énergie cinétique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'L\'énergie mécanique (E) est la grandeur physique qui caractérise la capacité d\'un corps à effectuer un travail mécanique, l\'unité de mesure étant le joule (J).'+'</li>'+'<br>' +
                            '<li>'+'L\'énergie cinétique (E'+'<sub>'+'c'+'</sub>'+') est l\'énergie dont dispose un corps en mouvement.'+'</li> '+ '<br>'+
                            '<li>'+'L\'énergie cinétique d\'un corps en mouvement avec une certaine vitesse est calculée avec la formule :'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+ '</li>'+'<br>'+
                            '<li>'+'La loi de variation de l\'énergie cinétique :'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Total'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Énergie potentielle gravitationnelle :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'L\'énergie potentielle gravitationnelle (E'+'<sub>'+'pg'+'</sub>'+') est l\'énergie qu\'un corps possède à une certaine hauteur du sol.'+'</li>'+'<br>'+
                            '<li>'+'L\'énergie potentielle gravitationnelle d\'un corps est égale à : E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</ li >'+'<br>'+
                            '<li>'+'Loi de variation de l\'énergie potentielle gravitationnelle :'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>' +'<br>'+
                            '<li>'+'Une force qui effectue un travail mécanique indépendant du chemin parcouru et dépendant uniquement des positions extrêmes (initiale et finale) est appelée force conservatrice.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Conservation de l\'énergie mécanique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'La loi de conservation de l\'énergie mécanique :'+'<br>'+'<br>'+
    
                                '\"L\'énergie mécanique d\'un corps est conservée si seules des forces conservatrices agissent sur lui.\"'+'<br>'+'<br>'+
                            
                                'E = constant, si le corps est isolé de l\'extérieur et F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Théorème de variation de quantité de mouvement :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'L\'élan du corps est désigné par la loi de conservation de l\'élan et a la formule :'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\" vertical-align: 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'Théorème de variation de l\'impulsion mécanique'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical-align: 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'La loi de conservation de la quantité de mouvement :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Lorsque le système mécanique est isolé, la force résultante F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margin- left : -1.5px\">'+'&#8407;'+'</span> '+'est zéro.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R' +'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'La loi de conservation du moment mécanique en SRI :'+'<br>'+'<br>'+
                                'L\'impulsion mécanique des systèmes mécaniques isolés est conservée.'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, c\'est-à-dire Δp'+'<span style=\ "vertical-align: 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align: 4px; marge-gauche : -25px \">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                                '<li>'+'Dans le cas de systèmes mécaniques isolés, leur quantité de mouvement totale ne peut pas changer sous l\'action de forces internes.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Théorie de la thermodynamique",
        "teorieTermodinamica": "",

        "teorieInapoiBtn": "Retour au menu de sélection",
        "invataTitle": "Dans cette partie du chapitre, vous apprendrez des concepts tels que :",
        "inchideBtn": "Raccrocher",
        "teorieBtn": "Théorie",
        "testBtn": "Démarrer un test",
        "acasaBtn": "Á la maison",
    },
    "rusa":
    {
        //index.html
        "titleSet": "Настройки",
        "titleLogin": "Bойти",
        "titleDisconnect": "Выход",
        "titleLang": "Конечность",
        "titleMec": "Механика",
        "titleTer": "Термодинамика",
        "titleElec": "Электромеханический",
        "titleOp": "Оптический",

        //register.html
        "goBackReg": "Hазад",
        "titleReg": "Введите свои регистрационные данные",
        "usernameReg": "Введите имя пользователя",
        "emailReg": "Введите ваш адрес электронной почты",
        "passwordReg": "Введите пароль",
        "register": "Зарегистрироваться",
        "footerReg": "У вас уже есть аккаунт?",
        "footerRegBtn": "Войти",

        //login.html
        "goBackLog": "Hазад",
        "titleLog": "Введите данные для входа",
        "emailLog": "Введите ваш адрес электронной почты",
        "passwordLog": "Введите пароль",
        "login": "Авторизоваться",
        "footerLog": "Не зарегистрирован?",
        "footerLogBtn": "Завести аккаунт",

        //mecanica.html
        "mecanicaTitle": "Механика",
        "principiiTitle": "Принципы и законы",
        "teoremeTitle": "Вариационные теоремы и законы сохранения",
        "principiiTitleModal": "Принципы и законы классической механики",
        "teoremeTitleModal": "Вариационные теоремы и законы сохранения",
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

        //termodinamica.html
        "termodinamicaTitle": "Термодинамика",
        "notiuniTitle": "начиная",
        "principiuITitle": "Принцип I",
        "motoareTitle": "Тепловые двигатели",
        "principiuIITitle": "Второй принцип",
        "notiuniTitleModal": "Основные понятия термодинамики",
        "principiuITitleModal": "Первый принцип термодинамики",
        "motoareTitleModal": "Тепловые двигатели",
        "principiuIITitleModal": "Второй принцип термодинамики",
        "notiuniRez": ('<li>'+'Молекулярная масса'+'</li>'+
                        '<li>'+'Относительная молекулярная масса'+'</li>'+
                        '<li>'+'Количество вещества'+'</li>'+
                        '<li>'+'Молярная масса'+'</li>'+
                        '<li>'+'Молярный объем'+'</li>'+
                        '<li>'+'Число Авогадро'+'</li>'+
                        '<li>'+'Тепловой баланс'+'</li>'+
                        '<li>'+'Соответствие между числовым значением температуры по шкале Цельсия и числовым значением x'+'</li>'),
        "principiuIRez": ('<li>'+'Механическая работа в термодинамике, количество процесса'+'</li>'+
                        '<li>'+'Геометрическая интерпретация механической работы в термодинамике'+'</li>'+
                        '<li>'+'Внутренняя энергия термодинамической системы, величина состояния'+'</li>'+
                        '<li>'+'Тепло, размер процесса'+'</li>'+
                        '<li>'+'Адиабатическая оболочка'+'</li>'+
                        '<li>'+'Первый принцип термодинамики'+'</li>'+
                        '<li>'+'Коэффициенты калорийности (определение отношений, единицы измерения в СИ)'+'</li>'+
                        '<li>'+'Отношения Роберта-Майера'+'</li>'+
                        '<li>'+'Применение первого принципа термодинамики к превращениям идеального газа:'+'<br>'+
                            '<ul>'+
                                '<li>'+'Внутренняя энергия идеального газа (одноатомного, двухатомного, многоатомного)'+'</li>'+	
                                '<li>'+'Изменение внутренней энергии, механической работы и количества тепла при простых превращениях идеального газа (изобарное, изохорное, изотермическое, адиабатическое)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'Объяснение работы теплового двигателя.'+'</li>'+
                    '<li>'+'Описание основных термодинамических циклов – Отто, Дизеля – на основе которых работают тепловые двигатели.'+'</li>'+
                    '<li>'+'КПД теплового двигателя'+'</li>'),
        "principiuIIRez": ('<li>'+'Цикл Карно, эффективность цикла Карно'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Электромеханический",
        "curentulTitle": "Электричество",
        "ohmTitle": "Закон Ома",
        "kirchhoffTitle": "Закон Кирхгофа",
        "grupareTitle": "Группировка резисторов и генераторов",
        "energieTitle": "Энергетика и электроэнергия",
        "curentulTitleModal": "Электричество",
        "ohmTitleModal": "Закон Ома",
        "kirchhoffTitleModal": "Закон Кирхгофа",
        "grupareTitleModal": "Группировка резисторов и генераторов",
        "energieTitleModal": "Энергетика и электроэнергия",
        "curentulRez": ('<li>'+'Электричество'+'</li>'+
                        '<li>'+'Интенсивность электрического тока'+'</li>'+
                        '<li>'+'Единица измерения силы электрического тока'+'</li>'+
                        '<li>'+'Простая электрическая схема'+'</li>'+
                        '<li>'+'Электродвижущее напряжение электрогенератора, напряжение на клеммах генератора, падение напряжения внутри генератора'+'</li>'),
        "ohmRez": ('<li>'+'Электрическое сопротивление'+'</li>'+
                    '<li>'+'Закон Ома для части цепи и для всей цепи'+'</li>'+
                    '<li>'+'Единица измерения электрического сопротивления'+'</li>'+
                    '<li>'+'Электрическое сопротивление, зависимость удельного электросопротивления от температуры'+'</li>'),
        "kirchhoffRez": ('<li>'+'Электрическая сеть'+'</li>'+
                        '<li>'+'Сетевой узел'+'</li>'+
                        '<li>'+'Сетевой глаз'+'</li>'+
                        '<li>'+'Законы Кирхгофа'+'</li>'),
        "grupareRez": ('<li>'+'Эквивалентное электрическое сопротивление последовательной, параллельной или смешанной группы нескольких резисторов.'+'</li>'+
                        '<li>'+'Эквивалентное электрическое сопротивление и эквивалентное электродвижущее напряжение, соответствующее последовательному/параллельному соединению нескольких электрических генераторов.'+'</li>'),
        "energieRez": ('<li>'+'Выражение энергии, передаваемой генератором потребителю за интервал времени'+'</li>'+
                        '<li>'+'Выражение энергии, рассеиваемой внутри генератора'+'</li>'+
                        '<li>'+'КПД простой электрической цепи'+'</li>'+
                        '<li>'+'Электроэнергия, отношения, характеризующие электроэнергию'+'</li>'),

        //optica.html
        "opticaTitle": "Оптический",
        "geometricaTitle": "Геометрическая оптика",
        "ondulatorieTitle": "Волновая оптика",
        "cuanticaTitle": "Элементы квантовой физики",
        "geometricaTitleModal": "Геометрическая оптика",
        "ondulatorieTitleModal": "Волновая оптика",
        "cuanticaTitleModal": "Элементы квантовой физики",
        "geometricaRez": ('<li>'+'Отражение света'+'</li>'+
                            '<li>'+'Преломление света'+'</li>'+
                            '<li>'+'Законы отражения'+'</li>'+
                            '<li>'+'Законы преломления'+'</li>'+
                            '<li>'+'Показатель преломления'+'</li>'+
                            '<li>'+'Сопряженные точки'+'</li>'+
                            '<li>'+'Параксиальные пучки'+'</li>'+
                            '<li>'+'Реальные/виртуальные изображения'+'</li>'+
                            '<li>'+'Оптическая линза'+'</li>'+
                            '<li>'+'Характерные элементы тонкой линзы (оси, оптический центр, фокусы)'+'</li>'+
                            '<li>'+'Конвергенция тонкой линзы'+'</li>'+
                            '<li>'+'Формулы тонких линз'+'</li>'+
                            '<li>'+'Изображения реальных/виртуальных объектов в тонких линзах'+'</li>'+
                            '<li>'+'Системы линз'+'</li>'),
        "ondulatorieRez": ('<li>'+'Условия получения стационарных помех'+'</li>'+
                            '<li>'+'Длина волны'+'</li>'+
                            '<li>'+'Компоненты устройства Янга'+'</li>'+
                            '<li>'+'Интерференционные полосы'+'</li>'+
                            '<li>'+'Оптическая разность путей'+'</li>'+
                            '<li>'+'Максимальные и минимальные условия помех'+'</li>'+
                            '<li>'+'Интербаринг'+'</li>'),
        "cuanticaRez": ('<li>'+'Законы внешнего фотоэффекта'+'</li>'+
                        '<li>'+'Гипотеза Планка. Гипотеза Эйнштейна. Уравнение Эйнштейна'+'</li>'+
                        '<li>'+'Интерпретация законов внешнего фотоэффекта'+'</li>'),

        //teorieMecanica.html
        "teorieMecanicaTitle": "Теория механики",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Принципы и законы'+'</h2>'+'<br>'+'<br>'+' <br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Скорость'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Формула: '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Единица измерения: '+'<b>'+'&lt;'+'v'+'&gt;'+' = м/с'+'</b>'+'</ li >'+
                                    '<li>'+'Средняя скорость: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b >'+'</li>'+
                                    '<li>'+'Вектор скорости имеет то же значение, что и смещение: v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>' + ' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Ускорение'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Формула: '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Единица измерения: '+'<b>'+'&lt;'+'a'+'&gt;'+' = м/с'+'<sup>'+'2'+ ' </sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Формула Галилея:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+') '+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Закон скорости: '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</ ли>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Закон движения:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0 '+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Принцип I механики:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Любое тело сохраняет состояние покоя или равномерного прямолинейного движения до тех пор, пока на него не действуют другие силы или сумма действующих на него сил равна нулю.'+'</li>'+
                            '<li>'+'Коротко: скорость равна '+'<b>'+'constant'+'</b>'+', если '+'<b>'+'результат сил, приложенных к body'+' </b>'+' равен 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Второй принцип механики:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Изменение величины движения тела прямо пропорционально приложенной силе и происходит в направлении действия силы.'+'</li>'+
                            '<li>'+'Другими словами: сила, действующая на тело, придает ему ускорение, пропорциональное силе и обратно пропорциональное массе тела.'+'</li>'+
                            '<li>'+'Формула: F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Третий принцип механики:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Когда одно тело действует на другое тело с силой (называемой силой действия), второе тело также действует на первое тело с силой (называемой силой реакции) той же величины и направления, но противоположный. Этот принцип также известен как принцип действия и противодействия.'+'</li>'+
                            '<li>'+'Записывается в виде формулы: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub > '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Закон Гука:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Удлинение пружины прямо пропорционально деформирующей силе (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Прямо пропорционально начальной длине пружины (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br >'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'Обратно пропорционально площади поперечного сечения пружины:'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Закон Гука:'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Натяжение провода:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Натяжение проволоки ( T ) представляет собой силу реакции нерастяжимой проволоки (которая не удлиняется) на силу, действующую на нее.'+'</li>'+'<br>' +
                            '<li>'+'Когда мы подвешиваем тело на нерастяжимой нити, возникают две парные силы:'+'<br>'+'<br>'+
    
                                'Сила давления тела (F) – это сила, с которой тело действует на проволоку (она равна весу тела).'+'<br>'+'<br>'+
                                
                                'Натяжение проволоки (Т) — это сила, с которой проволока действует на подвешенное на ней тело».'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Законы трения скольжения:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Первый закон трения:'+'<br>'+'<br>'+
                            
                                'Величина силы трения скольжения зависит от характера и степени обработки контактирующих поверхностей. Зависимость характеризуется безразмерной величиной, называемой коэффициентом трения скольжения, которая принимает значения от 0 до 1 и обозначается ц.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'Второй закон трения:'+'<br>'+'<br>'+
                                'Величина силы трения скольжения не зависит от площади поверхности контакта тел.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'Третий закон трения:'+'<br>'+'<br>'+
                                'Величина силы трения скольжения зависит от силы давления тела на поверхность скольжения, которая по величине равна нормальной силе реакции на поверхности контакта между телами.'+'<br>'+'<br>' +
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'Формула силы трения задается соотношением:'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Теоремы законов вариации и сохранения'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Механическая работа:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Механическая работа (L) постоянной силы, действующей на тело в направлении и направлении перемещения тела, представляет собой скалярную физическую величину, равную произведению модуля силы (F) и модуль перемещения тела (d).' +'</li>'+'<br>'+
                            '<li>'+'Формула расчета: L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Соглашение о знаках:'+'<br>'+
                                '1. Механическая работа силы положительна, если сила способствует перемещению тела. Это происходит, если сила имеет то же направление и смысл, что и движение тела.'+'<br>'+'<br>'+
                                '2. Механическая работа силы отрицательна, если сила препятствует движению тела. Это происходит, если составляющая вектора силы по направлению движения противоположна движению тела.'+'<br>'+'<br>'+
                                '3. Механическая работа силы равна нулю, если сила не помогает телу двигаться и не препятствует движению. Это происходит, если вектор силы перпендикулярен направлению движения тела.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Механическая мощность:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Механическая мощность (P) — скалярная физическая величина, равная отношению между произведенной механической работой (L) и временем (Δt), в течение которого эта механическая работа совершена.'+'</li> '+'<br>'+
                            '<li>'+'P = Механическая работа / время = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Кинетическая энергия:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Механическая энергия (Е) – физическая величина, характеризующая способность тела совершать механическую работу, единицей измерения является джоуль (Дж).'+'</li>'+'<br>' +
                            '<li>'+'Кинетическая энергия (E'+'<sub>'+'c'+'</sub>'+') — это энергия, которой обладает движущееся тело.'+'</li> '+ '<br>'+
                            '<li>'+'Кинетическая энергия движущегося тела с определенной скоростью вычисляется по формуле:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+ '</li>'+'<br>'+
                            '<li>'+'Закон изменения кинетической энергии:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Итого'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Потенциальная гравитационная энергия:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Гравитационная потенциальная энергия (E'+'<sub>'+'pg'+'</sub>'+') — это энергия, которой обладает тело на определенной высоте от земли.'+'</li>'+'<br>'+
                            '<li>'+'Гравитационная потенциальная энергия тела равна: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</ ли >'+'<br>'+
                            '<li>'+'Закон изменения гравитационной потенциальной энергии:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>' +'<br>'+
                            '<li>'+'Сила, совершающая механическую работу, независимую от пройденного пути и зависящую только от крайних положений (начального и конечного), называется консервативной силой.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Сохранение механической энергии:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Закон сохранения механической энергии:'+'<br>'+'<br>'+
    
                                '\"Механическая энергия тела сохраняется, если на него действуют только консервативные силы.\"'+'<br>'+'<br>'+
                            
                                'E = константа, если тело изолировано снаружи и F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Теорема об изменении импульса:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Импульс тела обозначается Законом сохранения импульса и имеет формулу:'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\" vertical-align : 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'Теорема изменения механического импульса'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Закон сохранения импульса:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Когда механическая система изолирована, результирующая сила F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; Margin- left : -1.5px\">'+'&#8407;'+'</span> '+'равняется нулю.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R' +'</sub>'+'<span style=\"vertical-align: 4px;margin-left: -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'Закон сохранения механического импульса в СРИ:'+'<br>'+'<br>'+
                                'Механический импульс изолированных механических систем сохраняется».'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, т.е. Δp'+'<span style=\ "vertical-align: 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align: 4px; Margin-left: -25px \">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                                '<li>'+'В случае изолированных механических систем их суммарный импульс не может измениться под действием внутренних сил.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Термодинамическая теория",
        "teorieTermodinamica": "",

        "teorieInapoiBtn": "Вернуться в меню выбора",
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