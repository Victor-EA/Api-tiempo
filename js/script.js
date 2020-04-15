$(document).ready(function() {
    var madrid= 3117732;
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/forecast?id='+madrid+'&units=metric&APPID=e12560f8501ac8a7162e10708975c4c9',
        dataType: "json",
        type: "GET",
        success: function(response) {
            var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
            var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

            var date_act = new Date(response.list[0].dt_txt);

            console.log(madrid);
            dia_hoy = dias[date_act.getDay()];
            dia_num = date_act.getDate();
            mes_act = meses[date_act.getMonth()];
            ano_act = date_act.getFullYear();

            $("<span>" + dia_hoy + "  " + dia_num + "   " + mes_act + " " + ano_act + "</span>").prependTo("#dia_hoy");

            var date;
            var aux = new Array();
            var indice_dia = new Array();
            var birthday1;
            var aux_bir = new Array();
            var bir_day = new Array();
            var year1;
            var aux_year = new Array();
            var ye_ar = new Array();
            var mes1;
            var aux_mes = new Array();
            var mes_arr = new Array();

            $.each(response.list, function(indice, valor) {
                date = new Date(valor.dt_txt);

                value_date = date.getDay();
                value_bir = date.getDate();
                value_mes = date.getMonth();
                value_year = date.getFullYear();

                if (aux[indice] != value_date) {
                    aux.push(value_date);
                }
                if (aux_bir[indice] != value_bir) {
                    aux_bir.push(value_bir);
                }
                if (aux_mes[indice] != value_mes) {
                    aux_mes.push(value_mes);
                }
                if (aux_year[indice] != value_year) {
                    aux_year.push(value_year);
                }
            });

            indice_dia = aux.filter(
                (value, pos, self) => {
                    return pos === self.indexOf(value);
                }
            );
            bir_day = aux_bir.filter(
                (value, pos, self) => {
                    return pos === self.indexOf(value);
                }
            );
            mes_arr = aux_mes.filter(
                (value, pos, self) => {
                    return pos === self.indexOf(value);
                }
            );
            ye_ar = aux_year.filter(
                (value, pos, self) => {
                    return pos === self.indexOf(value);
                }
            );

            var val_min1 = 100;
            var val_min2 = 100;
            var val_min3 = 100;
            var val_min4 = 100;
            var val_min5 = 100;

            var val_max1 = -100;
            var val_max2 = -100;
            var val_max3 = -100;
            var val_max4 = -100;
            var val_max5 = -100;

            var d_uno = new Array();
            var d_dos = new Array();
            var d_tres = new Array();
            var d_cuatro = new Array();
            var d_cinco = new Array();

            $.each(response.list, function(indice, valor) {
                var date = new Date(response.list[indice].dt_txt);
                var aux_dia = date.getDay();

                if (indice_dia[1] == aux_dia) {
                    val_aux_min1 = valor.main.temp_min
                    d_uno[indice] = valor.weather[0].icon;
                    if (val_aux_min1 <= val_min1) {
                        val_min1 = val_aux_min1;
                    }
                    val_aux_max1 = valor.main.temp_max;
                    if (val_aux_max1 >= val_max1) {
                        val_max1 = val_aux_max1;
                    }
                }
                if (indice_dia[2] == aux_dia) {
                    val_aux_min2 = valor.main.temp_min;
                    d_dos[indice] = valor.weather[0].icon;
                    if (val_aux_min2 <= val_min2) {
                        val_min2 = val_aux_min2;
                    }
                    val_aux_max2 = valor.main.temp_max;
                    if (val_aux_max2 >= val_max2) {
                        val_max2 = val_aux_max2;
                    }
                }
                if (indice_dia[3] == aux_dia) {
                    val_aux_min3 = valor.main.temp_min;
                    d_tres[indice] = valor.weather[0].icon;
                    if (val_aux_min3 <= val_min3) {
                        val_min3 = val_aux_min3;
                    }
                    val_aux_max3 = valor.main.temp_max;
                    if (val_aux_max3 >= val_max3) {
                        val_max3 = val_aux_max3;
                    }
                }
                if (indice_dia[4] == aux_dia) {
                    val_aux_min4 = valor.main.temp_min;
                    d_cuatro[indice] = valor.weather[0].icon;
                    if (val_aux_min4 <= val_min4) {
                        val_min4 = val_aux_min4;
                    }
                    val_aux_max4 = valor.main.temp_max;
                    if (val_aux_max4 >= val_max4) {
                        val_max4 = val_aux_max4;
                    }
                }
                if (indice_dia[5] == aux_dia) {
                    val_aux_min5 = valor.main.temp_min;
                    d_cinco[indice] = valor.weather[0].icon;
                    if (val_aux_min5 <= val_min5) {
                        val_min5 = val_aux_min5;
                    }
                    val_aux_max5 = valor.main.temp_max;
                    if (val_aux_max5 >= val_max5) {
                        val_max5 = val_aux_max5;
                    }
                }
            });

            var icon_uno = new Array();
            var icon_dos = new Array();
            var icon_tres = new Array();
            var icon_cuatro = new Array();
            var icon_cinco = new Array();

            icon_uno = d_uno.filter(
                (value, pos, self) => {
                    return pos === self.indexOf(value);
                }
            );
            icon_dos = d_dos.filter(
                (value, pos, self) => {
                    return pos === self.indexOf(value);
                }
            );
            icon_tres = d_tres.filter(
                (value, pos, self) => {
                    return pos === self.indexOf(value);
                }
            );
            icon_cuatro = d_cuatro.filter(
                (value, pos, self) => {
                    return pos === self.indexOf(value);
                }
            );
            icon_cinco = d_cinco.filter(
                (value, pos, self) => {
                    return pos === self.indexOf(value);
                }
            );


            $("<span>" + dias[indice_dia[1]] + "</span>").appendTo("#dia_1");
            $("<span>" + " " + bir_day[1] + "</span>").appendTo("#dia_1_fecha");
            if (mes_arr[0] != date_act.getMonth()) {
                $("<span>" + " " + meses[mes_arr[1]] + "</span>").appendTo("#dia_1_fecha");
            } else {
                $("<span>" + " " + meses[mes_arr[0]] + "</span>").appendTo("#dia_1_fecha");
            }
            if (ye_ar[0] != date_act.getFullYear()) {
                $("<span>" + " " + ye_ar[1] + "</span>").appendTo("#dia_1_fecha");
            } else {
                $("<span>" + " " + ye_ar[0] + "</span>").appendTo("#dia_1_fecha");
            }
            $("<span>" + "Temp Min: " + Math.round(val_min1) + " °C<br>" + "</span>").prependTo("#primero");
            $("<span>" + "Temp Max: " + Math.round(val_max1) + " °C<br>" + "</span>").prependTo("#primero");


            $("<span>" + dias[indice_dia[2]] + "</span>").appendTo("#dia_2");
            $("<span>" + " " + bir_day[2] + "</span>").appendTo("#dia_2_fecha");
            if (mes_arr[0] != date_act.getMonth()) {
                $("<span>" + " " + meses[mes_arr[1]] + "</span>").appendTo("#dia_2_fecha");
            } else {
                $("<span>" + " " + meses[mes_arr[0]] + "</span>").appendTo("#dia_2_fecha");
            }
            if (ye_ar[0] != date_act.getFullYear()) {
                $("<span>" + " " + ye_ar[1] + "</span>").appendTo("#dia_2_fecha");
            } else {
                $("<span>" + " " + ye_ar[0] + "</span>").appendTo("#dia_2_fecha");
            }
            $("<span>" + "Temp Min: " + Math.round(val_min2) + " °C<br>" + "</span>").prependTo("#segundo");
            $("<span>" + "Temp Max: " + Math.round(val_max2) + " °C<br>" + "</span>").prependTo("#segundo");


            $("<span>" + dias[indice_dia[3]] + "</span>").appendTo("#dia_3");
            $("<span>" + " " + bir_day[3] + "</span>").appendTo("#dia_3_fecha");
            if (mes_arr[0] != date_act.getMonth()) {
                $("<span>" + " " + meses[mes_arr[1]] + "</span>").appendTo("#dia_3_fecha");
            } else {
                $("<span>" + " " + meses[mes_arr[0]] + "</span>").appendTo("#dia_3_fecha");
            }
            if (ye_ar[0] != date_act.getFullYear()) {
                $("<span>" + " " + ye_ar[1] + "</span>").appendTo("#dia_3_fecha");
            } else {
                $("<span>" + " " + ye_ar[0] + "</span>").appendTo("#dia_3_fecha");
            }
            $("<span>" + "Temp Min: " + Math.round(val_min3) + " °C<br>" + "</span>").prependTo("#tercero");
            $("<span>" + "Temp Max: " + Math.round(val_max3) + " °C<br>" + "</span>").prependTo("#tercero");

            $("<span>" + dias[indice_dia[4]] + "</span>").appendTo("#dia_4");
            $("<span>" + " " + bir_day[4] + "</span>").appendTo("#dia_4_fecha");
            if (mes_arr[0] != date_act.getMonth()) {
                $("<span>" + " " + meses[mes_arr[1]] + "</span>").appendTo("#dia_4_fecha");
            } else {
                $("<span>" + " " + meses[mes_arr[0]] + "</span>").appendTo("#dia_4_fecha");
            }
            if (ye_ar[0] != date_act.getFullYear()) {
                $("<span>" + " " + ye_ar[1] + "</span>").appendTo("#dia_4_fecha");
            } else {
                $("<span>" + " " + ye_ar[0] + "</span>").appendTo("#dia_4_fecha");
            }
            $("<span>" + "Temp Min: " + Math.round(val_min4) + " °C<br>" + "</span>").prependTo("#cuarto");
            $("<span>" + "Temp Max: " + Math.round(val_max4) + " °C<br>" + "</span>").prependTo("#cuarto");

            $("<span>" + dias[indice_dia[5]] + "</span>").appendTo("#dia_5");
            $("<span>" + " " + bir_day[5] + "</span>").appendTo("#dia_5_fecha");
            if (mes_arr[0] != date_act.getMonth()) {
                $("<span>" + " " + meses[mes_arr[1]] + "</span>").appendTo("#dia_5_fecha");
            } else {
                $("<span>" + " " + meses[mes_arr[0]] + "</span>").appendTo("#dia_5_fecha");
            }
            if (ye_ar[0] != date_act.getFullYear()) {
                $("<span>" + " " + ye_ar[1] + "</span>").appendTo("#dia_5_fecha");
            } else {
                $("<span>" + " " + ye_ar[0] + "</span>").appendTo("#dia_5_fecha");
            }
            $("<span>" + "Temp Min: " + Math.round(val_min5) + " °C<br>" + "</span>").prependTo("#quinto");
            $("<span>" + "Temp Max: " + Math.round(val_max5) + " °C<br>" + "</span>").prependTo("#quinto");

            //iconos

            $("#img_primero").attr("src", function() {
                var aux;
                if (icon_uno[0] == "01d") {
                    aux = "images/despejado_dia.png";
                    $("#estado_uno").html("Despejado");
                } else if (icon_uno[0] == "01n") {
                    aux = "images/despejado_noche.png";
                    $("#estado_uno").html("Despejado");
                } else if (icon_uno[0] == "02d") {
                    aux = "images/pocas_nubes_dia.png";
                    $("#estado_uno").html("Poco Nublado");
                } else if (icon_uno[0] == "02n") {
                    aux = "images/pocas_nubes_noche.png";
                    $("#estado_uno").html("Poco Nublado");
                } else if (icon_uno[0] == "03d") {
                    aux = "images/medio_nubes_dia.png";
                    $("#estado_uno").html("Medio Nublado");
                } else if (icon_uno[0] == "03n") {
                    aux = "images/medio_nubes_noche.png";
                    $("#estado_uno").html("Medio Nublado");
                } else if (icon_uno[0] == "04d" || icon_uno[0] == "04n") {
                    aux = "images/muchas_nubes.png";
                    $("#estado_uno").html("Muy Nublado");
                } else if (icon_uno[0] == "04d" || icon_uno[0] == "04n") {
                    aux = "images/muchas_nubes.png";
                } else if (icon_uno[0] == "10d") {
                    aux = "images/lluvia_ligera_dia.png";
                    $("#estado_uno").html("Luvia Ligera");
                } else if (icon_uno[0] == "10n") {
                    aux = "images/lluvia_ligera_noche.png";
                    $("#estado_uno").html("Luvia Ligera");
                } else if (icon_uno[0] == "13d") {
                    aux = "images/nieve_dia.png";
                } else if (icon_uno[0] == "13n") {
                    aux = "images/nieve_noche.png";
                }
                return aux;
            });
            $("#img_segundo").attr("src", function() {
                var aux;
                if (icon_dos[0] == "01d") {
                    aux = "images/despejado_dia.png";
                    $("#estado_dos").html("Despejado");
                } else if (icon_dos[0] == "01n") {
                    aux = "images/despejado_noche.png";
                    $("#estado_dos").html("Despejado");
                } else if (icon_dos[0] == "02d") {
                    aux = "images/pocas_nubes_dia.png";
                    $("#estado_dos").html("Poco Nublado");
                } else if (icon_dos[0] == "02n") {
                    aux = "images/pocas_nubes_noche.png";
                    $("#estado_dos").html("Poco Nublado");
                } else if (icon_dos[0] == "03d") {
                    aux = "images/medio_nubes_dia.png";
                    $("#estado_dos").html("Medio Nublado");
                } else if (icon_dos[0] == "03n") {
                    aux = "images/medio_nubes_noche.png";
                    $("#estado_dos").html("Medio Nublado");
                } else if (icon_dos[0] == "04d" || icon_dos[0] == "04n") {
                    aux = "images/muchas_nubes.png";
                    $("#estado_dos").html("Muy Nublado");
                } else if (icon_dos[0] == "04d" || icon_dos[0] == "04n") {
                    aux = "images/muchas_nubes.png";
                } else if (icon_dos[0] == "10d") {
                    aux = "images/lluvia_ligera_dia.png";
                    $("#estado_dos").html("Luvia Ligera");
                } else if (icon_dos[0] == "10n") {
                    aux = "images/lluvia_ligera_noche.png";
                    $("#estado_dos").html("Luvia Ligera");
                } else if (icon_dos[0] == "13d") {
                    aux = "images/nieve_dia.png";
                } else if (icon_dos[0] == "13n") {
                    aux = "images/nieve_noche.png";
                }
                return aux;
            });
            $("#img_tercero").attr("src", function() {
                var aux;
                if (icon_tres[0] == "01d") {
                    aux = "images/despejado_dia.png";
                    $("#estado_tres").html("Despejado");
                } else if (icon_tres[0] == "01n") {
                    aux = "images/despejado_noche.png";
                    $("#estado_tres").html("Despejado");
                } else if (icon_tres[0] == "02d") {
                    aux = "images/pocas_nubes_dia.png";
                    $("#estado_tres").html("Poco Nublado");
                } else if (icon_tres[0] == "02n") {
                    aux = "images/pocas_nubes_noche.png";
                    $("#estado_tres").html("Poco Nublado");
                } else if (icon_tres[0] == "03d") {
                    aux = "images/medio_nubes_dia.png";
                    $("#estado_tres").html("Medio Nublado");
                } else if (icon_tres[0] == "03n") {
                    aux = "images/medio_nubes_noche.png";
                    $("#estado_tres").html("Medio Nublado");
                } else if (icon_tres[0] == "04d" || icon_tres[0] == "04n") {
                    aux = "images/muchas_nubes.png";
                    $("#estado_tres").html("Muy Nublado");
                } else if (icon_tres[0] == "04d" || icon_tres[0] == "04n") {
                    aux = "images/muchas_nubes.png";
                } else if (icon_tres[0] == "10d") {
                    aux = "images/lluvia_ligera_dia.png";
                    $("#estado_tres").html("Luvia Ligera");
                } else if (icon_tres[0] == "10n") {
                    aux = "images/lluvia_ligera_noche.png";
                    $("#estado_tres").html("Luvia Ligera");
                } else if (icon_tres[0] == "13d") {
                    aux = "images/nieve_dia.png";
                } else if (icon_tres[0] == "13n") {
                    aux = "images/nieve_noche.png";
                }
                return aux;
            });
            $("#img_cuarto").attr("src", function() {
                var aux;
                if (icon_cuatro[0] == "01d") {
                    aux = "images/despejado_dia.png";
                    $("#estado_cuatro").html("Despejado");
                } else if (icon_cuatro[0] == "01n") {
                    aux = "images/despejado_noche.png";
                    $("#estado_cuatro").html("Despejado");
                } else if (icon_cuatro[0] == "02d") {
                    aux = "images/pocas_nubes_dia.png";
                    $("#estado_cuatro").html("Poco Nublado");
                } else if (icon_cuatro[0] == "02n") {
                    aux = "images/pocas_nubes_noche.png";
                    $("#estado_cuatro").html("Poco Nublado");
                } else if (icon_cuatro[0] == "03d") {
                    aux = "images/medio_nubes_dia.png";
                    $("#estado_cuatro").html("Medio Nublado");
                } else if (icon_cuatro[0] == "03n") {
                    aux = "images/medio_nubes_noche.png";
                    $("#estado_cuatro").html("Medio Nublado");
                } else if (icon_cuatro[0] == "04d" || icon_cuatro[0] == "04n") {
                    aux = "images/muchas_nubes.png";
                    $("#estado_cuatro").html("Muy Nublado");
                } else if (icon_cuatro[0] == "04d" || icon_cuatro[0] == "04n") {
                    aux = "images/muchas_nubes.png";
                } else if (icon_cuatro[0] == "10d") {
                    aux = "images/lluvia_ligera_dia.png";
                    $("#estado_cuatro").html("Luvia Ligera");
                } else if (icon_cuatro[0] == "10n") {
                    aux = "images/lluvia_ligera_noche.png";
                    $("#estado_cuatro").html("Luvia Ligera");
                } else if (icon_cuatro[0] == "13d") {
                    aux = "images/nieve_dia.png";
                } else if (icon_cuatro[0] == "13n") {
                    aux = "images/nieve_noche.png";
                }
                return aux;
            });
            $("#img_cinco").attr("src", function() {
                var aux;
                if (icon_cinco[0] == "01d") {
                    aux = "images/despejado_dia.png";
                    $("#estado_cinco").html("Despejado");
                } else if (icon_cinco[0] == "01n") {
                    aux = "images/despejado_noche.png";
                    $("#estado_cinco").html("Despejado");
                } else if (icon_cinco[0] == "02d") {
                    aux = "images/pocas_nubes_dia.png";
                    $("#estado_cinco").html("Poco Nublado");
                } else if (icon_cinco[0] == "02n") {
                    aux = "images/pocas_nubes_noche.png";
                    $("#estado_cinco").html("Poco Nublado");
                } else if (icon_cinco[0] == "03d") {
                    aux = "images/medio_nubes_dia.png";
                    $("#estado_cinco").html("Medio Nublado");
                } else if (icon_cinco[0] == "03n") {
                    aux = "images/medio_nubes_noche.png";
                    $("#estado_cinco").html("Medio Nublado");
                } else if (icon_cinco[0] == "04d" || icon_cinco[0] == "04n") {
                    aux = "images/muchas_nubes.png";
                    $("#estado_cinco").html("Muy Nublado");
                } else if (icon_cinco[0] == "04d" || icon_cinco[0] == "04n") {
                    aux = "images/muchas_nubes.png";
                } else if (icon_cinco[0] == "10d") {
                    aux = "images/lluvia_ligera_dia.png";
                    $("#estado_cinco").html("Luvia Ligera");
                } else if (icon_cinco[0] == "10n") {
                    aux = "images/lluvia_ligera_noche.png";
                    $("#estado_cinco").html("Luvia Ligera");
                } else if (icon_cinco[0] == "13d") {
                    aux = "images/nieve_dia.png";
                } else if (icon_cinco[0] == "13n") {
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