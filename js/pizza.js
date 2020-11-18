function getReciept() {
	// initializes a string to be passed between functions until it's a full receipt
	let text1 = "<h3>You Ordered:</h3>";
	let runningTotal = 0; // intialize the total, to be passed along
	let sizeTotal = 0;
	// puts the possible selections into an array
	let sizeArray = document.getElementsByClassName("size");
	// iterate through array to add cost to runningTotal depending on selection
	for (let i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Small Pizza") {
		sizeTotal = 8;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	} else if (selectedSize === "Absurdly Large Pizza") {
		sizeTotal = 910;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	// variables are passed to each function
	getVeg(runningTotal, text1);
}

function getVeg(runningTotal, text1) {
	let vegTotal = 0;
	let selectedVeg = [];
	// put number of veg possibilities into array
	let vegArray = document.getElementsByClassName("vegs");
	console.log(vegArray);
	// iterate through array to determine how many possibilities were selected
	for (let j = 0; j < vegArray.length; j++) {
		if (vegArray[j].checked) {
			selectedVeg.push(vegArray[j].value);
			console.log("selected veg item: ("+vegArray[j].value+")");
			text1 = text1+vegArray[j].value+"<br>";
		}
	}
	// each veg selected is passed along to `runningTotal` as $1
	// if more than one veg was selected, subtract $1 from the cost passed along
	let vegCount = selectedVeg.length;
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
	} else {
		vegTotal = 0;
	}
	runningTotal = (runningTotal + vegTotal);
	console.log("total selected veg items: "+vegCount);
	console.log(vegCount+" veg - 1 free veg = "+"$"+vegTotal+".00");
	console.log("veg text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	// variables are passed to each function
	getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
	let toppingTotal = 0;
	let selectedTopping = [];
	// put number of topping possibilities into array
	let toppingArray = document.getElementsByClassName("toppings");
	console.log(toppingArray);
	// iterate through array to determine how many possibilities were selected
	for (let j = 0; j < toppingArray.length; j++) {
		if (toppingArray[j].checked) {
			selectedTopping.push(toppingArray[j].value);
			console.log("selected topping item: ("+toppingArray[j].value+")");
			text1 = text1+toppingArray[j].value+"<br>";
		}
	}
	// each topping selected is passed along to `runningTotal` as $1
	// if more than one topping was selected, subtract $1 from the cost passed along
	let toppingCount = selectedTopping.length;
	if (toppingCount > 1) {
		toppingTotal = (toppingCount - 1);
	} else {
		toppingTotal = 0;
	}
	runningTotal = (runningTotal + toppingTotal);
	console.log("total selected topping items: "+toppingCount);
	console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
	console.log("topping text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}