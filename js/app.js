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
        <button onclick="displayPhoneDetails()" type="button" class="btn btn-dark">Learn More</button>
        </div>
        `
            searchResult.appendChild(div);
        })
    }
}

const displayPhoneDetails = () => {
    console.log('clickedd')
}