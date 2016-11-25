// Created by Jeff LaPlante Photography, Copyright 2008 
// Global Website Functions for www.susiehamidi.com
 
var gallery_main_bg = "#ffffff";
var gallery_main_key = "#7f7f7f";
		
		function init(){
			resizePage();
			reactToQueryString();
		}
		
		function reactToQueryString(){
			var qs = window.location.search;
			qs = qs.substr(1);
			qsArray = new Array();
			qsArray = qs.split('&');
			
			switch(qsArray[0]){
				case "reviews":
					click_referrals();
				break;
				case "portfolio":
					click_portfolio();
					if(qsArray[1]){
						startSlideshow(qsArray[1]);
					}
				break;
				case "philosophy":
					click_philosophy();
				break;
				case "moments":
					click_gallery_moments();
					setTimeout("startSlideshow('Moments')", 10); // pause for safari
				break;
				case "stories":
					if(qsArray[1]){
						setup_slideshow();
						setTimeout('startSlideshow(qsArray[1])', 10);
					}else{
						click_gallery_destinations('1');
					}
				break;
				case "destinations":
					if(qsArray[1]){
						setup_slideshow();
						setTimeout('startSlideshow(qsArray[1])', 10);
					}else{
						click_gallery_destinations();
					}
				break;
				case "slideshows":
					if(qsArray[1]){
						setup_slideshow();
						setTimeout('startSlideshow(qsArray[1])', 10);
					}else{
						click_destinations();
					}
				break;
				case "stories2":
					click_gallery_destinations('2');
				break;
				case "share":
					click_clients();
				break;
				case "contact":
					click_contact();
				break;
				case "photographers":
					click_photographers();
				break;
				case "about":
					click_biography();
				break;	
				case "affiliations":
					click_affiliations();
				break;	
				case "sharlane":
					click_sharlane();
				break;
				case "aboutsharlane":
					click_sharlane_bio();
				break;
				case "pricing":
					click_pricing();
				break;
				case "published":
					if(qsArray[1]){
						click_published(qsArray[1]);
					}else{
						click_published(0);
					}
				break;
				case "on":
					displayOn("main");
					displayOn(qsArray[1]);
				break;
				default:
					doDefaultLayout();	
			}
		}
		
		function doDefaultLayout(){
			allOff();
			displayOn("main");
			continueDefaultLayout();
		}
		
		function continueDefaultLayout(){
			displayOn('logo');
			displayOn("nav");
			set_photo(randomizeImage());
		}
		
		var images = new Array();
		//images[0] = "img/rotate/rotate_01.jpg";
		//images[1] = "img/rotate/rotate_02.jpg";
		//images[2] = "img/rotate/rotate_03.jpg";
		//images[3] = "img/rotate/rotate_04.jpg";
		//images[3] = "img/rotate/rotate_05.jpg";
		//images[4] = "img/rotate/rotate_06.jpg";
		//images[2] = "img/rotate/rotate_07.jpg";
		//images[6] = "img/rotate/rotate_08.jpg";
		//images[7] = "img/rotate/rotate_09.jpg";
		//images[5] = "img/rotate/rotate_10.jpg";
		//images[6] = "img/rotate/rotate_11.jpg";
		//images[7] = "img/rotate/rotate_12.jpg";
		//images[11] = "img/rotate/rotate_13.jpg";
		//images[0] = "home/img/rotate/rotate_14.jpg";
		images[0] = "home/img/rotate/main.jpg";
		//images[9] = "img/rotate/rotate_15.jpg";	
						
		
		function randomizeImage(){
			index = Math.floor(Math.random() * images.length);
			return images[index];
		}	
		
		// Cycle through images on main page
		function changeMainImage(inc){
			if(inc == 0){
				photoIndex--;
				if(photoIndex < 0){photoIndex = 0;}
			}else{
				photoIndex++;
				if(photoIndex >= images.length){photoIndex = images.length - 1;}
			}
			getElement('mainImageCount').innerHTML = photoIndex;
			set_photo(images[photoIndex]);
		}
		
		function resizePage(){
			var winW = 1000;
			var winH = 750;
			var mainW = 900;
			var mainH = 600;
			var gap = 10;
			var navW = 900;
			var navH = 20;
			var offsetW = 20;
			var offsetH = 20;
			
			if (window.innerWidth) {
			  winW = window.innerWidth;
			  winH = window.innerHeight;
			}else if (document.body.offsetWidth) {
			  winW = document.body.offsetWidth;
			  winH = document.body.offsetHeight;
		 	}
			
			// combined space used by the overall layout
			var usedSpace = parseInt(mainH + gap + navH);
			
			offsetW = (winW - mainW)/2;
			offsetH = (winH - mainH - gap - navH)/2;
			
			if(offsetW < 0) offsetW = 0;
			if(offsetH < 0) offsetH = 0;
			
			// If the viewport height is not large enough then scale down the main div height
			var overUnder = winH - usedSpace;
			if(overUnder > 0) overUnder = 0;
			
			var adjustedMainH = mainH + overUnder;
			
			setInfo("");
			//setInfo("<br>h:" + winH + "  w:" + winW + " us:" + usedSpace );
			
			if(winH < usedSpace){
				document.getElementById('main').style.height = (winH - navH - gap) + 'px';
			}else{
				document.getElementById('main').style.height = mainH + 'px';
			}
			
			// move main, nav and logo
			if(document.getElementById('main')){
				document.getElementById('main').style.top = offsetH + 'px';
				document.getElementById('main').style.left = offsetW + 'px';
			}
			
			if(document.getElementById('nav')){
				document.getElementById('nav').style.top = (offsetH + adjustedMainH + gap) + 'px';
				document.getElementById('nav').style.left = offsetW + 'px';
			}
			
			if(document.getElementById('logo')){
				document.getElementById('logo').style.top = (offsetH - 45) + 'px';
				document.getElementById('logo').style.left = (offsetW + 5) + 'px';
			}
		}
		
		function setInfo(text){
			document.getElementById('info').innerHTML = text;
		}
		
		function getInfo(){
			return document.getElementById('info').innerHTML;
		}
		
		function getElement(aID){
         	var rv = (document.getElementById) ? document.getElementById(aID) : document.all[aID];
         	//alert("id:" + aID + " value:" +  rv);
         	//rv = document.getElementById(aID);
         	return rv;
       	}
       	
       	function showBasicElements(){
       		displayOn("logo");
			displayOn("main");
			displayOn("nav");
       	}
		
		function allOff(){
			displayOff('logo');
			displayOff("main");
			displayOff("nav");
			displayOff('affiliations');
			displayOff('logoRotate');
			displayOff('slideshowAperture');
			displayOff('about');
			displayOff('contact');
			displayOff('clients');
			displayOff('events');
			displayOff("frontPageNews");
			displayOff("galleryControls");
			displayOff("primaryGalleryIcons");
			displayOff("destinationGalleryIcons1");
			displayOff("destinationGalleryIcons2");
			displayOff("sharlane");
			displayOff("sharlaneLogo");
			displayOff("photoByJeffLaPlante");
			displayOff("philosophyText");
			displayOff("magazineSpreads");
			displayOff("magazineSpreads1");
			displayOff("magazineSpreads2");
			displayOff("magazineSpreads3");
			displayOff("reallifetag");
		}
		
		function click_philosophy(){
			allOff();
			showBasicElements();
			//displayOn("philosophyText");
			setMainDivColor("#000");
			//set_photo("home/img/gallery.jpg");
			set_photo("pages/philosophy.jpg");
		}
		
		function click_published(page){
			allOff();
			showBasicElements();
			//set_photo("home/img/affiliations.jpg");
			set_photo("pages/published.jpg");
			
			if(page == 0){
				set_photo("pages/published.jpg");
				displayOn("magazineSpreads");
			}else if(page == 1){
				set_photo("");
				displayOn("magazineSpreads1");
			}else if(page == 2){
				set_photo("");
				displayOn("magazineSpreads2");
			}else if(page == 3){
				set_photo("");
				displayOn("magazineSpreads3");			
			}
	}
		
		function click_portfolio(){
			allOff();
			setMainDivColor("#FFF");
			showBasicElements();
			displayOn("galleryText");
			displayOn("reallifetag");
			displayOn('primaryGalleryIcons');
		}
		
		function setup_slideshow(){
			allOff();
			displayOn('slideshowAperture');
			showBasicElements();
			setMainDivColor(gallery_main_bg);
			//set_logo("img/susieHamidi.png");
		}
		
		function click_gallery_moments(){
			allOff();
			showBasicElements();
			displayOn('slideshowAperture');
			setMainDivColor(gallery_main_bg);
		}
		
		function click_gallery_destinations(page){
			allOff();
			displayOn("destinationGalleryIcons" + page);
			showBasicElements();
			setMainDivColor("#fff");
		}
		
		function click_gallery_family(){
			allOff();
			displayOn('slideshowAperture');
			showBasicElements();
			setMainDivColor(gallery_main_bg);
		}
		
		function click_referrals(){
			allOff();
			showBasicElements();
			setMainDivColor("#FFF");
			set_photo("pages/reviews.jpg");
		}
		
		function click_biography(){
			allOff();
			set_photo("pages/susie.jpg");
			showBasicElements();
			displayOn("photoByJeffLaPlante");
			displayOn("susie_portfolio_link");
		}
		
		function click_photographers(){
			allOff();
			setMainDivColor("#000");
			//displayOn('photographers');
			set_photo("pages/photographers.jpg");
			displayOn("susie_portfolio_link2");
			displayOn("wpja_link");
			showBasicElements();
		}
		
		function click_contact(){
			allOff();
			setMainDivColor("#000");
			displayOn('contact');
			showBasicElements();
			set_photo("home/img/contact.jpg");
		}
		
		function click_pricing(){
			allOff();
			showBasicElements();
			set_photo("pages/pricing.jpg");
		}
		
		function click_clients(){
			allOff();
			displayOn('clients');
			showBasicElements();
			set_photo("home/img/share.jpg");
		}
		
		function click_affiliations(){
			allOff();
			displayOn('affiliations');
			displayOn('logoRotate');
			set_photo("home/img/affiliations.jpg");
			showBasicElements();
		}
		
		function click_sharlane(){
			allOff();
			setMainDivColor("#000");
			displayOn('sharlaneGalleryIcons');
			displayOn('sharlaneLogo');
			showBasicElements();
		}
		
		function click_sharlane_bio(){
			allOff();
			setMainDivColor("#000");
			set_photo("pages/sharlane.jpg");
			showBasicElements();
			displayOn("shar_portfolio_link");
			displayOn("urban_unveiled_link");
		}
		
		
		// Click on ContactMe Link to show Contact Form
		function click_contactMeLink(){
			displayOff('contactLink');
			displayOn('contact');
		}
		
		
		// Load slideshow iFrame with a new slideshow url
		function startSlideshow(slideshow){
			show_url = 'http://www.susiehamidi.com/home/slideshows/' + slideshow + '/index.html';
			//show_url = './home/slideshows/' + slideshow + '/index.html';
			frames['iFrameSlideshow'].location.href = show_url;
		}
		
		// Toggle display of DIV
		function toggleDisplay(me){
			if (me.style.display=="inline" || me.style.display=="block"){
				me.style.display="none";
			}
			else {
				me.style.display="block";
			}
		}
		
		// Turn on a DIV
		function displayOn(me){
			var elem = getElement(me);
			if(elem){
				elem.style.display="block";
			}
		}
		
		// Turn off a DIV
		function displayOff(me){
			var elem = getElement(me);
			if(elem){
				elem.style.display="none";
			}
		}
		
		// Sets the background image on the main DIV
		function set_photo(img_path){
			if(img_path){
				getElement("main").style.background='url('+ img_path +')';			
			}else{
				getElement("main").style.background='none';
			}
		}
		
		// Sets the image used for the logo
		function set_logo(img_path){
			if(img_path){
				getElement("logo_image").src=img_path;
			}
		}
		
		// Sets the image used for Real Life is Beautiful image
		function set_real_life(img_path){
			if(img_path){
				//alert("set real_life");
				getElement("real_life_image").src=img_path;	
			}
		}
		
		// Sets the background color on the main DIV
		function setMainDivColor(hexColor){
			getElement("main").style.background=hexColor;
			return true;
		}
		
		//Fade Out an element
		function fadeOut(elementName){
			e = getElement(elementName);
		
			opacity = e.style.MozOpacity;
			opacity-=0.10;
			
			e.style.MozOpacity=opacity;
			e.style.Opacity=opacity;
			
			if(opacity > 0) {
				setInterval("fadeOut('" + elementName + "')", 200);
			}
		}
		
		// Fade In an Element
		var fadeInOpacity = 0;
		function fadeIn(elementName){
			e = getElement(elementName);
			opacity = e.style.MozOpacity;

			fadeInOpacity = fadeInOpacity + .1;
			
			e.style.MozOpacity=fadeInOpacity;
			e.style.Opacity=fadeInOpacity;
						
			if(fadeInOpacity < .8) {
				setInterval("fadeIn('" + elementName + "')", 200);
			}
		}

		// Function to fix PNG transparency problems in IE
		var arVersion = navigator.appVersion.split("MSIE")
		var version = parseFloat(arVersion[1])
		
		function fixPNG(myImage) 
		{
		    if ((version >= 5.5) && (version < 7) && (document.body.filters)) 
		    {
		       var imgID = (myImage.id) ? "id='" + myImage.id + "' " : ""
			   var imgClass = (myImage.className) ? "class='" + myImage.className + "' " : ""
			   var imgTitle = (myImage.title) ? 
				             "title='" + myImage.title  + "' " : "title='" + myImage.alt + "' "
			   var imgStyle = "display:inline-block;" + myImage.style.cssText
			   var strNewHTML = "<span " + imgID + imgClass + imgTitle
		                  + " style=\"" + "width:" + myImage.width 
		                  + "px; height:" + myImage.height 
		                  + "px;" + imgStyle + ";"
		                  + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
		                  + "(src=\'" + myImage.src + "\', sizingMethod='scale');\"></span>"
			   myImage.outerHTML = strNewHTML	  
		    }
		}


		// AJAX FUNCTIONS
		function retrieveURL(url, element) {
		    if (window.XMLHttpRequest) { // Non-IE browsers
		      req = new XMLHttpRequest();
		      nesbit = element;
		      req.onreadystatechange = processStateChange;
		      try {
		      	// alert("get " + url);
		        req.open("GET", url, true);
		      } catch (e) {
		        alert(e);
		      }
		      req.send(null);
		    } else if (window.ActiveXObject) { // IE
		      req = new ActiveXObject("Microsoft.XMLHTTP");
		      if (req) {
		        nesbit = element;
		        req.onreadystatechange = processStateChange;
		        req.open("GET", url, true);
		        req.send();
		      }
		    }
		}
		 
		function processStateChange() {
		  	//alert("readyState " + req.readyState);
		    if (req.readyState == 4) { // Complete
		      if (req.status == 200) { // OK response
		        getElement(nesbit).innerHTML = req.responseText;
		        //alert("response ok.  --> " + req.responseText );
		      } else {
		        alert("Problem: " + req.statusText + ": " + req.status);
		      }
		    }
		}
