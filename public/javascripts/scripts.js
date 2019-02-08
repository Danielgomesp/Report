//Control tab of the cards
function activeTabReport(id) {
    document.getElementById('operatorName' + id).setAttribute("hidden", "true")
    document.getElementById('shift' + id).setAttribute("hidden", "true")
    document.getElementById('report' + id).removeAttribute("hidden")
    document.getElementById('navResume' + id).classList.remove('active');
    document.getElementById('navText' + id).classList.add('active');
}

function activeTabResume(id) {
    document.getElementById('operatorName' + id).removeAttribute("hidden")
    document.getElementById('shift' + id).removeAttribute("hidden")
    document.getElementById('report' + id).setAttribute("hidden", "true")
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