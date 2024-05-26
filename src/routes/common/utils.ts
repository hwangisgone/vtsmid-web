import toast from 'svelte-french-toast';

import { invalidate } from '$app/navigation';

export function rerunLoadFunc() {
	invalidate(url => url.href.includes('student'));
}

export 	function getGender(num) {
	switch(num){	// https://en.wikipedia.org/wiki/ISO/IEC_5218
		case 1: return "Male";
		case 2: return "Female";
		case 9: return "Not applicable";
		default: return "Unknown";
	}
}

export function loadingDisplay(asyncfunc) {
	toast.promise(
		asyncfunc(),
		{
			loading: 'Processing...',
			success: 'Done!',
			error: '❌ ERROR ❌',
		}
	);
}