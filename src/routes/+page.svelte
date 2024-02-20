<script>
	import Approche from '$lib/components/Approche.svelte';
	import Comment from '$lib/components/Comment.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import Porjets from '$lib/components/Porjets.svelte';
	import Slide from '$lib/components/Slide.svelte';
	import Why from '$lib/components/Why.svelte';
	import Services from '$lib/components/services.svelte';
	import { onMount } from 'svelte';
	import {notMounted} from '$lib/store'
	import { slide } from 'svelte/transition';
	import {quadInOut} from "svelte/easing"

	

	onMount(() => {
		setTimeout(() => {
			$notMounted = false

		},1000)
	})
</script>



{#if $notMounted}
	<div class="loader" transition:slide={{axis: "y", duration: 1100, easing: quadInOut}}>
		<Loader />
	</div>
{/if}

<Hero />
<Porjets />
<Slide />
<Why />
<Comment />
<Services />
<Approche />
<Faq/>
<Cta/>

<style>
	.loader {
		width: auto;
		height: auto;
		position: fixed;
		top: 0;
		z-index: 1000000;
	}
</style>
