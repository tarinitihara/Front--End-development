//showing navbar when click menu on mobile view//
const mobile =document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

//close menu when click//
mobileLink.addEventListener("click",function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})
// Left & Right arrows for category scroll
document.querySelector('.back-menus').addEventListener('click', () => {
    document.querySelector('.filter-wrapper').scrollBy({ left: -150, behavior: 'smooth' });
});

document.querySelector('.next-menus').addEventListener('click', () => {
    document.querySelector('.filter-wrapper').scrollBy({ left: 150, behavior: 'smooth' });
});



//move the menu to left and right when click back and next
var step =100;
var stepFilter= 60;
var scrolling = true;

$(".back").on("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"   // Note: "-=" to go left (back)
    }, 400) // 400ms smooth animation
})

// Next Button – Scroll Right
$(".next").on("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"   // "+=" to go right (next)
    }, 400)
})

//when click back and next on menu filters
$(".back-menus").on("click", function(e){
    e.preventDefault();
        $(".filter-wrapper").animate({
            scrollLeft: "-=" + stepFilter + "px"
        
 } )
    
})

const arrows = document.querySelectorAll('.menu-arrow');

arrows.forEach(arrow => {
  arrow.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = arrow.nextElementSibling;
    submenu.classList.toggle('open');
  });
});


// Makes the hover color appear instantly on mobile when tapping
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('touchstart', function() {
        this.classList.add('tapped');
    });
    btn.addEventListener('touchend', function() {
        setTimeout(() => this.classList.remove('tapped'), 150);
    });
});

function addToCart(button) {
    // Prevent adding again
    if (button.classList.contains('added')) return;

    // 1. Visual feedback: turn yellow on click/tap
    button.style.backgroundColor = 'var(--secondaryColor)';

    // 2. After 200ms → change to "Added" with checkmark
    setTimeout(() => {
        button.classList.add('added');
        button.innerHTML = 'Added';  // Shows checkmark + text
    }, 200);
}


//SHOPPING CART
//for cart popup
function toggleCartPopup(){
    const cartPopup= document.getElementById('cart-popup');
    cartPopup.classList.toggle('active');
}

//for close cart popup
function closeCart(){
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.classList.remove('active');
}



function addToCart(itemName, itemPrice) {
    const cartItems = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    
    // Find existing item
    const existingItem = Array.from(cartItems.getElementsByTagName('tr')).find(
        item => item.cells[0].textContent === itemName
    );

    if (existingItem) {
        // Increase count
        const itemCount = parseInt(existingItem.querySelector('.item-count').textContent) + 1;
        existingItem.querySelector('.item-count').textContent = itemCount;

        // Update total
        const itemTotal = parseFloat(existingItem.querySelector('.item-total').textContent.replace('Rs ', '')) + parseFloat(itemPrice);
        existingItem.querySelector('.item-total').textContent = `Rs ${itemTotal.toFixed(2)}`;
    } else {
        // Add new row
        const newRow = cartItems.insertRow();
        newRow.innerHTML = `
            <td>${itemName}</td>
            <td class='item-count'>1</td>
            <td class='item-price'>Rs ${itemPrice}</td>
            <td class='item-total'>Rs ${itemPrice}</td>
        `;
    }
    updateCartCountAndTotal();
}

//update count and total
function updateCartCountAndTotal() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total'); // fixed typo
    const cartItems = document.querySelectorAll('#cart-items tbody tr');

    let totalCount = 0;
    let total = 0;

    cartItems.forEach(item => {
        const itemCount = parseInt(item.querySelector('.item-count').textContent);
        const itemTotal = parseFloat(item.querySelector('.item-total').textContent.replace('Rs ', '')); // remove Rs
        totalCount += itemCount;
        total += itemTotal;
    });

    cartCount.textContent = totalCount;
    cartTotal.textContent = `Rs ${total.toFixed(2)}`;
}



