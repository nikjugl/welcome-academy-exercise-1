
// Code for "show me the money"

function onClick() {
    var x = document.getElementById("money");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 
 


// Code for "live update"
function onChange(value) {
    const text = document.getElementById('text');
    text.innerHTML = value;
}
