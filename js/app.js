
// Here I have a function that takes in one argument
// This function is then input into my html code as onclick
//  where it accepts an argument that is the same as the ID 
// of the clicked element
function selectCat(selectedCat) {
    // here I grabbed the element by the id indicated in the function argument
    // I then made a string of the outerHTML of the selected card
    // I then set the cookie named selection and the content is the outerHtml string
    var menuCard = document.getElementById(selectedCat);
    selectedCat = menuCard.outerHTML;
    Cookies.set("selection", selectedCat);
}


