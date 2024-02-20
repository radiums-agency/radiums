<script lang="ts">
	import { navIsOpen } from '$lib/store';
	import { fade, fly } from 'svelte/transition';
	import Lenis from '@studio-freight/lenis';

	// your script goes here
	import '../app.css';
	import { quadInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	onMount(() => {
		const lenis = new Lenis();

		lenis.on('scroll', (e: any) => {});

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
		const services = document.querySelector('#servicesBtn')  as HTMLAnchorElement
		const approche = document.querySelector('#approcheBtn') as HTMLAnchorElement
		const faq = document.querySelector('#faqBtn') as HTMLAnchorElement
		const contact = document.querySelector('#contactBtn') as HTMLAnchorElement
		const backTop = document.querySelector('#backTop') as HTMLAnchorElement
		const cta = document.querySelector('.cta') as HTMLButtonElement

    services.addEventListener('click', () => {
      lenis.scrollTo(document.querySelector('#services'))
    })
		
    approche.addEventListener('click', () => {
      lenis.scrollTo(document.querySelector('#approche'))
    })

    faq.addEventListener('click', () => {
      lenis.scrollTo(document.querySelector('#faq'))
    })

    contact.addEventListener('click', () => {
      lenis.scrollTo(document.querySelector('#contact'))
    })
    backTop.addEventListener('click', () => {
      lenis.scrollTo(document.querySelector('#acceuil'))
    })

		cta.addEventListener('click', () => {
      lenis.scrollTo(document.querySelector('#contact'))
    })
	});
</script>

<svelte:head>
	<title>
		Radiums | agence de maketing digital
	</title>
	<meta name="description" content="Radiums, agence de maketing digital a abidjan. Nous construisons des produits numériques, de zéro
	jusqu'au lancement. Nous sommes déterminés à faire briller votre entreprise en ligne. Des solutions personnalisées en marketing digital, développement web et gestion de contenu pour atteindre vos objectifs. Explorez nos services dès aujourd'hui !">
</svelte:head>


<header>
	<Nav/>
</header>

<main>
	<slot />
</main>

<footer>
	<Footer/>
</footer>

<style>
	header {
		width: 100%;
		padding: 0 5vw;
		position: fixed;
		top: 0;
		z-index: 99;
		backdrop-filter: blur(5px);
		
		
	}

</style>
