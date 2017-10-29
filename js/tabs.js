let tabBtnTpl = require('../templates/tabs/tab-button.html');
let tabsTpl = require('../templates/tabs/tabs-buttons.html');
let tabsCont = require('../templates/tabs/tabs-content.html');

const tabsData = [
    {
        buttonText: 'elegance',
        tabTarget: 'elegance',
        backgroundImage: 'elegance.jpg',
        title: 'elegance',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere accumsan venenatis. Maecenas mauris lacus, efficitur ultricies pretium nec, cursus ut risus. Nullam felis augue, varius eget luctus in, finibus non enim. Nunc molestie felis risus, vitae volutpat magna lobortis ac. \n' +
        '\n' + 'Nullam molestie vestibulum tortor, sed vulputate nisl commodo eget. Fusce et euismod orci. Sed imperdiet lectus nunc, efficitur lobortis orci sollicitudin et. ',
        detailLink: '#'
    },
    {
        buttonText: 'creation',
        tabTarget: 'creation',
        backgroundImage: 'creation.jpg',
        title: 'creation',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere accumsan venenatis. Maecenas mauris lacus, efficitur ultricies pretium nec, cursus ut risus. Nullam felis augue, varius eget luctus in, finibus non enim. Nunc molestie felis risus, vitae volutpat magna lobortis ac. \n' +
        '\n' + 'Nullam molestie vestibulum tortor, sed vulputate nisl commodo eget. Fusce et euismod orci. Sed imperdiet lectus nunc, efficitur lobortis orci sollicitudin et. ',
        detailLink: '#'
    },
    {
        buttonText: 'family office',
        tabTarget: 'family-office',
        backgroundImage: 'family-office.jpg',
        title: 'family office',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere accumsan venenatis. Maecenas mauris lacus, efficitur ultricies pretium nec, cursus ut risus. Nullam felis augue, varius eget luctus in, finibus non enim. Nunc molestie felis risus, vitae volutpat magna lobortis ac. \n' +
        '\n' + 'Nullam molestie vestibulum tortor, sed vulputate nisl commodo eget. Fusce et euismod orci. Sed imperdiet lectus nunc, efficitur lobortis orci sollicitudin et. ',
        detailLink: '#'
    },
    {
        buttonText: 'experience',
        tabTarget: 'experience',
        backgroundImage: 'experience.jpg',
        title: 'experience',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere accumsan venenatis. Maecenas mauris lacus, efficitur ultricies pretium nec, cursus ut risus. Nullam felis augue, varius eget luctus in, finibus non enim. Nunc molestie felis risus, vitae volutpat magna lobortis ac. \n' +
        '\n' + 'Nullam molestie vestibulum tortor, sed vulputate nisl commodo eget. Fusce et euismod orci. Sed imperdiet lectus nunc, efficitur lobortis orci sollicitudin et. ',
        detailLink: '#'
    },
];

$(document).ready(function () {

    function createDom() {
        let tabsBtnsHtml = "";
        let tabsContHtml = "";
        let tabsWrapper = $(".tabs");
        if (tabsWrapper.length) {
            for (let i = 0; i < tabsData.length; i++) {
                tabsBtnsHtml += tabBtnTpl({buttonText: tabsData[i].buttonText, tabTarget: tabsData[i].tabTarget});
                tabsContHtml += tabsCont({
                    backgroundImage: tabsData[i].backgroundImage,
                    title: tabsData[i].title,
                    content: tabsData[i].content,
                    detailLink: tabsData[i].detailLink,
                    tabTarget: tabsData[i].tabTarget
                });
            }
        }
        tabsBtnsHtml = tabsTpl({partial: tabsBtnsHtml});

        tabsWrapper.append(tabsBtnsHtml + tabsContHtml);
        $(".tabs-wrap + .tabs-content").addClass('active');
    }

    function addEvents() {
        $(".tabs-buttons li").on("click", function () {
            $('.tabs-content').removeClass('active');
            $('.tab-' + $(this).data("target")).addClass('active');
        });
    }

    function init() {
        createDom();
        addEvents();
    }

    init();
});

