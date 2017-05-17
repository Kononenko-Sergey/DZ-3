var result = document.querySelector('button');
var test1 = document.getElementById('check1');
var test2 = document.getElementById('check7');
var test3 = document.getElementById('check11');
var testCheckbox1 = document.getElementById('check14');
var testCheckbox2 = document.getElementById('check15');
var testCheckbox3 = document.getElementById('check17');
var testCheckbox4 = document.getElementById('check18');
var testQuestion4 = document.forms.test4;
var testQuestion5 = document.forms.test5;
 var correctsSingle;
 var correctsMult;
 var corectAnsewers;
 var correctsSinglePercentage;
 var correctsMultPercentage;
 var total; 

/*testQuestion4.onchange = function() {
  var checkboxOff = testQuestion4.querySelectorAll('[type="checkbox"]'),
      checkboxOn = testQuestion4.querySelectorAll('[type="checkbox"]:checked');
  for(var j=0; j<checkboxOff.length; j++)
    if (checkboxOn.length >= 2) { 
      	checkboxOff[j].disabled = true; 
      	for(var i=0; i<checkboxOn.length; i++)
        checkboxOn[i].disabled = false; 
    } else {
      	checkboxOff[j].disabled = false; 
    }
} 	 

testQuestion5.onchange = function() {
  var checkboxOff = testQuestion5.querySelectorAll('[type="checkbox"]'),
      checkboxOn = testQuestion5.querySelectorAll('[type="checkbox"]:checked');
  for(var j=0; j<checkboxOff.length; j++)
    if (checkboxOn.length >= 2) { 
      	checkboxOff[j].disabled = true; 
      	for(var i=0; i<checkboxOn.length; i++)
        checkboxOn[i].disabled = false; 
    } else {
      	checkboxOff[j].disabled = false; 
    }
} 
*/

function resultTest(){
	correctsSingle = 0;
	if(test1.checked){
	 		correctsSingle ++;
	 	}
	if(test2.checked){
	 		correctsSingle ++;
	 	}
	if(test3.checked){
	 		correctsSingle ++;
	 	} 	 
	 		

	correctsMult = 0;
	var checkedQuestion4 = document.querySelectorAll('input[name="question4"]:checked');
	if(testCheckbox1.checked
	 	&&	testCheckbox2.checked
		&& checkedQuestion4.length ===2){
	 		correctsMult +=2;
		}

	var checkedQuestion5 = document.querySelectorAll('input[name="question5"]:checked');
	if(testCheckbox3.checked 
		&& testCheckbox4.checked
		&& checkedQuestion5.length ===2){
	 		correctsMult +=2;
		}
	

		
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

 




 





