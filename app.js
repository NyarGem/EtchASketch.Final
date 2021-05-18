let userinput = document.getElementById('userinput').nodeValue;
let gridcontainer=document.getElementById('gridcontainer');

function test(userinput){
    document.write(userinput)
}
test(10);




// function makecssgriddivs(userinput) {
//   document.documentElement.style.setProperty('--rows', userinput);
//   document.documentElement.style.setProperty('--columns', userinput);
//   for (i = 0; i < (userinput*userinput); i++) {
//     let griditems = document.createElement("div");
//     griditems.innerText = (i + 1);
//     gridcontainer.appendChild(griditems).className = "griditems";
//   };
// };
// makecssgriddivs(userinput);






// function setcssvariables(userinput){
//   document.documentElement.style.setProperty('--rows', userinput);
//   document.documentElement.style.setProperty('--columns', userinput);
// }
// setcssvariables(userinput);

// Getting CSSVariable
// getComputedStyle(document.documentElement).getPropertyValue(--rows)
// Setting CSSVariable
// document.documentElement.style.setProperty(name,value);