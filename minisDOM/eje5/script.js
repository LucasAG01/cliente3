
const info = document.getElementById("info");


document.addEventListener("mousemove",function(e){

    let movimentX = e.clientX;
    let movimentY = e.clientY;

    let nuevaINfo =info.textContent="X:"+movimentX +" Y:"+ movimentY 

   
});

/*
Para cambiar texto:
elemento.textContent = "texto";
Para meter un elemento creado:
contenedor.appendChild(div);
*/ 