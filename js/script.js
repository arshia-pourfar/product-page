let numberOfProduct = 0;
let maxNumberOfProduct = 10;
let productPrice = '125.00';
$(document).ready(function () {
    $('.navbar .cart-icon .cart-image').click(function () {
        $('.navbar .cart-icon .cart-list').fadeToggle(350);
    });
    $('.navbar .cart-icon .number-up-cart').click(function () {
        $('.navbar .cart-icon .cart-list').fadeToggle(350);
    });

    $('.add-to-cart .container-number .minus').click(function () {
        addProductToCart('minus');
    });

    $('.add-to-cart .container-number .plus').click(function () {
        addProductToCart('plus');
    });

    $('.add-to-cart-btn').click(function () {
        addProductToCart('plus');
    });

    $('.navbar .cart-icon .cart-list .cart-list-value .product-contaienr .delete-icon').click(function () {
        numberOfProduct = 0;
        addProductToCart('minus');
    });

    $('.navbar .navbar-toggler').click(function () {
        $('.navbar .dark-bg').toggleClass('d-none d-block');
        $('.navbar .navbar-collapse').toggleClass('d-none d-block');
        $('.navbar .navbar-collapse').animate({ width: '60%' }, 500, function () {
        });
    });

    $('.navbar .close-collapse').click(function () {
        $('.navbar .navbar-collapse').animate({ width: '0%' }, 500, function () {
            $('.navbar .navbar-collapse').toggleClass('d-none d-block');
            $('.navbar .dark-bg').toggleClass('d-none d-block');
        });
    });
});

function addProductToCart(action) {
    if (numberOfProduct < maxNumberOfProduct && action == 'plus') {
        numberOfProduct++;
    }
    if (numberOfProduct > 0 && action == 'minus') {
        numberOfProduct--;
    }
    $('.number-of-product').text(numberOfProduct);
    // $('.navbar .cart-icon .cart-list .product-contaienr .number-product').text(numberOfProduct);
    $('.navbar .cart-icon .cart-list .product-contaienr .total-price .price').text('$' + productPrice);
    $('.navbar .cart-icon .cart-list .product-contaienr .total-price .total').text('$' + productPrice * numberOfProduct + '.00');
    if (numberOfProduct == 0) {
        $('.navbar .cart-icon .cart-list .empty-text').removeClass('d-none');
        $('.navbar .cart-icon .cart-list .empty-text').addClass('d-block');
        $('.navbar .cart-icon .cart-list .product-contaienr').removeClass('d-block');
        $('.navbar .cart-icon .cart-list .product-contaienr').addClass('d-none');
        $('.navbar .cart-icon .number-up-cart').removeClass('d-inline-block');
        $('.navbar .cart-icon .number-up-cart').addClass('d-none');
    } else {
        $('.navbar .cart-icon .cart-list .empty-text').removeClass('d-block');
        $('.navbar .cart-icon .cart-list .empty-text').addClass('d-none');
        $('.navbar .cart-icon .cart-list .product-contaienr').removeClass('d-none');
        $('.navbar .cart-icon .cart-list .product-contaienr').addClass('d-block');
        $('.navbar .cart-icon .number-up-cart').removeClass('d-none');
        // $('.navbar .cart-icon .number-up-cart').addClass('d-inline-block');
    }
}