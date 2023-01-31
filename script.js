function count(){
	var total=document.getElementById("evaluatedText").value;
  total=total.replace(/\s/g, '');
  document.getElementById("wordCount").innerHTML= +total.length;
}