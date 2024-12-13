console.log("hi");
function testQuestions() {

var location = (" where is your dream location");
var airline =  prompt("what is your preferd airlines");
var age = prompt("What is your age range")

var newItem = document.createElement("p");
  newItem.textContent = "Desired Location: " + location;
  document.body.appendChild(newItem);

  var newItem2 = document.createElement("p");
  newItem2.textContent = "desired airline: " + airline;
  document.body.appendChild(newItem2);

  var newItem3 = document.createElement("p");
  newItem3.textContent = "age range: " + age;
  document.body.appendChild(newItem3);

  if (location === "Desert" && (airline === "Delta" || airline === "United") && (age === "18-25" || age === "30-40" || age === "45-55")) {
    alert("We recommend two Delta tickets for your desert adventure! For your age group, consider activities like:\n" +
          " - Stargazing tours\n" +
          " - Off-roading excursions\n" +
          " - Hiking in desert canyons");
  } else if (location === "Beach" && airline === "Southwest" && (age === "30-40" || age === "45-55")) {
    alert("We recommend two Southwest tickets for your beach getaway! For your age group, consider activities like:\n" +
          " - Relaxing on the beach\n" + 
          " - Water sports (surfing, snorkeling, etc.)\n" +
          " - Exploring local restaurants and nightlife");
  } else if (location == "Forest" && airline == "United" && (age == "45-55" || age =="60+")) { 
    alert("We recommend two United tickets for your forest escape to Nevada or Nebraska! For your age group, consider activities like:\n" +
          " - Hiking and nature walks\n" +
          " - Wildlife viewing\n" +
          " - Camping or cabin stays"); 
        } else if (location === "Moutine" && airline == "United" || airline == "Southwest" && (age === "45-55" || age === "60+")) {  
          alert("We recomend either two united ticketes or two  Southwest tickets to either Tennsese or Colorado! For your age group, consider activities like:\n" +
            ""
          )
  } else {
    alert("Based on your input, we're still working on personalized recommendations.");
  }
}
