const searchPhone = () => {
    let searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if (phones.length == 0) {
        document.getElementById('no-result').style.display = 'block';
    }
    else {
        document.getElementById('no-result').style.display = 'none';
        phones.forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card  align-items-center py-3">
        <img src="${phone.image}" width="160px" height="212px" class="">
        <div class="card-body">
        <h5>Brand: ${phone.brand}</h5>
            <h5 class="card-title">${phone.phone_name}</h5>
        </div>
        <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-dark" >Learn More</button>
        </div>
        `
            searchResult.appendChild(div);
        })
    }
}

const loadPhoneDetails = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = phone => {
    const phoneDetails = document.getElementById('phone-details')
    phoneDetails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('modal-dialog')
    div.innerHTML = `
        
        <div class="">
            <h5 class="">${phone.name}</h5>
        </div>
        
        `
    phoneDetails.appendChild(div)
    console.log(phone)
}