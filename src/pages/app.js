(function ($) {
    var DJ = {
        init: function () {
            var self = this;
            self.siteBootUp();
        },
        siteBootUp: function () {
            var self = this;
            self.initSwiper();
            self.initNavWrap();
        },
        /**
         * initSwiper
         */
        initSwiper: function () {
            $(".swiper-container").swiper({
                loop: true,
                pagination: '.swiper-pagination',
                autoplay: 5000
            });
        },
        /**
         * initNavWrap
         */
        initNavWrap: function () {
            var $navWrap = $('#nav-wrap');
            $(document).on('click', '[data-toggle="open-nav"]', function () {
                $navWrap.addClass('open');
            });
            $(document).on('click', '[data-toggle="closed-btn"]', function () {
                $navWrap.removeClass('open');
            });
        }

    };
    window.DJ = DJ;
})(window.jQuery || window.Zepto);

$(function () {
    DJ.init();
});