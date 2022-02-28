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

    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" width="160px" height="212px" class="">
        <div class="card-body">
            <h5 class="card-title text-center">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
        </div>
        </div>
        `
        searchResult.appendChild(div);
    })
}