<script lang="ts">
	import { onMount } from "svelte";
	import { tweened } from "svelte/motion";
  import {quadInOut} from "svelte/easing"
  import {notMounted} from '$lib/store'

  const progress = tweened(0, {
		duration: 1000,
    easing: quadInOut
		
	});

  onMount(() => {
    if($notMounted === true) {
      progress.set(100)
    }
  })
</script>



<div class="container">
	<div class="content">
		<span class="logo" style="background-size: {$progress}% 100%;">
			{#each 'RADIUMS' as word}
				<span>{word}</span>
			{/each}
		</span>
		<span class="counter"> 
      {$progress.toFixed(1)}%
    </span>
	</div>
</div>

<style>
	.container {
		width: 100dvw;
		height: 100dvh;
		display: grid;
		place-items: center;
		background-color: var(--woodsmoke-950);

	}

	.logo {
		color: transparent;
		background-size: 0% 100%;
		background-repeat: no-repeat;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		color: #3a344657;
		background-image: linear-gradient(90deg, #f7f6f9, #f7f6f9);
    font-size: clamp(16px, 1.2vw, 1.6rem);
    font-weight: 700;
	}
  
  .counter {
    font-weight: 300;
    font-size: clamp(14px, 1.1vw, 1.4rem);
    
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
</style>
