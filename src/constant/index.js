import {  header,
    logo,
    facebook,
    instagram,
    linkedin,
    twitter,
    boostrap,
    github,
    css,
    figma,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    tailwind,
    express,
    firebase,
    laravel,
    mysql,
    coreldraw,
    photoshop,
    portofolio1,
    vue,
    profile,
    } from "../assets/index";

 import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap,faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faCodepen } from "@fortawesome/free-brands-svg-icons";

library.add(faGraduationCap,faBriefcase,faGithub,faCodepen);


export const Typed =[
    {
        title:["Web Developer","Front End Developer","Back End Developer"]
    }
]

export const navLink =[
    {
        id:"Title",
        title:"Title"
    },
    {
        id:"Home",
        title:"Home"
    },
    {
        id:"About",
        title:"About"
    },
    {
        id:"Skill",
        title:"Skill"
    },
    {
        id:"Timeline",
        title:"Timeline"
    },
    {
        id:"Portofolio",
        title:"Portofolio"
    }
];

const About = [
{
    id:"1",
    images:profile,
    isi:"I am a person who has always been passionate about the frontend. With my design and programming skills, I love delivering an engaging and intuitive user experience. I am constantly learning the latest technology and trying to improve the quality of display and interaction in the user interface. With my enthusiasm for the frontend, I was determined to create a stunning and engaging online experience for users.",
    file:"https://drive.google.com/u/0/uc?id=14n8FSas1wOCFiADiXawXtNzTI9Ld4-DP&export=download"
}
];

const skillBars = [  
    {    
    id: "01.",    
    title: "Front End Developer",    
    name: ["CSS", "GIT", "VUE", "JAVASCRIPT", "REACTJS", "TAILWIND","BOOTSTRAP"],
    logos: [css, git, vue, javascript, reactjs, tailwind, boostrap],
    percent: [90,75,40,80,70,80,80],
  },
  {
    id: "02.",
    title: "Back End Developer",
    name: ["EXPRESS","LARAVEL", "MONGODB", "MYSQL", "NODEJS"],
    logos: [express,  laravel, mongodb, mysql, nodejs],
    percent: [45, 70, 50, 78, 65],
  },
  {
    id: "03.",
    title: "Graphic Design",
    name: ["FIGMA", "CORELDRAW", "PHOTOSHOP"],
    logos: [figma, coreldraw, photoshop],
    percent: [50, 50, 50],
  }
];


const Skills = [
    {
      id: "01.",
      title: "Front End Developer",
      logos: [css, git, vue, javascript, reactjs, tailwind,boostrap],
    },
    {
      id: "02.",
      title: "Back End Developer",
      logos: [express, laravel, mongodb, mysql, nodejs],
    },
    {
      id: "03.",
      title: "Graphic Design",
      logos: [figma, photoshop,coreldraw],
    },
  ];

  const experiences =[
    {
        date:"2014-2017",
        title:"SMPN 5 Tulungagung",
        description:"Saya menyelesaikan pendidikan menengah pertama di SMPN 1 Tertek",
        points:[
            "Menjadi anggota OSIS",
            "Menjadi anggota Pramuka",
            "Menjadi Koordinasi OSIS bidang Digital",
            "Menjadi Sekertaris Pramuka selama 2 Periode",
        ],
        icon:faBriefcase,
    }
  ]

  const timelines = [
    {
        date:"2017-2020",
        title:"SMAN 1 Karangrejo",
        description:"Saya menyelesaikan pendidikan menengah atas di SMAN 1 Karangrejo",
        points:[
            "Menjadi anggota OSIS",
            "Menjadi anggota Pramuka",
            "Menjadi Koordinasi OSIS bidang Digital",
            "Menjadi Sekertaris Pramuka selama 2 Periode",
        ],
        icon:faGraduationCap,
    },
    {
        date:"2020-2021",
        title:"Universitas Bhinneka PGRI Tulungagung",
        description:"Ini dalam masa pendidikan di Universitas Bhinneka PGRI Tulungagung Semester 4",
        points:[
            "Menjadi Sekertaris Himpunan Mahasiswa Informatika Selama 2 Periode",
            "Pernah Mendapat Juara 2 Lomba Ide Bisnis sebagai Design Prototipe Aplikasi Tingkat Nasional dalam acara Lo-Kreatif 2022",
            "Menggikuti Pelatihan MERN Stack di Genbox",
        ],
        icon:faGraduationCap,
    }
  ]

  const Portfolio = [
    {
        id: "1",
        logo:[github,reactjs,figma,tailwind,],
        title: "Portofolio Website",
        tech:["reactjs", "tailwind", "figma"],
        description:"Portofolio Website ini dibuat dengan menggunakan Reactjs dan Tailwindcss. Saya membuat desainnya menggunakan Figma",
        image:[portofolio1],
        tags:["Front End", "Graphic Design"],
    },
    {
        id: "2",
        logo:[github,reactjs,figma,tailwind,],
        title: "Portofolio Website",
        tech:["reactjs", "tailwind", "figma"],
        description:"Portofolio Website ini dibuat dengan menggunakan Reactjs dan Tailwindcss. Saya membuat desainnya menggunakan Figma",
        image:[portofolio1],
        tags:["Front End", "Graphic Design"],
    },
  ]
  
export {About, Skills, experiences,timelines, Portfolio,skillBars,faGithub,faCodepen};