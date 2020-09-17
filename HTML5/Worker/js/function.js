var w;
function startWorker(){
	if(typeof(Worker)!=="undefined"){
		if(typeof(w)=="undefined"){
			w=new Worker("js/demo_workers.js");
		}
		w.onmessage=function(event){
			document.getElementById("result").innerHTML=event.data;
		};
	}else{
		document.getElementById("result").innerHTML="浏览器不支持";
	}
}
function stopWorker(){
	w.terminate();
	w=undefined;
}
