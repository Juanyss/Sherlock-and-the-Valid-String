document.ready
{
	// validate if input is empty or if it's too long
	$("#validate").click(function(){
		if (document.getElementById("string").value.length < 1 || 
			document.getElementById("string").value.length > 100.000){

			alert("String empty or too long (max 100.000 characters long)");
		} else {
			validateString();
		}
	})

	
	// allow letters and whitespaces only.
    $("#string").keypress(function(event){
        var inputValue = event.which;        
        if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
        }
    });
	

	function validateString(){
		//get String from input
		var stringValidation = document.getElementById("string").value;

		//create array from every element on string
		arrayString = [];
		for(i=0;i<stringValidation.length;i++){
			arrayString.push(stringValidation[i]);
		}
		arrayString.sort();


		// create array with no repeat elements
		var uniqueItems = Array.from(new Set(stringValidation));
		
		// create a array with the amount of repeat chars on String (using previus create array)
		var charCount = uniqueItems.map(function(x){
			var ctn = 0;
			for(i=0;i<arrayString.length;i++){
				if(arrayString[i] == x){
					ctn++;
				}
			}
			return ctn;
		})
	
		// calculate the diference beetwen the character with lowest amount and higher amount
		if ((Math.max.apply(null, charCount)-(Math.min.apply(null, charCount))) < 2 ){
			document.getElementById("result").innerHTML = "YES";
		} else {
			document.getElementById("result").innerHTML = "NO";
		}
	}
}

