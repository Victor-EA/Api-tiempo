$(document).ready(function() {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3117732&units=metric&APPID=e12560f8501ac8a7162e10708975c4c9',

        dataType: "json",
        type: "GET",
        success: function(response) {
            console.log(response);
            $("<span>" + response.name + "</span>").appendTo("#ciudad");
            $("<span>" + "&nbsp;" + Math.round(response.main.temp) + "°C" + "</span>").prependTo("#temp");

            $("<span>" + "Min: " + Math.round(response.main.temp_min) + " °C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</span>").prependTo("#tempMinMax");
            $("<span>" + "Max: " + Math.round(response.main.temp_max) + " °C" + "</span>").appendTo("#tempMinMax");
            $("<span>" + response.wind.speed + " m/sec" + "</span>").appendTo("#vViento");
            $("<span>" + response.clouds.all + " %" + "</span>").appendTo("#nNubes");

            if (response.rain != undefined) {
                $("#nLluvia").html("Nivel de LLuvia 1h: " + response.rain["1h"] + " mm");
            } else {
                $("#nLluvia").html("Nivel de LLuvia 1h: - ");
            }
            if (response.snow != undefined) {
                $("#nNieve").html("Nivel de Nieve 1h: " + $response.list.snow['1h'] + " cm");
            } else {
                $("#nNieve").html("Nivel de Nieve 1h: - ");
            }



            $("#img_clima").attr("src", function() {
                var aux;
                if (response.weather[0].icon == "01d") {
                    aux = "images/despejado_dia.png";
                    $("#estado").html("Despejado");
                } else if (response.weather[0].icon == "01n") {
                    aux = "images/despejado_noche.png";
                    $("#estado").html("Despejado");
                } else if (response.weather[0].icon == "02d") {
                    aux = "images/pocas_nubes_dia.png";
                    $("#estado").html("Poco Nublado");
                } else if (response.weather[0].icon == "02n") {
                    aux = "images/pocas_nubes_noche.png";
                    $("#estado").html("Poco Nublado");
                } else if (response.weather[0].icon == "03d") {
                    aux = "images/medio_nubes_dia.png";
                    $("#estado").html("Medio Nublado");
                } else if (response.weather[0].icon == "03n") {
                    aux = "images/medio_nubes_noche.png";
                    $("#estado").html("Medio Nublado");
                } else if (response.weather[0].icon == "04d" || response.weather[0].icon == "04n") {
                    aux = "images/muchas_nubes.png";
                    $("#estado").html("Muy Nublado");
                } else if (response.weather[0].icon == "04d" || response.weather[0].icon == "04n") {
                    aux = "images/muchas_nubes.png";
                } else if (response.weather[0].icon == "10d") {
                    aux = "images/lluvia_ligera_dia.png";
                    $("#estado").html("Luvia");
                } else if (response.weather[0].icon == "10n") {
                    aux = "images/lluvia_ligera_noche.png";
                    $("#estado").html("Luvia");
                } else if (response.weather[0].icon == "09d") {
                    aux = "images/lluvia_intensa.png";
                    $("#estado").html("Luvia Intensa");
                } else if (response.weather[0].icon == "09n") {
                    aux = "images/lluvia_intensa.png";
                    $("#estado").html("Luvia Intensa");
                } else if (response.weather[0].icon == "13d") {
                    aux = "images/nieve_dia.png";
                } else if (response.weather[0].icon == "13n") {
                    aux = "images/nieve_noche.png";
                }
                return aux;
            });

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("ERROR: " + errorThrown);
        }
    });
});