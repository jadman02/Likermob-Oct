// Initialize your app
var myApp = new Framework7({
  init: false //Disable App's automatica initialization
});

// Export selectors engine
var $$ = Dom7;

myApp.onPageInit('index', function (page) {





    functionEmpty();
	
	


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



if (pages_list=='a') {$$("#result li").remove();domain = "jsonp";data_send = "";}
if (typeof pages_list === 'undefined') {domain = "jsonp";data_send = "";}
if (pages_list instanceof Array) {domain = "getpages";data_send = "pages_list=" + pages_list;};
	
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
if (type == 'comment') {$$( '#result' ).append('<li class="swipeout s_'+ response[i][2] +'"><img onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div><div class="item-after"><span class="badge" style="margin-right:2px;background-color:#3b5998;">'+ response[i][17] + '</span><span class="badge" style="background-color:#ff8000;">'+ response[i][18] + '</span></div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ someText +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-green swipeout-overswipe" style="background-color:#3b5998;-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')"><i class="pe-7s-comment pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton()" class="swipeout-delete swipeout-overswipe" style="background-color:#ff8000;-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');}
if (type=='like') {$$( '#result' ).append('<li class="swipeout s_'+ response[i][2] +'"><img onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" src="'+ response[i][14] +'" style="width:100%;"/><div class="swipeout-content"><a href="#" id="getDeal"  onclick="popUp(\''+ response[i][3]  +'\',\''+ singlequote  +'\',\''+ response[i][1]  +'\',\''+ response[i][2]  +'\')" class="item-content"><div class="item-media" onclick="getBusiness(\''+ response[i][1]  +'\');"><img src="http://graph.facebook.com/'+response[i][1]+'/picture?width=50&height=50" style="border-radius:50%;"/></div><div class="item-inner"><div class="item-title-row" style="clear:both;"><div class="item-title">'+ response[i][3] + '</div><div class="item-after"><span class="badge" style="margin-right:2px;background-color:#3b5998;">'+ response[i][17] + '</span><span class="badge" style="background-color:#ff8000;">'+ response[i][18] + '</span></div></div><div class="item-subtitle">'+ response[i][16] + '</div><div class="item-text">'+ someText +'</div></div></a></div><div class="swipeout-actions-left"><a href="#" class="bg-green swipeout-delete swipeout-overswipe" style="background-color:#3b5998;-webkit-border-top-right-radius: 1000px;-moz-border-radius-topright: 1000px;border-top-right-radius: 1000px;" onclick="likeButton(\''+ response[i][2]  +'\',\''+ response[i][6]  +'\')"><i class="pe-7s-like2 pe-2x"></i></a></div><div class="swipeout-actions-right"><a href="#" onclick="closeButton()" class="swipeout-delete swipeout-overswipe" style="background-color:#ff8000;-webkit-border-top-left-radius: 1000px;-moz-border-radius-topleft: 1000px;border-top-left-radius: 1000px;"><i class="pe-7s-like2 pe-2x pe-rotate-180"></i></a></div></li>');}
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

function saveAddress(place_id) {


$$.getJSON('https://maps.googleapis.com/maps/api/place/details/json?placeid='+ place_id +'&key=AIzaSyAssayN33K28DkBxPB8iWOM0NG2-sCNHEk', function(response){


$$("#resulta li").remove();

 $$('.addresshide').show();



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
var postCode = extractFromAdress(response.result.address_components, "postal_code");
var street = extractFromAdress(response.result.address_components, "route");
var town = extractFromAdress(response.result.address_components, "locality");
var state = extractFromAdress(response.result.address_components, "administrative_area_level_1");
var country = extractFromAdress(response.result.address_components, "country");

var unit = document.getElementById("subpremise");
unit.value = subpremise;

house = document.getElementById("street_number");
house.value = street_number;

var road = document.getElementById("route");
road.value = street;

var zip = document.getElementById("postal_code");
zip.value = postCode;

var suburb = document.getElementById("locality");
suburb.value = town;

var region = document.getElementById("administrative_area_level_1");
region.value = state;

var nation = document.getElementById("country");
nation.value = country;

var elem = document.getElementById("fulladdress2");
elem.innerHTML = 'Set location';

$$( '#fulladdress2' ).css( 'color', 'black' );
document.getElementById("address_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';
var elem1 = document.getElementById("latitude_box");
elem1.value = response.result.geometry.location.lat;

var elem2 = document.getElementById("longitude_box");
elem2.value = response.result.geometry.location.lng;

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

function showDateTime(){


        if (document.getElementById('checkbox').checked) {
            $$('#schedule_i').val("");
            $$('#datetimespan').hide();
            $$('#schedule').show();
            document.getElementById("schedule_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:-20px;" onclick="getInfo(\'schedule\')"><i  class="pe-7s-info pe-2x"></i></a>';
            
        } else {
            document.getElementById("schedule_c").innerHTML = '';
            $$('#schedule').hide();
            $$('#datetimespan').show();
            $$('#schedule_i').focus();
        }

	
}

function showAddress(){


        if (document.getElementById('addressbox').checked) {
            
            document.getElementById("address_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:-20px;" onclick="getInfo(\'address\')"><i  class="pe-7s-info pe-2x"></i></a>';
            //$$('#fulladdress').blur();
            $$('.addresshide').hide();
            $$( '#fulladdress2' ).css( 'color', 'hsl(0, 0%, 70%)' );
            
        } else {
             
             openSearch();
            $$('#fulladdress').focus();
        }

	
}

function commentClick(){


        if (document.getElementById('commentbox').checked) {
            
            document.getElementById("commenty_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;" onclick="getInfo(\'commenty\')"><i  class="pe-7s-info pe-2x"></i></a>';
                 $$( '#commenty_i' ).css( 'color', 'hsl(0, 0%, 70%)' );
            //$$('#fulladdress').blur();
            
            
        } else {
        document.getElementById("commenty_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;"><i  class="pe-7s-check pe-2x"></i></a>';
        $$( '#commenty_i' ).css( 'color', 'black' );
        }

	
}

function openMap() {

$$( ".page-content" ).toggleClass( "hide" );

	
	
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
        '<p class="buttons-row theme-orange" style="margin-top:-50px;"><a href="#" class="button active"><i class="pe-7s-star pe-2x"></i></a><a href="#" class="button active"><i class="pe-7s-call pe-2x"></i></a><a href="#" class="button active"><i class="pe-7s-share pe-2x"></i></a></p>' + 
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
    title: '<a class="button" style="float:right;border:none;margin-top:-10px;" href="#" onclick="closeModal();"><i class="pe-7s-close pe-lg"></i></a><div style="margin-left:25px;margin-right:25px;"><img src="http://graph.facebook.com/'+ page_id +'/picture?width=20&height=20" style="border-radius:50%;margin-right:10px;padding-top:5px;padding-right:5px;"/>' + title + '</div>',
    text: '<div style="padding-left:25px;padding-right:25px;">' + clear_description + '</div>',
    afterText: '<div style="margin-top:10px;margin-bottom:-15px;height:49px;border-top:1px solid #ccc;width:270px;background-image:url(\'http://graph.facebook.com/' + uid + '/picture?type=small\');background-repeat:no-repeat;"><input id="commentbox" type="text" placeholder="Comment on Facebook" style="margin-left:49px;border:none;border-radius:0px; height:43px;margin-top:0px;font-size:14px;width:205px;"></div>',
    buttons: [
      {
        text: '<i class="pe-7s-like2 pe-lg"></i>',
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
        text: '<i class="pe-7s-info pe-lg"></i>',
        onClick: function() {
          getBusiness(page_id);
          
        }
      },
      {
        text: '<i class="pe-7s-like2 pe-lg pe-rotate-180"></i>',
        bold: true,
        onClick: function() {
        	myApp.swipeoutDelete('.s_'+ post_id);
        	closeButton();
        }
      },
    ]
  })




	
	
}


	
	

function closeModal() {myApp.closeModal()}


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

$$('#add_button').on('click', function (e) {
   alert('Show facebook photos');
});

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
       ' <div class="right"><a href="#" style="display:none" id="upload"><i class="pe-7s-upload pe-2x" style="color:#ff3b30;"></i></a></div>' +
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
                      
                     
                     
                      
 

'<div class="buttons-row">'+



        '<a href="#tab1" class="tab-link active button">Pick</a>'+

       ' <a href="#tab2" class="tab-link button">Create</a>'+

        '<a href="#tab3" class="tab-link button">Customise</a>'+
      '</div>'+



 '<div class="tabs-animated-wrap">'+
'<div class="tabs">'+

 ' <div class="tab active" id="tab1">'+
'<div class="content-block-title" style="text-align:center;margin-top:20px;">Pick Page or Group</div><div class="list-block"><div style="text-align:center;margin:0 auto;width:100%;" id="add-loader-container"><span class="preloader"></span></div><ul id="pages_list"></ul></div>'+
 ' </div>'+

 ' <div class="tab" id="tab2">'+
'<div class="content-block-title" style="margin-top:20px;text-align:center;">Create Deal</div><div class="list-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title label" style="width:50px;color:hsl(0, 0%, 70%);"> Title</div><div class="item-input"><input type="text" id="title_i" onchange="checkForm(\'title\',3,20)" style="float:left;width:180px;"><span id="title_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'title\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li><li><div class="item-content align-top"><div class="item-inner"><div class="item-title label"style="width:50px;color:hsl(0, 0%, 70%);">Deal</div><div class="item-input"><textarea id="description_i"  onchange="checkForm(\'description\',5,140)" style="float:left;width:180px;"></textarea><span id="description_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'description\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li><li><div class="item-content align-top"><div class="item-inner"><div class="item-title label" style="width:50px;color:hsl(0, 0%, 70%);">Terms</div><div class="item-input"><textarea id="terms_i" onchange="checkForm(\'terms\',10,140)" style="float:left;width:180px;"></textarea><span id="terms_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'terms\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title label" style="width:50px;color:hsl(0, 0%, 70%);">Expiry</div><div class="item-input"><input type="datetime-local" id="expiry_i" onblur="checkForm(\'expiry\',0,100)" style="width:180px;float:left;"><span id="expiry_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'expiry\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li>                  <!-- Select --><li><div class="item-content"><div class="item-media" style="width:20px;"><i class="pe-7s-filter pe-lg"></i></div><div class="item-inner"><div class="item-input"><select id="category_i" style="color:hsl(0, 0%, 70%);width:180px;float:left;" onchange="checkForm(\'category\',0,0);"><option id="category_rec_value" value="category">Category</option><option value="Accountant">Accountant</option><option value="Airport">Airport</option><option value="Amusement Park">Amusement Park</option><option value="aquarium">Aquarium</option><option value="art_gallery">Art Gallery</option><option value="bakery">Bakery</option><option value="bank">Bank</option><option value="bar">Bar</option><option value="beauty_salon">Beauty Salon</option><option value="bicycle_store">Bicycle Store</option><option value="book_store">Book Store</option><option value="bowling_alley">Bowling Alley</option><option value="bus_station">Bus Station</option><option value="cafe">Cafe</option><option value="campground">Campground</option><option value="car_dealer">Car Dealer</option><option value="car_rental">Car Rental</option><option value="car_repair">Car Repair</option><option value="car_wash">Car Wash</option><option value="casino">Casino</option><option value="church">Church</option><option value="city_hall">City Hall</option><option value="clothing_store">Clothing Store</option><option value="convenience_store">Convenience Store</option><option value="courthouse">Courthouse</option><option value="dentist">Dentist</option><option value="department_store">Department Store</option><option value="doctor">Doctor</option><option value="electrician">Electrician</option><option value="electronics_store">Electronics Store</option><option value="embassy">Embassy</option><option value="establishment">Establishment</option><option value="finance">Finance</option><option value="florist">Florist</option><option value="food">Food</option><option value="funeral_home">Funeral Home</option><option value="furniture_store">Furniture Store</option><option value="gas_station">Petrol Station</option><option value="general_contractor">General Contractor</option><option value="grocery_or_supermarket">Supermarket / Groceries</option><option value="gym">Gym</option><option value="hair_care">Hair Care</option><option value="hardware_store">Hardware Store</option><option value="health">Health</option><option value="hindu_temple">Hindu Temple</option><option value="home_goods_store">Home Goods Store</option><option value="insurance_agency">Insurance Agency</option><option value="jewelry_store">Jewelry Store</option><option value="laundry">Laundry</option><option value="lawyer">Lawyer</option><option value="library">Library</option><option value="liquor_store">Liquor Store</option><option value="local_government_office">Local Government Office</option><option value="locksmith">Locksmith</option><option value="lodging">Lodging</option><option value="meal_delivery">Meal Delivery</option><option value="meal_takeaway">Meal Takeaway</option><option value="mosque">Mosque</option><option value="movie_rental">Movie Rental</option><option value="movie_theater">Movie Theater</option><option value="moving_company">Moving Company</option><option value="museum">Museum</option><option value="night_club">Night_club</option><option value="painter">Painter</option><option value="park">Park</option><option value="parking">Parking</option><option value="pet_store">Pet Store</option><option value="pharmacy">Pharmacy</option><option value="physiotherapist">Physiotherapist</option><option value="place_of_worship">Place of Worship</option><option value="plumber">Plumber</option><option value="post_office">Post Office</option><option value="real_estate_agency">    Real Estate Agency</option><option value="restaurant">    Restaurant</option><option value="roofing_contractor">    Roofing Contractor</option><option value="school">School</option><option value="shoe_store">Shoe Store</option><option value="shopping_mall">Shopping Mall</option><option value="spa">Spa</option><option value="stadium">Stadium</option><option value="storage">Storage</option><option value="store">Store</option><option value="synagogue">Synagogue</option><option value="taxi_stand">Taxi Stand</option><option value="travel_agency">Travel Agency</option><option value="university">University</option><option value="veterinary_care">Veterinary Care</option><option value="zoo">Zoo</option></select><span id="category_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'category\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li><li><div class="item-content"><div class="item-media" style="width:20px;"><i class="pe-7s-call pe-lg"></i></div><div class="item-inner"><div class="item-input"><input onchange="checkForm(\'phone\',6,25);" placeholder="Phone" id="phone_i" type="tel" style="width:180px;float:left;"><span id="phone_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'phone\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li><li><div class="item-content"><div class="item-media" style="width:20px;"><i class="pe-7s-mail pe-lg"></i></div><div class="item-inner"><div class="item-input"><input placeholder="Email" onchange="checkForm(\'email\',7,100);" id="email_i" type="email" style="width:180px;float:left;"><span id="email_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'email\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li><li><div class="item-content"><div class="item-media" style="width:20px;"><i class="pe-7s-mouse pe-lg" style="margin-left:5px;"></i></div><div class="item-inner"><div class="item-input"><input onchange="checkForm(\'website\',7,100);" type="text" placeholder="Website" id="website_i" style="width:180px;float:left;"><span id="website_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'website\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li><li><div class="item-content"><div class="item-media" style="width:20px;"><i class="pe-7s-link pe-lg" style="margin-left:5px;"></i></div><div class="item-inner"><div class="item-input"><input placeholder="Link" onchange="checkForm(\'link\',7,100);" type="text" id="link_i" style="width:180px;float:left;"><span id="link_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'link\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li></ul></div> '+





 '<input id="latitude_box" type="hidden"><input id="longitude_box" type="hidden">' +
  '</div>'+

  '<div class="tab" id="tab3">'+
 '<div class="content-block-title" style="text-align:center;margin-top:20px;">Customise deal</div>'+
 '<div class="list-block"><ul><li><div class="item-content"><div class="item-media" onclick="showDateTime();" style="width:50px;"><label class="label-switch"><input type="checkbox" id="checkbox"><div class="checkbox"></div></label></div><div class="item-inner"><div class="item-input"><span id="schedule" style="color:hsl(0, 0%, 70%);font-size:16px;width:150px;padding-top:5px;">Schedule post</span><span id="datetimespan" style="display:none;"><input type="datetime-local" id="schedule_i" onblur="checkForm(\'schedule\',3,20)" style="width:150px;overflow:hidden;float:left;"></span><span id="schedule_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;" onclick="getInfo(\'schedule\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li>'+
 '<li><div class="item-content"><div class="item-media" style="width:50px;"><label class="label-switch" onclick="commentClick()"><input type="checkbox" id="commentbox"><div class="checkbox"></div></label></div><div class="item-inner"><div class="item-input"><span style="color:hsl(0, 0%, 70%);font-size:16px;width:150px;margin-top:5px;" id="commenty_i">Require comment </span><span id="commenty_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;" onclick="getInfo(\'commenty\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></div></li>'+
 '<li><div class="item-content" style="border:none;"><div class="item-inner"><label class="label-switch" onclick="showAddress();"><input type="checkbox" id="addressbox"><div class="checkbox"></div></label><div class="item-input" onclick="openSearch();$$(\'#fulladdress\').focus();" style="margin-left:20px;width:150px;color:hsl(0, 0%, 70%);" id="fulladdress2">Set location</div><span id="address_c"><a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:5px;" onclick="getInfo(\'address\')"><i  class="pe-7s-info pe-2x"></i></a></span></div></div></li><li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Unit</div><div class="item-input"><input id="subpremise" type="text" placeholder="-"></div></div></div></li><li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Number</div><div class="item-input"><input placeholder="-" id="street_number" type="text"></div></div></div></li><li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Street</div><div class="item-input"><input placeholder="-" id="route" type="text"></div></div></div></li><li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Suburb</div><div class="item-input"><input placeholder="-" id="locality" type="text" value="ffff"></div></div></div></li><li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Zip</div><div class="item-input"><input placeholder="-" id="postal_code" type="text"></div></div></div></li><li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">State</div><div class="item-input"><input placeholder="-" id="administrative_area_level_1" type="text"></div></div></div></li><li class="addresshide" style="display:none;"><div class="item-content"><div class="item-inner"><div class="item-title label">Country</div><div class="item-input"><input placeholder="-" id="country" type="text"></div></div></div></li>'+
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
    text: '<div style="padding-left:25px;padding-right:25px;">' + clear_description + '</div>',
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


function getCover(page_id){



    myApp.showTab('#tab2');
addPhoto(page_id);
	
$$('#upload').show();

//var page_id = $$('#pages_list').val();
$$.getJSON('http://www.smilesavers.net.au/getbusiness.php?callback=?', 'page_id=' + page_id, function(res){

var phone = document.getElementById("phone_i");
//var address = document.getElementById("fulladdress2");
var email = document.getElementById("email_i");
var phone = document.getElementById("phone_i");
var website = document.getElementById("website_i");
var link = document.getElementById("link_i");
var opt= document.getElementById('category_i').options[0];

phone.value = "";document.getElementById("phone_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'phone\')"><i  class="pe-7s-info pe-2x"></i></a>';
//address.value = "";
website.value = "";document.getElementById("website_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'website\')"><i  class="pe-7s-info pe-2x"></i></a>';
email.value = "";document.getElementById("email_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'email\')"><i  class="pe-7s-info pe-2x"></i></a>';
opt.value =  "category";$$( '#category_i' ).css( 'color', 'hsl(0, 0%, 70%)' );document.getElementById("category_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'category\')"><i  class="pe-7s-info pe-2x"></i></a>';
opt.text = "Category";
link.value = "";document.getElementById("link_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;" onclick="getInfo(\'link\')"><i  class="pe-7s-info pe-2x"></i></a>';
//res[0][5] + ',' + res[0][6]  + ',' + res[0][7]  + ',' + res[0][9]  + ',' + res[0][10] ',' + res[0][11];

if (res[0][16]) {email.value = res[0][16];checkForm('email');}
if (res[0][4]) {phone.value = res[0][4];checkForm('phone',6,25);}
if (res[0][15]) {website.value = res[0][15];checkForm('website');}
if (res[0][17]) {opt.value =  res[0][17];opt.text = res[0][17];checkForm('category');}
if (res[0][18]) {link.value = res[0][18];checkForm('link');}





});

$$.getJSON('https://graph.facebook.com/'+ page_id +'?fields=cover,location,category,category_list', function(response){
	
//if (response["location"]["latitude"]) {response["location"]["latitude"]};

var phone = document.getElementById("phone_i");
//var address = document.getElementById("fulladdress2");
var email = document.getElementById("email_i");
var phone = document.getElementById("phone_i");
var website = document.getElementById("website_i");
var opt= document.getElementById('category_i').options[0];

if (opt == "category"){alert(response["category"]);}
//alert(response["category"]);
	
$$('#add_button').remove();



	document.getElementById("coverbutton").innerHTML = '<a href="#" class="button" onclick="addPhoto('+page_id+')" style="height:80px;margin:0 auto;border:none;margin-top:-100px;"><i class="pe-7s-camera pe-5x" ></i></a>';
	var coverpic = response["cover"]["source"];
	$$( '.cover-add' ).css( 'background-image', 'url(\''+ coverpic  +'\')' );
	$$( '.cover-add' ).css( 'background-size', '100%' );
	$$( '.cover-add' ).css( 'background-repeat', 'no-repeat' );

//	$$('.a_' + page_id ).removeClass('total_list');
//	$$('.total_list').remove();
//	$$( '.a_' + page_id ).css( 'background-color', '#5ac8fa' );

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
	
	
	navigator.camera.getPicture( function( imageURI ) {
        $$( '.cover-add' ).css( 'background-image', 'url(\''+ imageURI  +'\')');
moveCover();
      },
      function( message ) {
        alert( message );
      },
      {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
      });
	
}

function getPhoto() {
     
     navigator.camera.getPicture( function( imageURI ) {
        $$( '.cover-add' ).css( 'background-image', 'url(\''+ imageURI  +'\')');
moveCover();
      },
      function( message ) {
        alert( message );
      },
      {
        quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
      });
    }

function openSearch() {


	 var popupHTML = '<div class="popup">'+
'<form class="searchbar"><a href="#" class="close-popup"><i class="icon icon-back" style="margin-right:10px;"></i></a><div class="searchbar-input"><input type="search" placeholder="Search for address" onkeyup="searchPlaces();" id="fulladdress"></div></form>'+
'<div class="content-block">'+
'<a href="#" class="button disabled" id="search_button" style="height:80px;position:absolute;border:none;left:40%;margin-top:50px;"><i class="pe-7s-search pe-5x"></i></a>'+
'<div class="list-block" style="margin-top:-30px;background-color:transparent;"><ul id="resulta" style="background-color:transparent;border:none;padding:0px;margin:0px;"></ul></div>'+

'</div>'+
'</div>'
                  
  myApp.popup(popupHTML);
	
}

function searchPlaces(){
	
var searchvalue = document.getElementById('fulladdress').value;

$$.getJSON('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+ searchvalue +'&key=AIzaSyAssayN33K28DkBxPB8iWOM0NG2-sCNHEk', function(response){
$$("#resulta li").remove();
for (i = 0; i < 10; i++) 
{ 
	

	
$$( '#resulta' ).append('<li style="font-size:16px;padding-left:0px;padding-right:0px;margin-left:0px;margin-right:0px;background-color:transparent;" class="close-popup"><a href="#" onclick="saveAddress(\''+ response.predictions[i].place_id  +'\')" class="item-link"><div class="item-content"><div class="item-inner"><div class="item-title">' + response.predictions[i].description + '</div></div></div></a></li>');
}
});

	
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
if ((id=='expiry' || id=='schedule') && (input > corrected_date)) {document.getElementById(id + "_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>';return;}
if ((id=='expiry' || id=='schedule') && (input == corrected_date)) {document.getElementById(id + "_c").innerHTML = '<a href="#" onclick="errorForm(3);" class="button" style="float:right;border:none;padding:0px;margin-top:10px;"><i class="pe-7s-attention pe-2x" style="color:#ff3b30;"></i></a>';return;}


var length_string = input.length;

if (length_string < min) {document.getElementById(id + "_c").innerHTML = '<a href="#" onclick="errorForm(1);" class="button" style="float:right;border:none;padding:0px;margin-top:10px;"><i class="pe-7s-attention pe-2x" style="color:#ff3b30;"></i></a>';}
if (length_string > max) {document.getElementById(id + "_c").innerHTML = '<a href="#" onclick="errorForm(2);" class="button" style="float:right;border:none;padding:0px;margin-top:10px;"><i class="pe-7s-attention pe-2x" style="color:#ff3b30;"></i></a>';}
if ((id=='title' || id=='description' || id=='terms' || id=='phone') && (length_string > min) && (length_string < max)) {document.getElementById(id + "_c").innerHTML = '<a href="#" class="button" style="float:right;border:none;padding:0px;border-radius:50%;margin-top:10px;"><i  class="pe-7s-check pe-2x"></i></a>'; }



	
var title_i = document.getElementById("title_i");
var description_i = document.getElementById("description_i");
var terms_i = document.getElementById("terms_i");
var expiry_i = document.getElementById("expiry_i");

if((title_i.value != "") && (description_i.value != "") && (terms_i.value != "") && (expiry_i.value != "")){alert('completed required inputs');$$( "#nextbutton" ).removeClass( "disabled" );}
else {alert('have not made required inputs' );}

}

$$( '#upload' ).css( 'color', '#4cd964' );

function gotoThree(){
	
	
	myApp.showTab('#tab3');
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


}

function successForm(id){
	
	
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
