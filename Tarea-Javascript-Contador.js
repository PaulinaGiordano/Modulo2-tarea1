const contador=document.getElementById("contador");
const textarea=document.getElementById("texto");


textarea.addEventListener("input",function(){
    const cantidad=textarea.value.length;
    contador.textContent=cantidad;
});