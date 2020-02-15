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
      for (let i = 0; i < response.length; i++) {
        $("#results").append(
          `<div class="card-header" id="heading${i}">
            <h2 class="mb-0">
              <button class="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                ${response[i].profile.first_name} ${response[i].profile.last_name}, ${response[i].profile.title}
                <span class="fa-stack fa-sm">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fas fa-plus fa-stack-1x fa-inverse"></i>
                </span>
              </button>
            </h2>
          </div>`);
      }
    }

    // $(".card-header").on('click, function')
  });
});


      // let doctorList = [];
      // for (let i = 0; i < response.length; i++) {
      //   let doctor = {};
        // doctor.push({firstName : response[i].profile.first_name});
        // doctor.push({lastName: response[i].profile.last_name});
        // doctor.push({title: response[i].profile.title});
        // doctor.push({bio: response[i].profile.bio});
        // doctorList.push(doctor);
        // doctor.firstName = response[i].profile.first_name,
        // doctor.lastName = response[i].profile.last_name,
        // doctor.title = response[i].profile.title,
        // doctor.bio = response[i].profile.bio,
        // doctorList.push(doctor);


//         //   <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion">
//         //     <div class="card-body">
//         //       <ul>
//         //         <li>Bio: ${response[i].profile.bio}</li>
//         //         <li>Accepting New Patients: ${response[i].practices[0].accepts_new_patients}</li>
//         //         <li>Sociology</li>
//         //         <li>Nursing</li>
//         //         <li>English</li>
//         //       </ul>
//         //     </div>
//         //   </div>`);
        // let doctor = {
        //   firstName = response[i].profile.first_name,
        //   lastName = response[i].profile.last_name,
        //   title = response[i].profile.title,
        //   bio = response[i].profile.bio,
        //   acceptingNewPatients = response[i].practices[0].accepts_new_patients,
        //   address = response[i].practices[0].practices[0].visit_address.street,
        //   city = response[i].practices[0].practices[0].visit_address.city,
        //   state = response[i].practices[0].practices[0].visit_address.state,
        //   phone = response[i].practices[0].practices[0].visit_address.phone[0].number
        //   };
        //   console.log("doctor: ", doctor);
        // };
//         // console.log("doctorList: ", doctorList);
//         // responses.forEach(function(response){
//         //   console.log(response)
//         //   $(".results").html(`<li>${response}</li>`);
//         // })

//         // }
//       }
//     }
//     //   // let doctorResult = medService.getDoctorByName("Smith");
//     //   // console.log(doctorResult);
//   });
// });
