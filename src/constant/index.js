import {   header,
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
  redux,
  tailwind,
  express,
  firebase,
  laravel,
  mysql,
  coreldraw,
  photoshop,
  portofolio1,
  arrowright,
  vue,
  profile,
  postman,
  nginx,
  jwt,
  php,
  arfixcode,
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
    isi:"I am a person who has always been passionate about the frontend.\n\n \n\n With my design and programming skills, I love delivering an engaging and intuitive user experience.\n\n \n\n I am constantly learning the latest technology and trying to improve the quality of display and interaction in the user interface.\n\n \n\n With my enthusiasm for the frontend, I was determined to create a stunning and engaging online experience for users.",
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

  const sertif = [
    {
      id: "1",
      title: "Completion React Certificate In The Joy of React",
      url: "1Vr4kbrxqOrn2K0ZqKy-iIfpJ9NmB7toC"
    },
    {
      id: "2",
      title: "Codepolitan Javascript Certificate",
      url: "1bk-Ry-JJu9kH-bi0VpL3MAekyn2g1QOd"
    },
    {
      id: "3",
      title: "Codepolitan React Certificate",
      url: "1j6hJ12ewkoI8yphcwo28K9i27ufg9xgK"
    },
    {
      id: "4",
      title: "Finalist LO-KREATIF 2022 Certificate",
      url: "1TTCdjqShpIQdREeG_WGWG7L7fKMOK7fF"
    },
    {
      id: "5",
      title: "Champion LO-KREATIF 2021 Certificate",
      url: "1V3mXE0KuRMqFrhARr5c2lUu8HmTCkSdl"
    },
    {
      id: "6",
      title: "Certification of Daily Management, HMP Informatika, Academic Year 2021-2022",
      url: "1H3hAo-Yhl_Mi8t0up80jMFB7rGKmNKea"
    },
    {
      id: "7",
      title: "Certification of Daily Management, HMP Informatika, Academic Year 2020-2021",
      url: "1TwAxvnINjDecZxAxrVBqyus0GmYvhyfG"
    },
    {
      id: "8",
      title: "Certification of Training of Communicator",
      url: "1D7N9gZM2MIIS8N9kRH6wZJWo4v7eAYFM"
    }
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
        logo: [github, reactjs, figma, tailwind, php, laravel, mysql, jwt, coreldraw,postman,nginx,redux],
        title: "arfix-code.my.id",
        tech: ["reactjs", "tailwind", "figma", "github", "php", "laravel", "mysql", "redux", "jwt", "coreldraw"],
        description: "Saya telah membuat website yang menakjubkan dengan bantuan codedesign.dev. Codedesign.dev adalah platform yang menyediakan berbagai desain figma yang luar biasa untuk memotong (slicing) dan membangun situs web.\n\nDengan menggunakan desain figma yang telah disediakan oleh codedesign.dev, saya dapat dengan mudah mengimplementasikannya ke dalam website saya.\n\nNamun, selama proses pengembangan, saya merasa ada beberapa komponen yang diperlukan untuk meningkatkan fungsionalitas dan estetika website saya. Untuk itu, saya memutuskan untuk menambahkan beberapa komponen tambahan yang tidak tersedia di codedesign.dev. Dengan begitu, saya dapat memberikan sentuhan personal dan unik pada website saya.\n\nAkhirnya, setelah selesai mengoptimalkan desain figma dan menambahkan komponen tambahan, saya berhasil menciptakan website yang luar biasa dengan domain arfix-code.my.id. Situs web ini menawarkan pengalaman pengguna yang luar biasa dan memberikan informasi dengan cara yang menarik dan efektif. Saya sangat bangga dengan hasil akhirnya dan berharap pengunjung akan menemukan situs web saya berguna dan menginspirasi.",
        image: [arfixcode],
        tags: ["Front End", "Back End"],
        demoLink: "http://arfix-code.my.id/",
        codeLink: "https://github.com/FajarFE/ARFIX-CODE",
    },
]

  
export {About, Skills, experiences,timelines, Portfolio,skillBars,faGithub,faCodepen,sertif};