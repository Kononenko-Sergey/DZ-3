var numbers = document.querySelectorAll('button.number');
var screen = document.querySelector('input');
var previousValue;
function handler(){
	if(newNamberEntered != true){
		screen.value = "";
	}
	if(equalButtonPressed === true){
		previousValue = undefined;
		conditionCalculation = undefined;
		screen.value = "";
		equalButtonPressed = false;
	}
	newNamberEntered = true;
	screen.value += this.textContent;
}
numbers.forEach(function (number){
	number.addEventListener('click',handler);
})


var calculation = document.querySelectorAll('button.calculation');
var screen = document.querySelector('input');
var conditionCalculation;
var newNamberEntered;
function handlerCalculation(){
		procedClculation();
	conditionCalculation = this.textContent;
	previousValue = screen.value;
	newNamberEntered = false;
}
calculation.forEach(function (calculation){
	calculation.addEventListener('click',handlerCalculation);
})


var dot = document.querySelectorAll('button.dot');
var screen = document.querySelector('input');
function handlerDot(){
	if(screen.value === ""){

	}else if(screen.value.indexOf('.')>=0){
	
	}else {
		screen.value += this.textContent;
	}
}
dot.forEach(function (dot){
	dot.addEventListener('click',handlerDot);
})
var minusNamber = document.querySelectorAll('button.minus-namber');
var screen = document.querySelector('input');
function handlerMinusNamber(){
	if(screen.value === ""){

	}else {
		var b = +screen.value;
		b= b * (-1);
		screen.value = b;
	}
}
minusNamber.forEach(function (minusNamberButton){
	minusNamberButton.addEventListener('click',handlerMinusNamber);
})


var reset = document.querySelectorAll('button.reset');
var screen = document.querySelector('input');
function handlerReset(){
	screen.value='0';
	newNamberEntered = false;
	previousValue = undefined;
	conditionCalculation = undefined;
}
reset.forEach(function (reset){
	reset.addEventListener('click',handlerReset);
})


var equally = document.querySelectorAll('button.button-equally');
var screen = document.querySelector('input');
var equalButtonPressed;
function procedClculation(){
	var a = +previousValue;
	var b = +screen.value;
	
		if (conditionCalculation === '+'){
		screen.value = a + b;
	}else if(conditionCalculation === '-'){
		screen.value = a - b;
	}else if(conditionCalculation === '*'){
		screen.value = a * b;
	}else if(conditionCalculation === '/' ){
		if(screen.value === '0'){
			alert('it is impossible!!!');
		}else{
			screen.value = a / b;
		}
	}
}
function handlerEqually(){
	procedClculation();
	equalButtonPressed = true;
};
equally.forEach(function (equally){
	equally.addEventListener('click',handlerEqually);

})
