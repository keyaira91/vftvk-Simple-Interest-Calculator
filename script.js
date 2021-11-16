
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

function compute(){
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(years);
    var principal = document.getElementById("principal").value;
    var rateval = document.getElementById("rate").value;
    var interest = principal * years * rateval / 100;
    var result = document.getElementById("result")
    
    // Checks if amount is 0 or negative number
    if (principal == 0 || principal < 0) {
        alert("Enter a positive number.");
        principal.focus();
        return false;
    }

    // Result output. Spans before variable name for highlight
    result.innerHTML = "If you deposit " + "<span style='background-color: yellow;'>" + principal + "</span>"+ ",\
    <br>at an interest rate of " + "<span style='background-color: yellow;'>" + rateval + "</span>" + "%.\
    <br> You will receive an amount of " + "<span style='background-color: yellow;'>" + interest + "</span>" +",\
    <br>in the year " + "<span style='background-color: yellow;'>" + year + "</span>" + "\ <br>"
}
        