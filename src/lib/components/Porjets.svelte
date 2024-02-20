<section>
  <figure>
    <img src="/images/web-mokup-mac.webp" alt="mac mokup">  
  </figure>
  <figure>
    
    <img src="/images/phone-mokup.webp" alt="phone mokup">  
  </figure>
</section>

<style>
	section {
    padding: 5vw;
    /* padding-block: 10vw; */
		min-height: 100dvh;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
	}
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (width < 800px) {
    section {
      grid-template-columns: 1fr;
    }
  }
</style>
