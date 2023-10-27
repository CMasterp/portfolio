// Dictionnaires de langues
const dictionaryFR = {
    home: "Accueil",
    about: "À propos",
    experience: "Expériences",
    education: "Formations",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    description: "Bienvenue sur mon portfolio !! <br><br>Je me suis amusé à le réaliser moi-même en suivant un thème assez particulier : LINUX (pour ceux qui ont remarqué les références à grub, emacs, ou nano).<br><br>J'espère que vous pourrez trouver toutes les informations dont vous avez besoin ici.",
    downloadButton: "TÉLÉCHARGER",
    job: "Développeur Fullstack",
    aboutTitle: "À propos de moi",
    aboutDescription: "Passionné par le monde numérique et un véritable passionné de la programmation, ma soif d'apprentissage m'a actuellement conduit à ma dernière année de master en expertise informatique à EPITECH.",
    experienceTitle: "Expériences",
    experienceArray: [
        {
            experienceImage: "../assets/image%20(5).png",
            experienceRole: "Junior Consultant Taker",
            experiencePosition: "Développeur Fullstack",
            experienceCompany: "Freelance",
            experienceDate: "JAN 2022 - PRÉSENT",
            experienceDescription: "Participation à la mise en œuvre de logiciels sur des missions clients.",
            experienceSkills: "Compétences :",
            experienceSkillsDetails: "Développement de logiciels - Logiciel Open Source - React.js - Golang - C++"
        },
        {
            experienceImage: "../assets/image%20(6).png",
            experienceRole: "Extia - Société de Conseil en Informatique",
            experiencePosition: "Consultant Technique",
            experienceCompany: "Stage - Lille (France)",
            experienceDate: "SEP 2023 - FEV 2024",
            experienceDescription: "Mise en œuvre de divers projets clients avec l'équipe de développement.",
            experienceSkills: "Compétences :",
            experienceSkillsDetails: "Développement de logiciels - JointJS - AngularJS - Electron - Développement web"
        },
        {
            experienceImage: "../assets/image%20(7).png",
            experienceRole: "Mtn - Mobile Telephone Networks",
            experiencePosition: "Assistant Chef de Projet Informatique",
            experienceCompany: "Stage - Cotonou (Bénin)",
            experienceDate: "AVR 2022 - JUL 2022",
            experienceDescription: "Développement de scripts de traitement des données des clients\n\n" +
                "Gestion des phases de clarification et de développement des projets en cours avec des partenaires techniques\n\n" +
                "Mise en place d'un tableau de bord de suivi et de gestion des produits",
            experienceSkills: "Compétences :",
            experienceSkillsDetails: "JavaScript - Node.js - Annuaire actif - Analyse de données - Administration réseau - Programmation - Télécommunications - Java"
        },
        {
            experienceImage: "../assets/image%20(8).png",
            experienceRole: "LaMCoS - Laboratoire de Mécanique",
            experiencePosition: "Développeur Web",
            experienceCompany: "Stage - Lyon (France)",
            experienceDate: "OCT 2021 - MARS 2022",
            experienceDescription: "Création d'une interface web pour un code de calcul mécanique.\n\n" +
                "Découverte de l'outil de visualisation Toolkit (VTK)\n\n" +
                "Mise en place d'un système de liaison entre le code de calcul mécanique et l'interface (Fortran, Python, C).",
            experienceSkills: "Compétences :",
            experienceSkillsDetails: "Développement web - Applications web - Fortran - Nginx - PHP"
        },
        {
            experienceImage: "../assets/image%20(9).png",
            experienceRole: "PIVOTECH - Société de Conseil en Informatique",
            experiencePosition: "Développeur Back-End",
            experienceCompany: "Stage - Cotonou (Bénin)",
            experienceDate: "JUL 2020 - DEC 2020",
            experienceDescription: "Installation et configuration de serveurs web\n\n" +
                "Maintenance de l'application web Konta (base de données, serveurs distants)\n\n" +
                "Développement d'un système de facturation électronique et d'un système de génération de contrats",
            experienceSkills: "Compétences :",
            experienceSkillsDetails: "Tomcat - PostgreSQL - Plateforme Google Cloud - Applications web - Python - Java - PHP - Jakarta EE - Amazon Web Services"
        },
    ],
    educationTitle: "Formations",
    educationLeftRole: "EPITECH - Ecole d'informatique",
    educationLeftPosition: "Master eh oui",
    educationLeftCompany: "BAC + 5",
    educationLeftDate: "SEP 2019 - JUN 2024",

    educationRightRole: "Chung Ang University en Corée",
    educationRightPosition: "Master 1 Echange Universitaire",
    educationRightCompany: "BAC + 4",
    educationRightDate: "SEP 2022 - JUN 2023",
};


const dictionaryEN = {
    home: "Home",
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    description: "Welcome to my portfolio !! <br><br>I had fun creating it myself following a rather special theme: LINUX (for those who noticed references to grub, emacs, or nano).<br><br>I hope you can find all the information you need here.",
    downloadButton: "DOWNLOAD",
    job: "Fullstack Developer",
    aboutTitle: "About Me",
    aboutDescription: "Enthusiastic about the digital world and a true programming enthusiast, my thirst for learning has currently led me to my final year of a master's degree in computer expertise at EPITECH.",
    experienceTitle: "Experience",
    experienceArray: [
        {
            experienceImage: "../assets/image%20(5).png",
            experienceRole: "Junior Consultant Taker",
            experiencePosition: "Fullstack Developer",
            experienceCompany: "Freelance",
            experienceDate: "JAN 2022 - PRESENT",
            experienceDescription: "Participation in the implementation of software on client missions.",
            experienceSkills: "Skills :",
            experienceSkillsDetails: "Software development - Open Source software - React.js - Golang - C++"
        },
        {
            experienceImage: "../assets/image%20(6).png",
            experienceRole: "Extia - IT Consulting Company",
            experiencePosition: "Technical Consultant",
            experienceCompany: "Internship - Lille (France)",
            experienceDate: "SEP 2023 - FEV 2024",
            experienceDescription: "Implementation of various customer projects with the development team.",
            experienceSkills: "Skills :",
            experienceSkillsDetails: "Software development - JointJS - AngularJS - Electron - Web development"
        },
        {
            experienceImage: "../assets/image%20(7).png",
            experienceRole: "Mtn - Mobile Telephone Networks",
            experiencePosition: "IT Project Manager Assistant",
            experienceCompany: "Internship - Cotonou (Benin)",
            experienceDate: "AVR 2022 - JUL 2022",
            experienceDescription: "Development of customer data processing scripts\n\n" +
                "Management of clarification and development phases of ongoing projects with technical partners\n\n" +
                "Implementation of a product tracking and management dashboard",
            experienceSkills: "Skills :",
            experienceSkillsDetails: "JavaScript - Node.js - Active Directory - Data analysis - Network administration - Programming - Telecommunications - Java"
        },
        {
            experienceImage: "../assets/image%20(8).png",
            experienceRole: "LaMCoS - Mechanical Engineering Laboratory",
            experiencePosition: "Web Developer",
            experienceCompany: "Internship - Lyon (France)",
            experienceDate: "OCT 2021 - MARS 2022",
            experienceDescription: "Creation of a web interface for a mechanical calculation code.\n\n" +
                "Discover the Visualization Toolkit (VTK)\n\n" +
                "Implementation of a linking system between the mechanical calculation code and the interface (Fortran, Python, C).",
            experienceSkills: "Skills :",
            experienceSkillsDetails: "Web development - Web applications - Fortran - Nginx - PHP"
        },
        {
            experienceImage: "../assets/image%20(9).png",
            experienceRole: "PIVOTECH - IT Consulting Company",
            experiencePosition: "Back-End Developer",
            experienceCompany: "Internship - Cotonou (Benin)",
            experienceDate: "JUL 2020 - DEC 2020",
            experienceDescription: "Installation and configuration of web servers\n\n" +
                "Maintenance of Konta web application (database, remote servers)\n\n" +
                "Development of an electronic invoicing system and a contract generation system",
            experienceSkills: "Skills :",
            experienceSkillsDetails: "Tomcat - PostgreSQL - Google Cloud Platform - Web applications - Python - Java - PHP - Jakarta EE - Amazon Web Services"
        },
    ],
    educationTitle: "Education",
    educationLeftRole: "EPITECH",
    educationLeftPosition: "Master",
    educationLeftCompany: "BAC + 5",
    educationLeftDate: "SEP 2019 - JUN 2024",

    educationRightRole: "Chung Ang",
    educationRightPosition: "Master 1",
    educationRightCompany: "BAC + 4",
    educationRightDate: "SEP 2022 - JUN 2023"

};

// Événement de changement de langue
const toggleButton = document.getElementById("toggleLanguage");
toggleButton.addEventListener("click", toggleLanguage);

// Événement de changement d'expériences
const experienceButtonLeft = document.getElementById("experienceLeft");
experienceButtonLeft.addEventListener("click", () => { changeExperience('left'); });

const experienceButtonRight = document.getElementById("experienceRight");
experienceButtonRight.addEventListener("click", () => { changeExperience('right'); });


let indexExperience = 0; // Langue par défaut
function changeExperience(side) {
    if (side === 'left')
        indexExperience -= (indexExperience - 1 >= 0) ? 1 : 0;
    if (side === 'right')
        indexExperience += (indexExperience + 1 < 5) ? 1 : 0;
    console.log(indexExperience);
    updateText();
}

// Fonction pour basculer entre les dictionnaires FR et EN
let currentLanguage = "FR"; // Langue par défaut
function toggleLanguage() {
    if (currentLanguage === "FR") {
        currentLanguage = "EN";
    } else {
        currentLanguage = "FR";
    }
    updateText();
}

// Fonction pour mettre à jour le texte en fonction de la langue actuelle
function updateText() {
    const descriptionElement = document.getElementById("description");
    const downloadButtonElement = document.getElementById("downloadButton");
    const jobElement = document.getElementById("job");
    const navbarItems = document.querySelectorAll('.nano-navbar ul li');
    const aboutTitleElement = document.querySelector('.renderer-title p');
    const aboutDescriptionElement = document.getElementById('aboutMe');
    const experienceTitleElement = document.getElementById('experienceTitle');
    const educationTitleElement = document.getElementById('educationTitle');

    const experienceImageElement = document.getElementById('experience-image');
    const experienceRoleElement = document.querySelector('.renderer-experience-card li:first-child');
    const experiencePositionElement = document.querySelector('.renderer-experience-card li:nth-child(2)');
    const experienceCompanyElement = document.querySelector('.renderer-experience-card li:nth-child(3)');
    const experienceDateElement = document.querySelector('.renderer-experience-card li:nth-child(4)');
    const experienceDescriptionElement = document.querySelector('.renderer-experience-description p:first-child');
    const experienceSkillsElement = document.querySelector('.renderer-experience-description p:nth-child(2)');
    const experienceSkillsDetailsElement = document.querySelector('.renderer-experience-description p:nth-child(3)');

    const educationLeftRoleElement = document.querySelector('.renderer-education-left-card li:first-child');
    const educationLeftPositionElement = document.querySelector('.renderer-education-left-card li:nth-child(2)');
    const educationLeftCompanyElement = document.querySelector('.renderer-education-left-card li:nth-child(3)');
    const educationLeftDateElement = document.querySelector('.renderer-education-left-card li:nth-child(4)');

    const educationRightRoleElement = document.querySelector('.renderer-education-right-card li:first-child');
    const educationRightPositionElement = document.querySelector('.renderer-education-right-card li:nth-child(2)');
    const educationRightCompanyElement = document.querySelector('.renderer-education-right-card li:nth-child(3)');
    const educationRightDateElement = document.querySelector('.renderer-education-right-card li:nth-child(4)');

    if (currentLanguage === "FR") {
        navbarItems.forEach(item => {
            const id = item.getAttribute('id');
            item.textContent = dictionaryFR[id];
        });

        descriptionElement.innerHTML = dictionaryFR.description;
        downloadButtonElement.textContent = dictionaryFR.downloadButton;
        jobElement.textContent = dictionaryFR.job;
        aboutTitleElement.textContent = dictionaryFR.aboutTitle;
        aboutDescriptionElement.innerHTML = dictionaryFR.aboutDescription;

        experienceTitleElement.textContent = dictionaryFR.experienceTitle;
        experienceRoleElement.textContent = dictionaryFR.experienceArray[indexExperience].experienceRole;
        experiencePositionElement.textContent = dictionaryFR.experienceArray[indexExperience].experiencePosition;
        experienceCompanyElement.textContent = dictionaryFR.experienceArray[indexExperience].experienceCompany;
        experienceDateElement.textContent = dictionaryFR.experienceArray[indexExperience].experienceDate;
        experienceDescriptionElement.textContent = dictionaryFR.experienceArray[indexExperience].experienceDescription;
        experienceSkillsElement.textContent = dictionaryFR.experienceArray[indexExperience].experienceSkills;
        experienceSkillsDetailsElement.textContent = dictionaryFR.experienceArray[indexExperience].experienceSkillsDetails;

        educationTitleElement.textContent = dictionaryFR.educationTitle;
        educationLeftRoleElement.textContent = dictionaryFR.educationLeftRole;
        educationLeftPositionElement.textContent = dictionaryFR.educationLeftPosition;
        educationLeftCompanyElement.textContent = dictionaryFR.educationLeftCompany;
        educationLeftDateElement.textContent = dictionaryFR.educationLeftDate;

        educationRightRoleElement.textContent = dictionaryFR.educationRightRole;
        educationRightPositionElement.textContent = dictionaryFR.educationRightPosition;
        educationRightCompanyElement.textContent = dictionaryFR.educationRightCompany;
        educationRightDateElement.textContent = dictionaryFR.educationRightDate;

    } else {
        navbarItems.forEach(item => {
            const id = item.getAttribute('id');
            item.textContent = dictionaryEN[id];
        });

        descriptionElement.innerHTML = dictionaryEN.description;
        downloadButtonElement.textContent = dictionaryEN.downloadButton;
        jobElement.textContent = dictionaryEN.job;
        aboutTitleElement.textContent = dictionaryEN.aboutTitle;
        aboutDescriptionElement.innerHTML = dictionaryEN.aboutDescription;
        experienceTitleElement.textContent = dictionaryEN.experienceTitle;

        experienceRoleElement.textContent = dictionaryEN.experienceArray[indexExperience].experienceRole;
        experiencePositionElement.textContent = dictionaryEN.experienceArray[indexExperience].experiencePosition;
        experienceCompanyElement.textContent = dictionaryEN.experienceArray[indexExperience].experienceCompany;
        experienceDateElement.textContent = dictionaryEN.experienceArray[indexExperience].experienceDate;
        experienceDescriptionElement.textContent = dictionaryEN.experienceArray[indexExperience].experienceDescription;
        experienceSkillsElement.textContent = dictionaryEN.experienceArray[indexExperience].experienceSkills;
        experienceSkillsDetailsElement.textContent = dictionaryEN.experienceArray[indexExperience].experienceSkillsDetails;

        educationTitleElement.textContent = dictionaryEN.educationTitle;
        educationLeftRoleElement.textContent = dictionaryEN.educationLeftRole;
        educationLeftPositionElement.textContent = dictionaryEN.educationLeftPosition;
        educationLeftCompanyElement.textContent = dictionaryEN.educationLeftCompany;
        educationLeftDateElement.textContent = dictionaryEN.educationLeftDate;

        educationRightRoleElement.textContent = dictionaryEN.educationRightRole;
        educationRightPositionElement.textContent = dictionaryEN.educationRightPosition;
        educationRightCompanyElement.textContent = dictionaryEN.educationRightCompany;
        educationRightDateElement.textContent = dictionaryEN.educationRightDate;

    }
    experienceImageElement.src = dictionaryEN.experienceArray[indexExperience].experienceImage;
}

// Appel initial pour afficher le texte dans la langue par défaut
updateText();