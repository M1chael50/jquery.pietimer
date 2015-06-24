
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


var Time = getParameterByName('Time');

if ( Time != "") { 
       var duration = Time * 60;
	} else {
	   duration = 900;
	}
	
var Meeting = getParameterByName('Meeting');
if ( Meeting == "") { 
       Meeting = "Daily StandUp";
	}
	   
    $(function() {
      $('#timer1').pietimer({
          timerSeconds: duration,
          color: '#8B0000',
          fill: false,
          showPercentage: true,
          callback: function() {
              alert("End of Meeting!");
              $('#timer1').pietimer('reset');
          }
      });
    });
	
	function get_action(form) {
        form.action = "Timerform_action";
    }
	function radio_onload(){
document.getElementById(Meeting).checked="checked";
}