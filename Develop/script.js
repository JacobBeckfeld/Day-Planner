//make today's date

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//set the text to local storage

$("#agendaOne").val(localStorage.agendaOne);
$("#agendaTwo").val(localStorage.agendaTwo);
$("#agendaThree").val(localStorage.agendaThree);
$("#agendaFour").val(localStorage.agendaFour);
$("#agendaFive").val(localStorage.agendaFive);
$("#agendaSix").val(localStorage.agendaSix);
$("#agendaSeven").val(localStorage.agendaSeven);
$("#agendaEight").val(localStorage.agendaEight);
$("#agendaNine").val(localStorage.agendaNine);

//functions for save buttons that save the text input

$("#saveOne").on("click", function(){
    localStorage.agendaOne = $("#agendaOne").val()
})
$("#saveTwo").on("click", function(){
    localStorage.agendaTwo = $("#agendaTwo").val()
})
$("#saveThree").on("click", function(){
    localStorage.agendaThree = $("#agendaThree").val()
})
$("#saveFour").on("click", function(){
    localStorage.agendaFour = $("#agendaFour").val()
})
$("#saveFive").on("click", function(){
    localStorage.agendaFive = $("#agendaFive").val()
})
$("#saveSix").on("click", function(){
    localStorage.agendaSix = $("#agendaSix").val()
})
$("#saveSeven").on("click", function(){
    localStorage.agendaSeven = $("#agendaSeven").val()
})
$("#saveEight").on("click", function(){
    localStorage.agendaEight = $("#agendaEight").val()
})
$("#saveNine").on("click", function(){
    localStorage.agendaNine = $("#agendaNine").val()
})

//First hour

if(moment().hour() == 9){
    $("#agendaOne").attr("style", "background-color: red")
}
if(moment().hour() > 9){
    $("#agendaOne").attr("style", "background-color: grey")
}
if(moment().hour() < 9){
    $("#agendaOne").attr("style", "background-color: green")
}

//second hour

if(moment().hour() == 10){
    $("#agendaTwo").attr("style", "background-color: red")
}
if(moment().hour() > 10){
    $("#agendaTwo").attr("style", "background-color: grey")
}
if(moment().hour() < 10){
    $("#agendaTwo").attr("style", "background-color: green")
}

//third hour

if(moment().hour() == 11){
    $("#agendaThree").attr("style", "background-color: red")
}
if(moment().hour() > 11){
    $("#agendaThree").attr("style", "background-color: grey")
}
if(moment().hour() < 11){
    $("#agendaThree").attr("style", "background-color: green")
}


//fourth hour

if(moment().hour() == 12){
    $("#agendaFour").attr("style", "background-color: red")
}
if(moment().hour() > 12){
    $("#agendaFour").attr("style", "background-color: grey")
}
if(moment().hour() < 12){
    $("#agendaFour").attr("style", "background-color: green")
}

//fith hour

if(moment().hour() == 13){
    $("#agendaFive").attr("style", "background-color: red")
}
if(moment().hour() > 13){
    $("#agendaFive").attr("style", "background-color: grey")
}
if(moment().hour() < 13){
    $("#agendaFive").attr("style", "background-color: green")
}

//sixth hour

if(moment().hour() == 14){
    $("#agendaSix").attr("style", "background-color: red")
}
if(moment().hour() > 14){
    $("#agendaSix").attr("style", "background-color: grey")
}
if(moment().hour() < 14){
    $("#agendaSix").attr("style", "background-color: green")
}

//seventh hour

if(moment().hour() == 15){
    $("#agendaSeven").attr("style", "background-color: red")
}
if(moment().hour() > 15){
    $("#agendaSeven").attr("style", "background-color: grey")
}
if(moment().hour() < 15){
    $("#agendaSeven").attr("style", "background-color: green")
}

//eigth hour

if(moment().hour() == 16){
    $("#agendaEight").attr("style", "background-color: red")
}
if(moment().hour() > 16){
    $("#agendaEight").attr("style", "background-color: grey")
}
if(moment().hour() < 16){
    $("#agendaEight").attr("style", "background-color: green")
}

//nineth hour

if(moment().hour() == 17){
    $("#agendaNine").attr("style", "background-color: red")
}
if(moment().hour() > 17){
    $("#agendaNine").attr("style", "background-color: grey")
}
if(moment().hour() < 17){
    $("#agendaNine").attr("style", "background-color: green")
}




//set save buttons to save each individual text input

//give each agenda a time

//set  each text ares color based on the time of day