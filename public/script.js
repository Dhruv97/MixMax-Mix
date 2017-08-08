$(() => {
	$('.js-insert').click((e) => {
		e.preventDefault();

		var frame_src = document.getElementById('playlist').src

		Mixmax.done({
			src: frame_src
		});	
	});
})



var isMixmax = !!window.opener;
console.log(isMixmax);	
if(!isMixmax) {

	$(".js-insert").hide();
}
