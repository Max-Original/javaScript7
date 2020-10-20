function selectByIdElement(){
	console.log(content);
	console.log(window['content-holder']);
}

function changeColor(){
	let contentElement = document.getElementById("content");
	let color = contentElement.style.background;
	
	switch(color){
	case"white":
		contentElement.style.background = "yellow";
		break;
	case"yellow":
		contentElement.style.background = "black";
		break;
	case"black":
		contentElement.style.background = "blue";
		break;
	default: contentElement.style.background = "white";
	break;
	}	
}
	
function selectByTagName(){
	let tableElement = document.getElementById("custom-table");
	let elements = tableElement.getElementsByTagName("input");
	
	for (var i = 0; i < elements.length; i++) {
		var current_element = elements[i];
		console.log(current_element.attributes.value.nodeValue + "--->" + current_element.checked);
	}
}

function useQuerySelector(){
	let elements = document.querySelectorAll("ul>li:last-child");
	for (let i = 0; i < elements.length; i++) {
		let currentElement = elements[i];
		console.log(currentElement.innerHTML);
		currentElement.innerHTML = "---";
	}
}

function selectCustomAttributes(){
	let element = document.getElementById("divWithCustomAttributes");
	console.log(element.getAttribute("data-about"));
	console.log(element.getAttribute("data-something-and-something"));
//	does the same
	console.log(element.dataset.about);
	console.log(element.dataset.somethingAndSomething);
	
}