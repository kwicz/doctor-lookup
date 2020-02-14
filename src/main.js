import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MedService } from "./med-service";


$(document).ready(function () {
  
  $("form").submit(function(event){
    event.preventDefault();
    const query = $(".form-control").val();

    (async () => {
      let medService = new MedService();
      const ailmentResults = await medService.getDoctorByAilment(query);
      console.log(ailmentResults);
      getElements(ailmentResults.data);
    })();

    function getElements(responses) {
      // if (!responses || responses === 0) {
      //   $(".results").html("Sorry, there are no results that match your request");
      // } else {
      console.log(responses);
      responses.forEach(function(response){
        console.log(response)
        $(".results").html(`<li>${response}</li>`);
      })
        
      // }
    }
  });
//   // let doctorResult = medService.getDoctorByName("Smith");
//   // console.log(doctorResult);
  
});

