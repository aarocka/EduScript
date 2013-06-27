var toggled = false;
$(document).ready(function() {
	$("#drawertrigger").click(function(event) {
		if (!toggled) {
			$("#eduslider").addClass("expanded");
			$("#body").addClass("expanded");
			$("#eduslider").removeClass("nexpanded");
			$("#body").removeClass("nexpanded");
		} else {
			$("#eduslider").removeClass("expanded");
			$("#body").removeClass("expanded");
			$("#eduslider").addClass("nexpanded");
			$("#body").addClass("nexpanded");
		}
		toggled = !toggled;
	});
});