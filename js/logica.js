//variable del contador
let conteo=0;
//seleccionando los botones en grupo
const botones = document.querySelectorAll(".boton");
//Se obtuvo un NodeList, algo similar a un arreglo de botones, entonces a cada uno hay que establecerle el evento cuando le den click:
botones.forEach((item, i) => {
  //se recibe como parametro e (evento) para verificar a cual botón nos estamos refiriendo, e conserva distintos parámetros e información acerca del evento que ocurre, entre todos esos datos podemos comprobar a cual botón se le está presionando el click
  item.addEventListener('click', function(e){
    //observamos las clases que contiene el objeto actual del arreglo de botones
    const listaDeClasesObjetoActual = e.currentTarget.classList;
    //verificamos si contiene las clases específicas que nos permiten identificar cada botón:
    if(listaDeClasesObjetoActual.contains('botonDecrementar')){
      conteo--;
    }
    else if(listaDeClasesObjetoActual.contains('botonRestablecer')){
      conteo=0;
    }
    else if (listaDeClasesObjetoActual.contains('botonAumentar')) {
      conteo++;
    }
    document.getElementById('numeroDelContador').textContent=conteo;

    if(conteo<0){
      document.getElementById('numeroDelContador').style.color='#fb4949';
      document.querySelector(".tituloPrincipal").style.color='#9e9e9e';
      document.body.style.background='#790000';
    }
    else if(conteo==0){
      document.getElementById('numeroDelContador').style.color='#282828';
      document.querySelector(".tituloPrincipal").style.color='#282828';

      document.body.style.background='#cccccc';
    }

    else if(conteo>0){
      document.getElementById('numeroDelContador').style.color='#037101';
      document.querySelector(".tituloPrincipal").style.color='#282828';
      document.body.style.background='#9ff79d';
    }


  })
});
