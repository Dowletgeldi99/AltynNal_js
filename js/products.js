let saltTypes = document.getElementsByClassName("product-cards")[0];
let saltType = document.getElementsByClassName("product-card");
let btnGetBack = document.getElementById("btnGetBack");
let productsLink = document.getElementById("products-link");


saltTypes.addEventListener('click', e => {
    let target = e.target;
    let targetNode = target.parentNode.parentNode;
    let li = document.createElement('li');
    let liRight = document.createElement('li');
    let productsList = document.getElementById("products-list");
    if (!target.classList.contains('product-cards')) {
        if (!target.classList.contains('button-hide')) {
            if (target.tagName == 'IMG') {
                if (!targetNode.classList.contains('show')) {
                    addArrow();

                    switch (targetNode.id) {
                        case 'de-icing-salt':
                            li.innerHTML = 'De-Icing Road Salt';
                            productsList.appendChild(li);
                            break;

                        case 'food-salt':
                            li.innerHTML = 'Food Salt';
                            productsList.appendChild(li);
                            break;

                        case 'industrial-salt':
                            li.innerHTML = 'Industrial Salt';
                            productsList.appendChild(li);
                            break;

                        case 'natural-salt':
                            li.innerHTML = 'Natural Raw Salt';
                            productsList.appendChild(li);
                            break;

                        case 'water-salt':
                            li.innerHTML = 'Water Treatment Salt';
                            productsList.appendChild(li);
                            break;

                        default:
                            break;
                    }
                }

            } else {
                targetNode.classList.add('show');
            }

            function addArrow() {
                targetNode.classList.add('show');
                liRight.innerHTML = '';
                liRight.classList.add('right-arrow');
                productsList.appendChild(liRight);
            }

            productsLink.href = "./products.html";


            for (let i = 0; i < saltType.length; i++) {
                saltType[i].classList.add('hide');


                console.log(target);

                if (saltType[i].classList.contains('show')) {
                    saltType[i].classList.remove('hide');
                    btnGetBack.classList.remove('button-hide');
                    btnGetBack.classList.add('button-show');
                }

            }
        }

        if (btnGetBack.classList.contains('button-hide')) {
            productsList.removeChild(productsList.lastChild);
            productsList.removeChild(productsList.lastChild);
        }
    }
});

btnGetBack.addEventListener('click', e => {

    btnGetBack.classList.remove('button-show');
    btnGetBack.classList.add('button-hide');
    for (let i = 0; i < saltType.length; i++) {
        setTimeout(getBack, 400)
        saltType[i].classList.remove('show');

        function getBack() {
            saltType[i].classList.remove('hide');
        }
    }
});