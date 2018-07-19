$(document).ready(function() {
  attachListeners();
});

function attachListeners() {
  $(".territories").on('click', function(e) {
    e.preventDefault()
    const id = $(this).data('id')
    console.log('data id is', id);
    //const t =
    function showTerritories(id){
        $("#button_to").append(`${value}`);
    }
})
}
function showTerritories() {
       fetch(`http://localhost:3000/publishers${id}`).then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message))
      .then(jsonResponse => {

    })
  }
