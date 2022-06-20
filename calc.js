var e = '';
var f = '';
var num = [];
var ans;
function sendNum(digit){

	num.push(digit);

	if(num.length != 1){
		e = '';
		document.getElementById('screen').innerHTML = e;		
	}


	for(j=0; j<num.length ; j++){

		e = e + num[j];				
	}

document.getElementById('screen').innerHTML = e;	

	
}


function equalTo(){
	document.getElementById('screen').innerHTML = '';

	for(j=0; j<num.length ; j++){

		f += num[j];						
	}

	ans = eval(f);	

	document.getElementById('screen').innerHTML = ans;		
	while(num.length > 0){
    	num.pop();				
	}

	num.push(ans.toString());

	
}



function clearScr(){
	document.getElementById('screen').innerHTML = '';
	
	while(num.length > 0){
    	num.pop();				
	}

	e ='';	
	f ='';
}