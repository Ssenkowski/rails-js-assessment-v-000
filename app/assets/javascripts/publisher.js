$(document).ready(function() {
  attachListeners();
});

function attachListeners() {
  $(".territories").on('click', function(e) {
    e.preventDefault()
    const id = $(this).data('id');
    console.log('data id is', id);
    //How can I authenticate that this is the user via fetch and not return a 401?

    fetch(`http://localhost:3000/publishers/${id}.json`, {
      headers: {

      }
    })
    .then(res => res.json())
    .then(json => console.log(json));
  })
}
// function showTerritories() {
//        fetch(`http://localhost:3000/publishers${id}`).then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error('Request failed!');
//       }, networkError => console.log(networkError.message))
//       .then(jsonResponse => {
//
//     })
//   }
