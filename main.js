function createCard() {
  return `
    <div class="card">
      <h2>24/11 <span>quinta</span></h2>
      <ul>
        <li>
          <img src="./assets/icon-brazil.svg" alt="Bandeira do Brasil" />
          <strong>16:00</strong>
          <img src="./assets/icon-serbia.svg" alt="Banderia da Sérvia" />
        </li>
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `      
  <header>
    <img src="./assets/logo.svg" alt="Logo da NLW" />
  </header>

  <main id="cards">
    ${createCard()}
    ${createCard()}
    ${createCard()}
  </main>
`
