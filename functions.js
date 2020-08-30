function classFilter(){
	const inputValue = document.getElementById("calendar_filter_input").value.toUpperCase();
	const counter = document.getElementById("calendar_filter_counter");
	var n = 0;
	
	if (inputValue) {
		document.getElementsByClassName("calendar_wrapper")[0].classList.add('onlyActive');
		
		for (let element of document.getElementsByClassName("calendar_entry")){
			element.classList.remove("active");
			
			element.getAttribute("data-class").split(" ")
			.forEach(klass => {
				if (klass == inputValue){
					element.classList.add("active");
					n++;
				}
			});
		}
	} else {
		document.getElementsByClassName("calendar_wrapper")[0].classList.remove('onlyActive');
	}
		
	counter.innerHTML = (n == 0 && !inputValue) ? "" : n + " Found";
}