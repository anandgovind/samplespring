$.ajax({url: "/users/", success: function(result){
	$('.carousel').carousel();
	result.data.forEach(function(item,index){
		console.log(item)
    	if(index===1){
    		$(".carousel-inner").append('<div class="item active"><img src='+item.links.logo+' alt="..." data-holder-rendered="true"><div class="carousel-caption"><h3>'+item.name+'</h3><p class="truncate">'+item.description+'</p><p>'+item.phone+'</p></div></div>');
    		$('.carousel-indicators').append("<li data-target='#carousel-example-generic' class='active' data-slide-to='"+index+"'></li>")
    	}else{
    		$(".carousel-inner").append('<div class="item"><img src='+item.links.logo+' alt="..." data-holder-rendered="true"><div class="carousel-caption"><h3>'+item.name+'</h3><p class="truncate">'+item.description+'</p><p>'+item.phone+'</p></div></div>');
$('.carousel-indicators').append("<li data-target='#carousel-example-generic' data-slide-to='"+index+"'></li>")    
    	}
		    })
    
}});