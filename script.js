// WHATSAPP + GOOGLE SHEETS FUNCTION

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", async () => {

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


  // GOOGLE SHEETS SAVE

  await fetch("https://script.google.com/macros/s/AKfycbzZXp88iEfHq-JDfpZRBZCjnjxLjWHs1LxmBPrfgINwjMEPV0-mSXhhBRpRZvQVEYU1/exec", {

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

  window.open(whatsappURL,"_blank");

});