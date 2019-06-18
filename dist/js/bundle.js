/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/yoga_calc.js":
/*!***********************************!*\
  !*** ./src/js/parts/yoga_calc.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.textContent = 0;

    persons.addEventListener('input', function () {
        personsSum = +this.value;

        if (personsSum == 0 || personsSum == '') {
            total = 0;
        } else {
            total = (daysSum + personsSum) * 4000;
        }

        if (restDays.value == '' || restDays.value < 0) {
            totalValue.textContent = 0;
            console.log('Не введено количество дней');
        } else {
            totalValue.textContent = total;
        }
    });

    restDays.addEventListener('input', function () {
        daysSum = +this.value;

        if (daysSum == 0 || daysSum == '') {
            total = 0;
        } else {
            total = (daysSum + personsSum) * 4000;
        }

        if (persons.value == '' || persons.value < 0) {
            totalValue.textContent = 0;
            console.log('Не введено количество человек');
        } else {
            totalValue.textContent = total;
        }
    });

    place.addEventListener('input', function () {
        if (restDays.value == '' || persons.value == '' || persons.value < 0 || restDays.value < 0) {
            totalValue.textContent = 0;
        } else {
            let a = total;
            totalValue.textContent = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/yoga_form.js":
/*!***********************************!*\
  !*** ./src/js/parts/yoga_form.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
    
    let message = {
        loading: "Загрузка...",
        sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
        failure: "Что-то пошло не так..."
    };

    let form = document.querySelector('.main-form'),
        formDown = document.querySelector('#form'),
        input = form.getElementsByTagName('input'),
        inputDown = formDown.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);

            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    request.send(formData);
                });
            }

            function clearInput(inp) {
                for (let i = 0; i < inp.length; i++) {
                    inp[i].value = '';
                }
            }

            function clearInputDone() {
                clearInput(input);
                clearInput(inputDown);
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.sucsess)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInputDone);
        });
    }
    sendForm(form);
    sendForm(formDown);
}

module.exports = forms;

/***/ }),

/***/ "./src/js/parts/yoga_modal.js":
/*!************************************!*\
  !*** ./src/js/parts/yoga_modal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/yoga_slider.js":
/*!*************************************!*\
  !*** ./src/js/parts/yoga_slider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/yoga_tabs.js":
/*!***********************************!*\
  !*** ./src/js/parts/yoga_tabs.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/yoga_timer.js":
/*!************************************!*\
  !*** ./src/js/parts/yoga_timer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timers() {
    
    let deadline = '2019-07-13';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor( (t / 1000 / 60 / 60) % 24 ),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours;
        if (days < 10) days = '0' + days;

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    setClock('timer', deadline);

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
}

module.exports = timers;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {

    'use strict'

    let calc = __webpack_require__(/*! ./parts/yoga_calc.js */ "./src/js/parts/yoga_calc.js"),
        form = __webpack_require__(/*! ./parts/yoga_form.js */ "./src/js/parts/yoga_form.js"),
        slider = __webpack_require__(/*! ./parts/yoga_slider.js */ "./src/js/parts/yoga_slider.js"),
        tabs = __webpack_require__(/*! ./parts/yoga_tabs.js */ "./src/js/parts/yoga_tabs.js"),
        timer = __webpack_require__(/*! ./parts/yoga_timer.js */ "./src/js/parts/yoga_timer.js"),
        modal = __webpack_require__(/*! ./parts/yoga_modal.js */ "./src/js/parts/yoga_modal.js");

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
