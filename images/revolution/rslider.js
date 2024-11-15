/* Slider 1*/
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
    once: RS_MODULES.modules["revslider11"] !== undefined ? RS_MODULES.modules["revslider11"].once : undefined,
    init: function() {
        window.revapi1 = window.revapi1 === undefined || window.revapi1 === null || window.revapi1.length === 0 ? document.getElementById("rev_slider_1_1") : window.revapi1;
        if (window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length == 0) {
            window.revapi1initTry = window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
            if (window.revapi1initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider11"].init()
            });
            return;
        }
        window.revapi1 = jQuery(window.revapi1);
        if (window.revapi1.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_1_1");
            return;
        }
        revapi1.revolutionInit({
            revapi: "revapi1",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1240,1240,480",
            gridwidth: "1230,1230,1230,480",
            gridheight: "930,930,930,320",
            lazyType: "smart",
            spinner: "spinner0",
            perspectiveType: "local",
            editorheight: "930,768,960,320",
            responsiveLevels: "1240,1240,1240,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                onHoverStop: false
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
};


/* Slider 2*/
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider12"] = {
    once: RS_MODULES.modules["revslider12"] !== undefined ? RS_MODULES.modules["revslider12"].once : undefined,
    init: function() {
        window.revapi2 = window.revapi2 === undefined || window.revapi2 === null || window.revapi2.length === 0 ? document.getElementById("rev_slider_1_2") : window.revapi2;
        if (window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length == 0) {
            window.revapi2initTry = window.revapi2initTry === undefined ? 0 : window.revapi2initTry + 1;
            if (window.revapi2initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider12"].init()
            });
            return;
        }
        window.revapi2 = jQuery(window.revapi2);
        if (window.revapi2.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_1_2");
            return;
        }
        revapi2.revolutionInit({
            revapi: "revapi2",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1240,1240,480",
            gridwidth: "1230,1230,1230,480",
            gridheight: "870,870,870,320",
            lazyType: "smart",
            spinner: "spinner0",
            perspectiveType: "local",
            editorheight: "870,768,960,320",
            responsiveLevels: "1240,1240,1240,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                onHoverStop: false,
                bullets: {
                    enable: true,
                    tmp: "<span class=\"tp-bullet-inner\"></span>",
                    style: "uranus",
                    hide_onmobile: true,
                    hide_under: "992px",
                    h_align: "left",
                    h_offset: 30,
                    v_offset: 200,
                    container: "layergrid"
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
};


/* Slider 3*/
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider13"] = {
    once: RS_MODULES.modules["revslider13"] !== undefined ? RS_MODULES.modules["revslider13"].once : undefined,
    init: function() {
        window.revapi3 = window.revapi3 === undefined || window.revapi3 === null || window.revapi3.length === 0 ? document.getElementById("rev_slider_1_3") : window.revapi3;
        if (window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length == 0) {
            window.revapi3initTry = window.revapi3initTry === undefined ? 0 : window.revapi3initTry + 1;
            if (window.revapi3initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider13"].init()
            });
            return;
        }
        window.revapi3 = jQuery(window.revapi3);
        if (window.revapi3.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_1_3");
            return;
        }
        revapi3.revolutionInit({
            revapi: "revapi3",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1230,1024,778,480",
            gridheight: "800,768,600,340",
            lazyType: "smart",
            spinner: "spinner0",
            perspectiveType: "local",
            editorheight: "800,768,600,340",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                onHoverStop: false,
                bullets: {
                    enable: true,
                    tmp: "<span class=\"tp-bullet-inner\"></span>",
                    style: "uranus",
                    hide_onmobile: true,
                    hide_under: "1030px",
                    h_align: "left",
                    h_offset: 30,
                    v_offset: 190,
                    container: "layergrid"
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
};


/* Slider 4*/
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider14"] = {
    once: RS_MODULES.modules["revslider14"] !== undefined ? RS_MODULES.modules["revslider14"].once : undefined,
    init: function() {
        window.revapi4 = window.revapi4 === undefined || window.revapi4 === null || window.revapi4.length === 0 ? document.getElementById("rev_slider_1_4") : window.revapi4;
        if (window.revapi4 === null || window.revapi4 === undefined || window.revapi4.length == 0) {
            window.revapi4initTry = window.revapi4initTry === undefined ? 0 : window.revapi4initTry + 1;
            if (window.revapi4initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider14"].init()
            });
            return;
        }
        window.revapi4 = jQuery(window.revapi4);
        if (window.revapi4.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_1_4");
            return;
        }
        revapi4.revolutionInit({
            revapi: "revapi4",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1240,1240,480",
            gridwidth: "1170,1170,1170,480",
            gridheight: "800,800,800,320",
            lazyType: "smart",
            spinner: "spinner0",
            perspectiveType: "local",
            editorheight: "800,768,960,320",
            responsiveLevels: "1240,1240,1240,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                onHoverStop: false,
                bullets: {
                    enable: true,
                    tmp: "<span class=\"tp-bullet-image\"></span>",
                    style: "hebe"
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
};


/* Slider 5*/
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider15"] = {
    once: RS_MODULES.modules["revslider15"] !== undefined ? RS_MODULES.modules["revslider15"].once : undefined,
    init: function() {
        window.revapi5 = window.revapi5 === undefined || window.revapi5 === null || window.revapi5.length === 0 ? document.getElementById("rev_slider_1_5") : window.revapi5;
        if (window.revapi5 === null || window.revapi5 === undefined || window.revapi5.length == 0) {
            window.revapi5initTry = window.revapi5initTry === undefined ? 0 : window.revapi5initTry + 1;
            if (window.revapi5initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider15"].init()
            });
            return;
        }
        window.revapi5 = jQuery(window.revapi5);
        if (window.revapi5.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_1_5");
            return;
        }
        revapi5.revolutionInit({
            revapi: "revapi5",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1240,1024,778,480",
            gridheight: "900,600,500,450",
            lazyType: "smart",
            spinner: "spinner0",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "900,600,500,450",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                onHoverStop: false
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
};