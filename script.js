// FAQ

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    if (answer.style.display === "block") {

      answer.style.display = "none";

    } else {

      answer.style.display = "block";

    }

  });

});




// TYPING EFFECT

const words = [

  "चैन छीन रही हैं!",
  "नींद उड़ा रही हैं!",
  "stress बढ़ा रही हैं!",
  "health खराब कर रही हैं!"

];

let wordIndex = 0;
let charIndex = 0;

let currentWord = "";
let currentChar = "";

let isDeleting = false;

const changingText =
document.getElementById("changing-text");

function type() {

  currentWord = words[wordIndex];

  if (isDeleting) {

    currentChar =
    currentWord.substring(0, charIndex--);

  } else {

    currentChar =
    currentWord.substring(0, charIndex++);

  }

  changingText.textContent = currentChar;

  let speed = 100;

  if (isDeleting) {

    speed = 50;

  }

  if (!isDeleting &&
      charIndex === currentWord.length) {

    speed = 1500;

    isDeleting = true;

  }

  else if (isDeleting &&
           charIndex === 0) {

    isDeleting = false;

    wordIndex++;

    if (wordIndex === words.length) {

      wordIndex = 0;

    }

  }

  setTimeout(type, speed);

}

type();




// PROBLEM SELECT

const problemBoxes =
document.querySelectorAll(".problem-box");

problemBoxes.forEach((box) => {

  box.addEventListener("click", () => {

    box.classList.toggle("active");

  });

});




// WHATSAPP + GOOGLE SHEETS FUNCTION

const submitBtn =
document.getElementById("submitBtn");

const originalBtnText = submitBtn.innerHTML;

submitBtn.addEventListener("click", async () => {

  // LOADING STATE

submitBtn.innerHTML = "Sending...";

submitBtn.disabled = true;

  const name =
  document.getElementById("name").value;

  const phone =
  document.getElementById("phone").value;

  const message =
  document.getElementById("message").value;

  // VALIDATION

if(name === "" || phone === ""){

  alert("Please fill all details");

  submitBtn.innerHTML = originalBtnText;

  submitBtn.disabled = false;

  return;

}

  let selectedProblems = [];

  document
    .querySelectorAll(".problem-box.active")

    .forEach((item) => {

      selectedProblems.push(item.innerText);

    });


  const finalMessage =

`नाम: ${name}

फोन नंबर: ${phone}

समस्याएं:
${selectedProblems.join("\n")}

अन्य जानकारी:
${message}`;



  // GOOGLE SHEETS SAVE

  await fetch(
  "https://script.google.com/macros/s/AKfycbzZXp88iEfHq-JDfpZRBZCjnjxLjWHs1LxmBPrfgINwjMEPV0-mSXhhBRpRZvQVEYU1/exec",

  {

    method: "POST",

    body: JSON.stringify({

      name: name,

      phone: phone,

      message: finalMessage

    })

  });




  // WHATSAPP OPEN

  const whatsappNumber = "919580136415";

  const whatsappURL =

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

// WHATSAPP OPEN

window.open(whatsappURL, "_blank");


// THANK YOU POPUP AFTER 1 SECOND

setTimeout(()=>{

  document.getElementById("popupOverlay").style.display = "flex";

},1000);


// CLOSE POPUP

document.getElementById("closePopup").addEventListener("click",()=>{

  document.getElementById("popupOverlay").style.display = "none";

});

// RESET FORM

document.getElementById("name").value = "";

document.getElementById("phone").value = "";

document.getElementById("message").value = "";

document
.querySelectorAll(".problem-box.active")

.forEach((item)=>{

  item.classList.remove("active");

});


// RESTORE BUTTON

submitBtn.innerHTML = originalBtnText;

submitBtn.disabled = false;


});

// SHARE BUTTON

const shareBtn =
document.getElementById("shareBtn");

shareBtn.addEventListener("click",(e)=>{

  e.preventDefault();

  const shareText =

`🌿 doTERRA Wellness

FREE Essential Oils Consultation

👉 https://beautiful-chimera-1c48ec.netlify.app/`;

  const whatsappShareURL =

`https://wa.me/?text=${encodeURIComponent(shareText)}`;

  window.open(whatsappShareURL,"_blank");

});
