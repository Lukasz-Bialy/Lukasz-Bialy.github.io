var list = document.querySelectorAll("a");
list.forEach(function(elem,i){
	if(elem.href.search("#") !== -1){
		elem.style.color = "green";
	}
});