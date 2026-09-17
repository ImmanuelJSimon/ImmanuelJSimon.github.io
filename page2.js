/* =========================================
   PAGE 02 — EXPERIENCE & PROJECTS
========================================= */


/* -----------------------------------------
   YEAR
----------------------------------------- */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* -----------------------------------------
   EXPERIENCE CARDS
----------------------------------------- */

const workCards = document.querySelectorAll(".work-card");

workCards.forEach((card) => {

  const trigger = card.querySelector(".card-trigger");

  if (!trigger) return;

  trigger.addEventListener("click", () => {

    const isOpen = card.classList.contains("open");

    /*
      Close every other card first.
      This keeps the page clean instead of
      allowing the entire page to expand at once.
    */

    workCards.forEach((otherCard) => {

      if (otherCard !== card) {

        otherCard.classList.remove("open");

        const otherTrigger =
          otherCard.querySelector(".card-trigger");

        if (otherTrigger) {
          otherTrigger.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      }

    });


    /*
      Toggle the clicked card.
    */

    card.classList.toggle("open");

    trigger.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

  });

});


/* -----------------------------------------
   PROJECT CARDS
----------------------------------------- */

const projectCards = document.querySelectorAll(
  ".project-card"
);

projectCards.forEach((card) => {

  const button = card.querySelector(".project-expand");

  if (!button) return;

  button.addEventListener("click", () => {

    const isOpen = card.classList.contains("open");

    card.classList.toggle("open");

    button.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

  });

});


/* -----------------------------------------
   SCROLL REVEAL
----------------------------------------- */

const revealItems = document.querySelectorAll(
  ".work-card, .project-card, .work-thread, .next-section"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.08
  }
);


revealItems.forEach((item, index) => {

  item.classList.add("reveal");

  /*
    Small stagger so the cards don't all
    appear simultaneously.
  */

  item.style.transitionDelay =
    `${Math.min(index * 45, 300)}ms`;

  observer.observe(item);

});


/* -----------------------------------------
   KEYBOARD ACCESSIBILITY
----------------------------------------- */

document.addEventListener("keydown", (event) => {

  if (event.key !== "Escape") return;

  workCards.forEach((card) => {

    card.classList.remove("open");

    const trigger =
      card.querySelector(".card-trigger");

    if (trigger) {
      trigger.setAttribute(
        "aria-expanded",
        "false"
      );
    }

  });

  projectCards.forEach((card) => {

    card.classList.remove("open");

    const button =
      card.querySelector(".project-expand");

    if (button) {
      button.setAttribute(
        "aria-expanded",
        "false"
      );
    }

  });

});
