function BlockUI(messageStr){
 $.blockUI({ message: '<div>'+messageStr+'</div>',
     css: {
         border: 'none',
         padding: '15px',
         backgroundColor: '#000',
         '-webkit-border-radius': '10px',
         '-moz-border-radius': '10px',
         opacity: .5,
         color: '#fff'
     }
 });
}

function UnBlockUI(){
 $.unblockUI();
}
function chkcareer(){
  if($('#career_saraly').val() == '')
  {
    alert('กรุณากรอกเงินเดือนที่ต้องการ');
    $('#career_saraly').focus();
    return false ;
  }
  if($('#career_name').val() == '')
  {
    alert('กรุณากรอกชื่อและนามสกุล');
    $('#career_name').focus();
    return false ;
  }
  if($('#career_tel').val() == '')
  {
    alert('กรุณากรอกเบอร์โทรศัพท์');
    $('#career_tel').focus();
    return false ;
  }
  if($('#career_email').val() == '')
  {
    alert('กรุณากรอกอีเมล');
    $('#career_email').focus();
    return false ;
  }
  if($('#career_email').val().indexOf ('@',0) == -1 || $('#career_email').val().indexOf ('.',0) == -1 && $('#career_email').val()!="" ){
    alert('กรุณากรอกอีเมล์ให้ถูกต้อง');
    $('#career_email').focus();
    return false;
}
  if($('#txt_code').val() == '')
  {
    alert('กรุณากรอกรหัสยืนยันความปลอดภัย');
    $('#txt_code').focus();
    return false ;
  }
  else{

    var formdata = $("#form_career") ;
    var file_data = $('#career_file').prop('files')[0];
    var form = false;
    form = new FormData(formdata[0]);
    form.append('file', file_data);
    $.ajax({
      url:'asset/career_send.php',
      enctype: 'multipart/form-data',
      data:form ? form : formdata.serialize(),
      type:'POST',
      contentType: false,
        cache: false,
        processData:false,
      success:function(result){
            // alert(result);
        var tot = result.trim();

        if(tot == 'success-data'){
          window.location="career_thank.php" ;
          return false;
        }else if(tot == 'error-code'){
          alert('ขอโทษคะ, กรุณากรอกรหัสยืนยันให้ถูกต้อง');
          return false;
        }else if(tot == 'type error'){
            alert('เลือกไฟล์ .jpg และ. pdf เท่านั้น');

            return false;
        }else if(tot == 'size error'){
            alert('ขนาดไฟล์ไม่เกิน 2 MB');

            return false;
          }else{
          alert('ขอโทษคะ , กรุณาลองอีกครั้งในภายหลัง !');
          return false;
        }
      }
    })
    return false;
  }

}
function chkcontact(){
	var contact_topic = $('#contact_topic').val() ;
	var name = $('#contact_name');
	var telephone = $('#contact_tel') ;
	var email = $('#contact_email') ;
	var txt_code = $('#txt_code') ;

	if(contact_topic == ''){
		alert('กรุณาเลือกเรื่องที่ต้องการติดต่อ') ;
		return false;
	}
	if(name.val() == ''){
		alert('กรุณากรอกชื่อ-นามสกุล');
		name.focus();
		return false;
	}
	if(telephone.val() == ''){
		alert('กรุณากรอกเบอร์โทรศัพท์');
		telephone.focus();
		return false;
	}
	if(email.val() == ''){
		alert('กรุณากรอกอีเมล์');
		email.focus();
		return false;
	}
	if(email.val().indexOf ('@',0) == -1 || email.val().indexOf ('.',0) == -1 && email.val()!="" ){
			alert('กรุณากรอกอีเมล์ให้ถูกต้อง');
			email.focus();
			return false;
	}
	if(txt_code.val() == ''){
		alert('กรุณากรอกรหัสยืนยัน') ;
		txt_code.focus();
		return false;
	}
	else{

		$.ajax({
			url:'asset/contact_send.php',
			data:$("#form_contact").serialize(),
			type:'POST',
			success:function(result){
				// alert(result);
				var tot = result.trim();
				if(tot == 'success-data'){

					window.location="contact_thank.php" ;
					return false;
				}else if(tot == 'error-code'){
					alert('ขอโทษคะ, กรุณากรอกรหัสยืนยันให้ถูกต้อง');
					return false;
				}else{
					alert('ขอโทษคะ , กรุณาลองอีกครั้งในภายหลัง !');
					return false;
				}
			}
		})
		return false;
	}
}
function chksch(){

  if($('#txtsch').val() == ''){
    alert('กรุณากรอกคำค้น');
    $('#txtsch').focus();
    return false;
  }
}
function chksch_header(){

  if($('#txtsch_header').val() == ''){
    alert('กรุณากรอกคำค้น');
    $('#txtsch_header').focus();
    return false;
  }
}
function contact_tab(val){
  var url_ajax ;
  if(val == 1){
    url_ajax="contact1.php"
  }else if(val == 2){
    url_ajax="contact2.php"
  }else if(val == 3){
    url_ajax="contact3.php"
  }
  $.ajax({
    url:url_ajax,
    type:'POST',
    success:function(result){

        $("#contact-page").hide().html(result).fadeIn(500);
        for(var i=1 ; i<= 3 ; i++){
          if(i == val){
            $("#contact"+val).addClass('contact-menu-active');
          }else{
            $("#contact"+i).removeClass('contact-menu-active');
          }
        }
        // UnBlock();
    }
  })
}

function newspages(maxpages,page){

			$.ajax({
				url:'asset/news-page.php',
				type:'POST',
				data:{pageNum : page }	,
				success:function(result){
						$("#news-model").fadeIn(500).html(result);
//						getMn(page) ;
						createPagination(maxpages,page,"newspages");

				}
			})
}
function csrpages(maxpages,page){

			$.ajax({
				url:'asset/csr-page.php',
				type:'POST',
				data:{pageNum : page }	,
				success:function(result){
						$("#activity_page_box").fadeIn(500).html(result);
//						getMn(page) ;
						createPagination(maxpages,page,"csrpages");

				}
			})
}

function projectpages(maxpages,page){
  // alert(maxpages+':'+page);
  $.ajax({
    url:'asset/project-page.php',
    type:'POST',
    data:{pageNum : page }	,
    success:function(result){
      // alert(result);
        $("#project-model").fadeIn(500).html(result);
        $(window).scrollTop(0);
        AOS.init();
//						getMn(page) ;
    createPaginationProject(maxpages,page,"projectpages");

    }
  })
}

function Bybrandpages(maxpages,page,c_id,b_id,t_id){
  // alert(c_id+":"+b_id+":"+t_id);
  $.ajax({
    url:'asset/bybrand-page.php',
    type:'POST',
    data:{pageNum : page , cate_id : c_id , brand_id : b_id , type_id : t_id}	,
    success:function(result){
      // alert(result);
        $("#bybrand-model").fadeIn(500).html(result);
        $(window).scrollTop(0);
        AOS.init();
//						getMn(page) ;
      var id = c_id+","+b_id+","+t_id ;
  createPaginationByBrand(maxpages,page,"Bybrandpages",id);

    }
  })
}
