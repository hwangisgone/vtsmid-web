<script lang='ts'>
	import "../app.css";
	import { Toaster } from 'svelte-french-toast';

	let toastNewDefault = {
		// success: {
		// 	position: "bottom-left",
		// },
		error: {
			duration: 10000,	// 10 seconds
			// position: "bottom-right",
		},  
	};
</script>


<Toaster toastOptions={toastNewDefault}/>

<slot/>