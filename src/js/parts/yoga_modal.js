function modal() {

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        moreDescrBtn = document.querySelectorAll('.description-btn');

    more.addEventListener('click', showMore);

    for (let i = 0; i < moreDescrBtn.length; i++) {
        moreDescrBtn[i].addEventListener('click', showMore);
    }
    
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    
    function showMore() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
}

module.exports = modal;