
// Desktop Navigation

$('button.hasSub').hover((e)=>{
    $(e.currentTarget).addClass('active');
    $(e.currentTarget).find('.submenu').css({
      'height':'auto',
      'padding-top':'15px',
      'padding-bottom':'15px'
    });
  },(f)=>{
    $(f.currentTarget).removeClass('active');
    $(f.currentTarget).find('.submenu').css({
      'height':'0',
      'padding-top':'0',
      'padding-bottom':'0'
    });
  });