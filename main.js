// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
  // We're going to solve this by breaking the problem into three parts.
  // Programmers like automating things, we'll populate the HTML drop down options using code,
  // instead of having to type out all the values.
  // Create a function that does the some math and gives us the new weight.
  // Then create a function that responds when the user clicks on the button.
  
  // 1. Populate the dropdown element with the data found in the planets array.
  // The value of each option should be the planet's name.
  // Use the following built-in methods:
  // `.forEach` `document.createElement` `document.getElementById` `.appendChild`

  
// find the planets selector 
var planetSelector = document.getElementById("planets"); 

// Create and append the options
// Option: Reorder list by starting at bottom of stack and decrement i
for (var i = planets.length-1; i >= 0; i--) {
// for (var i = 0; i < planets.length; i++) {
    console.log(planets[i][0]);
    var option = document.createElement("option");
    // option.value = i;
    option.value = planets[i][0];
    option.text = planets[i][0];
    planetSelector.appendChild(option);
}

// --------------------------------------------

function calculateWeight(weight, planetName) {

    // 2. Write the code to return the correct weight
    var result = 0;
    planets.forEach(function(element) {
        if (element[0] == planetName) {
            console.log(element[0] + " : " + element[1]);
            result = Number(weight) * Number(element[1]);
        }
    });

    return result;
}

function handleClickEvent() {

    // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = document.getElementById('user-weight').value

    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = planetSelector.options[planetSelector.selectedIndex].value;
    console.log("planet name = " + planetName)

    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userWeight, planetName);

    // 6. Write code to display the message shown in the screenshot.
    document.getElementById('output').innerText = "If you were on " + planetName +", you would weigh " + result + "lbs!";

    console.log("user-weight = " + userWeight);
    console.log("user-weight = " + result);
    console.log(document.querySelector('#output').innerText);

}


// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
$("#calculate-button").click(function() { handleClickEvent(); });


// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// Done
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
// Done
