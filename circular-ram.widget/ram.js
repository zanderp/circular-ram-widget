command:"ps -e -o %mem | awk '{s+=$1} END {print s}'",

refreshFrequency: 500,

render: function () {
	$('head').append('<link rel="stylesheet" href="circle.css" type="text/css" />');
	return "<div class='ram'></div>";
	},
update: function (output){
	var ret = output.split(".");
	var percentage = ret[0];
	if (percentage > 100){
		percentage = 100;
	}
	$(".ram").html("<div class='clearfix'><div class='c100 p"+percentage+" small'><span>"+percentage+"%</span><div class='slice'><div class='bar'></div><div class='fill'></div></div></div></div>");
		
	},

style: "        \n\
  top: 300px     \n\
  left: 160px     \n\
  color: #fff     \n\
  font-family: Helvetica Neue     \n\
  "