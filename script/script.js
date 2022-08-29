let invisibleNavBlock = document.querySelector('.invisible__nav-block'),
    burgerMenu = document.querySelector('.burger-menu__wrapper'),
    body = document.querySelector('body'),
    cross = document.querySelector('.invisible__nav-cross'),
    burgerNavBlock = document.querySelector('.invisible__nav-block'),
    invisibleNavChapter = document.querySelector('.invisible__nav-chapter');

    stages = document.querySelector('.stages'),
    properties = document.querySelector('.properties'),
    advantages = document.querySelector('.advantages'),
    programm = document.querySelector('.programm'),
    prices = document.querySelector('.prices');
// burger start
burgerMenu.addEventListener('click', function (e) {
    invisibleNavBlock.style.left = '0';

    body.classList.add('invisible__nav-block-bg');

    e.stopPropagation();

    body.style.overflow = "hidden";
});

cross.addEventListener('click', function () {
    invisibleNavBlock.style.left = '-100%';

    body.classList.remove('invisible__nav-block-bg');

    body.style.overflow = "";
})

burgerNavBlock.addEventListener('click', function (e) {

    if(e.target === burgerNavBlock){
        invisibleNavBlock.style.left = '-100%';

        body.classList.remove('invisible__nav-block-bg');

        body.style.overflow = "";
    }
})
// burger end

// scroll start
window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;
    let width = window.innerWidth;

    // stages start
    if (scrollTop >= 275) {
        stages.classList.add('stages_active');
    }
    // stages end

    // properties start
    if (scrollTop >= 850) {
        properties.classList.add('properties_active');
    }
    // properties end

    // advantages start
    if (scrollTop >= 2025) {
        advantages.classList.add('advantages_active', 'advantages_active-pc');
    }
    // advantages end

    // programm start
    if (scrollTop >= 3000) {
        programm.classList.add('programm_active');
    }
    // programm end

    // prices start
    if (scrollTop >= 4450) {
        prices.classList.add('prices_active');
    }
    // prices end






    if (width < 1500 && width > 1000) {
        if (scrollTop > 3600) {
            prices.classList.add('prices_active');
        }
    }

    // adaptive-1000px scroll start
    if (width < 1000) {
        // properties start
        if (scrollTop >= 775) {
            properties.classList.add('properties_active');
        }
        // properties end

        // advantages start
        if (scrollTop >= 1875) {
            advantages.classList.remove('advantages_active-pc');
            advantages.classList.add('advantages_active', 'advantages_active-mobile');
        }
        // advantages end
    }
    // adaptive-1000px scroll end

    if (width < 1000 && width > 800 && scrollTop >= 4120) {
        prices.classList.add('prices_active');
    }

    if (width < 600) {

        if (scrollTop >= 1500) {
            advantages.classList.remove('advantages_active-pc');
            advantages.classList.add('advantages_active', 'advantages_active-mobile');
        }
    }
})
// scroll end