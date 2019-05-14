window.addEventListener('DOMContentLoaded', function() {

    'use strict'

    let calc = require('./parts/yoga_calc.js'),
        form = require('./parts/yoga_form.js'),
        slider = require('./parts/yoga_slider.js'),
        tabs = require('./parts/yoga_tabs.js'),
        timer = require('./parts/yoga_timer.js'),
        modal = require('./parts/yoga_modal.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});