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
    answer: "<span>Forța de apăsare a corpului și Tensiunea în fir</sub></span>",
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