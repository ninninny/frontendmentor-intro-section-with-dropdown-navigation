
// Desktop Navigation

if($(window).width()<576){
    //Mobile
    $('.mobileMenu').click(()=>{
        if($('.mobileMenu').hasClass('active')){
            mobileMenuClose('.mobileMenu','#mainMenu')
        } else {
            mobileMenuOpen('.mobileMenu','#mainMenu')
        }
    })
    $('.hasSub').click((e)=>{
        if($(e.currentTarget).hasClass('active')){
            subMenuClose(e)
        } else {
            subMenuOpen(e)
        }
    });
    $(window).scroll(()=>{
        mobileMenuClose('.mobileMenu','#mainMenu')
    })
    $(window).click(()=>{
        mobileMenuClose('.mobileMenu','#mainMenu')
    })
} else{
    //Desktop
    $('.hasSub').hover((e)=>{
        subMenuOpen(e)
    }, (e)=>{
        subMenuClose(e)
    });
}



let mobileMenuOpen =(btn,menu)=>{
    $(btn).addClass('active')
    $(menu).css('width','65%')
    $('.pageOverlay').css('height','100%')

}
let mobileMenuClose =(btn,menu)=>{
    $(btn).removeClass('active')
    $(menu).css('width','0')
    $('.pageOverlay').css('height','0')
}

let subMenuOpen =(e)=> {
    $(e.currentTarget).addClass('active')
    $(e.currentTarget).find('.submenu').css({
        'height':'auto',
        'padding-top':'15px',
        'padding-bottom':'15px'
    })
}
let subMenuClose =(e)=> {
    $(e.currentTarget).removeClass('active')
    $(e.currentTarget).find('.submenu').css({
        'height':'0',
        'padding-top':'0',
        'padding-bottom':'0'
    })
}