// JavaScript Document
$(document).ready(function() {
	$.fn.fullpage({
		verticalCentered: false,
		resize:false,
		slidesNavigation:true,
		anchors: ['page1', 'page2', 'page3'],
		menu: '#menu'
	});
	
	$(".fancybox").fancybox();
	
	$("#menu .right").click( function(){
		$("#menu .language").slideToggle(); 
	})
	
	var language = localStorage.getItem('language');
	if ( language ){	
		multilingual( language )
	}
});

function multilingual(lang){	
	//languages
	var language = lang;
	localStorage.setItem( 'language' , language);
    $.ajax({        
		url: 'lang.xml',
		dataType:"text",
        success: function(xml) {
            $(xml).find('translation').each(function(){
                var id = $(this).attr('id');
                var text = $(this).find(language).text();
                $("#" + id).html(text);
            });
        },
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			  this; // the options for this ajax request
		}
    });
}
