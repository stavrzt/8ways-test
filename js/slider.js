let slideTpl = require('../templates/slides/slide-content.html');
let slidesWrapperTpl = require('../templates/slides/slides-wrapper.html');

const slidesData = [
    {
        slideImage: 'slide1.jpg',
        title: 'Lake Annecy',
        description: 'Aliquam erat volutpat. Integer finibus augue in neque eleifend, vitae auctor augue blandit.',
    },
    {
        slideImage: 'slide2.jpg',
        title: 'Courchevel',
        description: 'Nunc id libero lobortis, bibendum velit eget, placerat metus.',
    },
    {
        slideImage: 'slide3.jpg',
        title: 'Lac du Bourget',
        description: 'Vitae auctor augue blandit liquam erat volutpat. Integer finibus augue in neque eleifend.',
    },
    {
        slideImage: 'slide4.jpg',
        title: 'Bak Chujs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
        slideImage: 'slide5.jpg',
        title: 'Loki Dump',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem laudantium, totam rem aperiam.',
    },
    {
        slideImage: 'slide6.jpg',
        title: 'Fancy Ytua',
        description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.',
    },
];

$(document).ready(function () {

    let lastPos = 0;
    let difference = 0;
    let mobile = false;

    function dragInit(e) {
        e.preventDefault();

        if (e.originalEvent.touches) {
            mobile = true;
        }

        startPos = e.pageX;
        if (mobile) {
            startPos = e.originalEvent.touches[0].pageX;
        }

        $(this).addClass('active');

        $(document).on('mousemove touchmove', dragStart);
        $(document).on('mouseup touchend', dragEnd);
    }

    function dragEnd(e) {
        lastPos = difference;
        $(document).off('mousemove touchmove');
        $(document).off('mouseup touchend');
        $('.handle.active').removeClass('active');

        slideAnimate($('.handle').offset()['left']);
    }

    function dragStart(e) {

        difference = ((mobile ? e.originalEvent.touches[0].pageX : e.pageX) - startPos) + lastPos;

        $('.handle.active').css('transform', 'translate3d(' + difference + 'px, 0, 0)');
    }

    function slideAnimate(offsetX) {
        //console.log('animate me! ' + offsetX);
    }

    function createDom() {
        let sliderContHtml = "";
        let sliderWrapper = $(".slider");

        if (sliderWrapper.length) {
            for (let i = 0; i < slidesData.length; i++) {
                sliderContHtml += slideTpl({
                    slideImage: slidesData[i].slideImage,
                    title: slidesData[i].title,
                    description: slidesData[i].description
                });
            }
        }

        sliderWrapper.append(slidesWrapperTpl({partial: sliderContHtml}));
    }

// Tabs init
    (function () {
        createDom();

        // Init slider event
        $('.handle').on('mousedown touchstart', dragInit);
    })();

});