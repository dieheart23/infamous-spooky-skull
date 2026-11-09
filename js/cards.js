const container = document.querySelector('#card-container'); 
const status = document.querySelector('#status');

const card1 = document.createElement('div');
card1.classList.add('card');
card1.innerHTML = '<h3>Vinyasa</h3><p>click to select</p>';

const card2 = document.createElement('div');
card2.classList.add('card');
card2.innerHTML = '<h3>Gentle</h3><p>click to select</p>';

const card3 = document.createElement('div');
card3.classList.add('card');
card3.innerHTML = '<h3>Restorative</h3><p>click to select</p>';

const card4 = document.createElement('div');
card4.classList.add('card');
card4.innerHTML = '<h3>Favorite</h3><p>click to select</p>';

container.appendChild(card1);
container.appendChild(card2);
container.appendChild(card3);
container.appendChild(card4);

card1.addEventListener('click', function()
{
    card1.classList.toggle('selected');
    updateStatus();
});

card2.addEventListener('click', function()
{
    card2.classList.toggle('selected');
    updateStatus();
});

card3.addEventListener('click', function()
{
    card3.classList.toggle('selected');
    updateStatus();
});

card4.addEventListener('click', function()
{
    card4.classList.toggle('selected');
    updateStatus();
});

function updateStatus() { 
    
    const count = document.querySelectorAll('.card.selected').length;

    if (count === 0) {

        status.textContent = 'No interests selected.';

    } else { 

      status.textContent = count + ' interest(s) selected.';
    } 

    {
        favoriteButton.disabled = count === 0;
    }
}

const favoriteButton = document.querySelector('card4');
card4.disabled = true;
card4.addEventListener('click', function() {
    const selectedCards = document.querySelectorAll('.card.selected');
    if (selectedCards.length === 0) {
        alert('Please select at least one interest before adding to favorites');
        return;
    }

    const selectedInterests = Array.from(selectedCards).map(card => card.querySelector('h3').textContent);
    localStorage.setItem('favoriteInterests', JSON.stringify(selectedInterests));
    alert('Your interests have been saved');
});