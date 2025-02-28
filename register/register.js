let count = 1;

function participantTemplate(count) {
    return `
    <section class="participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
      <label for="fname"> First Name<span>*</span></label>
      <input id="fname${count}" type="text" name="fname" value="" required />
    </div>
    <div class="item activities">
      <label for="activity">Activity #<span>*</span></label>
      <input id="activity${count}" type="text" name="activity" required/>
    </div>
    <div class="item">
      <label for="fee">Fee ($)<span>*</span></label>
      <input id="fee${count}" type="number" name="fee" />
    </div>
    <div class="item">
      <label for="date">Desired Date <span>*</span></label>
      <input id="date${count}" type="date" name="date" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select>
        <option selected value="" disabled selected></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>`;
}

document.getElementById("add").addEventListener("click", function() {
    count++;
    const form = document.querySelector(".participant");
    form.insertAdjacentHTML("beforebegin", participantTemplate(count));
    console.log(count)
  });

  function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, feeInput) => {
      return sum + (Number(feeInput.value) || 0);
    }, 0);
    return "total fees = $", total;
    }

    function successTemplate(info){

      const { adultName, Count, feeTotal } = info;

      return `<div class="success">
      <h1> SUCCESS!! </h1>
        <h3>${adultName} you have successfully added ${Count} people.</h3>
        <h3>Total fees: $${feeTotal}</h3>
        </div>
      `
      ;
    }

    function startConfetti() {
      const confettiContainer = document.createElement("div");
      confettiContainer.classList.add("confetti-container");
      document.body.appendChild(confettiContainer);
    
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
      }
    
    }

document.querySelector("#submitButton").addEventListener("click", function submitForm(event) {
  event.preventDefault();

  const form = document.querySelector("form");

  if (!form.checkValidity()) {
    alert("Please fill out all required fields before submitting.");
    return;
  }
  else {

    // Confetti time!
    startConfetti();
    
    setTimeout(() => {
    }, 5000); 
  }

  console.log(totalFees());
  const adultName = document.querySelector('#adult_name').value;
  const Count = count; 
  const feeTotal = totalFees();
  const info = { adultName, Count, feeTotal };

  form.style.display = "none";
  const message = successTemplate(info);
document.body.insertAdjacentHTML("afterend", message);
});