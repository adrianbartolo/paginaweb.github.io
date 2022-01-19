function Mostrar(){
		document.getElementById("caja1").style.display ="block";
	}
	function Ocultar(){
		document.getElementById("caja1").style.display ="none";
	}
	function Mostrar_ocultar1(){
		var caja1=document.getElementById("caja1");
		if (caja1.style.display=="none") {
			Mostrar();
			document.getElementById("boton1").value ="Ocultar";
		}else{
			Ocultar();
			document.getElementById("boton1").value="Mostrar";
		}
	}