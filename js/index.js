const collagesSection = document.querySelector(".collages");
const instituteSection = document.querySelector(".institutes");
const schoolSection = document.querySelector(".schools");

const collages = [
  {
    name: "College of Agri & Veterinary Medicine",
    description:
      "Deans Message Fun fact: if you’re a veterinarian you can also be a pediatrician a lot of the principles employed by veterinarians",
    image: "../images/argiculture.jpeg",
  },
  {
    name: "College of Law",
    description:
      "Deans Message Fun fact: if you’re a veterinarian you can also be a pediatrician a lot of the principles employed by veterinarians",
    image: "../images/law.jpeg",
  },
  {
    name: "College of Medicine & Health Science",
    description:
      "Deans Message Fun fact: if you’re a veterinarian you can also be a pediatrician a lot of the principles employed by veterinarians",
    image: "../images/medicine.jpeg",
  },
  {
    name: "College of Applied & Natural Science",
    description:
      "Deans Message   The college of Applied & Natural Science consists of five faculties namely the faculty of nutrition and food science",
    image: "../images/natural-science.webp",
  },
  {
    name: "College of Business & Public Administration",
    description:
      "Deans Message    The college of business and public administration is one of the very first colleges that the university started with",
    image: "../images/bussiness.jpeg",
  },
  {
    name: "College of Education",
    description:
      "Deans Message    The college of business and public administration is one of the very first colleges that the university started with",
    image: "../images/education.webp",
  },
  {
    name: "College of Engineering",
    description:
      "Deans Message    On behalf of the University of Hargeisa College of Engineering faculty, staff, students, and alumni, I welcome your visit",
    image: "../images/engineering.jpeg",
  },
  {
    name: "College of Computing & IT",
    description:
      "Deans Message Welcome to the college of Computing and Information Technology at the University of Hargeisa! The college was established in 2007",
    image: "../images/it.jpeg",
  },
  {
    name: "College of Social Science & Humanities",
    description:
      "Deans Message Welcome to the college of Computing and Information Technology at the University of Hargeisa! The college was established in 2007",
    image: "../images/social-study.webp",
  },
  {
    name: "College of Islamic Studies & Arabic Language",
    description:
      "Deans Message Welcome to the college of Computing and Information Technology at the University of Hargeisa! The college was established in 2007",
    image: "../images/arabic.jpeg",
  },
];

const makupGenerator = function (arr, element) {
  console.log(element);
  arr.map((data) => {
    const html = `
    <div class="collage">
        <img src="${data.image}" alt="image">
        
        <div class="collage-info">
          <h2>${data.name}</h2>
          <p class="paragraphy">${data.image}</p>
          
        <div class="collage-content">
            <p class="paragraphy"><img src="./images/LOGO.png" alt="logo">University of Hargiesa </p>
            <img src="./images/share_FILL0_wght400_GRAD0_opsz48.svg" alt="">
        </div>
      </div>
    </div>
  `;

    return element.insertAdjacentHTML("afterbegin", html);
  });
};

const institutes = [
  {
    name: "Gaariye Institute of Somali Studies and Literature Studies",
    description:
      "Deans Message Fun fact: if you’re a veterinarian you can also be a pediatrician a lot of the principles employed by veterinarians",
    image: "../images/somali.jpeg",
  },
  {
    name: "Institute for Peace & Conflict Studies",
    description:
      "Deans Message Fun fact: if you’re a veterinarian you can also be a pediatrician a lot of the principles employed by veterinarians",
    image: "../images/conflict.jpeg",
  },
  {
    name: "Institute of politics",
    description:
      "Deans Message Fun fact: if you’re a veterinarian you can also be a pediatrician a lot of the principles employed by veterinarians",
    image: "../images/politics.webp",
  },
];

instituteSection && makupGenerator(institutes, instituteSection);
collagesSection && makupGenerator(collages, collagesSection);
schoolSection && makupGenerator(school, schoolSection);
