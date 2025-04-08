// Completează main.js cu funcțiile lipsă
function performInference(userAnswers) {
  try {
    const phones = await getPhones();
    const rules = await getRules();

    console.log("User Answers:", userAnswers);
    console.log("Loaded Phones:", phones);
    console.log("Loaded Rules:", rules);

    const matchedPhones = forwardChaining(userAnswers, phones, rules);
    console.log("Matched Phones:", matchedPhones);

    displayPhones(matchedPhones);
  } catch (error) {
    console.error('Error during inference:', error);
  }
}

function displayPhones(matchedPhones) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (matchedPhones.length === 0) {
    resultsContainer.innerHTML = '<p>Nu am găsit telefoane care să corespundă criteriilor selectate.</p>';
    return;
  }

  matchedPhones.forEach(phone => {
    const phoneDiv = document.createElement('div');
    phoneDiv.className = 'phone-result';

    phoneDiv.innerHTML = `
      <div class="phones-container">
        <div class="phone-details">
          <h2>${phone.nume || 'Necunoscut'}</h2>
          <p>Scor de potrivire: ${phone.score}</p>
          <div class="content">
            <p>Preț: ${phone.pret || 'N/A'} lei</p>
            <p>Marca: ${phone.marca || 'N/A'}</p>
            <p>Memorie: ${phone.memoria_interna || 'N/A'}</p>
            <p>RAM: ${phone.memorie_ram || 'N/A'}</p>
            <p>Sistem: ${phone.sistem_operare || 'N/A'}</p>
          </div>
        </div>
      </div>
    `;

    resultsContainer.appendChild(phoneDiv);
  });
}