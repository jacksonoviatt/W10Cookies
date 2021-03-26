
// Here I got the cookie from the last page 
var selection = Cookies.get("selection");

// Here I created a new empty div and appended it onto the container
var container = document.getElementById("container");
var newMenuCard = document.createElement('div');
container.append(newMenuCard);

// Here is an conditional statement that says that if the selection is
// NOT undefined that our new div's content should be the string of html code we pulled over with our cookie
// else, the selection is undefined, it will display the message that you need to make a selection
if (selection != undefined) {
    newMenuCard.outerHTML = selection;
} else {
    newMenuCard.innerText = "YOU NEED TO MAKE A SELECTION"
}


// here I created a function that will remove the cookie named "selection"
// this function can then be utilized by the html onClick feature
// And onclick of the link it is connected to will clear any cookies
function removeCookie() {
    Cookies.remove("selection");
}

