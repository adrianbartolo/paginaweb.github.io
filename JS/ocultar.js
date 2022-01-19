	function Mostrardato(){
		document.getElementById("caja1").style.display ="block";
	}
	function Ocultardato(){
		document.getElementById("caja1").style.display ="none";
	}
	function Mostrar_ocultaro(){
		var caja=document.getElementById("caja1");
		if (caja.style.display=="none") {
			Mostrardato();
			document.getElementById("boton1").value ="Ocultar";
		}else{
			Ocultardato();
			document.getElementById("boton1").value="Mostrar";
		}
	}


	
	function Mostrardatos(){
		document.getElementById("caja2").style.display ="block";
	}
	function Ocultardatos(){
		document.getElementById("caja2").style.display ="none";
	}
	function Mostrar_ocultare(){
		var caja=document.getElementById("caja2");
		if (caja.style.display=="none") {
			Mostrardatos();
			document.getElementById("boton2").value ="Ocultar";
		}else{
			Ocultardatos();
			document.getElementById("boton2").value="Mostrar";
		}
	}

