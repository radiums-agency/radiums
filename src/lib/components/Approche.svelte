<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView, scroll, stagger } from 'motion';
	import { fade, fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import ApprocheMobile from './ApprocheMobile.svelte';

	const approches = [
		{
			title: 'Intégration',
			desc: 'Après une réunion pour un briefing, notre proposition est prête quelques jours plus tard. Nous nous occupons de tous les détails, y compris le contrat et les délais.',
			number: '1'
		},
		{
			title: 'Modèle',
			desc: 'Nous travaillons en partenariat sur une base mensuelle ou par projet, selon ce qui convient le mieux. Vous souhaitez annuler ? Aucune question posée. Envie de prolonger ? Faites le nous savoir.',
			number: '2'
		},
		{
			title: 'Sprint',
			desc: 'Ensemble, nous itérons, testons et nous réunissons chaque semaine pour discuter des solutions. Nous envoyons également une mise à jour asynchrone pour que tout le monde soit sur la bonne voie.',
			number: '3'
		},
		{
			title: 'Remettre',
			desc: 'Lorsque notre travail est terminé, nous le documentons et organisons la gouvernance. Nous sommes disponibles pour vous aider avant, pendant et après notre collaboration.',
			number: '4'
		}
	];

	let state = 0;

	onMount(() => {
		const section = [...document.querySelectorAll('#approche') ]

		scroll(
			({ y }) => {
				if (Number(y.progress.toFixed(1)) >= 0.25) {
					state = 0;
				}
				if (Number(y.progress.toFixed(1)) >= 0.5) {
					state = 1;
				}
				if (Number(y.progress.toFixed(1)) >= 0.75) {
					state = 2;
				}
				if (Number(y.progress.toFixed(1)) >= 1) {
					state = 3;
				}
			},
			{
				target: section[1]
			}
		);

		const img = document.querySelector('.approche-left-img') as HTMLImageElement;
		
		scroll(
			animate(img, { rotate: 360 }),

			{
				target: section[1],
				offset: ['-200px', 'end end']
			}
		);

		const spans = [...document.querySelectorAll('.big-text p span')];
		inView('.big-text p', (info) => {
			animate(
				spans,
				{ opacity: [0, 1], y: [50, 0] },
				{ duration: 1, easing: 'ease-out', delay: stagger(0.1) }
			);
		});
	});
</script>

<div class="approcheMo">
	<ApprocheMobile/>
</div>
<section id="approche">
	<div class="approche-left">
		<!-- <video  muted  loop playsinline preload="metadata">
			<source src="/images/video.mp4" type="video/mp4" />
		</video> -->
		<img src="/images/approche.webp" alt="#" loading="lazy" class="approche-left-img" />
	</div>
	<div class="approche-right">
		<div class="right-container">
			{#each approches as approche, idx}
				{#if idx === state}
					<div
						in:fly={{ y: 50, duration: 500, easing: quadInOut, delay: 100 }}
						out:fade={{ delay: -100 }}
						class="approche-right__title"
					>
						<p>
							{approche.title}
						</p>
					</div>
					<div
						in:fly={{ y: 50, duration: 500, easing: quadInOut, delay: 200 }}
						out:fade={{ delay: -200 }}
						class="approche-right__content"
					>
						<p>{approche.desc}</p>
					</div>
					<div
						in:fly={{ y: 50, duration: 500, easing: quadInOut, delay: 300 }}
						out:fade={{ delay: -300 }}
						class="approche-right__bottom"
					>
						<span>
							{approche.number}
						</span>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
<section class="big-text">
	<!-- <p>
  <span>Dans un monde en perpétuelle</span>
  <span>transformation où chaque instant compte,</span>
  <span>notre approche vous offre la vivacité</span>
  <span>et la flexibilité indispensables pour</span>
  <span>vous adapter</span>
</p> -->
	<p>
		<span>
			Soyez <span class="up">réactive</span>
		</span>
		<span>
			pour vous <span class="up">adapter</span>
		</span>
		<span>
			à <span class="up">l'évolution.</span>
		</span>

		<!-- Soyez réactive pour vous adapter à l'évolution -->
	</p>
</section>

<style>
	#approche {
		padding: 0%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 200dvh;
		justify-content: start;
		align-items: start;
		background-color: #000000;
		/* grid-auto-rows: minmax(1000px, 1fr); */
	}

	.approche-right {
		background-color: var(--woodsmoke-800);
		padding: 5vw;
		position: sticky;
		top: 0;
		height: 100dvh;
	}

	.right-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		/* background-color: rebeccapurple; */
		top: 0;
		overflow: hidden;
	}

	.approche-right__title {
		text-transform: uppercase;
		position: absolute;
		top: 10%;
	}

	.approche-right__content {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.approche-right__bottom {
		position: absolute;
		bottom: 10%;
	}

	.approche-right__content p {
		font-size: clamp(28px, 1.5vw + 0.1rem, 2rem);
	}

	.approche-right__bottom span {
		font-weight: 700;
		padding: 0.3rem 1rem;
		border-radius: 100vw;
		border: 2px solid var(--woodsmoke-200);
		background-color: var(--woodsmoke-200);
		color: var(--woodsmoke-800);
	}

	.big-text {
		min-height: 50vh;
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding: 0 5vw; */
	}

	.big-text p {
		/* background-color: red; */
		font-size: clamp(30px, 4vw + 0.1rem, 5rem);
		text-transform: uppercase;
		/* width: 100%; */
		/* position: relative; */
		min-height: 15rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		/* background-color: red; */

		& span {
			display: inline-block;
			overflow: clip;
		}
	}

	.up {
		color: var(--woodsmoke-400);
		font-weight: 800;
		font-style: italic;
	}

	.big-text {
		display: flex;
		align-items: center;
		min-height: 50dvh;
		justify-content: center;
		/* background-color: red; */
		/* background-color: var(--woodsmoke-400); */
	}

	.approche-left {
		position: sticky;
		top: 30%;
		background-color: #000000 !important;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.approcheMo {
		display: none;
	}

	@media (width < 700px) {
		#approche {
			grid-template-columns: 1fr;
		}
		.approche-left {
			display: none;
		}
	}

	@media (width < 800px) {
		#approche {
			display: none;
		}

		.approcheMo {
			display: block;
		}
	}
</style>
