var result = document.querySelector('button');
 var correctsSingle;
 var correctsMult;
 var corectAnsewers;
 var correctsSinglePercentage;
 var correctsMultPercentage;
 var total; 


 function resultTest(){
 	correctsSingle = 0;
	var correctSingleAnswers = document.querySelectorAll('input.single-answer.correct');
	correctSingleAnswers.forEach(function(element){
 		if(element.checked){
	 		correctsSingle ++;
	 	}
 	});	
 	
 	correctsMult = 0;
 		//----
 	var correctMultAnswers = document.querySelectorAll('input.multiple-answer.correct')
 	correctMultAnswers.forEach(function(element){
 		if(element.checked){
	 		correctsMult ++;
		}
 	});
 
 	corectAnsewers = correctsSingle + correctsMult;
  	correctsSinglePercentage = correctsSingle * 16.66;
  	correctsMultPercentage = correctsMult * 12.5;
  	total = (correctsSinglePercentage + correctsMultPercentage).toFixed(2);
  	if ( total > 99){
  		total = 100;  
  	}
  
  	 alert('\n Количеством баллов - из 7 у вас: '+corectAnsewers  
  	 	+' \n Процент верных ответов - из 100% у вас: ' +total );
 }
 result.addEventListener('click',resultTest);

 




 





