export 	function getGender(num) {
	switch(num){	// https://en.wikipedia.org/wiki/ISO/IEC_5218
		case 1: return "Male";
		case 2: return "Female";
		case 9: return "Not applicable";
		default: return "Unknown";
	}
}