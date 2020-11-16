 new Slide({
slide:["../img/slide-0.jpg","../img/slide-1.jpg","../img/slide-2.jpg","../img/slide-3.jpg"],
container:".main-stage",
direction:"hori",//hori(기본값), vert, fade
autoStart:true,//false(기본값),true
gapSpeed:4000,//3000(기본값)
aniSpeed:750//500(기본값)
});


new Slide({
slide:["../img/home-2.jpg","../img/home-3.jpg","../img/home-4.jpg"],
container:".prd-stage",
direction:"vert",//hori(기본값), vert, fade
autoStart:true,//false(기본값),true

});

new Slide({
	slide:["../img/home-2.jpg","../img/home-3.jpg","../img/home-4.jpg"],
	container:".fade-stage",
	direction:"fade",//hori(기본값), vert, fade
	autoStart:true,//false(기본값),true

	});