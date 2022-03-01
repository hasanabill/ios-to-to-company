/* search for the phone  */
const searchPhone = () => {
    let searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}
/* showing search result */
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    const phoneDetails = document.getElementById('phone-details')
    /* clearing content for new search */
    phoneDetails.textContent = '';
    searchResult.textContent = '';
    /* handling error and showing result */
    if (phones.length == 0) {
        document.getElementById('no-result').style.display = 'block';
    }
    else {
        document.getElementById('no-result').style.display = 'none';
        for (let i = 0; i < 20; i++) {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card phone border border-2 align-items-center py-3">
        <img src="${phones[i].image}" alt="">
        <div class="card-body">
        <h5>Brand: ${phones[i].brand}</h5>
            <h5 class="card-title">${phones[i].phone_name}</h5>
        </div>
        <a href="#"><button onclick="loadPhoneDetails('${phones[i].slug}')" type="button" class="btn btn-dark" >Learn More</button></a>
        </div>
        `
            searchResult.appendChild(div);
        }
    }
}
/* getting individual phone details */
const loadPhoneDetails = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}
/* showing individual phone details */
const displayPhoneDetails = phone => {
    const phoneDetails = document.getElementById('phone-details')
    phoneDetails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('row', 'align-items-center', 'px-2', 'pt-3')
    div.innerHTML = `
    <div class="col-md-4 w-50 mx-auto">
    <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Brand: ${phone.brand}</h5>
      <h5 class="card-title">Name: ${phone.name}</h5>
      
      <p class="card-text"><b>Main Features:</b> <br>
        <b>Chipset:</b> ${phone.mainFeatures.chipSet} <br>
        <b>Display Size:</b> ${phone.mainFeatures.displaySize} <br>
        <b>Storage:</b> ${phone.mainFeatures.memory}<br>
        </p>
      <p class="card-text"><b>Sensors:</b> ${phone.mainFeatures.sensors}</p>
      <p class="card-text"><b>Others:</b> ${phone.others ? Object.entries(phone.others) : 'no data found'}</p>
      <p class="card-text"><small class="text-muted">${phone.releaseDate ? phone.releaseDate : 'no release date data found'}</small></p>
      </div >
      </div >
      
      `
    phoneDetails.appendChild(div)
}