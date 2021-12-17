const reportDetail =[ 
  { name: 'Sarkhej', humidityIndex: 50 },
  { name: 'Vasna', humidityIndex: 15 },
  { name: 'Paldi', humidityIndex: 70 },
  { name: 'Maninagar', humidityIndex: 60 },
  { name: 'Juhapura', humidityIndex: 40 },
  { name: 'Thaltej', humidityIndex: 20 }
]


let list = document.getElementById("list");


window.onload = function(){
  for (let i=0; i<= reportDetail.length; i++){
  
    let opt = document.createElement('option');
    opt.value = reportDetail[i].name;
    opt.innerHTML = reportDetail[i].name; 
    list.appendChild(opt);
 
  }
}





  

 function areaDetail(event){
	       
      document.querySelector('div.info-1').innerHTML = list.options[list.selectedIndex].text;
     
}
  
function humidityInfo(e){
  for(x=0; x<= reportDetail.length; x++){
    if(reportDetail[x].name === list.options[list.selectedIndex].text){
      document.querySelector('div.info-2').innerHTML =
      list.options[list.selectedIndex].text;
    

  }
}
}


document.body.addEventListener('click', runEvent);
function runEvent(e){
  console.log(e.target);
}

