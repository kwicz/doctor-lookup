import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { MedService } from "./med-service";

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    $("#results").html("");
    $("#landing-container").removeClass("landing-img");
    $("#landing-container").addClass("search-img");
    $("form").removeClass("landing-form");
    $("form").addClass("search-form");
    const query = $(".form-control").val();
    (async () => {
      let medService = new MedService();
      let nameResults;
      const ailmentResults = await medService.getDoctorByAilment(query);
      if (ailmentResults.data.length > 0) {
        getElements(ailmentResults.data);
      } else if (ailmentResults.data.length === 0) {
        nameResults = await medService.getDoctorByName(query);
        if (nameResults.data.length > 0) {
          getElements(nameResults.data);
        } else {
          $("#results").html("Sorry, there are no results that match your request. Please try again.");
        }
      }
    })();

    function getElements(response) {
      if (!response || response.data === 0) {
        $(".results").html("Sorry, there are no results that match your request. Please try again.");
      } else {
        printResults(response);
      }
    }

    function printResults(response) {
        if (response.length === 1) {
          $("#resultNumber").html(`Displaying ${response.length} result.`);
        } else {
          $("#resultNumber").html(`Displaying ${response.length} results.`);
        }
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
            `<div class="card-header" id="heading${i}">
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
              </div>`);
        }
    }
  });
});
