
function getMn(id) {
    document.getElementById('mn' + id).className = 'menu-active';
}


$(document).ready(function() {

    $('.main-menu-content-mb').hide();

    $('.btn-catalog').mouseover(function() {
        var id = $(this).attr('data-id');
        $('#btn-catalog' + id + ' #img-unactive').hide();
        $('#btn-catalog' + id + ' #img-active').show();
    }).mouseout(function() {
        var id = $(this).attr('data-id');
        $('#btn-catalog' + id + ' #img-active').hide();
        $('#btn-catalog' + id + ' #img-unactive').show();
    });

    $('.btn-product-doucment').mouseover(function() {
        var id = $(this).attr('data-id');
        $('#btn-catalog' + id + ' #img-unactive').hide();
        $('#btn-catalog' + id + ' #img-active').show();
    }).mouseout(function() {
        var id = $(this).attr('data-id');
        $('#btn-catalog' + id + ' #img-active').hide();
        $('#btn-catalog' + id + ' #img-unactive').show();
    });

    $('.btn-project').mouseover(function() {
        var id = $(this).attr('data-id');
        $('#btn-catalog' + id + ' .img-unactive').hide();
        $('#btn-catalog' + id + ' .img-active').show();
    }).mouseout(function() {
        var id = $(this).attr('data-id');
        $('#btn-catalog' + id + ' .img-active').hide();
        $('#btn-catalog' + id + ' .img-unactive').show();
    });

    $('.btn_news_detail').mouseover(function() {
        var id = $(this).attr('data-id');
        $('#img-unactive' + id).hide();
        $('#img-active' + id).show();
    }).mouseout(function() {
        var id = $(this).attr('data-id');
        $('#img-active' + id).hide();
        $('#img-unactive' + id).show();
    });

    $('#btn-menu').click(function(e) {
        e.preventDefault();
        var status = $(this).attr('data-status');
        var imgName;
        var menuEle = $('.main-menu-content');
        if (status == 'close') {
            $('#btn-menu-text').hide();
            $('#btn-menu-text-close').fadeIn(300);
            $('#icon-menu').hide();
            $('#icon-menu-close').fadeIn(300);
            $(this).attr('data-status', 'open');
            menuEle.fadeIn(300);
        }  else {
            $(this).attr('data-status', 'close');
            menuEle.fadeOut(300);
            $('#btn-menu-text').fadeIn(300);
            $('#btn-menu-text-close').hide();
            $('#icon-menu').fadeIn(300);
            $('#icon-menu-close').hide();
            $('.main-menu-content').css({
                'background': 'url(images/bg-menu.jpg) top center no-repeat'
            })
        }
    });

    $('#btn-menu-mb').click(function(e) {
        e.preventDefault();
        var status = $(this).attr('data-status');
        var menuEle = $('.main-menu-content-mb');
        menuEle.slideToggle(300);
        if (status == 'close') {
            $('#btn-menu-mb #btn-menu-text').hide();
            $('#btn-menu-mb #btn-menu-text-close').fadeIn(300);
            $('#btn-menu-mb #icon-menu').hide();
            $('#btn-menu-mb #icon-menu-close').fadeIn(300);
            $(this).attr('data-status', 'open');
        }  else {
            $(this).attr('data-status', 'close');
            $('#btn-menu-mb #btn-menu-text').fadeIn(300);
            $('#btn-menu-mb #btn-menu-text-close').hide();
            $('#btn-menu-mb #icon-menu').fadeIn(300);
            $('#btn-menu-mb #icon-menu-close').hide();
        }
    });

    $('.main-menu-content a').mouseover(function() {
        var id = $(this).attr('data-id');
		 
        $('.main-menu-img').removeClass('main-menu-img-active');
        $('#main-menu-img' + id).addClass('main-menu-img-active');
        $('#sub-menu-img-left' + id).addClass('main-menu-img-active');
        $('#sub-menu-img-middle' + id).addClass('main-menu-img-active');
        $('#sub-menu-img-right' + id).addClass('main-menu-img-active');
		
      });
      
      $('.btn-menu-list').click(function(e) {
         e.preventDefault();
         var id = $(this).attr('id');
         var status = $(this).attr('data-status');
         if(status === 'down') {
             $(`.img-arrow-down`).show();
             $(`.img-arrow-up`).hide();
             $(`#${id} .img-arrow-up`).show();
            $(`#${id} .img-arrow-down`).hide();
            $(`.sub-main-menu-content-mb`).slideUp();
            $(`#${id} + .sub-main-menu-content-mb`).slideDown();
            $(this).attr('data-status', 'up');
         } else {
             $(`.img-arrow-up`).hide();
            $(`.img-arrow-down`).show();
            $(`#${id} .img-arrow-down`).show();
            $(`#${id} .img-arrow-up`).hide();
            $(this).attr('data-status', 'down');
            $(`.sub-main-menu-content-mb`).slideUp();
            $(`#${id} + .sub-main-menu-content-mb`).slideUp();
         }

      });   

      $('.product_center_list_mb').click(function(e) {
          e.preventDefault();
          var id = $(this).attr('id');
          $(`.product_center_list_mb + .product_center_info`).hide();
          $(`#${id} + .product_center_info`).slideToggle();
      });
	  
	  
})

var i = 1;
function nextSlide() {
    var maxNumber = 17;
    if(i <= maxNumber) {
        if(i != 17) i++
        $('.history-slide').hide()
        $(`#history-slide${i}`).show();
    }
}
function preSlide() {
    if(i >= 1) {
        if(i != 1) i-- 
        $('.history-slide').hide()
        $(`#history-slide${i}`).show();
    }
}



function MM_swapImgRestore() { //v3.0

  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;

}

function MM_preloadImages() { //v3.0

  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();

    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)

    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}

}



function MM_findObj(n, d) { //v4.01

  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {

    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}

  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];

  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);

  if(!x && d.getElementById) x=d.getElementById(n); return x;

}



function MM_swapImage() { //v3.0

  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)

   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}

}



function display (sID) {

	oObj = document.getElementById(sID);

		if (oObj) {

		oObj.style.display='inline';

		}

}



function hide (sID) {

	oObj = document.getElementById(sID);

		if (oObj) {

		oObj.style.display='none';

		}



}



// Menu //

 
 
 



function get_product_center(id) {
	for (i=1;i<=7;i++) {
	
		if (id==i) 
		{
			 display("center"+i);
		document.getElementById("point"+i).className='qs active';
		}else{
   			hide("center"+i);
		document.getElementById("point"+i).className='qs';
		}
		
	}
}