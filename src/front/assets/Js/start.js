
 let item1  = document.getElementById('option1');
let item2  = document.getElementById('option2');
let item3 =  document.getElementById('option3');
let item1text = document.getElementById("itemlegend1")
let item2text = document.getElementById("itemlegend2")
let item3text = document.getElementById("itemlegend3")
let object = document.getElementById('object')
let count1 = 0

if (item1.clicked == true){
    console.log("dgfhdt")
}
item1.addEventListener('click',function(e){
  
    count1 = count1 +1
    item1text.style.color = "blue"
  

 item2.addEventListener('click',function(){
    item1text.style.color = "black"
    item2text.style.color = "blue"

 })

 item3.addEventListener('click',function(){
    item1text.style.color = "black"
    item3text.style.color = "blue"

 })
    

}) 

item2.addEventListener('click',function(e){
  
    count1 = count1 +1
    item2text.style.color = "blue"
  


 item1.addEventListener('click',function(){
    item2text.style.color = "black"
    item1text.style.color = "blue"

 })

 item3.addEventListener('click',function(){
    item2text.style.color = "black"
    item3text.style.color = "blue"

 })
    

}) 

item3.addEventListener('click',function(e){

    count1 = count1 +1
    item3text.style.color = "blue"
  


 item1.addEventListener('click',function(){
    item3text.style.color = "black"
    item1text.style.color = "blue"

 })

 item2.addEventListener('click',function(){
    item3text.style.color = "black"
    item2text.style.color = "blue"

 })
    

}) 


function validerEtFormaterNom() {
   const inputElement = document.getElementById('nomInput');
   const nom = inputElement.value.trim();
   const nomFormate = nom.charAt(0).toUpperCase() + nom.slice(1).toLowerCase();
 
   if (/^[a-zA-Z]{3,16}$/.test(nom)) {
     inputElement.value = nomFormate;
     document.getElementById('messageErreur').textContent = '';
   } else {
     document.getElementById('messageErreur').textContent = 'Le nom doit contenir uniquement des lettres, commencer par une majuscule, avoir entre 3 et 16 caractères.';
   }
 }
 
 // Appeler la fonction lors du chargement de la page
 window.onload = function() {
   validerEtFormaterNom();
 };
