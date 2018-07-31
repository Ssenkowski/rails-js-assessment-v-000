// Requirement 5 and 6
class Territory {
  constructor(id, number, designation) {
    this.id = id;
    this.number = number;
    this.designation = designation;
  }

  cardAttributes() {
    let cId = $(".congregation_id")[0].innerHTML
    let t = document.createTextNode(`${this.number + " - " + this.designation}`)
    let btn = document.createElement("BUTTON");
    btn.appendChild(t);
    btn.setAttribute("onclick", `location.href='${`http://localhost:3000/congregations/${cId}/territories/${this.id}`}'`)
    btn.setAttribute("id", "created_territory");

    document.body.appendChild(btn);
    alert(`Territory ${this.number} was created!`)
  }
}

//Requirement 2
$(document).ready(function() {
  $(".publishers").one('click', function(e) {
    e.preventDefault()

    $.get(`http://localhost:3000/publishers.json`, function(data) {
      for (x in data) {
        if (`/congregations/${data[x].congregation_id}` === window.location.pathname) {
          let p = document.createTextNode(`${data[x].first_name + " " + data[x].last_name}`)
          let btn = document.createElement("Button");
          btn.appendChild(p);
          btn.setAttribute("href", `${`http://localhost:3000/publishers/${data[x].id}.json`}`)
          btn.style.color = "black"
          document.body.appendChild(btn);
        }
      };
    });
  });
  // Requirement 3
  $(".congregations").one('click', function(e) {
    e.preventDefault()
    $.get(`http://localhost:3000/congregations.json`, function(data) {
      console.log(data);
      for (x in data) {
        let t = document.createTextNode(`${data[x].name}`)
        let btn = document.createElement("BUTTON");
        btn.appendChild(t);
        btn.setAttribute("onclick", `location.href='${`http://localhost:3000/congregations/${data[x].id}`}'`)
        document.body.appendChild(btn);
      }
    });
  });

  //Requirement 4
  $(document.body).on('click', 'button', function() {
    $("ol").empty()
    //let clicked_button = this.
    // Highlight the publisher's button that's been clicked.
      // if (this.style.color == "black") {
      //   for (x in $("button")){
      //     this.style.color = "black"
      //   }
      //   this.style.color = "blue"
      // }

     $.get(($(this).attr("href")), function(data) {
      for (x in data.territories) {
        if (data.territories[x].signed_out === "true") {
          let t = document.createTextNode(`${data.territories[x].number + " " + data.territories[x].designation}`)
          let btn = document.createElement("ol");
          btn.appendChild(t);
          document.body.appendChild(btn);
        }
      };
    });
  });

  //  Requirement 5
  $("#new_territory").submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: this.method,
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        // Requirement 5 and 6
        if (response.number != undefined || response.designation != undefined) {
          var newTerritory = new Territory(response.id, response.number, response.designation)
          newTerritory.cardAttributes()
        } else {
          alert(`The territory was not created!  Please refresh the page and enter a valid territory number and designation`)
          //How can I refresh the submit button without refreshing the page so as to resubmit the form?
        }
      }
    });
  });
})
