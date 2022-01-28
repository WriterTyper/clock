<script>
	import {onMount} from 'svelte';
	let time = new Date();
	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();
	
	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
	
</script>

<h1>A Clock of Time</h1>
<h3> What if time is reimagined this way. Because seconds turn to minutes, minutes to hours, hours to days.</h3>
<main>
<h2>	 {seconds} : {minutes} : {hours} </h2>
</main>