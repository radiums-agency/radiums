<script lang="ts">
	import { scrollLenis } from '$lib/store';
	import Lenis from '@studio-freight/lenis';
	import { animate } from 'motion';
	import { onMount } from 'svelte';
	import { quadInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let nasIsOpen = false;

	onMount(() => {
		animate('nav', { y: [-50, 0] }, { delay: 0.3, duration: 0.3, easing: 'ease-in-out' });
		 

   
	});
</script>

<nav>
	<div class="logo">
		<a href="/">
			{#each ' RADIUMS' as letter}
				<span>
					{letter}
				</span>
			{/each}
		</a>
	</div>

	<ul class="main-nav">
		<li>
			<a href="#services" id="servicesBtn" on:click={() => {}}> Services </a>
		</li>
		<li>
			<a href="#approche" id="approcheBtn"> Approche </a>
		</li>
		<li>
			<a href="#faq" id="faqBtn"> Faq </a>
		</li>
		<li>
			<a href="#contact" id="contactBtn"> Contact </a>
		</li>
	</ul>
	<div class="menu">
		<button
			on:click={() => {
				nasIsOpen = !nasIsOpen;
			}}
		>
			{nasIsOpen ? 'Fermer' : 'Menu'}
		</button>
	</div>
</nav>
{#if nasIsOpen}
	<div class="sub-nav" transition:slide={{ axis: 'y', duration: 500, easing: quadInOut }}>
		<ul class="nav-link">
			<li>
				<a
					href="#services"
					on:click={() => {
						nasIsOpen = false;
					}}
				>
					Services
				</a>
			</li>
			<li>
				<a
					href="#approche"
					on:click={() => {
						nasIsOpen = false;
					}}
				>
					Approche
				</a>
			</li>
			<li>
				<a
					href="#faq"
					on:click={() => {
						nasIsOpen = false;
					}}
				>
					Faq
				</a>
			</li>
			<li>
				<a
					href="#contact"
					on:click={() => {
						nasIsOpen = false;
					}}
				>
					Contact
				</a>
			</li>
		</ul>
		<div class="sub-nav-b">
			<div class="mail">
				<a href="mailto:zyoussouf70@gmail.com">radiumsagency@gmail.com</a>
			</div>

			<ul>
				<li>
					<a href="/" title="facebook" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
							><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"
								><path
									stroke-dasharray="24"
									stroke-dashoffset="24"
									d="M17 4L15 4C12.5 4 11 5.5 11 8V20"
									><animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										dur="0.4s"
										values="24;0"
									/></path
								><path stroke-dasharray="12" stroke-dashoffset="12" d="M8 12H15"
									><animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										begin="0.5s"
										dur="0.2s"
										values="12;0"
									/></path
								></g
							></svg
						>
					</a>
				</li>
				<li>
					<a href="/" title="linkedin" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
							><circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0"
								><animate
									fill="freeze"
									attributeName="fill-opacity"
									dur="0.4s"
									values="0;1"
								/></circle
							><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"
								><path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10V20"
									><animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										begin="0.2s"
										dur="0.2s"
										values="12;0"
									/></path
								><path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10V20"
									><animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										begin="0.5s"
										dur="0.2s"
										values="12;0"
									/></path
								><path
									stroke-dasharray="24"
									stroke-dashoffset="24"
									d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"
									><animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										begin="0.7s"
										dur="0.5s"
										values="24;0"
									/></path
								></g
							></svg
						>
					</a>
				</li>
				<li>
					<a href="/" title="instagram" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
							><g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								><path
									stroke-dasharray="66"
									stroke-dashoffset="66"
									d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"
									><animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										dur="0.6s"
										values="66;132"
									/></path
								><path
									stroke-dasharray="26"
									stroke-dashoffset="26"
									d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"
									><animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										begin="0.7s"
										dur="0.4s"
										values="26;0"
									/></path
								></g
							><circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0"
								><animate
									fill="freeze"
									attributeName="fill-opacity"
									begin="1.1s"
									dur="0.4s"
									values="0;1"
								/></circle
							></svg
						>
					</a>
				</li>
			</ul>
		</div>
	</div>
{/if}

<style>
	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--woodsmoke-150);
		/* background-color: var(--woodsmoke-600); */
		border-radius: 100vw;
		/* padding: 0.2vw; */
		padding: 15px;
		backdrop-filter: blur(5px);
	}

	nav .main-nav {
		display: flex;
		/* gap: 20px; */
		/* padding-inline: 5px; */
		border-radius: 100vw;
	}

	nav .main-nav a {
		padding: 10px 1rem;
		border-radius: 100vw;
		font-weight: 500;
		transition: background-color 0.5s ease-out;
		/* font-size: clamp(20px, 1.2vw + 0.1rem, 2rem); */
	}

	nav a:hover {
		background-color: var(--woodsmoke-400);
	}

	.logo a {
		font-size: clamp(16px, 1.2vw + 0.1rem, 2rem);
		font-weight: 500;
	}

	.menu {
		display: none;
	}

	.menu button {
		font-size: clamp(16px, 1.2vw + 0.1rem, 2rem);
	}

	.sub-nav {
		position: fixed;
		top: 0%;
		left: 0;
		height: 100dvh;
		width: 100dvw;
		background-color: var(--woodsmoke-600);
		display: grid;
		padding: 20vw 5vw;
		z-index: -1;
	}

	.nav-link a {
		font-size: 15vw;
	}

	.sub-nav-b {
		display: grid;
	}

	.sub-nav-b ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.mail {
		text-align: center;
	}

	.mail a {
		font-size: 5vw;
	}

	@media (width < 750px) {
		.menu {
			display: block;
		}
	}

	@media (width < 750px) {
		nav .main-nav  {
			display: none;
		}
	}
</style>
