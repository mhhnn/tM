<script>
    import { fade, fly, scale, slide } from 'svelte/transition';
    import { spring } from 'svelte/motion';
    
    export let title;
    export let subtitles;
    export let index;
    
    let isExpanded = false;
    let isHovered = false;
    let expandedSubtitle = null;
    
    const coords = spring({ x: 0, y: 0 }, {
      stiffness: 0.2,
      damping: 0.4
    });
    
    function handleMouseMove(event) {
      const { clientX, clientY, currentTarget } = event;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      coords.set({
        x: (clientX - left) / width,
        y: (clientY - top) / height
      });
    }
    
    function handleMouseLeave() {
      coords.set({ x: 0.5, y: 0.5 });
    }
    
    function toggleExpand() {
      isExpanded = !isExpanded;
      if (!isExpanded) {
        expandedSubtitle = null;
      }
    }
    
    function toggleSubtitle(subtitle) {
      if (expandedSubtitle === subtitle) {
        expandedSubtitle = null;
      } else {
        expandedSubtitle = subtitle;
      }
    }
    
    $: glowX = $coords.x * 100;
    $: glowY = $coords.y * 100;
  </script>
  
  <div class="relative group">
    <div
      class="absolute inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
    ></div>
    <div
      class="relative bg-black text-white rounded-lg shadow-xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl"
      on:mouseenter={() => isHovered = true}
      on:mouseleave={() => {
        isHovered = false;
        handleMouseLeave();
      }}
      on:mousemove={handleMouseMove}
      on:click={toggleExpand}
      style="transform: translateZ(0) perspective(1000px) rotateX({$coords.y * 10}deg) rotateY({$coords.x * -10}deg);"
    >
      <div class="p-6">
        <h3 class="text-2xl font-light mb-2">
          {title}
        </h3>
      </div>
    </div>
  </div>
  
  {#if isExpanded}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-auto"
      on:click|self={toggleExpand}
      transition:fade={{ duration: 200 }}
    >
      <div
        class="bg-black border border-violet text-white rounded-lg shadow-2xl p-8 m-4 max-w-xl w-full max-h-full overflow-auto"
        transition:fly={{ y: 50, duration: 300 }}
      >
        <h2 class="text-3xl font-light mb-4">{title}</h2>
        {#each subtitles as subtitle}
          <div class="mb-4">
            <h3
              class="text-xl font-light text-purple-400 cursor-pointer"
              on:click={() => toggleSubtitle(subtitle)}
            >
            &gt; {subtitle.title}
            </h3>
            {#if expandedSubtitle === subtitle}
              <p class="mt-2 text-gray-300" transition:slide>
                 {subtitle.description}
              </p>
            {/if}
          </div>
        {/each}
        <button
          class="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
          on:click={toggleExpand}
        >
          Close
        </button>
      </div>
    </div>
  {/if}
  
  <style>
    @keyframes tilt {
      0%, 50%, 100% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(0.5deg);
      }
      75% {
        transform: rotate(-0.5deg);
      }
    }
    .animate-tilt {
      animation: tilt 10s infinite linear;
    }
  </style>