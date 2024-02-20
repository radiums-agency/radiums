<script lang="ts">
</script>

<button class="cta">
	<span class="container">

		<span> Contact </span>
	</span>
</button>

<style>
	button {
		border-radius: 100vw;
		width: 100%;
		padding: 2px;
		/* color: var(--woodsmoke-800); */
		font-weight: 600;
		color: var(--woodsmoke-700);
		background-color: var(--woodsmoke-50);
		position: relative;
		padding: 0.5rem 1rem;
		font-size: 16px;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 0.1rem 1rem;
		border-radius: 100vw;
		/* background-color: var(--woodsmoke-600); */
		position: relative;
	}




button::after {
	width: 100%;
	height: 100%;
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 100vw;
	box-shadow: 0 0 15px var(--woodsmoke-50);
	transition: all 0.6s var(--easing);
	
}


button:hover::after {
	
	box-shadow: 0 0 30px var(--woodsmoke-50);
}


</style>
