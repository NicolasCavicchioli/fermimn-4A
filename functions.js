// Cavi was here
function classFilter(){
	const inputValue = document.getElementById("calendar_filter_input").value.toUpperCase();
	const counter = document.getElementById("calendar_filter_counter");
	var n = 0;
	
	if (inputValue) {
		
		for (let element of document.getElementsByClassName("calendar_entry")){
			element.classList.remove("active");
			
			element.getAttribute("data-class").split(" ").forEach(klass => {
				if (klass == inputValue){
					element.classList.add("active");
					n++;
				}
			});
			
		}
		
	}
	
	counter.innerHTML = (n == 0 && !inputValue) ? "" : n + " found";
	
}