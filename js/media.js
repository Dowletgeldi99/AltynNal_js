// let mediaTypes = document.getElementsByClassName("media-types");
let mediaCards = document.getElementById("mediaCards");
let mediaCard = document.getElementsByClassName("media-card");
let mediaList = document.getElementById("media-list");
let mediaLink = document.getElementById("media-link");


mediaCards.addEventListener("click", e => {

    let target = e.target;
    if (!target.classList.contains('media-cards')) {
        if (!target.classList.contains('button-hide')) {
            if (target.tagName == 'IMG') {
                target = target.parentNode.parentNode;
            } else if (target.tagName == 'H2') {
                target = target.parentNode;
            }

            console.log(target);

            for (let i = 0; i < mediaCard.length; i++) {
                mediaCard[i].classList.add('hide');
            }

            if (target.classList.contains('media-card')) {
                if (target) {
                    target.classList.remove('hide');
                    target.classList.add('show');

                    btnGetBack.classList.add('button-show');
                    btnGetBack.classList.remove('button-hide');

                }
                // console.log(target.id);
            }


            mediaLink.href = "./media.html";

            if (btnGetBack.classList.contains('button-show')) {
                let li = document.createElement('li');
                let liRight = document.createElement('li');

                if (target.id == 'photo-gallery') {
                    liRight.innerHTML = '';
                    liRight.classList.add('right-arrow');
                    // debugger;
                    mediaList.appendChild(liRight);
                    li.innerHTML = 'Photo Gallery';
                    mediaList.appendChild(li);
                } else if (target.id == 'video-gallery') {
                    liRight.innerHTML = '';
                    liRight.classList.add('right-arrow');
                    mediaList.appendChild(liRight);
                    li.innerHTML = 'Video Gallery';
                    mediaList.appendChild(li);
                }
            }

        }

        if (btnGetBack.classList.contains('button-hide')) {
            mediaList.removeChild(mediaList.lastChild);
            mediaList.removeChild(mediaList.lastChild);
        }
    }
});

btnGetBack.addEventListener('click', e => {

    btnGetBack.classList.remove('button-show');
    btnGetBack.classList.add('button-hide');
    for (let i = 0; i < mediaCard.length; i++) {
        mediaCard[i].classList.remove('hide');
        mediaCard[i].classList.remove('show');

    }
});