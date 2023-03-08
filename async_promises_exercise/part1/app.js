console.log("test");

let url = "http://numbersapi.com";
let favNum = 7;

axios.get(`${url}/${favNum}?json`).then((res) => {
  console.log(res.data);
});

favNumbers = [5, 6, 7];

axios.get(`${url}/${favNumbers}?json`).then((res) => {
  console.log(res.data);
});

let facts = [];

for (let i = 1; i < 5; i++) {
  facts.push(axios.get(`${url}/${favNum}?json`));
}

Promise.all(facts)
  .then((factsArr) => {
    for (res of factsArr) {
      console.log(res.data);
    }
  })
  .catch((err) => console.log(err));
