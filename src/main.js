import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { MedService } from "./med-service";

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const query = $(".form-control").val();

    (async () => {
      let medService = new MedService();
      const ailmentResults = await medService.getDoctorByAilment(query);
      console.log(ailmentResults);
      getElements(ailmentResults.data);
    })();

    function getElements(response) {
      if (!response || response === 0) {
        $(".results").html("Sorry, there are no results that match your request");
      } else {
        printHeader(response);
      }
    }

    function printHeader(response) {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        let firstName = response[i].profile.first_name;
        let lastName = response[i].profile.last_name;
        let title = response[i].profile.title;
        let bio = response[i].profile.bio;
        // let practices = response[i].practices;
        // let allPractices = [];
        // for (let x = 0; x < practices.length; x++){
        //   let practiceName = practices[x].name;
        //   let practiceNewPatients = practices[0].accepts_new_patients
        // })
        let acceptsNewPatients = response[i].practices[0].accepts_new_patients;
        let address = response[i].practices[0].visit_address.street;
        let city = response[i].practices[0].visit_address.city;
        let state = response[i].practices[0].visit_address.state;
        let phone = response[i].practices[0].phones[0].number;
        $("#results").append(
          `<div class="col-md-3">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                ${firstName} ${lastName}, ${title}
              </h2>
            </div>
            <div class="card-body">
              <ul>
                <li>Bio: ${bio}</li>
                <li>Address: ${address} ${city}, ${state}</li>
                <li>Phone: ${phone}</li>
                <li>Accepting New Patients: ${acceptsNewPatients}</li>
              </ul>
            </div>
          </div>`);
      }
    }
  });
});
