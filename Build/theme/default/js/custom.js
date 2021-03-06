// WOW.JS INIT

new WOW().init();


// TOOLTIPS

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//<![CDATA[
$(window).on('load', function () { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})
//]]>

function bouclevote(id2, pseudo2) {
	$.post("index.php?action=voter", 
	{
		id: id2,
		pseudo: pseudo2
	},function(data, status){ 
		console.log(data);
		data = data.substring(data.indexOf('[DIV]')+5);
		if(data == "success")
		{
			$("#vote-success").fadeIn(500);setTimeout(function(){ $("#vote-success").fadeOut(500);}, 5000);
			$("#btn-verif-" + id2).fadeOut(500);setTimeout(function(){ $("#btn-after-" + id2).fadeIn(500);}, 500);
			if(document.getElementById("nbr-vote-"+pseudo2)){
				document.getElementById("nbr-vote-"+pseudo2).innerHTML= (parseInt(document.getElementById("nbr-vote-"+pseudo2).innerHTML) + 1);
			} 
		}
		else {
			setTimeout(function(){ 
				bouclevote(id2, pseudo2);
			}, 500);
		}
    });
}

function showFunction(showId) {
	var x = document.getElementById(showId);
	if (x.style.opacity === "0") {
		x.style.height = "auto";
		x.style.opacity = "1";
	} else {
		x.style.height = "0";
		x.style.opacity = "0";
	}
}

function getUploadFileName(target) {

	document.getElementById("file-name").innerHTML = target.files[0].name;
}

