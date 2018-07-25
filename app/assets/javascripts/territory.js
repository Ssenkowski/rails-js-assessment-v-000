$(document).ready(function() {
  attachListeners();
});
//Requirement 2
function attachListeners() {
  $(".territories").on('click', function(e) {
    e.preventDefault()

    $.get(`http://localhost:3000/publishers.json`, function(data) {
      for (x in data) {
        let t = document.createTextNode(`${data[x].first_name + " " + data[x].last_name}`)
        let btn = document.createElement("BUTTON");
        btn.appendChild(t);
        document.body.appendChild(btn);
      };
    })
  })
}
