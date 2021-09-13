$(document).ready(function(){
    $('.slider').slick({
        
        // стрелки
        arrow: true,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        easing: 'ease',
        autoplay:true,
        responsive:[
            {
                breakpoint: 413,
                settings: {
                    arrow: false,
                }
            }
        ]
    });
});

changeLanguage = {
    dropDown() {
        return document.getElementById('dropbox');
    },

    init() {
        window.addEventListener('click', (event) => {
            this.clickerEvent(event);
        });
    },
    clickerEvent(event) {
        const dBox = this.dropDown();
        if (event.target.matches('#openPopup')) {
            document.getElementById("myPopup").style.display = "block";
        }
    
        // закрытие формы
            // кнопка заказа
        if (event.target.matches('#closePopup') ||
            // форма
            event.target.matches('#myPopup') ||
            event.target.matches('#exit-btn')) {
            document.getElementById("myPopup").style.display = "none";
        }
    },
}

changeLanguage.init()

const isModile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|Ipod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEmobile/i);
    },
    any: function(){
        return (
            isModile.Android() ||
            isModile.BlackBerry() ||
            isModile.iOS() ||
            isModile.Opera() ||
            isModile.Windows());
    
    }
};

if (isModile.any()){
    document.body.classList.add('_touch');
} else{
    document.body.classList.add('_pc');

    let menuLanguageArrows = document.querySelectorAll('.menu_language_arrow')

    if (menuLanguageArrows.length > 0){
        for (let index = 0; index < menuLanguageArrows.length; index++){
            const menuLanguageArrow = menuLanguageArrows[index];
            menuLanguageArrow.addEventListener("click", function(e){
                menuLanguageArrow.parentElement.classList.toggle('_active');
            });
        }
    }
    
}








