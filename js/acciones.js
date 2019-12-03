//JavaScript Document

$(document).ready(function(e){
	var citas=[];
	$('#enviar').on('click',function(){
		//mostrar el gift
		$.when($.post("http://192.168.1.89/regeneracion/buscarcitas.php",{usuario: $('#usuario').val(),password: $('#pass').val()
		})).then(
			function exito(datos) {
				alert (datos);
			},
			function error(){
				alert ("error no se puede alcanzar el servidor");
			}
	);//then when
	});//click enviar
});
