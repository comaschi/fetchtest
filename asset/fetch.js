import { renderItem, retrieve } from "./utility.js";

const eventB1 = document.getElementById('b1');

const url = 'https://randomuser.me/api/?results=10';


eventB1.addEventListener('click', async () => {
  const span = document.getElementById('ul1');
  const results = await retrieve(url);
  span.innerHTML = renderItem(results);
});
