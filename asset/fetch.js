const eventB1 = document.getElementById('b1');

const retrieve = async () => {
  // let url = 'https://api.github.com/users/mralexgray/repos';
  let url = 'https://randomuser.me/api';
  
  let jsonArray = await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Server response wasn't OK");
      }
    })
    .then((data) => {
      console.log(data);
      console.log(data.results);
      return data.results;
    })
    .catch((error) => console.log(error));

  return jsonArray;
};

// console.log(retrieve());

eventB1.addEventListener('click', async () => {
  const span = document.getElementById('ul1');
  const results = await retrieve();

  console.log(results);

  for (const result of results) {
    for (const key in result) {
      console.log(`<li> ${result[key]} </li>`);

      span.innerHTML += `<li> ${key} : ${result[key]} </li>`;
      if (typeof result[key] === 'object') {
        for (const key2 in result[key]) {
          console.log(`<li> ${key}/${key2} : ${result[key][key2]} </li>`);
          span.innerHTML += `<li> ${key}/${key2} : ${result[key][key2]} </li>`;
          if (typeof result[key][key2] === 'object') {
            for (const key3 in result[key][key2]) {
              console.log(`<li> ${key}/${key2}/${key3} : ${result[key][key2][key3]} </li>`);
              span.innerHTML += `<li> ${key}/${key2}/${key3} : ${result[key][key2][key3]} </li>`;
            }
          }


        }
      }
    }
  }
});

const forLoop ()