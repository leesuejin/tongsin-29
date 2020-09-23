/* $.ajax({
	type:'get'
	dataType:'json'
	url:'../json/scores.json'
	success:function(r){
		
	}
});

//$.get(url,sendData,callBack)
$.get('http//192.168.0.14:5000/json/score.json',) */
function(r){
	var html='';
	for(i in r.students){
		html+='<tr>';
		html+='<td>'+(Number(i)+1)+'</td>';
		html+='<td>'+r.students[i].name+'</td>';
		html+='<td>'+r.students[i].kor+'점</td>';
		html+='<td>'+r.students[i].eng+'점</td>';
		html+='<td>'+r.students[i].math+'점</td>';
	
		html+='</tr>';
	}

$.ajax({
	type:'get'
	dataType:'json'
	url:'http//192.168.0.14:5000/json/score.json'
	success:dataMaker
	}
});
var url = 'http://api openweathermap.com/data/2.5/weather'

function onWeather(){
	var key = '';
	var city='1835848';
	var units='metric';
	var sendData = {
		appid:'dc4167553b066505399072d649d1af84',
		id:1835848,
		units:'metric'
	};
	var success = function(r){
		console.log(r)
		$("#weatherTbl .temp-td").html(r.main.temp+'도 (체감온도:' + r.main.feel_like+'도)');
		$("#weatherTbl .weather-td").html(r.weather[0].main+'('+r.weather[0].decription+')');
	}
	$.get(ul,data,success);
}



$("#btnMy").click(onAjax);
$("#btnTeacher").click(onAjaxTeacher);