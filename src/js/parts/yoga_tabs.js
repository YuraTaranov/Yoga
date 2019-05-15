function tabs() {

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

            for (let i = a; i < tab.length; i++) {
                tab[i].classList.remove('info-header-tab-active');
                tab[i].classList.add('info-header-tab-disabled');
            }
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
        if (tab[b].classList.contains('info-header-tab-disabled')) {
            tab[b].classList.remove('info-header-tab-disabled');
            tab[b].classList.add('info-header-tab-active');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;