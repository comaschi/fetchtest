import { renderItem, retrieve } from "./utility.js";

const eventB2 = document.getElementById('b2');
const url = 'https://api.github.com/users/mralexgray/repos';


eventB2.addEventListener('click', async () => {
  const span = document.getElementById('ul1');
  const results = await retrieve(url);
  span.innerHTML = renderItem(results);
});
