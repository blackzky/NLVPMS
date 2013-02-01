

$(function(){
	$PER_PAGE = 3;
	var total = $("#total");

	$("#pages").change(function(){
		total.text( (this.value * $PER_PAGE).toFixed(2) );
	});
	
	$("#print-btn").click(function(){
		//add print record to db
		//trap if zero
		console.log("add print record" + total.text());
	});
});