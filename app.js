document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');

  const newPlayerForm = document.querySelector('#new-player-form');
  newPlayerForm.addEventListener('submit', handlePlayerFormSubmit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);
})

const handlePlayerFormSubmit = function (event) { //QUESTION if event can be banana, how does this function know what the event is? It's an object, right?
  event.preventDefault();
  const player = createPlayer(event.target);
  const playerList = document.querySelector('#players');
  playerList.appendChild(player);

  event.target.reset();
}

const createPlayer = function (form) {

  const player = document.createElement('li');
  player.classList.add('player');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  player.appendChild(name);

  const nationality = document.createElement('h3');
  nationality.textContent = form.nationality.value;
  player.appendChild(nationality);

  const club = document.createElement('p');
  club.textContent = form.club.value;
  player.appendChild(club);

  return player;
}

const handleDeleteAll = function (event) {
  let players = document.querySelector('#players')
  while(players.firstChild) {
    players.removeChild(players.firstChild);
  };

}
