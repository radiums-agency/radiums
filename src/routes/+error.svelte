<script>
	import Btn from "$lib/components/Btn.svelte";

</script>
<section>
  <div>
    <h1>
      404
    </h1>
    <p>
      Oups ressource indisponible 
    </p>
    <a href="/">
      <Btn>
        Accueil
      </Btn>
    </a>
  </div>
</section>


<style>
  section {
    display: grid;
    place-items: center;
  }
  
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  h1 {
    font-size: clamp(20px, 3vw, 4rem);
  }
</style>