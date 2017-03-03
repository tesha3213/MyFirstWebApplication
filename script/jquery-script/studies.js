$(function(){
	$('tr').each(function(){
		$(this).on('click', function(){
			console.log(this.innerHTML);
		});
	});

	$('.my-content').each(function(){
		$(this).on('mouseover', function(){
				$('#my-td').html('<span class="my-td-span">' + $(this).text() +'<span>');
		});

		/*$(this).on('click', function(){
			var isHighlighted = $(this).hasClass('highlighted');
			$('.highlighted').removeClass('highlighted');
			if (!isHighlighted) {
				$(this).addClass('highlighted');
			}
			
		});*/
	});
});