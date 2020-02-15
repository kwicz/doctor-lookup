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
      let nameResults;
      const ailmentResults = await medService.getDoctorByAilment(query);
      console.log("ailmentResults: ", ailmentResults);
      console.log("ailmentLength: ", ailmentResults.data.length);
      if (ailmentResults.data.length > 0) {
        console.log("ailment: ", ailmentResults);
        getElements(ailmentResults.data);
      } else if (ailmentResults.data.length === 0) {
        nameResults = await medService.getDoctorByName(query);
        console.log("nameResults: ", nameResults);
        console.log("nameResultsLength: ", nameResults.data.length);
        if (nameResults.data.length > 0) {
          console.log("doctor: ", nameResults);
          getElements(nameResults.data);
        } else {
          console.log("Name and Ailment lengthsa are 0");
          $("#results").html("Sorry, there are no results that match your request");
        }
      }
    })();

    function getElements(response) {
      console.log("response: ", response);
      if (!response || response.data === 0) {
        $(".results").html("Sorry, there are no results that match your request. Please try again.");
      } else {
        printHeader(response);
      }
    }

    function printHeader(response) {
      for (let i = 0; i < response.length; i++) {
        let firstName = response[i].profile.first_name;
        let lastName = response[i].profile.last_name;
        let title = response[i].profile.title;
        let bio = response[i].profile.bio;
        let acceptsNewPatients = response[i].practices[0].accepts_new_patients;
        let address = response[i].practices[0].visit_address.street;
        let city = response[i].practices[0].visit_address.city;
        let state = response[i].practices[0].visit_address.state;
        let phone = response[i].practices[0].phones[0].number;
        $("#results").append(
          `<div class="col-md-12">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                ${firstName} ${lastName}, ${title}
              </h2>
            </div>
            <div class="card-body id="body${i}">
              <ul>
                <li>Address: ${address} ${city}, ${state}</li>
                <li>Phone: ${phone}</li>
                <li>Accepting New Patients: ${acceptsNewPatients}</li>
              </ul>
              <blockquote>${bio}</blockquote>
            </div>
          </div>`);
      }
    }

    // $(".card-header").on("click", function(){
    //   let id = event.target.id;
    //   $("#body"+ id).show();
    // });

  });
});
