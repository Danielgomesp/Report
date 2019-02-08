//Control tab of the cards
function activeTabReport(id, report) {
    document.getElementById(id).innerHTML = "<li class='list-group-item'>" + report + "</li> ";
    document.getElementById('navResume' + id).classList.remove('active');
    document.getElementById('navText' + id).classList.add('active');
}

function activeTabResume(id, operatorName, shift) {
    document.getElementById(id).innerHTML = "<li class='list-group-item'>" + shift + "º Turno" + "</li> ";
    document.getElementById(id).innerHTML += "<li class='list-group-item'>" + operatorName + "</li> ";
    document.getElementById('navResume' + id).classList.add('active');
    document.getElementById('navText' + id).classList.remove('active');
}
///////////End control tab of the cards


//Search Engine
$(function () {

    $("#search").keyup(function () {
        var texto = $(this).val();

        $(".col").each(function () {
            var resultado = $(this).text().toUpperCase().indexOf(' ' + texto.toUpperCase());

            if (resultado < 0) {
                $(this).fadeOut();
            } else {
                $(this).fadeIn();
            }
        });

    });

});
////////////End search engine