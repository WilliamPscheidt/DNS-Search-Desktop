function historicoDNS() {
    $("#botaopesquisa").attr('class', 'd-none');
    $("#inputdomain").attr('class', 'd-none');
    $("#container-records").attr('class', 'row d-flex justify-content-center');
    $("li").remove();

    var url = document.getElementById('inputdomain').value

    document.title = '$../Willtools//DNSHistory -> '+url;

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://rdap.registro.br/domain/"+url,
    "method": "GET"
    }

    $.ajax(settings).done(function (response) {
        
        console.log("============ Dominio:")
        $( "#text-dominio" ).append(`<li class="text-light">`+response.handle+`</li>`);

        console.log("============ Titular:")
        $( "#text-titular" ).append(`<li class="text-light">`+response.entities[0].publicIds[0].type+` `+response.entities[0].publicIds[0].identifier+`</li>`);

        console.log("============ Entidades:")
        let contator = 0;

        while (contator < response.entities.length) {
            $( "#text-entidades" ).append(`<li class="text-light">`+response.entities[contator].handle+` (`+response.entities[contator].roles[0]+`)</li>`);
            contator++
        }

        console.log("============ Events:")
        let contatorEvents = 0;

        while (contatorEvents < response.events.length) {
            $( "#text-events" ).append(`<li class="text-light">`+response.events[contatorEvents].eventAction+` (`+response.events[contatorEvents].eventDate+`)</li>`);
            contatorEvents++
        }

        console.log("============ NameServers:")
        let contatorNS = 0;

        while (contatorNS < response.nameservers.length) {
            $( "#text-ns" ).append(`<li class="text-light">`+response.nameservers[contatorNS].objectClassName+` -> `+response.nameservers[contatorNS].ldhName+`</li>`);
            contatorNS++
        }

    } );
}

function historicoDNS2() {
    $("#botaopesquisa").attr('class', 'd-none');
    $("#inputdomain").attr('class', 'd-none');
    $("#container-records").attr('class', 'row d-flex justify-content-center');
    $("li").remove();

    var url = document.getElementById('inputdomain2').value

    document.title = '$../Willtools//DNSHistory -> '+url;

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://rdap.registro.br/domain/"+url,
    "method": "GET"
    }

    $.ajax(settings).done(function (response) {
        
        console.log("============ Dominio:")
        $( "#text-dominio" ).append(`<li class="text-light">`+response.handle+`</li>`);

        console.log("============ Titular:")
        $( "#text-titular" ).append(`<li class="text-light">`+response.entities[0].publicIds[0].type+` `+response.entities[0].publicIds[0].identifier+`</li>`);

        console.log("============ Entidades:")
        let contator = 0;

        while (contator < response.entities.length) {
            $( "#text-entidades" ).append(`<li class="text-light">`+response.entities[contator].handle+` (`+response.entities[contator].roles[0]+`)</li>`);
            contator++
        }

        console.log("============ Events:")
        let contatorEvents = 0;

        while (contatorEvents < response.events.length) {
            $( "#text-events" ).append(`<li class="text-light">`+response.events[contatorEvents].eventAction+` (`+response.events[contatorEvents].eventDate+`)</li>`);
            contatorEvents++
        }

        console.log("============ NameServers:")
        let contatorNS = 0;

        while (contatorNS < response.nameservers.length) {
            $( "#text-ns" ).append(`<li class="text-light">`+response.nameservers[contatorNS].objectClassName+` -> `+response.nameservers[contatorNS].ldhName+`</li>`);
            contatorNS++
        }

    } );
}