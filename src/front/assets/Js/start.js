
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
  const nom = inputElement.value.trim(); // Supprimer les espaces en début et en fin
  const nomFormate = nom.charAt(0).toUpperCase() + nom.slice(1).toLowerCase();

  // Vérifier les conditions
  if (/^[a-zA-Z]{3,16}$/.test(nom)) {
    // Le nom est valide, on l'affiche sous forme formatée
    inputElement.value = nomFormate;
    document.getElementById('messageErreur').textContent = '';
  } else {
    // Le nom n'est pas valide, on affiche un message d'erreur
    document.getElementById('messageErreur').textContent = 'Le nom doit contenir uniquement des lettres, commencer par une majuscule, avoir entre 3 et 16 caractères.';
  }
}

window.onload = function() {
   validerEtFormaterNom();
 };
