$(function() {
	$("#submitRequest").click(function() {
		alert("Form has been submit");
	});
});
$(function() {
	$(".reset").click(function() {
		$("#othersInfo").hide();
		$(this).closest('form').find("input[type=text], textarea").val("");
		$(this).closest('form').find('input[type=radio]').prop('checked', false);	
	});
});
$(function() {
	$('input:radio[name="dbclass"]').change(function() {
		if ($(this).is(':checked') && $(this).val() == 'Others') {
			$("#othersInfo").show();
		}else{
			$("#othersInfo").hide();
		}
	});
});
$(function() {
    var $radios = $('input:radio[name=dbclass]');
    if($radios.is(':checked') === false) {
        $radios.filter('[value=Friends]').prop('checked', true);
    }
});
