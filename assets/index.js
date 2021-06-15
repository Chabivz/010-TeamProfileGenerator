const server = require("../server");
let teamArray = server.teamArray;
const DisplayArray = async () => {

    teamArray.forEach(element => {
      $('.card-container').empty();
      let card = $('<div>').addClass('card');
      let cardContent = $('<div>').addClass('card');
      card.append(cardContent);
      let name = $("<h2>").addClass("card-name").text(`${element.name}`);
      let id = $("<h2>").addClass("card-id").text(`${element.id}`);
      let email = $("<h2>").addClass("card-email").text(`${element.email}`);
      
        if (element.officeNumber) {
          let officeNumber = $("<h2>").addClass("card-officeNumber").text(`${element.officeNumber}`);
          let role = $("<h2>").addClass("card-role").text(`Manager`);
          card.append(name, role, id, email, officeNumber)
        } else if (element.school) {
          let school = $("<h2>").addClass("card-school").text(`${element.school}`);
          let role = $("<h2>").addClass("card-role").text(`Intern`);
          card.append(name, role, id, email, school)
        } else if (element.github) {
          let github = $("<h2>").addClass("card-officeNumber").text(`${element.github}`);
          let role = $("<h2>").addClass("card-role").text(`Manager`);
          card.append(name, role, id, email, github)
        } else {
          console.log("Employee")
        }
      
    });
  
  }
  
  DisplayArray()