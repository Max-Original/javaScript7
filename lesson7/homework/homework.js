function fillUp() {
	let arrWord = [ "Hello", "My", "Some", "Bus", "taxi", "pizza", "eat",
			"drink", "friend", "boy", "girl" ];
	let selectInput = document.getElementsByClassName("First");

	document.getElementById("count").textContent = "count = "
			+ selectInput.length;

	for (var i = 0; i < selectInput.length; i++) {
		var array_element = selectInput[i];
		array_element.textContent = arrWord[Math.floor(Math.random()
				* arrWord.length)];
	}
}

function changeBackgroundColor() {
	let selectLi2 = document.querySelectorAll("li>a");

	for (var i = 0; i < selectLi2.length; i++) {
		var selectLi23 = selectLi2[i];
		if (selectLi23.getAttribute("href").indexOf("http") != -1) {
			selectLi23.style.background = "black";
		} else if (selectLi23.getAttribute("href").indexOf("ftp") != -1) {
			selectLi23.style.background = "black";
		} else {
			selectLi23.style.background = "red";
		}
	}
}