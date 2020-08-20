// Cavi was here
function classFilter(){
	const inputValue = document.getElementById("calendar_filter_input").value.toUpperCase();
	var n = 0;
	
	if (!inputValue) return;
	for (let element of document.getElementsByClassName("calendar_entry")){
		element.classList.remove("active");
		
		element.getAttribute("data-class").split(" ").forEach(klass => {
			if (klass == inputValue){
				element.classList.add("active");
				n++;
			}
		});
		
	}
	
	// counter
	document.getElementById("calendar_filter_counter").innerHTML = (n == 0) ? "" : n + "found";
	
}