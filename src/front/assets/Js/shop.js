const cartCtn = document.querySelector('.cart-ctn');
let click = 0
//cartCtn.innerHTML = "<h1 id='store'>Achat</h1></br><p>objet<p><form method='post'><button type='submit'>Acheter</button></form><p>objet<p><p>objet<p></br></br><button id='removeall'> Vider le panier </button> </br></br></br>";
function loadCart(){  // fonction qui affiche les chargement du panier

    click = click + 1
   
     // ajout du bouton permettant de supprimer le panier
    
    if (click%2==0){
      cartCtn.style.right = '-500px';
    }else{
      cartCtn.style.right = '-5%';
    }
    
}

function toggleCart() {
    cartCtn.classList.toggle('open-cart');
  
    if (cartCtn.classList.contains('open-cart')) {
      cartIcon.src = 'img/close.png';
      

    } else {
      cartIcon.src = 'img/cpushopping.png';
    }
  }