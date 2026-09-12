

  /* =====================================================
     ALUMNI DATA
  ===================================================== */

  const alumni = [

    {
      image: "./aymen-removebg-preview.png",

      quote:
        "I can never forget the contributions of the IT department and my faculties towards helping me explore and experiment with different career opportunities.",

      name:
        "Muhammed Ayimen Abdul Latheef",

      batch:
        "B.Tech Information Technology",

      year:
        "2019 – 2023",

      role:
        "Global Startup Analyst",

      company:
        "Techstars Ventures"
    },


    {
      image: "./PayalRani__1680083656-removebg-preview.png",

      quote:
        "My journey at CUSAT helped me build a strong foundation in technology and prepared me to explore opportunities beyond the classroom.",

      name:
        "Ashwin Anil",

      batch:
        "B.Tech Information Technology",

      year:
        "20018 – 2022",

      role:
        "Staff Software Engineer",

      company:
        "Robinhood"
    },


    {
      image: "./MD_Faizan__1680083785-removebg-preview.png",

      quote:
        "My experience at CUSAT gave me the technical foundation and confidence to take on challenging opportunities in the technology industry.",

      name:
        "MD Faizan",

      batch:
        "B.Tech Information Technology",

      year:
        "2015 – 2019",

      role:
        "SDE 2",

      company:
        "Amazon"
    }

  ];


  /* =====================================================
     CURRENT ALUMNI
  ===================================================== */

  let currentAlumni = 0;


  /* =====================================================
     ELEMENTS
  ===================================================== */

  const alumniImage =
    document.getElementById("alumniImage");

  const alumniQuote =
    document.getElementById("alumniQuote");

  const alumniName =
    document.getElementById("alumniName");

  const alumniBatch =
    document.getElementById("alumniBatch");

  const alumniRole =
    document.getElementById("alumniRole");

  const alumniCompany =
    document.getElementById("alumniCompany");

  const alumniCurrent =
    document.getElementById("alumniCurrent");

  const alumniTotal =
    document.getElementById("alumniTotal");


  /* Total number */

  alumniTotal.textContent =
    String(alumni.length).padStart(2, "0");


  /* =====================================================
     SHOW ALUMNI
  ===================================================== */

  function showAlumni(index) {

    const person = alumni[index];


    /* Fade out */

    alumniImage.classList.add("alumni-changing");
    alumniQuote.classList.add("alumni-changing");
    alumniName.classList.add("alumni-changing");
    alumniBatch.classList.add("alumni-changing");
    alumniRole.classList.add("alumni-changing");
    alumniCompany.classList.add("alumni-changing");


    setTimeout(() => {

      /* Image */

      alumniImage.src = person.image;

      alumniImage.alt =
        person.name;


      /* Details */

      alumniQuote.textContent =
        person.quote;

      alumniName.textContent =
        person.name;

      alumniBatch.innerHTML =
        `${person.batch} <span>•</span> ${person.year}`;

      alumniRole.textContent =
        person.role;

      alumniCompany.textContent =
        person.company;


      /* Counter */

      alumniCurrent.textContent =
        String(index + 1).padStart(2, "0");


      /* Fade in */

      alumniImage.classList.remove("alumni-changing");
      alumniQuote.classList.remove("alumni-changing");
      alumniName.classList.remove("alumni-changing");
      alumniBatch.classList.remove("alumni-changing");
      alumniRole.classList.remove("alumni-changing");
      alumniCompany.classList.remove("alumni-changing");

    }, 250);

  }


  /* =====================================================
     NEXT
  ===================================================== */

  document
    .getElementById("nextAlumni")
    .addEventListener("click", () => {

      currentAlumni++;

      if (currentAlumni >= alumni.length) {
        currentAlumni = 0;
      }

      showAlumni(currentAlumni);

    });


  /* =====================================================
     PREVIOUS
  ===================================================== */

  document
    .getElementById("prevAlumni")
    .addEventListener("click", () => {

      currentAlumni--;

      if (currentAlumni < 0) {
        currentAlumni = alumni.length - 1;
      }

      showAlumni(currentAlumni);

    });

 