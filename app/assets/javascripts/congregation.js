$(document).ready(function() {
  attachListeners();
});

// function attachListeners() {
//   $(".territories").on('click', function(e) {
//     e.preventDefault()
//     fetch(`http://localhost:3000/publishers.json`)
//     .then(res => res.json())
//     .then(json => console.log(json));
//   })
// }
//Authentication error trying to fetch the json "401 (unauthorized)... {error: "You need to sign in or sign up before continuing."}"
