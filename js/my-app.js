// Initialize your app
var myApp = new Framework7({
  init: false //Disable App's automatica initialization
});

// Export selectors engine
var $$ = Dom7;

myApp.onPageBeforeInit('index', function (page) {

var uid = localStorage.getItem("uid");
document.getElementById("profilepic").innerHTML = '<img src="http://graph.facebook.com/' + uid + '/picture?type=normal" style="margin:0 auto;text-align:center;width:80px;border-radius:50%;"/>';

    functionEmpty();

var previousScrollPosition = 0;
$$('.page-content').on('scroll', function (e) {
    var pageContent = this;
    var pageScroll = pageContent.scrollTop;
    if (pageScroll > 44) {
        if (pageScroll > previousScrollPosition) {
            mainView.hideNavbar();
            mainView.hideToolbar();
        }
        else {
            mainView.showNavbar();
            mainView.showToolbar();
        }

        if (pageScroll >= pageContent.scrollHeight - pageContent.offsetHeight - 44) {
            mainView.showNavbar();
            mainView.showToolbar();
        }

    }
    else {
        mainView.showNavbar();
        mainView.showToolbar();
    }
    var scrollDiff = Math.abs(previousScrollPosition - pageScroll);
    if (previousScrollPosition > pageScroll) previousScrollPosition = pageScroll;
    else {
        if (scrollDiff > 20) previousScrollPosition = pageScroll;
    }
});




});	

myApp.onPageInit('add_deal', function (page) {





});

myApp.onPageBeforeRemove('add_deal', function (page) {
$$( ".business" ).remove();
});


myApp.onPageInit('register', function (page) {

alert('on register page');
mainView.hideNavbar();

});



myApp.onPageAfterAnimation('location', function (page) {
$$("#result li").remove();
});

myApp.onPageBeforeRemove('location', function (page) {
$$("#loader-container").show();
functionEmpty();
});


myApp.onPageBeforeRemove('business', function (page) {
$$( ".business" ).remove();
functionEmpty();
});



	
myApp.onPageInit('location', function (page) {



document.getElementsByName('numPeople')[0].placeholder=localStorage.getItem("position");

var radius = localStorage.getItem('radius');
if (!radius) {radius == 25;}

document.getElementById("amount").innerHTML = radius;








	
});	



 
//And now we initialize app
myApp.init();

// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
  //  setTimeout(function () {
$$("#result li").remove();
$$("#loader-container").show();
    functionEmpty();

        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
 //   }, 500);
});



var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});



var register = localStorage.getItem('register');
if (register) {
alert('register localstorage');
if(latitude) {mainView.loadPage('index.html');}
else{mainView.loadPage('location.html');}
	
	



	
}
else {

// Load page from about.html file to main View:
mainView.loadPage('register.html');
alert('register not in localstorage');	
}	










// Callbacks to run specific code for specific pages, for example for About page:

myApp.onPageInit('about', function (page) {

alert('on about page');

	$$('.create-page').on('click', function () {
        createContentPage();
    });
});



function setEmpty(homelist){

alert(homelist);	
if (homelist=="find"){localStorage.setItem("homelist", "find");}
if (homelist=="mydeals"){localStorage.setItem("homelist", "mydeals");}
if (homelist=="fav"){localStorage.setItem("homelist", "fav");}
if (homelist=="add"){localStorage.setItem("homelist", "add");}

	
	
}

var data_send;
var domain;

function functionEmpty(pages_list) {

var uid = localStorage.getItem("uid");

var latitude = localStorage.getItem("latitude");
var longitude = localStorage.getItem("longitude");
var post_id_list = [];
var fav_id_list = [];

if (pages_list=='a') {$$("#result li").remove();domain = "jsonp";data_send = "user_id=" + uid + "&latitude=" + latitude + "&longitude=" + longitude;}

if (pages_list=='b') {$$("#result li").remove();
var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
for (i = 0; i < existingEntries.length; i++) {post_id_list.push("999999"+ existingEntries[i].post_id + "999999");}
domain = "getposts";data_send = "pages_list=" + post_id_list + "&user_id=" + uid + "&latitude=" + latitude + "&longitude=" + longitude;}

if (pages_list=='c') {$$("#result li").remove();
var favEntries = JSON.parse(localStorage.getItem("favEntries"));
for (i = 0; i < favEntries.length; i++) {fav_id_list.push("999999"+ favEntries[i].page_id + "999999");}
domain = "getpages";data_send = "pages_list=" + fav_id_list + "&user_id=" + uid + "&latitude=" + latitude + "&longitude=" + longitude;}

if (typeof pages_list === 'undefined') {domain = "jsonp";data_send = "user_id=" + uid + "&latitude=" + latitude + "&longitude=" + longitude;}
if (pages_list instanceof Array) {domain = "getpages";data_send = "pages_list=" + pages_list;}


	
$$(".load_more").removeAttr("disabled", "disabled");
$$( "#result li" ).removeClass( "disabled" );
$$(".load_previous").attr("disabled", "disabled");
var track_click = 0;

$$.getJSON('http://www.smilesavers.net.au/'+ domain +'.php?callback=?', ''+ data_send +'',function(response){

// Store
localStorage.setItem("total_pages", response.length);
$$("#loader-container").hide();



   
for (i = 0; i < 10; i++) {        

var str = response[i][4];
var singlequote = str.replace(/'/g, "qqqq");
//var description = "'" + singlequote.replace(/(\r\n|\n|\r)/gm,"") + "'";
var type = response[i][9];




someText = str.replace(/(\r\n|\n|\r)/gm,"<br />");

//onclick="getDeal(\''+ response[i][2]  +'\',\''+ response[i][16]  +'\',\''+ response[i][3]  +'\',\''+ response[i][1]  +'\',\''+ response[i][14]  +'\',\''+ response[i][10]  +'\',\''+ response[i][11]  +'\',\''+ response[i][6]  +'\')"

if (pages_list=='a' || typeof pages_list === 'undefined') {


if (type == 'comment') {$$( '#result' ).append('<li class="swipeout s_'+ response[i][2] +'" style="border-right:5px solid #ff8000;border-left:5px solid #3b5998;margin-top:5px;margin-bottom:5px;"><img onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="http://smilesavers.net.au/images/compressed/'+response[i][1]+'_'+response[i][21]+'.jpg" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=30&height=30" style="border-radius:50%;"/></div><div class="item-inner" style="border-bottom:0;"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div><div class="item-after"><span class="badge" style="margin-right:2px;background-color:#3b5998;">'+ response[i][17] + '</span><span class="badge" style="background-color:#ff8000;">'+ response[i][18] + '</span></div></div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-green swipeout-overswipe" style="background-color:#3b5998;" onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')"><i class="pe-7s-comment pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton(\''+ response[i][2]  +'\')" class="swipeout-delete swipeout-overswipe" style="background-color:#ff8000;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');}
if (type=='like') {$$( '#result' ).append('<li class="swipeout s_'+ response[i][2] +'" style="border-right:5px solid #ff8000;border-left:5px solid #3b5998;margin-top:5px;margin-bottom:5px;"><img onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="http://smilesavers.net.au/images/compressed/'+response[i][1]+'_'+response[i][21]+'.jpg" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=30&height=30" style="border-radius:50%;"/></div><div class="item-inner" style="border-bottom:0;"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div><div class="item-after"><span class="badge" style="margin-right:2px;background-color:#3b5998;">'+ response[i][17] + '</span><span class="badge" style="background-color:#ff8000;">'+ response[i][18] + '</span></div></div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-green swipeout-delete swipeout-overswipe" style="background-color:#3b5998;" onclick="likeButton(\''+ response[i][2]  +'\',\''+ response[i][6]  +'\')"><i class="pe-7s-like2 pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton(\''+ response[i][2]  +'\')" class="swipeout-delete swipeout-overswipe" style="background-color:#ff8000;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');}
}

if ((post_id_list instanceof Array) && (pages_list=='b')) {
	
$$( '#result' ).append('<li class="swipeout s_'+ response[i][2] +'" style="border-right:5px solid #ff3b30;border-left:5px solid #4cd964;margin-top:5px;margin-bottom:5px;"><img onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="http://smilesavers.net.au/images/compressed/'+response[i][1]+'_'+response[i][21]+'.jpg" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner" style="border-bottom:0;"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div><div class="item-after"><span class="badge" style="margin-right:2px;background-color:#3b5998;">'+ response[i][17] + '</span><span class="badge" style="background-color:#ff8000;">'+ response[i][18] + '</span></div></div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-green swipeout-delete swipeout-overswipe" style="background-color:#3b5998;" onclick=""><i class="pe-7s-diskette pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton(\''+ response[i][2]  +'\')" class="swipeout-delete swipeout-overswipe" style="background-color:#ff8000;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');
	
}

if ((fav_id_list instanceof Array) && (pages_list=='c')) {
	
$$( '#result' ).append('<li class="swipeout s_'+ response[i][2] +'" style="border-right:5px solid #ff3b30;border-left:5px solid #5ac8fa;margin-top:5px;margin-bottom:5px;"><img onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="http://smilesavers.net.au/images/compressed/'+response[i][1]+'_'+response[i][21]+'.jpg" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner" style="border-bottom:0;"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div><div class="item-after"><span class="badge" style="margin-right:2px;background-color:#3b5998;">'+ response[i][17] + '</span><span class="badge" style="background-color:#ff8000;">'+ response[i][18] + '</span></div></div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-green swipeout-delete swipeout-overswipe" style="background-color:#3b5998;" onclick=""><i class="pe-7s-diskette pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton(\''+ response[i][2]  +'\')" class="swipeout-delete swipeout-overswipe" style="background-color:#ff8000;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');
	
}

if (pages_list instanceof Array) {
	
$$( '#add_container' ).append('<li class="swipeout s_'+ response[i][2] +'"><img onclick="popUpModify(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUpModify(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content item-link link"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ someText +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-blue swipeout-overswipe" style="-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick=""><i class="pe-7s-display1 pe-2x"></i></a><a href="#" class="bg-blue" style="-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="updateDeal()"><i class="pe-7s-tools pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="" class="swipeout-delete swipeout-overswipe" data-confirm="Are you sure want to permanently delete this deal?" data-confirm-title="Delete?" style="-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-close-circle pe-2x"></i></a></div></li>');	

}


}

track_click++;
$$(".load_more").show();
$$(".load_previous").show();

});



$$(".load_previous").click(function (e) {

$$(".load_more").removeAttr("disabled", "disabled");

track_click--;

$$.getJSON('http://www.smilesavers.net.au/'+ domain +'.php?callback=?', ''+ data_send +'',function(response){
$$("#result li").remove();



var start = track_click * 10;
var finish = start + 10;

for (i = start; i < finish; i++) {        

var str = response[i][4];
var singlequote = str.replace(/'/g, "qqqq");
//var description = "'" + singlequote.replace(/(\r\n|\n|\r)/gm,"") + "'";
var type = response[i][9];


someText = str.replace(/(\r\n|\n|\r)/gm,"<br />");

//onclick="getDeal(\''+ response[i][2]  +'\',\''+ response[i][16]  +'\',\''+ response[i][3]  +'\',\''+ response[i][1]  +'\',\''+ response[i][14]  +'\',\''+ response[i][10]  +'\',\''+ response[i][11]  +'\',\''+ response[i][6]  +'\')"

if (pages_list=='a' || typeof pages_list === 'undefined') {
if (type == 'comment') {$$( '#result' ).append('<li class="swipeout s_'+ response[i][2] +'"><img onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div><div class="item-after"><span class="badge" style="margin-right:2px;background-color:#3b5998;">'+ response[i][17] + '</span><span class="badge" style="background-color:#ff8000;">'+ response[i][18] + '</span></div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ someText +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-green swipeout-overswipe" style="background-color:#3b5998;-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')"><i class="pe-7s-comment pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton(\''+ response[i][2]  +'\')" class="swipeout-delete swipeout-overswipe" style="background-color:#ff8000;-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');}
if (type=='like') {$$( '#result' ).append('<li class="swipeout s_'+ response[i][2] +'"><img onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div><div class="item-after"><span class="badge" style="margin-right:2px;background-color:#3b5998;">'+ response[i][17] + '</span><span class="badge" style="background-color:#ff8000;">'+ response[i][18] + '</span></div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ someText +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-green swipeout-delete swipeout-overswipe" style="background-color:#3b5998;-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="likeButton(\''+ response[i][2]  +'\',\''+ response[i][6]  +'\')"><i class="pe-7s-like2 pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton(\''+ response[i][2]  +'\')" class="swipeout-delete swipeout-overswipe" style="background-color:#ff8000;-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');}
}


if (pages_list instanceof Array) {
	
$$( '#add_container' ).append('<li class="swipeout s_'+ response[i][2] +'"><img onclick="popUpModify(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUpModify(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content item-link link"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ someText +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-blue swipeout-overswipe" style="-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick=""><i class="pe-7s-display1 pe-2x"></i></a><a href="#" class="bg-blue" style="-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="updateDeal()"><i class="pe-7s-tools pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="" class="swipeout-delete swipeout-overswipe" data-confirm="Are you sure want to permanently delete this deal?" data-confirm-title="Delete?" style="-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-close-circle pe-2x"></i></a></div></li>');	

}
}








});




	
	
});

$$(".load_more").click(function (e) {

var number_pages = localStorage.getItem("total_pages");
var stop = Math.ceil(number_pages / 10);

if (track_click >= (stop-1)) {
$$(".load_more").attr("disabled", "disabled");
}


$$.getJSON('http://www.smilesavers.net.au/'+ domain +'.php?callback=?', ''+ data_send +'',function(response){
$$("#result li").remove();


var start = track_click * 10;
var finish = start + 10;


for (i = start; i < finish; i++) {        

var str = response[i][4];
var singlequote = str.replace(/'/g, "qqqq");
//var description = "'" + singlequote.replace(/(\r\n|\n|\r)/gm,"") + "'";
var type = response[i][9];


someText = str.replace(/(\r\n|\n|\r)/gm,"<br />");

//onclick="getDeal(\''+ response[i][2]  +'\',\''+ response[i][16]  +'\',\''+ response[i][3]  +'\',\''+ response[i][1]  +'\',\''+ response[i][14]  +'\',\''+ response[i][10]  +'\',\''+ response[i][11]  +'\',\''+ response[i][6]  +'\')"

if (pages_list=='a' || typeof pages_list === 'undefined') {
if (type == 'comment') {$$( '#result' ).append('<li class="swipeout s_'+ response[i][2] +'"><img onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div><div class="item-after"><span class="badge" style="margin-right:2px;background-color:#3b5998;">'+ response[i][17] + '</span><span class="badge" style="background-color:#ff8000;">'+ response[i][18] + '</span></div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ someText +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-green swipeout-overswipe" style="background-color:#3b5998;-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')"><i class="pe-7s-comment pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton(\''+ response[i][2]  +'\')" class="swipeout-delete swipeout-overswipe" style="background-color:#ff8000;-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');}
if (type=='like') {$$( '#result' ).append('<li class="swipeout s_'+ response[i][2] +'"><img onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div><div class="item-after"><span class="badge" style="margin-right:2px;background-color:#3b5998;">'+ response[i][17] + '</span><span class="badge" style="background-color:#ff8000;">'+ response[i][18] + '</span></div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ someText +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-green swipeout-delete swipeout-overswipe" style="background-color:#3b5998;-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="likeButton(\''+ response[i][2]  +'\',\''+ response[i][6]  +'\')"><i class="pe-7s-like2 pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton(\''+ response[i][2]  +'\')" class="swipeout-delete swipeout-overswipe" style="background-color:#ff8000;-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');}
}


if (pages_list instanceof Array) {
	
$$( '#add_container' ).append('<li class="swipeout s_'+ response[i][2] +'"><img onclick="popUpModify(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUpModify(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content item-link link"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ someText +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-blue swipeout-overswipe" style="-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick=""><i class="pe-7s-display1 pe-2x"></i></a><a href="#" class="bg-blue" style="-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="updateDeal()"><i class="pe-7s-tools pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="" class="swipeout-delete swipeout-overswipe" data-confirm="Are you sure want to permanently delete this deal?" data-confirm-title="Delete?" style="-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-close-circle pe-2x"></i></a></div></li>');	

}
}

$$(".load_previous").removeAttr("disabled", "disabled");

track_click++;


});	
	
});






}



function removeLikes(){
	
	var date_today = new Date();
//var newdate = new Date(date);
//newdate.setDate(newdate.getDate() - 30);
//var nd = new Date(newdate);

var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
for (i = 0; i < existingEntries.length; i++) {        

if (existingEntries[i].expiry > date_today){alert('deal is invalid - need to remove it');}
if (existingEntries[i].expiry < date_today){existingEntries.splice(i,1);alert('deleted the item from the array');}

}
localStorage.setItem("allEntries", JSON.stringify(existingEntries));
	
}








function askLocation() {
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        //var element = document.getElementById('geolocation');
        //element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            //'Longitude: '          + position.coords.longitude             + '<br />' +
                            //'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            //'Timestamp: '          +                                   position.timestamp          + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }

function saveCategory(id){
	
localStorage.setItem("category_filter", id);	
functionEmpty();
}

function savePosition(place_id) {

$$.getJSON('https://maps.googleapis.com/maps/api/place/details/json?placeid='+ place_id +'&key=AIzaSyAssayN33K28DkBxPB8iWOM0NG2-sCNHEk', function(response){

$$("#resultf li").remove();


localStorage.setItem("latitude", response.result.geometry.location.lat);
localStorage.setItem("longitude", response.result.geometry.location.lng);
localStorage.setItem("position", response.result.formatted_address);
functionEmpty();


});    	
	
	 
	
}

function saveAddress(place_id) {


$$.getJSON('https://maps.googleapis.com/maps/api/place/details/json?placeid='+ place_id +'&key=AIzaSyAssayN33K28DkBxPB8iWOM0NG2-sCNHEk', function(response){

$$( '#addressicon' ).addClass( 'green' );
$$("#resulta li").remove();
$$('.addresshide').show();

document.getElementById("subpremise_i").value ="";
document.getElementById("street_number_i").value ="";
document.getElementById("route_i").value ="";
document.getElementById("zip_i").value ="";
document.getElementById("locality_i").value ="";
document.getElementById("state_i").value ="";
document.getElementById("country_i").value ="";

//alert(response.result.address_components[0].short_name);
//alert(response.result.address_components[1].short_name);
//alert(response.result.address_components[2].short_name);

function extractFromAdress(components, type){
for (var i=0; i<components.length; i++)
 for (var j=0; j<components[i].types.length; j++)
      if (components[i].types[j]==type) return components[i].long_name;
 return "";
}

var subpremise = extractFromAdress(response.result.address_components, "subpremise");
var street_number = extractFromAdress(response.result.address_components, "street_number");
var zip = extractFromAdress(response.result.address_components, "postal_code");
var street = extractFromAdress(response.result.address_components, "route");
var town = extractFromAdress(response.result.address_components, "locality");
var state = extractFromAdress(response.result.address_components, "administrative_area_level_1");
var country = extractFromAdress(response.result.address_components, "country");

if (subpremise) {document.getElementById("subpremise_i").value = subpremise;document.getElementById("subpremise_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';}
if (street_number) {document.getElementById("street_number_i").value = street_number;document.getElementById("street_number_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';}
if (zip) {document.getElementById("zip_i").value = zip;document.getElementById("zip_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';}
if (street) {document.getElementById("route_i").value = street;document.getElementById("route_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';}
if (town) {document.getElementById("locality_i").value = town;document.getElementById("locality_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';}
if (state) {document.getElementById("state_i").value = state;document.getElementById("state_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';}
if (country) {document.getElementById("country_i").value = country;document.getElementById("country_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';}

document.getElementById("fulladdress2").innerHTML = 'Add location';
$$( '#fulladdress2' ).css( 'color', 'black' );
document.getElementById("address_provided").value = '1'
document.getElementById("address_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';
document.getElementById("latitude_box").value = response.result.geometry.location.lat;
document.getElementById("longitude_box").value = response.result.geometry.location.lng;

});    	
	
	 
	
}







function likeButton(post_id,expiry) {
like(post_id);
addEntry(post_id,expiry);
var uid = localStorage.getItem("uid");
$$.getJSON('http://www.smilesavers.net.au/like.php?callback=?','user_id=' + uid + '&post_id=' + post_id + '&type=like',function(res){
    
    alert('Your name is '+res.fullname);
});
}


function closeButton(post_id){
	
var uid = localStorage.getItem("uid");
$$.getJSON('http://www.smilesavers.net.au/dislike.php?callback=?','user_id=' + uid + '&post_id=' + post_id + '&type=dislike',function(res){
    
    alert('Your name is '+res.fullname);
});
	
	
}




function addEntry(post_id,expiry) {
	var timestamp = new Date(expiry).getTime() / 1000;
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    var entry = {
        "post_id": post_id,
        "expiry": timestamp
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
  alert(localStorage.getItem("allEntries"));	
}




function favList(page_id) {
 alert(localStorage.getItem("favEntries"));
	var timestamp = Math.round(new Date().getTime() / 1000);
    // Parse any JSON previously stored in allEntries
    var favEntries = JSON.parse(localStorage.getItem("favEntries"));
    if(favEntries == null) favEntries = [];
    var faventry = {
        "page_id": page_id,
        "created": timestamp
    };
    localStorage.setItem("faventry", JSON.stringify(faventry));
    // Save allEntries back to local storage
    favEntries.push(faventry);
    localStorage.setItem("favEntries", JSON.stringify(favEntries));

  alert(localStorage.getItem("favEntries"));	
}




function getDeal(post_id,name,title,page_id,cover,latitude,longitude,expiry) {

//var description = singlequote.replace(/qqqq/g, "'");

var data = localStorage.getItem("allEntries");

	var json = JSON.parse(data);
	
	for (i = 0; i < json.length; i++) {        

if (json[i].post_id == post_id){
	
	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="right" onclick="getBusiness(\''+ page_id  +'\',\''+ latitude  +'\',\''+ longitude  +'\',\''+ name  +'\')"><img src="http://graph.facebook.com/'+ page_id +'/picture?width=20&height=20" style="border-radius:50%;margin-right:10px;"/>' + name + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="deal" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content" style="margin-top:30px;background-image: url(\''+ cover  +'\');background-size: 100%;background-repeat: no-repeat;">' +
        
        '      <div class="content-block" style="padding-top:40px;">' +
        '        <div class="content-block-inner" style="background-color:rgba(255,255,255,.4);">' +
                      '<a href="#" class="button like-button" style="margin-top:-50px;" onclick="likeButton(\''+ post_id  +'\',\''+ expiry  +'\')"><i class="pe-7s-like2 pe-2x"></i></a>' + 
                      '<p>You like this'+ title +'</p>'+
                      '<a href="#" class="button button-big" onclick="getBusiness(\''+ page_id  +'\',\''+ latitude  +'\',\''+ longitude  +'\',\''+ name  +'\')">Big Button </a>'+
                      //'<p>'+ description +'</p>'+
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
	
}

else {
	
	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="right" onclick="getBusiness(\''+ page_id  +'\',\''+ latitude  +'\',\''+ longitude  +'\',\''+ name  +'\')"><img src="http://graph.facebook.com/'+ page_id +'/picture?width=20&height=20" style="border-radius:50%;margin-right:10px;"/>' + name + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="deal" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content" style="margin-top:30px;background-image: url(\''+ cover  +'\');background-size: 100%;background-repeat: no-repeat;">' +
        
        '      <div class="content-block" style="padding-top:40px;">' +
        '        <div class="content-block-inner" style="background-color:rgba(255,255,255,.4);">' +
                      '<a href="#" class="button like-button" style="margin-top:-50px;" onclick="likeButton(\''+ post_id  +'\',\''+ expiry  +'\')"><i class="pe-7s-like2 pe-2x"></i></a>' + 
                      '<p>You dont like this'+ title +'</p>'+
                      '<a href="#" class="button button-big" onclick="getBusiness(\''+ page_id  +'\',\''+ latitude  +'\',\''+ longitude  +'\',\''+ name  +'\')">Big Button </a>'+
                      //'<p>'+ description +'</p>'+
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;	
	
}


}
	
// alert('json:' + data);
	
//	alert(json[1].post_id);
//	alert(json[2].post_id);//mkyong
	//alert(json.name); //mkyong
 
	//alert(json.address.streetAddress); //88 8nd Street
//	alert(json["address"].city); //New York
 
	//alert(json.phoneNumber[0].number); //111 111-1111
	//alert(json.phoneNumber[1].type); //fax
 
	//alert(json.phoneNumber.number); //undefined

 
//var imageList = [100,200,300,400,500];
//var index = imageList.indexOf(200); // 1

//alert (index);







//document.getElementById("dealresult").innerHTML = '<img src="'+ cover +'" style="width:100%;margin-top:30px;"/><br/><br/><h1>'+ title + '</h1><br/><br/><p>p1</p><br/><br/><p>p2</p><br/><br/><p>p3</p><br/><br/><p>p4</p>';

//$$.getJSON('http://www.smilesavers.net.au/getdeal.php?callback=?', 'post_id=' + post_id, function(response){




    
//alert('Your name is '+response[0][2] + response[0][3]);


//});	
	
	
}

function showDateTime(){


        if (document.getElementById('checkbox').checked) {
            $$('#schedule_i').val("");
            $$('#datetimespan').hide();
            $$('#schedule').show();
            document.getElementById("schedule_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:-20px;" onclick="getInfo(\'schedule\')"><i  class="pe-7s-info pe-2x"></i></a>';
            $$( '#checkicon' ).removeClass( 'green' );
        } else {
            document.getElementById("schedule_c").innerHTML = '';
            $$('#schedule').hide();
            $$('#datetimespan').show();
            $$('#schedule_i').focus();
        }

	
}



function showAddress(){


        if (document.getElementById('addressbox').checked) {
            
            document.getElementById("address_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:-10px;" onclick="getInfo(\'address\')"><i  class="pe-7s-info pe-2x"></i></a>';
            //$$('#fulladdress').blur();
            $$('.addresshide').hide();
            $$( '#fulladdress2' ).css( 'color', 'hsl(0, 0%, 70%)' );
            document.getElementById("address_provided").value = '0';
            $$( '#addressicon' ).removeClass( 'green' );
            
        } else {
             
             openSearch();
            $$('#fulladdress').focus();
            document.getElementById("address_provided").value = '1';
        }

	
}



function commentClick(){


        if (document.getElementById('commentibox').checked) {
            
            document.getElementById("commenty_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;" onclick="getInfo(\'commenty\')"><i  class="pe-7s-info pe-2x"></i></a>';
                 $$( '#commenty_i' ).css( 'color', 'hsl(0, 0%, 70%)' );
                 document.getElementById("type").value = 'like';
                 $$( '#commenticon' ).removeClass( 'green' );
            //$$('#fulladdress').blur();
            
            
        } else {
        document.getElementById("commenty_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';
        $$( '#commenty_i' ).css( 'color', 'black' );
        document.getElementById("type").value = 'comment';
        	$$( '#commenticon' ).addClass( 'green' );
        }

	
}

function openMap() {

$$( ".page-content" ).toggleClass( "hide" );

	
	
}

function toggleBox(id) {

$$( "#" + id + "icon" ).addClass( "green" );


}

function getBusiness(page_id) {


$$("#result li").remove();
$$("#loader-container").show();

$$.getJSON('http://www.smilesavers.net.au/getbusiness.php?callback=?', 'page_id=' + page_id, function(res){






	
$$.getJSON('https://graph.facebook.com/'+ page_id +'?fields=cover', function(response){
	
	
	
	var coverpic = response["cover"]["source"];
	$$( '.cover-business' ).css( 'background-image', 'url(\''+ coverpic  +'\')' );
	$$( '.cover-business' ).css( 'background-size', '100%' );
	$$( '.cover-business' ).css( 'background-repeat', 'no-repeat' );
	
});	
	
	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar business">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="right"><div class="item-input" onclick="openMap();"><label class="label-switch"><input type="checkbox"><div class="checkbox"></div></label></div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages business">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="business" class="page business">' +
        '    <!-- Scrollable page content-->' +
'<div id="map-canvas"></div>' +
        '    <div class="page-content cover-business" style="z-index: 1;margin-top:30px;">' +
        '      <div class="content-block" style="padding-top:40px;">' +
        '        <div class="content-block-inner" style="background-color:rgba(255,255,255,.4);"">' +
        '<p class="buttons-row theme-orange" style="margin-top:-50px;"><a href="#" class="button active" onclick="favList('+ page_id +');"><i class="pe-7s-star pe-2x"></i></a><a href="#" class="button active"><i class="pe-7s-call pe-2x"></i></a><a href="#" class="button active"><i class="pe-7s-share pe-2x"></i></a></p>' + 
        '<div class="content-block-title">Contact</div><div class="list-block media-list"><ul>' + 
        '<li><a href="#" class="item-content"><div class="item-media"><img src="http://graph.facebook.com/'+ page_id +'/picture?width=50&height=50" style="border-radius:50%;margin-right:10px;"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+ res[0][1] +'</div></div><div class="item-subtitle">'+ res[0][6] + ' ' + res[0][7] + ' ' +  res[0][8] + '</div><div class="item-text">'+ res[0][9] + ' ' + res[0][10] + ' ' + res[0][11]+'</div></div></a></li>' +
        '</ul></div>' +
	        '<div class="content-block-title">Current Deals</div>'+
	'<div class="list-block media-list"><ul><div id="deals-here"></div></ul></div>' +

        
        
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    initialize(res[0][13],res[0][14]);
  
  closeModal();
    
    for (i = 1; i < res.length; i++) {
    	
    	$$( '#deals-here' ).append( '<li><a href="#" class="item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">'+ res[i][3] + '</div></div><div class="item-subtitle">'+ res[i][16] + '</div><div class="item-text">'+ res[i][4] + '</div></div></a></li>' );

    	
    }
    


    
	return;
	
});








    








//document.getElementById("dealresult").innerHTML = '<img src="'+ cover +'" style="width:100%;margin-top:30px;"/><br/><br/><h1>'+ title + '</h1><br/><br/><p>p1</p><br/><br/><p>p2</p><br/><br/><p>p3</p><br/><br/><p>p4</p>';

	
	
	
}



function initialize(latitude,longitude) {
	
  var myLatlng = new google.maps.LatLng(latitude,longitude);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}




function popUp(title,description,page_id,post_id){


var user_name = localStorage.getItem('user_name');
var uid = localStorage.getItem('uid');
var clear_description = description.replace(/qqqq/g, "'");



    

myApp.modal({
    title: '<a class="button" style="float:right;border:none;margin-top:-10px;" href="#" onclick="closeModal();"><i class="pe-7s-close pe-lg"></i></a><div style="margin-left:25px;margin-right:25px;">' + title + '</div>',
    text: '<div class="content-block" style="padding:0;margin:0;max-height:200px;overflow: scroll;"><div class="content-block-inner"><div class="content-block-title">Deal</div>' + clear_description + '</div></div><div class="content-block" style="padding:0;margin:0;max-height:200px;overflow: scroll;"><div class="content-block-inner"><div class="content-block-title">Terms</div>These are the terms</div></div>',
    afterText: '<div style="margin-bottom:-15px;height:49px;border-top:1px solid #ccc;background-image:url(\'http://graph.facebook.com/' + uid + '/picture?type=small\');background-repeat:no-repeat;"><input id="commentbox" type="text" placeholder="Comment on Facebook" style="margin-left:49px;border:none;border-radius:0px; height:30px;margin-top:0px;font-size:14px;width:205px;"></div>',
    buttons: [
      {
        text: '<div style="background-color:#3b5998;color:white;border:30px solid #3b5998;margin:-10px;margin-top:-30px;"><i class="pe-7s-like2 pe-lg"></i></div>',
        onClick: function() {
          
          var inputcomment = $$("#commentbox").val();
          
          
          if (inputcomment) {
   comment(post_id,inputcomment);
          myApp.swipeoutDelete('.s_'+ post_id);
          like(post_id);
} else {
    alert('Oops! Please enter a comment to get this deal...')
}
          
          
          
          
          
          
        }
      },
      {
        text: '<div style="margin:-40px;margin-left:-180px;margin-top:-2px;"><img src="http://graph.facebook.com/'+ page_id +'/picture?width=30&height=30" style="border-radius:50%;border-right:200px solid #ff8000;border-left:200px solid #3b5998;margin:0 auto;"/></div>',
        onClick: function() {
          getBusiness(page_id);
          
        }
      },
      {
        text: '<div style="background-color:#ff8000;color:white;border:30px solid #ff8000;margin:-10px;margin-top:-30px;"><i class="pe-7s-like2 pe-lg pe-rotate-180"></i></div>',
        bold: true,
        onClick: function() {
        	myApp.swipeoutDelete('.s_'+ post_id);
        	closeButton();
        }
      },
    ]
  })




	
	
}


	
	

function closeModal() {myApp.closeModal();myApp.closeModal(popup);}


function focusLocation(id){
	
var elem = document.getElementById(id);
elem.value = "";



}



function searchButton(){
var radius = document.getElementById("amount").value;
var search = document.getElementById("search").value;
var category = document.getElementById("category").value;
var order = document.getElementById("order").value;


localStorage.setItem("radius", radius);	
localStorage.setItem("search", search);	
localStorage.setItem("category", category);	
localStorage.setItem("order", order);	

}



function dbDeal() {

//var n = date.toDateString();
//var time = date.toLocaleTimeString();

//alert(n + ' ' + time);

 

			mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar business">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center">Add Deal</div>' +
       ' <div class="right"><a href="#tab1" onclick="clearPageslist();" style="display:none;" id="plusnavbar" class="tab-link active"><i class="pe-7s-plus pe-2x"></i></a></div>' +
        '  </div>' +
        '</div>' +


        
        
        '<div class="pages business">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="add_deal" class="page business">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content cover-add" style="margin-top:30px;background-size: 100%;background-repeat: no-repeat;">' +
        
        '      <div class="content-block" style="padding-top:40px;">' +
        '<a href="#" class="button disabled" id="add_button" style="height:80px;border:none;margin:0 auto;margin-top:-100px;"><i class="pe-7s-plus pe-5x"></i></a>' +       
        '<div id="coverbutton"></div>'+
        '<div class="content-block-inner" style="background-color:rgba(255,255,255,.4);">' +
                      
                     
                     
                      
 
'<div id="toolbardeal"></div>'+

 '<div class="tabs-animated-wrap">'+
'<div class="tabs">'+

 ' <div class="tab active" id="tab1">'+
'<div class="content-block-title" style="text-align:center;margin-top:10px;padding-bottom:10px;">Pick Page or Group</div><div class="list-block"><div style="text-align:center;margin:0 auto;width:100%;" id="add-loader-container"><span class="preloader"></span></div><ul id="pages_list"></ul></div>'+
 ' </div>'+


 ' <div class="tab" id="tab2">'+
'<div class="content-block-title" style="margin-top:10px;padding-bottom:10px;text-align:center;">Create Deal</div><div class="list-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title label" style="width:50px;color:hsl(0, 0%, 70%);"> Title</div><div class="item-input"><input type="text" class="essentials" id="title_i" onchange="checkForm(\'title\',3,20)" style="float:left;width:180px;"><span id="title_c" class="spanicon"></span></div></div></div></li><li><div class="item-content align-top"><div class="item-inner"><div class="item-title label"style="width:50px;color:hsl(0, 0%, 70%);">Deal</div><div class="item-input"><textarea class="essentials" id="description_i"  onchange="checkForm(\'description\',5,140)" style="float:left;width:180px;"></textarea><span id="description_c" class="spanicon"></span></div></div></div></li><li><div class="item-content align-top"><div class="item-inner"><div class="item-title label" style="width:50px;color:hsl(0, 0%, 70%);">Terms</div><div class="item-input"><textarea class="essentials" id="terms_i" onchange="checkForm(\'terms\',10,140)" style="float:left;width:180px;"></textarea><span id="terms_c" class="spanicon"></span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title label" style="width:50px;color:hsl(0, 0%, 70%);">Expiry</div><div class="item-input"><input type="datetime-local" class="essentials" id="expiry_i" onblur="checkForm(\'expiry\',0,100)" style="width:180px;float:left;"><span id="expiry_c"></span></div></div></div></li>                  <!-- Select --><li><div class="item-content"><div class="item-media" style="width:20px;"><i class="pe-7s-filter pe-lg"></i></div><div class="item-inner"><div class="item-input"><select id="category_i" style="color:hsl(0, 0%, 70%);width:180px;float:left;" onchange="checkForm(\'category\',0,0);"><option id="category_rec_value" value="Category">Category</option><option value="Accountant">Accountant</option><option value="Airport">Airport</option><option value="Amusement Park">Amusement Park</option><option value="aquarium">Aquarium</option><option value="art_gallery">Art Gallery</option><option value="bakery">Bakery</option><option value="bank">Bank</option><option value="bar">Bar</option><option value="beauty_salon">Beauty Salon</option><option value="bicycle_store">Bicycle Store</option><option value="book_store">Book Store</option><option value="bowling_alley">Bowling Alley</option><option value="bus_station">Bus Station</option><option value="cafe">Cafe</option><option value="campground">Campground</option><option value="car_dealer">Car Dealer</option><option value="car_rental">Car Rental</option><option value="car_repair">Car Repair</option><option value="car_wash">Car Wash</option><option value="casino">Casino</option><option value="church">Church</option><option value="city_hall">City Hall</option><option value="clothing_store">Clothing Store</option><option value="convenience_store">Convenience Store</option><option value="courthouse">Courthouse</option><option value="dentist">Dentist</option><option value="department_store">Department Store</option><option value="doctor">Doctor</option><option value="electrician">Electrician</option><option value="electronics_store">Electronics Store</option><option value="embassy">Embassy</option><option value="establishment">Establishment</option><option value="finance">Finance</option><option value="florist">Florist</option><option value="food">Food</option><option value="funeral_home">Funeral Home</option><option value="furniture_store">Furniture Store</option><option value="gas_station">Petrol Station</option><option value="general_contractor">General Contractor</option><option value="grocery_or_supermarket">Supermarket / Groceries</option><option value="gym">Gym</option><option value="hair_care">Hair Care</option><option value="hardware_store">Hardware Store</option><option value="health">Health</option><option value="hindu_temple">Hindu Temple</option><option value="home_goods_store">Home Goods Store</option><option value="insurance_agency">Insurance Agency</option><option value="jewelry_store">Jewelry Store</option><option value="laundry">Laundry</option><option value="lawyer">Lawyer</option><option value="library">Library</option><option value="liquor_store">Liquor Store</option><option value="local_government_office">Local Government Office</option><option value="locksmith">Locksmith</option><option value="lodging">Lodging</option><option value="meal_delivery">Meal Delivery</option><option value="meal_takeaway">Meal Takeaway</option><option value="mosque">Mosque</option><option value="movie_rental">Movie Rental</option><option value="movie_theater">Movie Theater</option><option value="moving_company">Moving Company</option><option value="museum">Museum</option><option value="night_club">Night_club</option><option value="painter">Painter</option><option value="park">Park</option><option value="parking">Parking</option><option value="pet_store">Pet Store</option><option value="pharmacy">Pharmacy</option><option value="physiotherapist">Physiotherapist</option><option value="place_of_worship">Place of Worship</option><option value="plumber">Plumber</option><option value="post_office">Post Office</option><option value="real_estate_agency">    Real Estate Agency</option><option value="restaurant">    Restaurant</option><option value="roofing_contractor">    Roofing Contractor</option><option value="school">School</option><option value="shoe_store">Shoe Store</option><option value="shopping_mall">Shopping Mall</option><option value="spa">Spa</option><option value="stadium">Stadium</option><option value="storage">Storage</option><option value="store">Store</option><option value="synagogue">Synagogue</option><option value="taxi_stand">Taxi Stand</option><option value="travel_agency">Travel Agency</option><option value="university">University</option><option value="veterinary_care">Veterinary Care</option><option value="zoo">Zoo</option></select><span id="category_c"></a></span></div></div></div></li><li><div class="item-content"><div class="item-media" style="width:20px;"><i class="pe-7s-link pe-lg" style="margin-left:5px;"></i></div><div class="item-inner"><div class="item-input"><input placeholder="Link" onchange="checkForm(\'link\',7,100);" type="text" class="essentials" id="link_i" style="width:180px;float:left;"><span id="link_c"></span></div></div></div></li></ul></div> '+

//'<input id="cover" type="hidden"><input id="name" type="hidden"><input id="page_id" type="hidden"><input id="latitude_box" type="hidden"><input id="longitude_box" type="hidden">' +
 '<input id="page_token" type="hidden"><input id="cover" type="hidden"><input id="submitinput" class="essentials" type="hidden"><input id="type" type="hidden" value="like"><input id="photo_created" type="hidden"><input id="imageURI" class="essentials" type="hidden"><input id="address_provided" type="hidden"><input id="name" type="hidden"><input id="page_id" type="hidden"><input id="latitude_box" type="text"><input id="longitude_box" type="text">' +

 '<div class="content-block-title" style="text-align:center;margin-top:10px;padding-bottom:10px;">Customise deal</div>'+
 '<div class="list-block"><ul><li><div class="item-content"><div class="item-media" onclick="showDateTime();" style="width:50px;"><label class="label-switch"><input type="checkbox" id="checkbox"><div class="checkbox"></div></label></div><div class="item-inner"><div class="item-input"><span id="schedule" style="color:hsl(0, 0%, 70%);font-size:17px;width:150px;padding-top:5px;">Schedule post</span><span id="datetimespan" style="display:none;"><input type="datetime-local" class="essentials" id="schedule_i" onblur="checkForm(\'schedule\',3,20)" style="width:150px;overflow:hidden;float:left;"></span><span id="schedule_c"></span></div></div></div></li>'+
 '<li><div class="item-content"><div class="item-media" style="width:50px;"><label class="label-switch" onclick="commentClick()"><input type="checkbox" id="commentibox"><div class="checkbox"></div></label></div><div class="item-inner"><div class="item-input"><span style="color:hsl(0, 0%, 70%);font-size:17px;width:150px;margin-top:5px;" id="commenty_i">Require comment </span><span id="commenty_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;" onclick="getInfo(\'commenty\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li>'+
 '<li><div class="item-content" style="border:none;"><div class="item-inner"><label class="label-switch" onclick="showAddress();"><input type="checkbox" id="addressbox"><div class="checkbox"></div></label><div class="item-input" onclick="openSearch();$$(\'#fulladdress\').focus();" style="width:150px;color:hsl(0, 0%, 70%);" id="fulladdress2">Add location</div><span id="address_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;" onclick="getInfo(\'address\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></li>'+
 '<li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Unit</div><div class="item-input"><input id="subpremise_i" type="tel" placeholder="-" style="width:140px;float:left;" onchange="checkForm(\'subpremise\',0,10)"><span id="subpremise_c"></span></div></div></div></li>'+
 '<li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Number</div><div class="item-input"><input placeholder="-" id="street_number_i" type="tel" style="width:140px;float:left;" onchange="checkForm(\'street_number\',0,10)"><span id="street_number_c"></span></div></div></div></li>'+
 '<li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Street</div><div class="item-input"><input placeholder="-" id="route_i" type="text" style="width:140px;float:left;" onchange="checkForm(\'route\',0,100)"><span id="route_c"></span></div></div></div></li>'+
 '<li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Suburb</div><div class="item-input"><input placeholder="-" id="locality_i" type="text" style="width:140px;float:left;" onchange="checkForm(\'locality\',0,10)"><span id="locality_c"></span></div></div></div></li>'+
' <li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Zip</div><div class="item-input"><input placeholder="-" id="zip_i" type="tel" style="width:140px;float:left;" onchange="checkForm(\'zip\',0,10)"><span id="zip_c"></span></div></div></div></li>'+
 '<li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">State</div><div class="item-input"><input placeholder="-" id="state_i" type="text" style="width:140px;float:left;" onchange="checkForm(\'state\',0,100)"><span id="state_c"></span></div></div></div></li>'+
 '<li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Country</div><div class="item-input"><input placeholder="-" id="country_i" type="text" style="width:140px;float:left;" onchange="checkForm(\'country\',0,100)"><span id="country_c"></span></div></div></div></li>'+
 '</ul></div>' +
 
'<div class="content-block-title" style="text-align:center;margin-top:10px;padding-bottom:10px;">Contact Details</div>'+
 '<div class="list-block"><ul>'+
'<li><div class="item-content"><div class="item-media" style="width:20px;"><i class="pe-7s-call pe-lg"></i></div><div class="item-inner"><div class="item-input"><input onchange="checkForm(\'phone\',6,25);" placeholder="Phone" id="phone_i" type="tel" style="width:180px;float:left;"><span id="phone_c"></span></div></div></div></li><li><div class="item-content"><div class="item-media" style="width:20px;"><i class="pe-7s-mail pe-lg"></i></div><div class="item-inner"><div class="item-input"><input placeholder="Email" onchange="checkForm(\'email\',7,100);" id="email_i" type="email" style="width:180px;float:left;"><span id="email_c"></span></div></div></div></li><li><div class="item-content"><div class="item-media" style="width:20px;"><i class="pe-7s-mouse pe-lg" style="margin-left:5px;"></i></div><div class="item-inner"><div class="item-input"><input onchange="checkForm(\'website\',7,100);" type="text" placeholder="Website" id="website_i" style="width:180px;float:left;"><span id="website_c"></span></div></div></div></li>'+
 '</ul></div>' +

      '</div>'+    

                     
               
                     

  

  
'</div>  '+
'</div>  '+






                      
                       
                     
                    
                     //'<div class="list-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title label">Name</div><div class="item-input"><input type="text" name="name"></div></div></div></li></ul></div>' +
                      
                      

                   // onclick="focusLocation(\'fulladdress\')"  

                      
                      
                      
                    
                     
                      
                      
                      
                      
        '        </div>' +
        '      </div>' +
        '    </div>' +


        
        

        
        '  </div>' +
        '</div>'
    );
	
	
}

function popUpModify(title,description,page_id,post_id){


var user_name = localStorage.getItem('user_name');
var uid = localStorage.getItem('uid');
var clear_description = description.replace(/qqqq/g, "'");


myApp.modal({
    title: '<a class="button" style="float:right;border:none;margin-top:-10px;" href="#" onclick="closeModal();"><i class="pe-7s-close pe-lg"></i></a><div style="margin-left:25px;margin-right:25px;"><img src="http://graph.facebook.com/'+ page_id +'/picture?width=20&height=20" style="border-radius:50%;margin-right:10px;padding-top:5px;padding-right:5px;"/>' + title + '</div>',
    text: '<div style="padding-left:25px;padding-right:25px;max-height:200px;">' + clear_description + '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>bottom <br/><br/><br/><br/><br/></div>',
    buttons: [
      {
        text: '<i class="pe-7s-display1 pe-lg"></i>',
        onClick: function() {
          
          var inputcomment = $$("#commentbox").val();
          
          
          if (inputcomment) {
   comment(post_id,inputcomment);
          myApp.swipeoutDelete('.s_'+ post_id);
          like(post_id);
} else {
    alert('Oops! Please enter a comment to get this deal...')
}
          
          
          
          
          
          
        }
      },
      {
        text: '<i class="pe-7s-tools pe-lg"></i>',
        onClick: function() {
          getBusiness(page_id);
          
        }
      },
      {
        text: '<i class="pe-7s-close-circle pe-lg"></i>',
        bold: true,
        onClick: function() {
        	
myApp.confirm('Are you sure you want to permanently delete this deal?', 'Delete?', 
      function () {
        myApp.alert('You clicked Ok button');
      },
      function () {
        myApp.alert('You clicked Cancel button');
      }
    );


        }
      },
    ]
  })




	
	
}


function getCover(page_id,access_token){


    myApp.showTab('#tab2');
addPhoto(page_id);
document.getElementById("page_id").value = page_id;
document.getElementById("page_token").value = access_token;
var photo_created = Math.round(new Date() / 1000);
document.getElementById("photo_created").value = photo_created;
$$("#pages_list li").remove();	
$$('#plusnavbar').show();
$$('#toolbardeal').show();
document.getElementById("toolbardeal").innerHTML = '<div class="toolbar tabbar" style="background-color:transparent;border:none;"><div class="toolbar-inner" style="background-color:transparent;"><a href="#" onclick="addPhoto('+page_id+')" class="tab-link" id="cameratab"><i class="pe-7s-camera pe-lg" id="cameraicon"></i></a><a href="#tab2" id="addresstab" class="tab-link" ontouchstart="toggleBox(\'address\');document.getElementById(\'addressbox\').checked = false;showAddress();document.getElementById(\'addressbox\').checked = true;"><i class="pe-7s-map-marker pe-lg" id="addressicon"></i></a><a href="#tab2" id="checktab" class="tab-link" ontouchstart="toggleBox(\'check\');document.getElementById(\'checkbox\').checked = false;showDateTime();document.getElementById(\'checkbox\').checked = true;"><i class="pe-7s-clock pe-lg" id="checkicon"></i></a></div></div>';



//var page_id = $$('#pages_list').val();
$$.getJSON('http://www.smilesavers.net.au/getbusiness.php?callback=?', 'page_id=' + page_id, function(res){

//$$('input').val('');
//$$('.spanicon').val('<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'phone\')"><i  class="pe-7s-info pe-2x"></i></a>');



$$('.essentials').each(function() {
 $$( this ).val('');
});



document.getElementById("commentibox").checked = false;
document.getElementById("checkbox").checked = false;
document.getElementById("type").value = "like";

document.getElementById("title_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'title\')"><i  class="pe-7s-info pe-2x"></i></a>';
document.getElementById("description_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'description\')"><i  class="pe-7s-info pe-2x"></i></a>';
document.getElementById("terms_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'terms\')"><i  class="pe-7s-info pe-2x"></i></a>';
document.getElementById("expiry_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'expiry\')"><i  class="pe-7s-info pe-2x"></i></a>';
document.getElementById("category_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'category\')"><i  class="pe-7s-info pe-2x"></i></a>';
document.getElementById("link_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'link\')"><i  class="pe-7s-info pe-2x"></i></a>';
document.getElementById("schedule_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'schedule\')"><i  class="pe-7s-info pe-2x"></i></a>';


var latitude = document.getElementById("latitude_box");
var longitude = document.getElementById("longitude_box");
//var opt= document.getElementById('category_i').options[0];
var phone = document.getElementById("phone_i");
var email = document.getElementById("email_i");
var website = document.getElementById("website_i");
var subpremise = document.getElementById("subpremise_i");
var street_number = document.getElementById("street_number_i");
var street = document.getElementById("route_i");
var postcode = document.getElementById("zip_i");
var suburb = document.getElementById("locality_i");
var state = document.getElementById("state_i");
var country = document.getElementById("country_i");

//phone.value = "";document.getElementById("phone_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'phone\')"><i  class="pe-7s-info pe-2x"></i></a>';
//website.value = "";document.getElementById("website_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'website\')"><i  class="pe-7s-info pe-2x"></i></a>';
//email.value = "";document.getElementById("email_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'email\')"><i  class="pe-7s-info pe-2x"></i></a>';
//opt.value =  "Category";$$( '#category_i' ).css( 'color', 'hsl(0, 0%, 70%)' );document.getElementById("category_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'category\')"><i  class="pe-7s-info pe-2x"></i></a>';
//link.value = "";document.getElementById("link_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'link\')"><i  class="pe-7s-info pe-2x"></i></a>';
//res[0][5] + ',' + res[0][6]  + ',' + res[0][7]  + ',' + res[0][9]  + ',' + res[0][10] ',' + res[0][11];

//else {document.getElementById("addressbox").checked = false;$$('.addresshide').hide();document.getElementById("address_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:-10px;" onclick="getInfo(\'address\')"><i  class="pe-7s-info pe-2x"></i></a>';}
if(res[0][8]) {document.getElementById("address_provided").value = '1';document.getElementById("addressbox").checked = true; $$('.addresshide').show();$$( '#addressicon' ).addClass( 'green' );document.getElementById("address_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';} else {document.getElementById("addressbox").checked = false;$$('.addresshide').hide();document.getElementById("address_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:-10px;" onclick="getInfo(\'address\')"><i  class="pe-7s-info pe-2x"></i></a>';}
if(res[0][5]) {subpremise.value = res[0][5];document.getElementById("subpremise_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';} else {subpremise.value = "";}
if(res[0][6]) {street_number.value = res[0][6];document.getElementById("street_number_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';} else {street_number.value = "";}
if(res[0][7]) {street.value = res[0][7];document.getElementById("route_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';} else {street.value = "";}
if(res[0][9]) {suburb.value = res[0][9];document.getElementById("locality_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';} else {suburb.value = "";}
if(res[0][10]) {postcode.value = res[0][10];document.getElementById("zip_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';} else {postcode.value = "";}
if(res[0][11]) {state.value = res[0][11];document.getElementById("state_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';} else {state.value = "";}
if(res[0][12]) {country.value = res[0][12];document.getElementById("country_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';} else {country.value = "";}
if (res[0][16]) {email.value = res[0][16];checkForm('email');} else{email.value = "";document.getElementById("email_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:-10px;" onclick="getInfo(\'email\')"><i  class="pe-7s-info pe-2x"></i></a>';}
if (res[0][4]) {phone.value = res[0][4];checkForm('phone',6,25);} else{phone.value = "";document.getElementById("phone_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:-10px;" onclick="getInfo(\'phone\')"><i  class="pe-7s-info pe-2x"></i></a>';}
if (res[0][15]) {website.value = res[0][15];checkForm('website');} else{website.value = "";document.getElementById("webiste").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:-10px;" onclick="getInfo(\'website\')"><i  class="pe-7s-info pe-2x"></i></a>';}
//if (res[0][8]) {opt.value =  res[0][17];opt.text = res[0][17];checkForm('category');} else{email.value = "";}
if (res[0][13]) {latitude.value = res[0][13];} else {latitude.value = "";}
if (res[0][14]) {longitude.value = res[0][14];} else {longitude.value = "";}



});



$$.getJSON('https://graph.facebook.com/'+ page_id +'?fields=cover,name', function(response){
	
$$('#add_button').hide();
$$('#coverbutton').show();

document.getElementById("coverbutton").innerHTML = '<a href="#" class="button" id="upload-ready" onclick="submitDeal();" style="height:80px;margin:0 auto;border:none;margin-top:-100px;color:#ff3b30"><i class="pe-7s-upload pe-5x"></i></a>';
setCover(response["cover"]["source"]);
document.getElementById("name").value = response["name"];
moveCover();
});
}

function addPhoto(page_id){
	
	var buttons = [
         {
            text: 'Change Image',
            label: true
        },
        {
            text: 'Take a Photo',
            onClick: function () {
                photoBrowser();
            }
        },
        {
            text: 'Choose from Library',
            onClick: function () {
                getPhoto();
            }
        },
        {
        text: 'Use Facebook Photo',
            onClick: function () {
               facebookPhotos(page_id);
            }
        },
        {
            text: 'Cancel',
            color: 'red',
            onClick: function () {
                myApp.alert('Cancel clicked');
            }
        },
    ];
    myApp.actions(buttons);
}



function photoBrowser() {
	
	
	navigator.camera.getPicture( backgroundPhoto,
      function( message ) {
        alert( message );
      },
      {
        quality: 50,
        allowEdit: true,
        destinationType: Camera.DestinationType.FILE_URI
      });
	
}

function getPhoto() {
     
     navigator.camera.getPicture(backgroundPhoto, function( message ) {
        alert( message );
      },
      {
        quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
      });
    }

function backgroundPhoto(imageURI) {
            document.getElementById("imageURI").value = imageURI;
             $$( '.cover-add' ).css( 'background-image', 'url(\''+ imageURI  +'\')');
             $$( '#cameraicon' ).addClass( 'green' );
             
moveCover();
        }




function openSearch() {


	 var popupHTML = '<div class="popup">'+
'<form class="searchbar"><a href="#" class="close-popup" onclick="document.getElementById(\'addressbox\').checked = true;showAddress();document.getElementById(\'addressbox\').checked = false;"><i class="icon icon-back" style="margin-right:10px;"></i></a><div class="searchbar-input"><input type="search" placeholder="Search for address" onkeyup="searchPlaces(\'search\');" id="fulladdress"></div></form>'+
'<div class="content-block">'+
'<a href="#" class="button disabled" id="search_button" style="height:80px;position:absolute;border:none;left:40%;margin-top:50px;"><i class="pe-7s-search pe-5x"></i></a>'+
'<div class="list-block" style="margin-top:-30px;background-color:transparent;"><ul id="resulta" style="background-color:transparent;border:none;padding:0px;margin:0px;"></ul></div>'+

'</div>'+
'</div>'
                  
  myApp.popup(popupHTML);
	
}





function openSearchHome() {

  var heightslider = $$(window).height() - 64;
  var heightrange = $$(window).height() - 170;

$$("#result li").remove();
$$( ".business" ).remove();
var position = localStorage.getItem("position");
	 var popupHTML = 
'<div class="popup popup-search" style="background-color:#ff8000;">'+
 '<div class="navbar theme-orange">'+
 ' <div class="navbar-inner">'+
    '<div class="left"><a href="#" class="close-popup" onclick="functionEmpty();"><i class="pe-7s-close-circle pe-lg" style="margin-right:10px;"></i></a><div style="font-weight:bold;margin-left:15px;" id="searchtitle">Location</div></div>'+
    
    
 '<div class="right">'+
       ' <a href="#" class="active button location" onclick="searchPopup(\'location\')"><i class="pe-7s-map-marker pe-lg"></i></a>'+
        '<a href="#" class="button gallery" onclick="searchPopup(\'page\')"><i class="pe-7s-photo-gallery pe-lg"></i></a>'+
        '<a href="#" class="button filter" onclick="searchPopup(\'filter\')"><i class="pe-7s-filter pe-lg"></i></a>'+
 '</div>'+
 ' </div>'+
'</div>'+

'<div class="slider-custom"><div class="slider-container slider-init"><div class="slider-wrapper">'+
        '<div class="slider-slide">'+
        
                     ' <form class="searchbar" style="background-color:#ff8000; border:0;">'+
       ' <div class="searchbar-input">'+
          '  <input type="search" style="float:left;" placeholder="'+ position +'" onkeyup="searchPlaces(\'set\');" id="fulladdressf">'+
       ' <a href="#" id="resultfclear" onclick="clearInput();" style="display:none;float:left;margin-left:-25px;margin-top:3px;color:hsl(0, 0%, 70%);"><i class="pe-7s-close-circle pe-lg"></i></a></div>'+
'<div class="item-title label" style="background-color:white;border-radius:5px;margin-left:5px;padding:4px;float:left;width:60px;"><output name="amount" id="amount" for="rangeInput">20</output> km</div>'+
//'<a href="#" class="button" style="margin-left:5px;color:white;border:0;"><i class="pe-7s-signal pe-lg"></i></a>'+
   ' </form>'+


'<div class="content-block">'+
'<div class="list-block" style="margin-top:-30px;background-color:transparent;width:80%;float:left;margin-left:0px;padding-left:0px;"><ul id="resultf" class="theme-white" style="background-color:transparent;color:white;border:none;padding:0px;margin:0px;"></ul></div>'+



'<div class="item-input rangeslider" style="-webkit-transform: rotate(-90deg);float:left;width:20%;">'+
'<div class="range-slider" id="radius" name="radius" style="width:'+ heightrange +'px;margin-left:-250px;margin-top:10px;">'+
'<input type="range" id="rangeInput" name="rangeInput" min="20" max="99" value="25" oninput="amount.value=rangeInput.value">'+                                                       
'</div>'+
'</div>'+

'</div>'+
        
        '</div>'+
        '<div class="slider-slide">'+
                             '<form class="searchbar" style="background-color:#ff8000; border:0;">'+
       ' <div class="searchbar-input">'+
          '  <input type="search" style="float:left;" placeholder="Search business" onkeyup="nameDb();" id="dbnames">'+
       ' <a href="#" id="dbnamesclear" onclick="clearInput();" style="display:none;float:left;margin-left:-25px;margin-top:3px;color:hsl(0, 0%, 70%);"><i class="pe-7s-close-circle pe-lg"></i></a></div>'+
   ' </form>'+


'<div class="content-block">'+
'<div class="list-block" style="margin-top:-30px;background-color:transparent;"><ul id="resultd" class="theme-white" style="background-color:transparent;color:white;border:none;padding:0px;margin:0px;"></ul></div>'+

'</div>'+
        '</div>'+
        '<div class="slider-slide">'+



'<div class="content-block">'+
'<div class="list-block" style="margin-top:-30px;background-color:transparent;"><ul class="theme-white" style="background-color:transparent;color:white;border:none;padding:0px;margin:0px;"><li style="font-size:16px;padding-left:0px;padding-right:0px;margin-left:0px;margin-right:0px;background-color:transparent;" class="close-popup"><a href="#" onclick="saveCategory(\'accountant\')" class="item-link" style="margin:0;"><div class="item-content" style="margin:0;"><div class="item-inner"><div class="item-title">Accountant</div></div></div></a></li><li style="font-size:16px;padding-left:0px;padding-right:0px;margin-left:0px;margin-right:0px;background-color:transparent;" class="close-popup"><a href="#" onclick="saveCategory(\'bakery\')" class="item-link" style="margin:0;"><div class="item-content" style="margin:0;"><div class="item-inner"><div class="item-title">Bakery</div></div></div></a></li><li style="font-size:16px;padding-left:0px;padding-right:0px;margin-left:0px;margin-right:0px;background-color:transparent;" class="close-popup"><a href="#" onclick="saveCategory(\'dentist\')" class="item-link" style="margin:0;"><div class="item-content" style="margin:0;"><div class="item-inner"><div class="item-title">Dentist</div></div></div></a></li></ul></div>'+
'</div>'



        '</div>'+
'</div></div></div></div>'+
























'</div>';
                  
  myApp.popup(popupHTML);

var mySlider = myApp.slider('.slider-container', {
  onTransitionEnd : function() {
      //Do something when you touch the slide
      
      if (mySlider.activeSlideIndex=='0'){document.getElementById("searchtitle").innerHTML = 'Location';	
$$( ".gallery" ).removeClass( "active" );
$$( ".filter" ).removeClass( "active" );
$$( ".location" ).addClass( "active" );}
      if (mySlider.activeSlideIndex=='1'){document.getElementById("searchtitle").innerHTML = 'Business';	
$$( ".gallery" ).addClass( "active" );
$$( ".filter" ).removeClass( "active" );
$$( ".location" ).removeClass( "active" );}
      if (mySlider.activeSlideIndex=='2'){document.getElementById("searchtitle").innerHTML = 'Category';	
$$( ".gallery" ).removeClass( "active" );
$$( ".filter" ).addClass( "active" );
$$( ".location" ).removeClass( "active" );}

    }

}); 
//document.getElementsByName('addressf')[0].placeholder=;
  //var heightslider = $$(window).height() - 64;
  var heightrange = $$(window).height() - 120;
       $$( '.slider-custom' ).css( 'height', heightslider + 'px' );
       //$$( '.rangeslider' ).css( 'height', heightrange + 'px' );
}

function searchPlaces(id){
	
var searchvalue;

if (id=='set'){

searchvalue = document.getElementById('fulladdressf').value;

if (searchvalue == '') {$$('#resultfclear').hide();}
else {$$('#resultfclear').show();}
	
$$.getJSON('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+ searchvalue +'&types=(cities)&key=AIzaSyAssayN33K28DkBxPB8iWOM0NG2-sCNHEk', function(response){
$$("#resultf li").remove();
for (i = 0; i < 10; i++) 
{ 
	

	
$$( '#resultf' ).append('<li style="font-size:16px;padding-left:0px;padding-right:0px;margin-left:0px;margin-right:0px;background-color:transparent;" class="close-popup"><a href="#" onclick="savePosition(\''+ response.predictions[i].place_id  +'\')" class="item-link" style="margin:0;"><div class="item-content" style="margin:0;"><div class="item-inner" style="margin-left:0px;padding-left:0px;"><div class="item-title">' + response.predictions[i].description + '</div></div></div></a></li>');
}
});
	
}

if (id=='search') {

searchvalue= document.getElementById('fulladdress').value;	
$$.getJSON('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+ searchvalue +'&key=AIzaSyAssayN33K28DkBxPB8iWOM0NG2-sCNHEk', function(response){
$$("#resulta li").remove();
for (i = 0; i < 10; i++) 
{ 
	

	
$$( '#resulta' ).append('<li style="font-size:16px;padding-left:0px;padding-right:0px;margin-left:0px;margin-right:0px;background-color:transparent;" class="close-popup"><a href="#" onclick="saveAddress(\''+ response.predictions[i].place_id  +'\')" class="item-link" style="margin:0;"><div class="item-content" style="margin:0;"><div class="item-inner" style="margin-left:0px;padding-left:0px;"><div class="item-title">' + response.predictions[i].description + '</div></div></div></a></li>');
}
});
}


	
}



function checkForm(id,min,max) {
var input = document.getElementById(id + "_i").value;



if (id=='email'){checkEmail(input,id);return;}
if (id=='website'){checkWebsite(input,id);return;}
if (id=='link'){checkWebsite(input,id);return;}


if ((id=='category') && (input == 'category')) {$$( '#category_i' ).css( 'color', 'hsl(0, 0%, 70%)' );document.getElementById(id + "_c").innerHTML = '<a href="#" onclick="errorForm(3);" class="button" style="float:right;border:none;padding:0px;margin-top:10px;"><i class="pe-7s-attention pe-2x" style="color:#ff3b30;"></i></a>';return;}
if ((id=='category') && (input !== 'category')) {$$( '#category_i' ).css( 'color', 'black' );document.getElementById(id + "_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';return;}

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
corrected_date = tomorrow.toISOString();

if ((id=='expiry' || id=='schedule') && (input < corrected_date)) {document.getElementById(id + "_c").innerHTML = '<a href="#" onclick="errorForm(3);" class="button" style="float:right;border:none;padding:0px;margin-top:10px;"><i class="pe-7s-attention pe-2x" style="color:#ff3b30;"></i></a>';return;}
if ((id=='expiry' || id=='schedule') && (input > corrected_date)) {document.getElementById(id + "_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';}
if ((id=='expiry' || id=='schedule') && (input == corrected_date)) {document.getElementById(id + "_c").innerHTML = '<a href="#" onclick="errorForm(3);" class="button" style="float:right;border:none;padding:0px;margin-top:10px;"><i class="pe-7s-attention pe-2x" style="color:#ff3b30;"></i></a>';return;}


var length_string = input.length;

if (length_string < min) {document.getElementById(id + "_c").innerHTML = '<a href="#" onclick="errorForm(1);" class="button" style="float:right;border:none;padding:0px;margin-top:10px;"><i class="pe-7s-attention pe-2x" style="color:#ff3b30;"></i></a>';}
if (length_string > max) {document.getElementById(id + "_c").innerHTML = '<a href="#" onclick="errorForm(2);" class="button" style="float:right;border:none;padding:0px;margin-top:10px;"><i class="pe-7s-attention pe-2x" style="color:#ff3b30;"></i></a>';}
if ((id=='subpremise' || id=='street_number' || id=='route' || id=='country' || id=='zip' || id=='state' || id=='locality' || id=='title' || id=='description' || id=='terms' || id=='phone') && (length_string > min) && (length_string < max)) {document.getElementById(id + "_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>'; }

var title_i = document.getElementById("title_i").value;
var description_i = document.getElementById("description_i").value;
var terms_i = document.getElementById("terms_i").value;
var expiry_i = document.getElementById("expiry_i").value;

if((title_i.length > 3) && (title_i.length < 20) && (description_i.length < 140) && (description_i.length > 5) && (terms_i.length > 5) && (terms_i.length < 140) && (expiry_i > corrected_date)){$$( '#upload-ready' ).css( 'color', '#4cd964' );$$( '#upload-ready' ).css( 'font-weight', 'bold' );document.getElementById("submitinput").value="1";}


}



function errorForm(error){

if (error == '1') {
myApp.alert('Sorry that is too short!','Error');
}

if (error == '2') {
myApp.alert('Sorry that is too long!','Error');
}

if (error == '3') {
myApp.alert('You must set a date at least 24 hours in the future!','Error');
}

if (error == '4') {
myApp.alert('Please select the best category for your deal. Otherwise, select other.','Error');
}

if (error == '5') {
myApp.alert('Please enter a valid email address','Error');
}

if (error == '6') {
myApp.alert('Please enter a valid website address','Error');
}

if (error == '7') {
myApp.alert('In order to submit a deal, you must select a page and complete the minimum information required: Title, Deal Information, Terms and Expiry Date.','Error');
}


}

function moveCover(){
	
	var img = new Image();
     img.src = $$( '.cover-add' ).css('background-image').replace(/url\(|\)$|"/ig, '');
     img.onload = function () {
     	windowsize = $$(window).width();
	height_image = ((img.height/img.width) * windowsize)-60;
     $$( '.content-block' ).css( 'padding-top', height_image + 'px' );
 };
}

function checkEmail(text,id) { 
        var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

      
      if (re.test(text)){document.getElementById(id + "_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';return;}
      else {document.getElementById(id + "_c").innerHTML = '<a href="#" onclick="errorForm(5);" class="button" style="float:right;border:none;padding:0px;margin-top:10px;"><i class="pe-7s-attention pe-2x" style="color:#ff3b30;"></i></a>';return;}
    }

function checkWebsite(text,id) { 
        var rex = /^(?=www\.)?[A-Za-z0-9_-]+\.+[A-Za-z0-9.\/%&=\?_:;-]+$/;

var lowercase=text.toLowerCase();
      
      if (rex.test(lowercase)){document.getElementById(id + "_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';return;}
      else {document.getElementById(id + "_c").innerHTML = '<a href="#" onclick="errorForm(6);" class="button" style="float:right;border:none;padding:0px;margin-top:10px;"><i class="pe-7s-attention pe-2x" style="color:#ff3b30;"></i></a>';return;}
    }

function getInfo (id){

if(id=='title'){myApp.alert('Choose something creative between 3-20 characters.','<i  class="pe-7s-pen pe-2x"></i> Title');}	
if(id=='description'){myApp.alert('Create a deal for your Likers up to 140 characters.','<i  class="pe-7s-pen pe-2x"></i> Deal');}	
if(id=='terms'){myApp.alert('Create the terms for your Likers up to 140 characters. Remember, the deal should be kosher for Facebook. You can provide a link to full Terms and Conditions below.','<i  class="pe-7s-pen pe-2x"></i> Terms');}	
if(id=='expiry'){myApp.alert('Choose when the deal will expire.','<i  class="pe-7s-clock pe-2x"></i> Expiry');}	
if(id=='category'){myApp.alert('Choose the category that best fits your deal, so Likers can find it.','<i  class="pe-7s-filter pe-2x"></i> Category');}
if(id=='phone'){myApp.alert('You may provide a phone number for Likers to call you.','<i  class="pe-7s-call pe-2x"></i> Phone');}	
if(id=='email'){myApp.alert('You may provide an email for Likers to contact you.','<i  class="pe-7s-mail pe-2x"></i> Email');}	
if(id=='website'){myApp.alert('You may provide your website address for Likers to find you.','<i  class="pe-7s-mouse pe-2x"></i> Website');}	
if(id=='link'){myApp.alert('You may provide a website link to your deal with full terms and conditions.','<i  class="pe-7s-link pe-2x"></i> Link');}
if(id=='schedule'){myApp.alert('You may schedule a post up to 6 months in the future.','<i  class="pe-7s-date pe-2x"></i> Schedule Post');}
if(id=='commenty'){myApp.alert('You may require users to comment on your post in order to get the deal.','<i  class="pe-7s-comment pe-2x"></i> Require Comment');}
if(id=='address'){myApp.alert('If you provide an address, your deal will appear when the user searches for nearby results.','<i  class="pe-7s-comment pe-2x"></i> Require Comment');}
}

function submitDeal(){
var submitinput = document.getElementById("submitinput").value;
if (submitinput !== '1') {errorForm(7);return}

alert('submitting deal');
var imageURI = document.getElementById("imageURI").value;
if (imageURI) {uploadPhoto();return;}

var cover = document.getElementById("cover").value;
var page_id = document.getElementById("page_id").value;
var photo_created = document.getElementById("photo_created").value;
var image_title = page_id + '_' + photo_created;

$$.getJSON('http://www.smilesavers.net.au/submitcover.php?callback=?','url=' + cover + '&page_id_photo_created=' + image_title,function(res){
    
    alert('Your name is '+res.fullname);

var title = document.getElementById("title_i").value;
var description = document.getElementById("description_i").value;
var terms = document.getElementById("terms_i").value;
var expiry = document.getElementById("expiry_i").value;
var category = document.getElementById("category_i").value;
var phone = document.getElementById("phone_i").value;
var email = document.getElementById("email_i").value;
var website = document.getElementById("website_i").value;
var link = document.getElementById("link_i").value;



var type = document.getElementById("type").value;
var page_token = document.getElementById("page_token").value;
var name = document.getElementById("name").value;

var latitude = document.getElementById("latitude_box").value;
var longitude = document.getElementById("longitude_box").value;

var date = new Date();
var offset = date.getTimezoneOffset() * 60;
var schedule = document.getElementById("schedule_i").value;
var unix = Math.round(new Date(schedule).getTime()/1000) + offset;
var subpremise = document.getElementById("subpremise_i").value;
var street_number = document.getElementById("street_number_i").value;
var street_name = document.getElementById("route_i").value;
var postcode = document.getElementById("zip_i").value;
var suburb = document.getElementById("locality_i").value;
var state = document.getElementById("state_i").value;
var country = document.getElementById("country_i").value;

if (schedule){	
	
	openFB.apip({
            method: 'POST',
            path: '/' + page_id + '/feed',
            params: {name: title, link: 'http://www.likermob.com', picture: 'http://smilesavers.net.au/images/cover.png',  caption: 'via Likermob App',  description: terms,  message: description,  to: page_id,  from: page_id,  application:'129670517205110',  scheduled_publish_time: unix,  published: 'false',  access_token: page_token},
            success: function(data) {
                var post_id = data.id;
                
            
            	$$.getJSON('http://www.smilesavers.net.au/submitdeal.php?callback=?','title=' + title + '&post_id=' + post_id + '&type=' + type + '&photo_created=' + photo_created + '&description=' + description + '&terms=' + terms + '&expiry=' + expiry + '&category=' + category + '&phone=' + phone + '&email=' + email + '&website=' + website + '&link=' + link + '&cover=' + cover + '&name=' + name + '&page_id=' + page_id + '&latitude=' + latitude + '&longitude=' + longitude + '&schedule=' + schedule + '&subpremise=' + subpremise + '&street_number=' + street_number + '&street_name=' + street_name + '&postcode=' + postcode + '&suburb=' + suburb +  '&state=' + state + '&country=' + country,function(res){
    
    alert('Posted the deal for '+res.title);
});
            	
            },
            error: errorHandler});
}

else {
openFB.apip({
            method: 'POST',
            path: '/' + page_id + '/feed',
            params: {name: title, link: 'http://www.likermob.com', picture: 'http://smilesavers.net.au/images/cover.png',  caption: 'via Likermob App',  description: terms,  message: description,  to: page_id,  from: page_id,  application:'129670517205110', access_token: page_token},
            success: function(data) {
                var post_id = data.id;
                
            
            	$$.getJSON('http://www.smilesavers.net.au/submitdeal.php?callback=?','title=' + title + '&post_id=' + post_id + '&type=' + type + '&photo_created=' + photo_created + '&description=' + description + '&terms=' + terms + '&expiry=' + expiry + '&category=' + category + '&phone=' + phone + '&email=' + email + '&website=' + website + '&link=' + link + '&cover=' + cover + '&name=' + name + '&page_id=' + page_id + '&latitude=' + latitude + '&longitude=' + longitude + '&schedule=' + schedule + '&subpremise=' + subpremise + '&street_number=' + street_number + '&street_name=' + street_name + '&postcode=' + postcode + '&suburb=' + suburb +  '&state=' + state + '&country=' + country,function(res){
    
    alert('Posted the deal for '+res.title);
});
            	
            },
            error: errorHandler});
	
	
}
	
	
});


	



}

function clearPageslist(){
	$$('#plusnavbar').hide();
	$$('#toolbardeal').hide();
	$$('#add-loader-container').show();
	getMyPages();
	$$( '#tab2link' ).addClass( 'disabled' );
	$$( '#tab3link' ).addClass( 'disabled' );
	$$('#add_button').show();
	$$('#coverbutton').hide();
	$$( '.content-block' ).css( 'padding-top', '40px' );
	$$( '.cover-add' ).css( 'background-image', 'none' );
}

function setCover(url){
	document.getElementById("cover").value = url;
	$$( '.cover-add' ).css( 'background-image', 'url(\''+ url  +'\')' );
	$$( '.cover-add' ).css( 'background-size', '100%' );
	$$( '.cover-add' ).css( 'background-repeat', 'no-repeat' );
	
}


function uploadPhoto() {
            var imageURI = document.getElementById("imageURI").value;
            var page_id = document.getElementById("page_id").value;
            var photo_created = Math.round(new Date() / 1000);
            document.getElementById("photo_created").value = photo_created;
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
 
           var params = new Object();
            params.value1 = page_id + '_' + photo_created;
 
            options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(imageURI, "http://smilesavers.net.au/submitimage.php", win, fail, options);
        }
 
        function win(r) {
          
var title = document.getElementById("title_i").value;
var description = document.getElementById("description_i").value;
var terms = document.getElementById("terms_i").value;
var expiry = document.getElementById("expiry_i").value;
var category = document.getElementById("category_i").value;
var phone = document.getElementById("phone_i").value;
var email = document.getElementById("email_i").value;
var website = document.getElementById("website_i").value;
var link = document.getElementById("link_i").value;
var photo_created = document.getElementById("photo_created").value;

var cover = document.getElementById("cover").value;
var type = document.getElementById("type").value;
var page_token = document.getElementById("page_token").value;
var name = document.getElementById("name").value;
var page_id = document.getElementById("page_id").value;
var latitude = document.getElementById("latitude_box").value;
var longitude = document.getElementById("longitude_box").value;

var date = new Date();
var offset = date.getTimezoneOffset() * 60;
var schedule = document.getElementById("schedule_i").value;
var unix = Math.round(new Date(schedule).getTime()/1000) + offset;
var subpremise = document.getElementById("subpremise_i").value;
var street_number = document.getElementById("street_number_i").value;
var street_name = document.getElementById("route_i").value;
var postcode = document.getElementById("zip_i").value;
var suburb = document.getElementById("locality_i").value;
var state = document.getElementById("state_i").value;
var country = document.getElementById("country_i").value;


if (schedule){	
	
	openFB.apip({
            method: 'POST',
            path: '/' + page_id + '/feed',
            params: {name: title, link: 'http://www.likermob.com', picture: 'http://smilesavers.net.au/mkwatermark.php?filename='+ page_id +'_'+ photo_created +'.jpg',  caption: 'via Likermob App',  description: terms,  message: description,  to: page_id,  from: page_id,  application:'129670517205110',  scheduled_publish_time: unix,  published: 'false',  access_token: page_token},
            success: function(data) {
                var post_id = data.id;
                
            
            	$$.getJSON('http://www.smilesavers.net.au/submitdeal.php?callback=?','title=' + title + '&post_id=' + post_id + '&type=' + type + '&photo_created=' + photo_created + '&description=' + description + '&terms=' + terms + '&expiry=' + expiry + '&category=' + category + '&phone=' + phone + '&email=' + email + '&website=' + website + '&link=' + link + '&cover=' + cover + '&name=' + name + '&page_id=' + page_id + '&latitude=' + latitude + '&longitude=' + longitude + '&schedule=' + schedule + '&subpremise=' + subpremise + '&street_number=' + street_number + '&street_name=' + street_name + '&postcode=' + postcode + '&suburb=' + suburb +  '&state=' + state + '&country=' + country,function(res){
    
    alert('Posted the deal for '+res.title);
});
            	
            },
            error: errorHandler});
}

else {
openFB.apip({
            method: 'POST',
            path: '/' + page_id + '/feed',
            params: {name: title, link: 'http://www.likermob.com', picture: 'http://smilesavers.net.au/mkwatermark.php?filename='+ page_id +'_'+ photo_created +'.jpg',  caption: 'via Likermob App',  description: terms,  message: description,  to: page_id,  from: page_id,  application:'129670517205110',access_token: page_token},
            success: function(data) {
                var post_id = data.id;
                
            
            	$$.getJSON('http://www.smilesavers.net.au/submitdeal.php?callback=?','title=' + title + '&post_id=' + post_id + '&type=' + type + '&photo_created=' + photo_created + '&description=' + description + '&terms=' + terms + '&expiry=' + expiry + '&category=' + category + '&phone=' + phone + '&email=' + email + '&website=' + website + '&link=' + link + '&cover=' + cover + '&name=' + name + '&page_id=' + page_id + '&latitude=' + latitude + '&longitude=' + longitude + '&schedule=' + schedule + '&subpremise=' + subpremise + '&street_number=' + street_number + '&street_name=' + street_name + '&postcode=' + postcode + '&suburb=' + suburb +  '&state=' + state + '&country=' + country,function(res){
    
    alert('Posted the deal for '+res.title);
});
            	
            },
            error: errorHandler});
	
	
}
          
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
            alert(r.response);
        }
 
        function fail(error) {
            alert("An error has occurred: Code = " = error.code);
        }

function searchPopup(id){

var mySlider = $$('.slider-container')[0].f7Slider;

if (id=='location'){
mySlider.slideTo(0);
}	
if (id=='page'){
mySlider.slideTo(1);
}	
if (id=='filter'){
mySlider.slideTo(2);
}	
	
}

function nameDb() {
	

var searchvalue1 = document.getElementById('dbnames').value;

if (searchvalue1 == '') {$$('#dbnamesclear').hide();}
else {$$('#dbnamesclear').show();}

$$.getJSON('http://smilesavers.net.au/getname.php?callback=?','input=' + searchvalue1,function(response){
$$("#resultd li").remove();
for (i = 0; i < 5; i++) 
{ 
	

	
$$( '#resultd' ).append('<li style="font-size:16px;padding-left:0px;padding-right:0px;margin-left:0px;margin-right:0px;background-color:transparent;"><a href="#" onclick="getBusiness('+ response[i][1]  +')" class="item-link" style="margin:0;"><div class="item-content" style="margin:0;"><div class="item-media"><img src="http://graph.facebook.com/'+ response[i][1]  +'/picture?width=20&height=20" style="height:20px;width:20px;"/></div><div class="item-inner"><div class="item-title">' +  response[i][0] + '</div></div></div></a></li>');
}
});    
    

	
}

function clearInput(){
	
	document.getElementById('fulladdressf').value = "";
	document.getElementById('dbnames').value = "";
	$$('#resultfclear').hide();
	$$('#dbnamesclear').hide();
}






