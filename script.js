// ==========================================
// D' SUNNY CAFÉ
// SHOPPING CART
// ==========================================


let cart = [];


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(name, price) {

    // Check if item already exists

    let existingItem = cart.find(
        function(item) {
            return item.name === name;
        }
    );


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }


    displayCart();


    alert(
        name + " has been added to your cart! ☀️"
    );

}


// ==========================================
// DISPLAY CART
// ==========================================

function displayCart() {

    const cartContainer =
        document.getElementById("cart");


    const totalElement =
        document.getElementById("total");


    const cartCount =
        document.getElementById("cart-count");


    // Stop if cart does not exist

    if (!cartContainer) {
        return;
    }


    let total = 0;

    let itemCount = 0;


    // Calculate total

    cart.forEach(
        function(item) {

            total +=
                item.price * item.quantity;

            itemCount +=
                item.quantity;

        }
    );


    // Update cart counter

    if (cartCount) {

        cartCount.textContent =
            itemCount;

    }


    // Show empty cart

    if (cart.length === 0) {

        cartContainer.innerHTML = `

            <p class="empty-cart">
                Your cart is empty.
            </p>

        `;


        if (totalElement) {

            totalElement.textContent =
                "Total: ₱0";

        }

        return;
    }


    // Create cart HTML

    let cartHTML = "";


    cart.forEach(
        function(item, index) {

            let subtotal =
                item.price * item.quantity;


            cartHTML += `

                <div class="cart-item">


                    <div class="cart-product">

                        <strong>
                            ${item.name}
                        </strong>

                        <p>
                            ₱${item.price} each
                        </p>

                    </div>


                    <div class="quantity-controls">

                        <button
                            onclick="decreaseQuantity(${index})">

                            −

                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            onclick="increaseQuantity(${index})">

                            +

                        </button>

                    </div>


                    <strong>
                        ₱${subtotal}
                    </strong>


                    <button
                        class="remove-button"
                        onclick="removeItem(${index})">

                        Remove

                    </button>


                </div>

            `;

        }
    );


    cartContainer.innerHTML =
        cartHTML;


    if (totalElement) {

        totalElement.textContent =
            "Total: ₱" + total;

    }

}


// ==========================================
// INCREASE QUANTITY
// ==========================================

function increaseQuantity(index) {

    cart[index].quantity++;

    displayCart();

}


// ==========================================
// DECREASE QUANTITY
// ==========================================

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    displayCart();

}


// ==========================================
// REMOVE ITEM
// ==========================================

function removeItem(index) {

    cart.splice(index, 1);

    displayCart();

}


// ==========================================
// CHECKOUT
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty! ☀️\n\n" +
            "Please add an item before checking out."
        );

        return;
    }


    let total = 0;


    cart.forEach(
        function(item) {

            total +=
                item.price * item.quantity;

        }
    );


    alert(
        "Thank you for ordering from D' Sunny Café! ☀️\n\n" +
        "Your total is ₱" +
        total +
        ".\n\n" +
        "Your order has been received!"
    );


    // Clear cart

    cart = [];

    displayCart();

}


// ==========================================
// GO TO CART
// ==========================================

function goToCart() {

    const cartSection =
        document.getElementById("cart-section");


    if (cartSection) {

        cartSection.scrollIntoView({

            behavior: "smooth"

        });

    }

}


// ==========================================
// SEARCH + CATEGORY FILTER
// ==========================================

function filterMenu() {

    const search =
        document.getElementById("search");


    const category =
        document.getElementById("category");


    const searchText =
        search.value.toLowerCase();


    const selectedCategory =
        category.value;


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(
        function(product) {

            const name =
                product.dataset.name.toLowerCase();


            const productCategory =
                product.dataset.category;


            const matchesSearch =
                name.includes(searchText);


            const matchesCategory =
                selectedCategory === "all" ||
                productCategory === selectedCategory;


            if (
                matchesSearch &&
                matchesCategory
            ) {

                product.style.display =
                    "block";

            } else {

                product.style.display =
                    "none";

            }

        }
    );

}


// ==========================================
// CONTACT FORM
// ==========================================

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;


            alert(

                "Thank you, " +
                name +
                "! ☀️\n\n" +

                "Your message has been received."

            );


            contactForm.reset();

        }
    );

}


// ==========================================
// START CART
// ==========================================

displayCart();