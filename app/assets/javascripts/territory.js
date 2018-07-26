$(document).ready(function() {
//Requirement 2
  $(".publishers").on('click', function(e) {
    e.preventDefault()

    $.get(`http://localhost:3000/publishers.json`, function(data) {
      for (x in data) {
        let p = document.createTextNode(`${data[x].first_name + " " + data[x].last_name}`)
        let btn = document.createElement("Button");
        btn.appendChild(p);
        btn.setAttribute("href", `${`http://localhost:3000/publishers/${data[x].id}.json`}`)
        document.body.appendChild(btn);
      };
    });
  });
      // Requirement 3
        $(".congregations").on('click', function(e) {
          e.preventDefault()
          $.get(`http://localhost:3000/congregations.json`, function(data) {
            console.log(data);
            for (x in data) {
              let t = document.createTextNode(`${data[x].name}`)
              let btn = document.createElement("BUTTON");
              btn.appendChild(t);
              document.body.appendChild(btn);
            }
          });
        });
      //Requirement 4
      $(document.body).on('click', 'button', function() {
          $.get(($(this).attr("href")), function(data){
            for (x in data.territories) {
              if (data.territories[x].signed_out === "true"){
                let t = document.createTextNode(`${data.territories[x].number + " " + data.territories[x].designation}`)
                let btn = document.createElement("ol");
                btn.appendChild(t);
                document.body.appendChild(btn);
              }
            };
          });
        });
      //  Requirement 5
        // $("#new_territory").submit( function(e){
        //   e.preventDefault();
        //   $.ajax({
        //     type: this.method,
        //     url:  this.action,
        //     data: $(this).serialize(),
        //     success: function(response){
        //       alert(response)
        //     }
        //   });
        // });
  })
