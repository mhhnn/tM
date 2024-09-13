<script>
  import { onMount } from 'svelte';
  
  export let slides;
  
  let currentSlide = 0;
  let transitioning = false;
  let slideContainer;
  
  function nextSlide() {
      if (currentSlide < slides.length - 1 && !transitioning) {
          transitioning = true;
          currentSlide++;
      }
  }
  
  function prevSlide() {
      if (currentSlide > 0 && !transitioning) {
          transitioning = true;
          currentSlide--;
      }
  }
  
  function handleTransitionEnd() {
      transitioning = false;
  }
  
  onMount(() => {
      document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowRight') nextSlide();
          if (e.key === 'ArrowLeft') prevSlide();
      });
  });
  </script>
  
  <div class="h-screen w-screen flex items-center justify-center bg-black overflow-hidden">
      <div class="w-full h-full max-w-6xl max-h-[80vh] relative">
          <div 
              bind:this={slideContainer}
              class="flex h-full transition-transform duration-500 ease-in-out"
              style="transform: translateX(-{currentSlide * 100}%)"
              on:transitionend={handleTransitionEnd}
          >
              {#each slides as slide, index}
                  <div class="w-full h-full flex-shrink-0 p-8">
                      <div class="bg-black h-full p-8 rounded-lg shadow-2xl border-4 border-violet-500 neon-border flex flex-col justify-between">
                          <h1 class="text-5xl font-bold mb-6 text-violet-400 neon-text">{slide.title}</h1>
                          <img src={slide.image} alt={slide.title} class="w-full h-1/2 object-cover mb-6 rounded neon-glow">
                          <p class="text-xl whitespace-pre-line flex-grow overflow-auto pr-4">{slide.content}</p>
                      </div>
                  </div>
              {/each}
          </div>
      </div>
  
      <button on:click={prevSlide} class="fixed left-4 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white p-2 rounded-full neon-button" disabled={currentSlide === 0 || transitioning} aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
      </button>
      <button on:click={nextSlide} class="fixed right-4 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white p-2 rounded-full neon-button" disabled={currentSlide === slides.length - 1 || transitioning} aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
      </button>
  </div>
  
  <style>
      :global(body) {
          background-color: black;
          color: white;
          font-family: 'Arial', sans-serif;
      }
  
      .neon-border {
          box-shadow: 0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6, 0 0 40px #8B5CF6;
      }
  
      .neon-text {
          text-shadow: 0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6, 0 0 20px #8B5CF6;
      }
  
      .neon-glow {
          box-shadow: 0 0 10px #8B5CF6, 0 0 20px #8B5CF6;
      }
  
      .neon-button {
          box-shadow: 0 0 10px #8B5CF6, 0 0 20px #8B5CF6;
          transition: all 0.3s ease;
      }
  
      .neon-button:hover {
          box-shadow: 0 0 15px #8B5CF6, 0 0 30px #8B5CF6;
      }
  
      .neon-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
      }
  
      /* Custom scrollbar for Webkit browsers */
      ::-webkit-scrollbar {
          width: 8px;
      }
  
      ::-webkit-scrollbar-track {
          background: #1a1a1a;
      }
  
      ::-webkit-scrollbar-thumb {
          background: #8B5CF6;
          border-radius: 4px;
      }
  
      ::-webkit-scrollbar-thumb:hover {
          background: #9f7aea;
      }
  </style>