var myIndex = 0; 
var myInt1Index = 0;
var myInt2Index = 0;
var myInt3Index = 0;

carousel1(); 
carousel2();
carousel3();
carousel4();


function carousel1() {
	var i;
	var x = document.getElementsByClassName("HeaderSlide");
	var y = document.getElementById("project-title1");
	var z = document.getElementById("project-title2");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}

	// if(myIndex !== 1) {
	// 	y.style.display = "none";
	// 	z.style.display = "none";
	// }
	// else {
	// 	y.style.display = "block"
	// 	z.style.display = "block"
	// }

	x[myIndex-1].style.display = "block";
	setTimeout(carousel1, 2000);
}

function carousel2() {
	var i; 
	var x = document.getElementsByClassName("Int1Slide");

	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	x[myIndex-1].style.display = "block";
	setTimeout(carousel2, 2000);
}

function carousel3() {
	var i; 
	var x = document.getElementsByClassName("Int2Slide");

	for ( i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	x[myIndex-1].style.display = "block";
	setTimeout(carousel3, 2000);
}

function carousel4() {
	var i; 
	var x = document.getElementsByClassName("Int3Slide");

	for ( i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	x[myIndex-1].style.display = "block";
	setTimeout(carousel4, 2000);
}

