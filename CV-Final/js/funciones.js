// Ventanas (Experiencias y Referencias)
let exp = document.getElementById("ventanaExp");
let ref = document.getElementById("ventanaRef");

// Botónes que abren 
let botExp = document.getElementById("abrirExp");
let botRef = document.getElementById("abrirRef");

// Hace referencia al elemento <span> que tiene la X que cierran las ventanas
let CerExp = document.getElementsByClassName("cerrarExp")[0];
let CerRef = document.getElementsByClassName("cerrarRef")[0];

// Cuando el usuario hace click en los botónes, se abren las ventanas
botExp.addEventListener("click", function() {
  exp.style.display = "block";
});
botRef.addEventListener("click", function() {
    ref.style.display = "block";
  });

// Si el usuario hace click en la x, las ventanas se cierran
CerExp.addEventListener("click",function() {
  exp.style.display = "none";
});
CerRef.addEventListener("click",function() {
    ref.style.display = "none";
  });

// Si el usuario hace click fuera de las ventanas, se cierran.
window.addEventListener("click",function(event) {
  if (event.target == exp) {
    exp.style.display = "none";
  }
});  
window.addEventListener("click",function(event) {
    if (event.target == ref) {
      ref.style.display = "none";
    }  
});