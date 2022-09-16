URL = "https://ghibliapi.herokuapp.com/people";

fetch(URL)
  .then((res) => res.json())
  .then((resJson) => {
    console.log(resJson[0].eye_color);
  })
  .catch((err) => {
    console.error(err);
  });
