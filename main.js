const navemail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const carritodecompras = document.querySelector(".navbar-shopping-cart")
const asideprevisiluazcion = document.querySelector(".product-detail")
const menuhamburger = document.querySelector(".menu")
const mobilemenu = document.querySelector(".mobile-menu")
const cardscontainer = document.querySelector(".cards-container")

menuhamburger.addEventListener("click", toggledesktop2)
navemail.addEventListener("click", toggledesktop)
carritodecompras.addEventListener("click", toggledesktop3)


function toggledesktop(){
    desktopMenu.classList.toggle("inactive")
}
function toggledesktop2(){
    mobilemenu.classList.toggle("inactive")
}
function toggledesktop3(){
    asideprevisiluazcion.classList.toggle("inactive")
}

const productlist = [];
productlist.push({
    name: "bike",
    price: "120",
    img2 :"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productlist.push({
    name: " 5060 Ti Nvidia",
    price: "110",
    img2 :"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productlist.push({
    name: "Iphone 15",
    price: "1400",
    img2 :"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

{/* <div class="cards-container">

<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
</div> */}

function renderproducts(arr){
  for (product of productlist){
    const productcard = document.createElement("div");
    productcard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")

    const productinfo = document.createElement("div");
    productinfo.classList.add("product-info");


    const productinfodiv = document.createElement("div");
    productinfodiv.classList.add("product-card");

    
    const productprice = document.createElement("p");
    productprice.innerText= "$" + productlist.price;
    
    const productname = document.createElement("p");
    productname.innerText= "$" + productlist.name;

    const productfigure = document.createElement("figure");
    const productcardimg = document.createElement("img");
    productcardimg.setAttribute("src", "./icons/bt_add_to_cart.svg")

    productfigure.appendChild(productcardimg)

    productinfo.appendChild(productinfodiv);
    productinfo.appendChild(productfigure);

    productcard.appendChild(img);
    productcard.appendChild(productinfo);

    cardscontainer.appendChild(productcard);

}

}

renderproducts(productlist);
renderproducts(productlist);
renderproducts(productlist);