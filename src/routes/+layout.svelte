<script lang='ts'>
	import "../app.css";
	import { Toaster } from 'svelte-french-toast';

	let toastNewDefault = {
		// success: {
		// 	position: "bottom-left",
		// },
		error: {
			duration: 8000,	// 8 seconds
			// position: "bottom-right",
		},  
	};
</script>


<Toaster toastOptions={toastNewDefault}/>


<slot/>


