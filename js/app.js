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
            self.initFontExp();
            self.initAddBtn();
            self.initCommentBtn();
        },
        /**
         * initSwiper
         */
        initSwiper: function () {
            var $swiperContainer = $(".swiper-container");
            if ($swiperContainer.length > 0) {
                $swiperContainer.swiper({
                    loop: true,
                    pagination: '.swiper-pagination',
                    autoplay: 5000
                });
            }
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
        },
        /**
         * initFontExp
         */
        initFontExp: function () {
            var $detailBody = $('.detail-body');
            $(document).on('click', '[data-toggle="font-exp"]', function () {
                $detailBody.css({
                    'font-size': '0.36rem',
                    'line-height': '.6rem'
                });
            });
        },
        /**
         * initFontExp
         */
        initAddBtn: function () {
            $(document).on('click', '[data-toggle="add-btn"]', function () {
                var $this = $(this);
                var $sup = $this.find('sup');
                var count = parseInt($sup.text());
                if ($this.hasClass('active')) {
                    $this.removeClass('active');
                    $sup.text(count - 1);
                } else {
                    $this.addClass('active');
                    $sup.text(count + 1);
                }
            });
        },
        /**
         * initCommentBtn
         */
        initCommentBtn: function () {
            var toggleCommentBox = this.toggleCommentBox;
            $(document).on('click', '[data-toggle="comment-btn"]', function () {
                toggleCommentBox();
            });
        },
        toggleCommentBox: function () {
            var $fixedComment = $('.fixed-comment');
            if ($fixedComment.hasClass('open')) {
                $fixedComment.removeClass('open');
                $('html').removeClass('screen-lock');
            } else {
                $fixedComment.addClass('open').find('.comment-input').focus();
                $('html').addClass('screen-lock');
            }
        }

    };
    window.DJ = DJ;
})(window.jQuery);

$(function () {
    DJ.init();
});