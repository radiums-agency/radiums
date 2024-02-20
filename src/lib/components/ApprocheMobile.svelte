<script lang="ts">
	import { onMount } from 'svelte';
	import { animate,  scroll } from 'motion';

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

	onMount(() => {
		const imgs = [...document.querySelectorAll('.approcheM img')];
		const target = document.querySelector('.approcheM') as HTMLElement;


    scroll(
			animate(imgs[0], { rotate: 360 }),

			{
				target: target,
				offset: ['-200px', 'end end']
			}
		);
    
		scroll(
			animate(imgs[1], { x: 100, rotate: -120 }),

			{
				target: target,
				offset: ['-200px', 'end end']
			}
		);
	
		scroll(
			animate(imgs[2], { rotate: -360 }),

			{
				target: target,
				offset: ['-200px', 'end end']
			}
		);
		scroll(
			animate(imgs[3], { x: -100, rotate: 120 }),

			{
				target: target,
				offset: ['-200px', 'end end']
			}
		);



	});
</script>

<section  id="approche" class="approcheM">
	{#each approches as approche}
		<div class="card">
			<div>
				<span>
					{approche.title}
				</span>
			</div>
			<div>
				<p>
					{approche.desc}
				</p>
			</div>
			<div>
				<span class="bottom">
					{approche.number}
				</span>
			</div>
		</div>
		<div class="img-container">
			<img src="/images/approche.webp" alt="#" class="img" />
		</div>
	{/each}
  </section>

<style>
	.approcheM {
		display: grid;
		grid-auto-rows: minmax(300px, auto);
		gap: 1rem;
    padding: 10vw 5vw;
	}

	.card {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--woodsmoke-800);
		border-radius: 10px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

  .img-container {
    overflow: hidden;
  }

	.bottom {
		font-weight: 700;
		padding: 0.3rem 1rem;
		border-radius: 100vw;
		border: 2px solid var(--woodsmoke-200);
		background-color: var(--woodsmoke-200);
		color: var(--woodsmoke-800);
	}
</style>
