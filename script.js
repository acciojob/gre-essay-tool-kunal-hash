function count(){
	let textbox = document.getElementById("evaluatedText").value;
	let count = document.getElementById("wordCount");

	let length = textbox.length;
	count.innerHTML=length;
}