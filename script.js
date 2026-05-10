// FAQ

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question)=>{

  question.addEventListener("click",()=>{

    const answer = question.nextElementSibling;

    if(answer.style.display === "block"){

      answer.style.display = "none";

    }

    else{

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

const changingText = document.getElementById("changing-text");

function type(){

  currentWord = words[wordIndex];

  if(isDeleting){

    currentChar = currentWord.substring(0,charIndex--);

  }

  else{

    currentChar = currentWord.substring(0,charIndex++);

  }

  changingText.textContent = currentChar;

  let speed = 100;

  if(isDeleting){

    speed = 50;

  }

  if(!isDeleting && charIndex === currentWord.length){

    speed = 1500;

    isDeleting = true;

  }

  else if(isDeleting && charIndex === 0){

    isDeleting = false;

    wordIndex++;

    if(wordIndex === words.length){

      wordIndex = 0;

    }

  }

  setTimeout(type,speed);

}

type();



// PROBLEM SELECT

const problemBoxes = document.querySelectorAll(".problem-box");

problemBoxes.forEach((box)=>{

  box.addEventListener("click",()=>{

    box.classList.toggle("active");

  });

});




// WHATSAPP FUNCTION

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click",()=>{

  const name =
  document.getElementById("name").value;

  const phone =
  document.getElementById("phone").value;

  const message =
  document.getElementById("message").value;

  let selectedProblems = [];

  document
  .querySelectorAll(".problem-box.active")

  .forEach((item)=>{

    selectedProblems.push(item.innerText);

  });


  const finalMessage =

`नाम: ${name}

फोन नंबर: ${phone}

समस्याएं:
${selectedProblems.join("\n")}

अन्य जानकारी:
${message}`;


  const whatsappNumber = "919580136415";

  const whatsappURL =

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

  window.open(whatsappURL,"_blank");

});