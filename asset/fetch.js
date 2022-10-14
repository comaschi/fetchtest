let retrieve = () => {
  let url = 'http://randomuser.me/api';
  fetch(url)
    .then((response) => {
      response.json();
      console.log(response);
    })
    .then((data) => {
      console.log(data);
      console.log(data.results);
    });
};

retrieve();
