$(function() {

	$('#button-keanu').on('click', function(){
		$(this).toggleClass('btn-default btn-primary');
		$('#anchor-keanu').toggleClass('hidden');
		$('#keanu').toggleClass('hidden');
	});

	$('#button-eminem').on('click', function(){
		$(this).toggleClass('btn-default btn-warning');
		$('#anchor-eminem').toggleClass('hidden');
		$('#eminem').toggleClass('hidden');
	});

});