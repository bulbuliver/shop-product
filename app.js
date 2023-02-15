

    $('.slider').slick({
    dots: true,
    // autoplay: true,
    // dotsClass: rectangular-dots,
    // draggable: true,


});





// cart-button
let productsCount = document.getElementById("productsCount");
console.log(productsCount);

const addToCartButton = document.querySelectorAll(".add-to-cart");
console.log(addToCartButton);

for( let i = 0; i < addToCartButton.length; i++){
    addToCartButton[i].addEventListener("click", function(){
        console.log("clicked");
        productsCount.textContent = performance.eventCounts.get("click");

    })
}; 



// like

let img_like = document.querySelectorAll(".image-like");
for (i =0; i < img_like.length; i++){
    img_like[i].onclick = funcShow;
}

function funcShow(){
    this.classList.toggle("image-like_toggle");
}


// more details
let modalWindow = document.querySelector('.modal');
console.log(modalWindow);
let moreDetails = document.querySelectorAll(".more-details");
console.log(moreDetails);

for (i = 0; i < moreDetails.length; i++){

    moreDetails[i].addEventListener("click", function(){
        modalWindow.classList.add("show");
        
    })

}

let closeBTN = document.querySelector(".btn-close");
closeBTN.addEventListener("click", function(){
    
    modalWindow.classList.remove("show");
    modalWindow.classList.add("hide");
})

// var scroll = $(window).scrollTop();
// if(scroll >= 1 && scroll <=1000) {
//     console.log("scroll");
//     modalWindow.classList.add("show");
// }


let pageHeight = document.body.scrollHeight;
let pageHalf = pageHeight / 4;


function scrollHalfPage(){
    if (window.scrollY > pageHalf)
    {modalWindow.classList.add("show");
    window.removeEventListener("scroll", scrollHalfPage);
}

};

window.addEventListener("scroll", scrollHalfPage);




  AOS.init();
