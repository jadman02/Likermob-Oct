// Initialize your app
var myApp = new Framework7({
  init: false //Disable App's automatica initialization
});

// Export selectors engine
var $$ = Dom7;


myApp.onPageInit('index', function (page) {


    functionEmpty();

});	


myApp.onPageInit('register', function (page) {

alert('on register page');
mainView.hideNavbar();

});



myApp.onPageAfterAnimation('deal', function (page) {
$$( "#result li" ).addClass( "disabled" );
});

myApp.onPageBeforeRemove('deal', function (page) {
$$( "#result li" ).removeClass( "disabled" );
});


myApp.onPageBeforeRemove('business', function (page) {
$$( ".business" ).remove();
});



	
myApp.onPageInit('location', function (page) {

alert('on location page');

document.getElementsByName('numPeople')[0].placeholder=localStorage.getItem("position");

var radius = localStorage.getItem('radius');
if (!radius) {radius == 25}

document.getElementById("amount").innerHTML = radius;

//Autocomplete JSON Google
$$('#numPeople').keyup(function(){

$$.getJSON('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+ this.value +'&types=(cities)&key=AIzaSyAssayN33K28DkBxPB8iWOM0NG2-sCNHEk', function(response){
$$("#resulty li").remove();
for (i = 0; i < 10; i++) 
{ 
	

	
$$( '#resulty' ).append('<li class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title button" style="margin-left:15px;" onclick="savePosition(\''+ response.predictions[i].place_id  +'\')">' + response.predictions[i].description + '</div></div></li>');
}
});    
    
});





	
});	



 
//And now we initialize app
myApp.init();



// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {

    alert('pulled down');

        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 2000);
});







var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

	




var register = localStorage.getItem('register');
if (register) {

if(latitude) {mainView.loadPage('deal.html');mainView.loadPage('index.html');}
else{mainView.loadPage('location.html');}
	
	



	
}
else {

// Load page from about.html file to main View:
mainView.loadPage('register.html');
	
}	










// Callbacks to run specific code for specific pages, for example for About page:

myApp.onPageInit('about', function (page) {

alert('on about page');

	$$('.create-page').on('click', function () {
        createContentPage();
    });
});







function functionEmpty() {
	
	
$$(".load_more").removeAttr("disabled", "disabled");
$$( "#result li" ).removeClass( "disabled" );
$$(".load_previous").attr("disabled", "disabled");
var track_click = 0;

$$.getJSON('http://www.smilesavers.net.au/jsonp.php?callback=?', function(response){

// Store
localStorage.setItem("total_pages", response.length);
$$("#loader-container").hide();
for (i = 0; i < 10; i++) {        

var str = response[i][4];
var singlequote = str.replace(/'/g, "qqqq");
//var description = "'" + singlequote.replace(/(\r\n|\n|\r)/gm,"") + "'";

someText = str.replace(/(\r\n|\n|\r)/gm,"<br />");


$$( '#result' ).append('<li class="swipeout"><img class="prompt-ok"  src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  class="item-content item-link link"><div class="item-media"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ someText +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-blue swipeout-delete swipeout-overswipe" style="-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="likeButton(\''+ response[i][2]  +'\',\''+ response[i][6]  +'\')"><i class="pe-7s-like2 pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton()" class="swipeout-delete swipeout-overswipe" style="-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');

}
track_click++;
$$(".load_more").show();
$$(".load_previous").show();

});



$$(".load_previous").click(function (e) {

$$(".load_more").removeAttr("disabled", "disabled");

track_click--;

$$.getJSON('http://www.smilesavers.net.au/jsonp.php?callback=?', function(response){
$$("#result li").remove();


var start = track_click * 10;
var finish = start + 10;

for (i = start; i < finish; i++) {        
$$( '#result' ).append('<li><div class="item-media"><img src="http://graph.facebook.com/'+response[i][2]+'/picture?width=120&height=120" /></div><a href="#" class="item-link item-content"><div class="item-inner">'+ '<div class="item-title-row"><div class="item-title">Yellow Submarine</div><div class="item-after">$15</div></div><div class="item-subtitle">Beatles</div><div class="item-text">Lorem ipsum dolor sit amet...</div></div></a><div class="item-input"><input type="text" placeholder="Write a comment" style="width:70%"></div><a href="#" class="button" style="width:30%;border-radius:50%;"><i class="pe-7s-like2 pe-2x"></i></a></li>');

}








});




	
	
});

$$(".load_more").click(function (e) {

var number_pages = localStorage.getItem("total_pages");
var stop = Math.ceil(number_pages / 10);

if (track_click >= (stop-1)) {
$$(".load_more").attr("disabled", "disabled");
}



$$.getJSON('http://www.smilesavers.net.au/jsonp.php?callback=?', function(response){
$$("#result li").remove();


var start = track_click * 10;
var finish = start + 10;

for (i = start; i < finish; i++) {        
$$( '#result' ).append('<li><a href="#" class="item-link item-content"><div class="item-media"><img src="http://graph.facebook.com/'+response[i][2]+'/picture?width=120&height=120" /></div><div class="item-inner">'+ '<div class="item-title-row"><div class="item-title">Yellow Submarine</div><div class="item-after">$15</div></div><div class="item-subtitle">Beatles</div><div class="item-text">Lorem ipsum dolor sit amet...</div></div></a><div class="item-input"><input type="text" placeholder="Write a comment" style="width:70%"></div><a href="#" class="button" style="width:30%;border-radius:50%;"><i class="pe-7s-like2 pe-2x"></i></a></li>');

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

function savePosition(place_id) {


$$.getJSON('https://maps.googleapis.com/maps/api/place/details/json?placeid='+ place_id +'&key=AIzaSyAssayN33K28DkBxPB8iWOM0NG2-sCNHEk', function(response){

$$("#resulty li").remove();

localStorage.setItem("latitude", response.result.geometry.location.lat);
localStorage.setItem("longitude", response.result.geometry.location.lng);
localStorage.setItem("position", response.result.formatted_address);

var elem = document.getElementById("numPeople");
elem.value = response.result.formatted_address;

});    	
	
	 
	
}








function likeButton(post_id,expiry) {
like(post_id);
//addEntry(post_id,expiry);
}



function closeButton(){
	
	
$$.getJSON('http://www.smilesavers.net.au/dislike.php?callback=?','post_id=xyz',function(res){
    
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


//function removeDeal(){
	
	
//	$$('.page[data-page="deal"]').remove();
//}


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


function openMap() {

$$( ".page-content" ).toggleClass( "hide" );

	
	
}

function getBusiness(page_id,latitude,longitude,name) {




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
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="business" class="page business">' +
        '    <!-- Scrollable page content-->' +
'<div id="map-canvas"></div>' +
        '    <div class="page-content cover-business" style="z-index: 1;margin-top:30px;">' +
        '      <div class="content-block" style="padding-top:40px;">' +
        '        <div class="content-block-inner" style="background-color:rgba(255,255,255,.4);"">' +
        '<p class="buttons-row theme-orange" style="margin-top:-50px;"><a href="#" class="button active"><i class="pe-7s-star pe-2x"></i></a><a href="#" class="button active"><i class="pe-7s-call pe-2x"></i></a><a href="#" class="button active"><i class="pe-7s-share pe-2x"></i></a></p>' + 
        '<div class="content-block-title">Contact</div><div class="list-block media-list"><ul>' + 
        '<li><a href="#" class="item-content"><div class="item-media"><img src="http://graph.facebook.com/'+ page_id +'/picture?width=50&height=50" style="border-radius:50%;margin-right:10px;"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+ name +'</div></div><div class="item-subtitle">'+ res[0][6] + ' ' + res[0][7] + ' ' +  res[0][8] + '</div><div class="item-text">'+ res[0][9] + ' ' + res[0][10] + ' ' + res[0][11]+'</div></div></a></li>' +
        '</ul></div>' +
	        '<div class="content-block-title">Current Deals</div>'+
	'<div class="list-block media-list"><ul><div id="deals-here"></div></ul></div>' +

        
        
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    initialize(latitude,longitude);
    
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


	$$('.prompt-ok').on('click', function () {
    myApp.prompt('What is your name?', function () {
        myApp.alert('Your name is. You clicked Ok button');
    });
});

function focusLocation(){
	
var elem = document.getElementById("numPeople");
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
