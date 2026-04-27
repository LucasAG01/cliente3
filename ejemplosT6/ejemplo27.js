let controles = document.forms[0].elements;
let numEltos = document.forms[0].length;
for (let i=0; i<numEltos; i++) {
  controles[i].addEventListener("focus", ()=>{
    if (controles[i].hasAttribute("required")) {
      document.getElementById("errores").innerHTML = "Campo obligatorio";
    }
  });
  controles[i].addEventListener("blur", ()=>{
    if (controles[i].hasAttribute("required")) {
      document.getElementById("errores").innerHTML = "";
    }
  });
}