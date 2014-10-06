// Initialize your app
var myApp = new Framework7({
  init: false //Disable App's automatica initialization
});

// Export selectors engine
var $$ = Dom7;


	
	//Now we add our callback for initial page
myApp.onPageInit('index', function (page) {
  //Do something here with home page


askLocation();
functionEmpty();







});


myApp.onPageInit('register', function (page) {

alert('on register page');
mainView.hideNavbar();

});



myApp.onPageInit('deal', function (page) {


$$( "#result li" ).addClass( "disabled" );


});

myApp.onPageBeforeRemove('deal', function (page) {


$$( "#result li" ).removeClass( "disabled" );

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
for (i = 0; i < 5; i++) 
{ 
	

	
$$( '#resulty' ).append('<li class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title button" style="margin-left:15px;" onclick="savePosition(\''+ response.predictions[i].place_id  +'\')">' + response.predictions[i].description + '</div></div></li>');
}
});    
    
});

//Get Latitude and Longitude onclick

$$('.item-title').on('click', function (e) {
    alert('clicked');
});




	
});	



 
//And now we initialize app
myApp.init();


    




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
for (i = 0; i < 5; i++) {        

var str = response[i][4];
var singlequote = str.replace("'", "qqqq");
var description = "'" + singlequote.replace("/n", "</br>") + "'";

$$( '#result' ).append('<li class="swipeout"><img src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal" onclick="getDeal(\''+ response[i][2]  +'\',\''+ response[i][16]  +'\',\''+ response[i][3]  +'\',\''+ response[i][1]  +'\',\''+ response[i][14]  +'\',\''+ description +'\')" class="item-content item-link link"><div class="item-media"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ response[i][4] +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-blue swipeout-delete swipeout-overswipe" style="-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="likeButton(\''+ response[i][2]  +'\')"><i class="pe-7s-like2 pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton()" class="swipeout-delete swipeout-overswipe" style="-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');

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


var start = track_click * 5;
var finish = start + 5;

for (i = start; i < finish; i++) {        
$$( '#result' ).append('<li><div class="item-media"><img src="http://graph.facebook.com/'+response[i][2]+'/picture?width=120&height=120" /></div><a href="#" class="item-link item-content"><div class="item-inner">'+ '<div class="item-title-row"><div class="item-title">Yellow Submarine</div><div class="item-after">$15</div></div><div class="item-subtitle">Beatles</div><div class="item-text">Lorem ipsum dolor sit amet...</div></div></a><div class="item-input"><input type="text" placeholder="Write a comment" style="width:70%"></div><a href="#" class="button" style="width:30%;border-radius:50%;"><i class="pe-7s-like2 pe-2x"></i></a></li>');

}








});




	
	
});

$$(".load_more").click(function (e) {

var number_pages = localStorage.getItem("total_pages");
var stop = Math.ceil(number_pages / 5);

if (track_click >= (stop-1)) {
$$(".load_more").attr("disabled", "disabled");
}



$$.getJSON('http://www.smilesavers.net.au/jsonp.php?callback=?', function(response){
$$("#result li").remove();


var start = track_click * 5;
var finish = start + 5;

for (i = start; i < finish; i++) {        
$$( '#result' ).append('<li><a href="#" class="item-link item-content"><div class="item-media"><img src="http://graph.facebook.com/'+response[i][2]+'/picture?width=120&height=120" /></div><div class="item-inner">'+ '<div class="item-title-row"><div class="item-title">Yellow Submarine</div><div class="item-after">$15</div></div><div class="item-subtitle">Beatles</div><div class="item-text">Lorem ipsum dolor sit amet...</div></div></a><div class="item-input"><input type="text" placeholder="Write a comment" style="width:70%"></div><a href="#" class="button" style="width:30%;border-radius:50%;"><i class="pe-7s-like2 pe-2x"></i></a></li>');

}

$$(".load_previous").removeAttr("disabled", "disabled");

track_click++;


});	
	
});




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








function likeButton(post_id) {
	
	myApp.alert('like');
	
like(post_id);
	addEntry(post_id);
}



function closeButton(){
	
	alert('clicked close button');
	
$$.getJSON('http://www.smilesavers.net.au/dislike.php?callback=?','post_id=xyz',function(res){
    
    alert('Your name is '+res.fullname);
});
	
	
}


function addEntry(post_id) {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    var entry = {
        "post_id": post_id,
        "timestamp": Date.now()
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


function getDeal(post_id,name,title,page_id,cover,description) {


var myDate = new Date('October 5, 2014');


var date = new Date();
var newdate = new Date(date);
newdate.setDate(newdate.getDate() - 30);
var nd = new Date(newdate);


var data = localStorage.getItem("allEntries");

	var json = JSON.parse(data);
	
	for (i = 0; i < json.length; i++) {        
//if (json[i].timestamp < nd){alert('deal is still valid')};
//if (json[i].timestamp > nd){alert('deal is invalid - need to remove it'); localStorage.removeItem('entry');};
if (json[i].post_id == post_id){

	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="right" onclick="getBusiness(\''+ page_id  +'\')"><img src="http://graph.facebook.com/'+ page_id +'/picture?width=20&height=20" style="border-radius:50%;margin-right:10px;"/>' + name + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="deal" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content" style="margin-top:30px;background-image: url(\''+ cover  +'\');background-size: 100%;background-repeat: no-repeat;">' +
        
        '      <div class="content-block" style="padding-top:40px;">' +
        '        <div class="content-block-inner" style="background-color:rgba(255,255,255,.4);">' +
                      '<a href="#" class="button no-like-button" onclick="likeButton(\''+ post_id  +'\')"><i class="pe-7s-like2 pe-2x"></i></a>' + 
                      '<p>You Like this page'+ title +'</p>'+
                      '<p>'+ description +'</p>'+
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );

	return;
	
	
}
else{

mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="right" onclick="getBusiness(\''+ page_id  +'\')"><img src="http://graph.facebook.com/'+ page_id +'/picture?width=20&height=20" style="border-radius:50%;margin-right:10px;"/>' + name + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="deal" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content" style="margin-top:30px;background-image: url(\''+ cover  +'\');background-size: 100%;background-repeat: no-repeat;">' +
        
        '      <div class="content-block" style="padding-top:40px;">' +
        '        <div class="content-block-inner" style="background-color:rgba(255,255,255,.4);">' +
                      '<a href="#" class="button no-like-button" onclick="likeButton(\''+ post_id  +'\')"><i class="pe-7s-like2 pe-2x"></i></a>' + 
                      '<p>You dont like this page'+ title +'</p>'+
                      '<p>'+ description +'</p>'+
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
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


function getBusiness(page_id) {

mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="right" onclick="getBusiness(\''+ page_id  +'\')"><img src="http://graph.facebook.com/'+ page_id +'/picture?width=20&height=20" style="border-radius:50%;margin-right:10px;"/></div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;




//document.getElementById("dealresult").innerHTML = '<img src="'+ cover +'" style="width:100%;margin-top:30px;"/><br/><br/><h1>'+ title + '</h1><br/><br/><p>p1</p><br/><br/><p>p2</p><br/><br/><p>p3</p><br/><br/><p>p4</p>';

//$$.getJSON('http://www.smilesavers.net.au/getdeal.php?callback=?', 'post_id=' + post_id, function(response){




    
//alert('Your name is '+response[0][2] + response[0][3]);


//});	
	
	
}


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
