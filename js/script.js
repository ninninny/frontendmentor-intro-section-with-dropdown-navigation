
// Desktop Navigation

$('.hasSub').click((e)=>{
    if($(e.currentTarget).hasClass('active')){
        subMenuClose(e);
    } else {
        subMenuOpen(e);
    }
});

let subMenuOpen =(e)=> {
    $(e.currentTarget).addClass('active')
    $(e.currentTarget).find('.submenu').css({
        'height':'auto',
        'padding-top':'15px',
        'padding-bottom':'15px'
    });
}
let subMenuClose =(e)=> {
    $(e.currentTarget).removeClass('active');
    $(e.currentTarget).find('.submenu').css({
        'height':'0',
        'padding-top':'0',
        'padding-bottom':'0'
    });
}