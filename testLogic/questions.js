let questions1 = [
    {
    numb: 1,
    question: "Care din următoarele ecuații reprezintă formula Galilei?",
    answer: '<span>v<sup>2</sup> = v<sub>0</sub><sup>2</sup> + 2a(x - x<sub>0</sub>)</span>',
    options: [
      'v<sup>2</sup> = v<sub>0</sub><sup>2</sup> - 2ax',
      'v<sup>2</sup> + v<sub>0</sub><sup>2</sup> = 2ax',
      'v<sup>2</sup> = v<sub>0</sub><sup>2</sup> + 2a(x - x<sub>0</sub>)',
      'v<sup>2</sup> + v<sub>0</sub><sup>2</sup> = 2ax<sub>0</sub>'
    ]
  },
    {
    numb: 2,
    question: "Care este unitatea de măsură pentru accelerație?",
    answer: '<span>m / s<sup>2</sup></span>',
    options: [
      'm / s<sup>2</sup>',
      'm<sup>2</sup> / s',
      'm / s',
      'm ∙ s'
    ]
  },
    {
    numb: 3,
    question: "Formula forței de frecare este:",
    answer: "<span>F<sub>f</sub> = μ ∙ N</span>",
    options: [
      "F<sub>f</sub> = μ ∙ F",
      "F<sub>f</sub> = μ ∙ N",
      "F<sub>f</sub> = v ∙ N",
      "F<sub>f</sub> = -N ∙ a"
    ]
  },
    {
    numb: 4,
    question: "Când suspendăm un corp de un fir inextensibil apar două forțe pereche:",
    answer: "<span>Forța de apăsare a corpului și Tensiunea în fir</span>",
    options: [
      "Tensiunea în fir și Alungirea firului",
      "Forța de apăsare a corpului și Tensiunea în fir",
      "Forța de frecare și Tensiunea în fir",
      "Forța de apăsare a corpului și Tensiunea corpului"
    ]
  },
    {
    numb: 5,
    question: " Forța de reacțiune din principiul acțiunii și reacțiunii:",
    answer: "<span>Este de aceeași mărime și de aceeași direcție, dar de sens contrar față de cea de acțiune</span>",
    options: [
      "Este de aceeași mărime, direcție și același sens cu cea de acțiune",
      "Este de mărime mai mică, de aceeași direcție, dar de sens contrar față de cea de acțiune",
      "Este calculată independent de forța de acțiune",
      "Este de aceeași mărime și de aceeași direcție, dar de sens contrar față de cea de acțiune"
    ]
  },
];

let questions2 = [
  {
  numb: 1,
  question: "Legea variației energiei potențiale gravitaționale:",
  answer: '<span>ΔE<sub>pg</sub> = -L<sub>G</sub></span>',
  options: [
    'ΔE<sub>pg</sub> = 1 / L<sub>G</sub>',
    'ΔE<sub>pg</sub> = -L<sub>G</sub>',
    'ΔE<sub>pg</sub> = L<sub>G</sub>',
    'ΔE<sub>pg</sub> = L<sub>Total</sub>'
  ]
},
  {
  numb: 2,
  question: "Energia potențială gravitațională a unui corp este:",
  answer: '<span>E<sub>pg</sub> = m ∙ g ∙ h</span>',
  options: [
    'E<sub>pg</sub> = m ∙ g ∙ h',
    'E<sub>pg</sub> = m ∙ g / h',
    'ΔE<sub>pg</sub> = m ∙ g ∙ h',
    'E<sub>pg</sub> = m ∙ a ∙ h'
  ]
},
  {
  numb: 3,
  question: "Formula forței de frecare este:",
  answer: "<span>F<sub>f</sub> = μ ∙ N</span>",
  options: [
    "F<sub>f</sub> = μ ∙ F",
    "F<sub>f</sub> = μ ∙ N",
    "F<sub>f</sub> = v ∙ N",
    "F<sub>f</sub> = -N ∙ a"
  ]
},
  {
  numb: 4,
  question: "Care este legea variației energiei cinetice?",
  answer: "<span>ΔE<sub>c</sub> = L<sub>Total</sub></span>",
  options: [
    "E<sub>c</sub> =  L / Δt",
    "ΔE<sub>c</sub> = L<sub>Total</sub>",
    "ΔE<sub>c</sub> = m ∙ v<sub>2</sub> / 2",
    "ΔE<sub>c</sub> = m ∙ g ∙ h"
  ]
},
  {
  numb: 5,
  question: "Puterea mecanică:",
  answer: "<span>Este o mărime fizică scalară</span>",
  options: [
    "Este produsul dintre lucrul mecanic efectuat și timpul în care se efectuează acest lucru mecanic",
    "Este o mărime fizică vectorială",
    "Este mărimea ce caracterizează capacitatea unui corp de a efectua lucru mecanic",
    "Este o mărime fizică scalară"
  ]
},
];
let questions3 = [
  {
  numb: 1,
  question: "Ce este agitatia termică?",
  answer: '<span>Mişcarea dezordonată şi continuă a particulelor unei substanţe</span>',
  options: [
    'Mişcarea dezordonată şi continuă a particulelor unei substanţe',
    'Mişcarea ordonată şi continuă a particulelor unei substanţe',
    'Mişcarea circulară a particulelor unei substanţe',
    'Mişcarea rectiliniei a particulelor unei substanţe'
  ]
},
  {
  numb: 2,
  question: "Numărul lui Avogadro este egal cu",
  answer: '<span>6,022 ∙10<sup>23</sup> mol<sup>-1</sup> atomi</span>',
  options: [
    '6,023 ∙10<sup>22</sup> mol<sup>-1</sup> atomi',
    '6,022 ∙10<sup>21</sup> mol<sup>-1</sup> atomi',
    '6,022 ∙10<sup>23</sup> mol<sup>-1/2</sup> atomi',
    '6,022 ∙10<sup>23</sup> mol<sup>-1</sup> atomi'
  ]
},
  {
  numb: 3,
  question: "Relația de transformare între scara Celsius și Kelvin:",
  answer: "<span>T(K) = t (°C) + 273,15</span>",
  options: [
    "T(K) = t (°C) + 275,13",
    "T(K) = t (°C) + 215,15",
    "T(K) = t (°C) + 273,15",
    "T(K) = t (°C) + 271,13"
  ]
},
  {
  numb: 4,
  question: "Ecuația de stare descrie dependența dintre parametrii de stare ai unui sistem termodinamic:",
  answer: "<span>p ∙ V = ν ∙ R ∙ T</span>",
  options: [
    "R ∙ V = ν ∙ p ∙ T",
    "p ∙ V = ν ∙ R ∙ T",
    "V = ν ∙ R ∙ T",
    "p ∙ V = ν ∙ R / T"
  ]
},
  {
  numb: 5,
  question: "Volumil molar este egal cu:",
  answer: "<span>V<sub>μ</sub> = 22,4 L/mol</span>",
  options: [
    "V<sub>μ</sub> = 24,2 L/mol",
    "V<sub>μ</sub> = 24,4 L/mol",
    "V<sub>μ</sub> = 2,24 L/mol",
    "V<sub>μ</sub> = 22,4 L/mol"
  ]
},
];

let questions4 = [
  {
  numb: 1,
  question: "Lucrul mecanic efectuat de sistemul termodinamic într-o transformare izobară este:",
  answer: '<span>L = p ∙ ΔV</span>',
  options: [
    'L = p ∙ V',
    'L = T ∙ ΔV',
    'L = p ∙ ΔV',
    'L = R ∙ ΔV'
  ]
},
  {
  numb: 2,
  question: "Căldura în sistemul internațional se măsoară în:",
  answer: '<span>J(joule)</span>',
  options: [
    'J(joule)',
    'V(volt)',
    'J/Kg∙K',
    'J/Kg'
  ]
},
  {
  numb: 3,
  question: "Gradul de libertate al gazelor monoatomice este de:",
  answer: "<span>i = 3</span>",
  options: [
    "i = 1",
    "i = 5",
    "i = 6",
    "i = 3"
  ]
},
  {
  numb: 4,
  question: "Într-o transformare izocoră:",
  answer: "<span>Volumul este constant</span>",
  options: [
    "Temperatura este constantă",
    "Volumul este constant",
    "Presiunea este constantă",
    "Căldura este egală cu 0"
  ]
},
  {
  numb: 5,
  question: "Relația dintre căldurile molare este:",
  answer: "<span>C<sub>p</sub> = C<sub>V</sub> + R</span>",
  options: [
    "C<sub>p</sub> = C<sub>V</sub> / R",
    "C<sub>p</sub> = C<sub>V</sub>",
    "C<sub>p</sub> = C<sub>V</sub> + R",
    "C<sub>p</sub> = C<sub>V</sub> ∙ R"
  ]
},
];
let questions5 = [
  {
  numb: 1,
  question: "În ce constă al doilea timp de funționare al motorului Otto?",
  answer: '<span>Compresia - (proces adiabatic)</span>',
  options: [
    'Aprinderea - (proces izocor)',
    'Admisia - (proces izobar)',
    'Compresia - (proces adiabatic)',
    'Evacuarea - (proces izocor) și (proces izobar)'
  ]
},
  {
  numb: 2,
  question: "Motorul termic:",
  answer: '<span>Transformă căldura primită, prin arderea unui combustibilul în lucru mecanic.</span>',
  options: [
    'Transformă căldura primită, prin arderea unui combustibilul în lucru mecanic.',
    'Transformă căldura primită, prin arderea unui combustibilul în energie.',
    'Transformă căldura primită, prin comprimarea combustibilul în lucru mecanic.',
    'Transformă căldura primită, prin amestecare cu alte substanțe în lucru mecanic.'
  ]
},
  {
  numb: 3,
  question: "Randamentul motorului termic Diesel este  egal cu :",
  answer: "<span>Raportul dintre lucrul mecanic efectuat de motor și căldura primită.</span>",
  options: [
    "Raportul dintre lucrul mecanic efectuat de motor și căldura primită.",
    "Raportul dintre căldura primită  și lucrul mecanic efectuat de motor.",
    "Raportul dintre lucrul mecanic efectuat de motor și căldura molară.",
    "Raportul dintre lucrul mecanic efectuat de motor și temperatură."
  ]
},
  {
  numb: 4,
  question: "Randamentul motorului termic Diesel are formula:",
  answer: "<span>η = 1 - (1 / y) ∙ (a<sup>y-1</sup> / ε<sup>y-1</sup>(a-1))</span>",
  options: [
    "η = 1 - (a<sup>y-1</sup> / ε<sup>y-1</sup>(a-1))",
    "η = 1 - (1 / ε<sup>y-1</sup>)",
    "η = 1 - (1 / y) ∙ (a<sup>y-1</sup> / ε<sup>y-1</sup>(a-1))",
    "η = (1 / y) ∙ (a<sup>y-1</sup> / ε<sup>y-1</sup>(a-1))"
  ]
},
];
let questions6 = [
  {
  numb: 1,
  question: "Randamentul ciclului Carnot este:",
  answer: '<span>Întotdeauna subunitar</span>',
  options: [
    'Egal cu raportul dintre căldura primită și lucrul mecanic efectuat de motor.',
    'Întotdeauna supraunitar',
    'Întotdeauna subunitar',
    'Egal cu 0'
  ]
},
  {
  numb: 2,
  question: "Randamentul ciclului Carnot depinde:",
  answer: '<span>Numai de temperatura sursei calde și a celei reci și nu depinde de substanța de lucru.</span>',
  options: [
    'Numai de temperatura sursei calde și a celei reci și nu depinde de substanța de lucru.',
    'De temperatura sursei calde și a celei reci cât și de substanța de lucru.',
    'De densitatea substanței de lucru.',
    'Numai de temperatura substanța de lucru și nu depinde de temperatura sursei calde și a celei reci.'
  ]
},
  {
  numb: 3,
  question: "Carnot a fost primul care a arătat că:",
  answer: "<span>Nu este posibil să funcționeze o mașină termică cu un singur termostat, având nevoie de cel puțin două termostate.</span>",
  options: [
    "O mașină termică are nevoie de două surse reci",
    "Nu este posibil să funcționeze o mașină termică doar cu două termostate, având nevoie de cel puțin trei termostate.",
    "Nu este necesar pentru a funcționa o mașină termică cu două termostate, ci este nevoie doar de unul singur",
    "Nu este posibil să funcționeze o mașină termică cu un singur termostat, având nevoie de cel puțin două termostate."
  ]
},
];

let questions7 = [
  {
  numb: 1,
  question: "Unitate de măsură în S.I pentru tensiunea electrică este:",
  answer: '<span>Volt (V)</span>',
  options: [
    'Amperé (A)',
    'Volt (V)',
    'Watt (W)',
    'Ohm (Ω)'
  ]
},
  {
  numb: 2,
  question: "Formula intensității curentului este egală cu:",
  answer: '<span>Raportul dintre sarcina electrică și timp</span>',
  options: [
    'Raportul dintre sarcina electrică și timp',
    'Raportul dintre tensiunea electrică și timp',
    'Raportul dintre lucrul mecanic și sarcina electrică',
    'Raportul dintre timp și sarcina electrică'
  ]
},
  {
  numb: 3,
  question: "Relația dintre cele trei tensiuni electrice ale unui circuit electric este:",
  answer: "<span></span>",
  options: [
    "E = U + u",
    "E = U / u",
    "U = E / u",
    "E = U ∙ u"
  ]
},
  {
  numb: 4,
  question: "Tensiunea internă are formula:",
  answer: "<span>u = L<sub>int</sub> ∙ q</span>",
  options: [
    "u = U / q",
    "u = L<sub>int</sub> ∙ q",
    "u = L<sub>int</sub> / q",
    "u = q / L<sub>int</sub>"
  ]
},
  {
  numb: 5,
  question: "De la borna negativă a sursei spre borna pozitivă:",
  answer: "<span></span>",
  options: [
    "Dat de către intensitatea curentului",
    "Același cu al electronilor",
    "De la borna negativă a sursei spre borna pozitivă",
    "De la borna pozitivă a sursei spre borna negativă"
  ]
},
];

let questions8 = [
  {
  numb: 1,
  question: "",
  answer: '<span></span>',
  options: [
    'Amperé (A)',
    'Volt (V)',
    'Watt (W)',
    'Ohm (Ω)'
  ]
},
  {
  numb: 2,
  question: "",
  answer: '<span></span>',
  options: [
    'Raportul dintre sarcina electrică și timp',
    'Raportul dintre tensiunea electrică și timp',
    'Raportul dintre lucrul mecanic și sarcina electrică',
    'Raportul dintre timp și sarcina electrică'
  ]
},
  {
  numb: 3,
  question: "",
  answer: "<span></span>",
  options: [
    "E = U + u",
    "E = U / u",
    "U = E / u",
    "E = U ∙ u"
  ]
},
  {
  numb: 4,
  question: "",
  answer: "<span></span>",
  options: [
    "u = U / q",
    "u = L<sub>int</sub> ∙ q",
    "u = L<sub>int</sub> / q",
    "u = q / L<sub>int</sub>"
  ]
},
  {
  numb: 5,
  question: "",
  answer: "<span></span>",
  options: [
    "Dat de către intensitatea curentului",
    "Același cu al electronilor",
    "De la borna negativă a sursei spre borna pozitivă",
    "De la borna pozitivă a sursei spre borna negativă"
  ]
},
];