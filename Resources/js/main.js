$(document).ready(function() {
  $('#simple-menu').sidr();
});



var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");