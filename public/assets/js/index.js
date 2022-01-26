//rendering list items for each of the 
const renderPets = (pets) => {
    console.log(pets);
    pets.forEach(pet => {
        const li = document.createElement('li');
        li.textContent = `${pet.name}`
        document.body.append(li)
    });
};

const getPets = () => {
    return fetch('/api/pets', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.error(err))
};

const init = async() => {
    const pets = await getPets();
    renderPets(pets)
};

init();