console.log('loaded');
$(document).ready(function(){

	$('#submit').click(function(event) {
		const $value = $("#input-box").val();
        $("#to-do-list").append('<li>' + $value + '</li>');
        });
        $("to-do-list").on('click', 'li', function(x){
        	const list1 = $(this).contents();
        		console.log(list1);
        });
	
}); 
