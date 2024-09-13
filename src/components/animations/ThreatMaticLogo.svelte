<script lang='ts'>
  import { cn } from "../../lib/utils";
  import OrbitingCircles from "./OrbitingCircles.svelte";
  let className: any = "";
  export { className as class };

  const features = [
    { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: "Speed" },
    { icon: '', text: "Light weight" },
    { icon: '', text: "Simplicity" },
    { icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z', text: "Cloud" },
    { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', text: "Home" },
    { icon: 'M3 3h18v18H3zM9 9h6v6H9z', text: "Onprem" },
    { icon: '', text: "ZTNA" },
    { icon: '', text: "Micro segmentation" },
    { icon: '', text: 'S/Channel "Un-VPN"' }
  ];
</script>

<div
class={cn(
  "relative flex h-[600px] w-full items-center justify-center overflow-hidden",
  "h-[250px] w-full sm:h-[550px] md:h-[600px]",
  className
)}
>
<span
  class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-violet-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent from-slate-100/10 dark:to-slate-100/10"
>
</span>

<!-- 1st orbit - Cyan gradient -->
{#each features.slice(0, 3) as feature, index}
  <OrbitingCircles class="h-[1px] w-[1px] border-none bg-transparent" duration={60} radius={60} delay={index * -20}>
    <span class="flex items-center gap-1 font-bold text-sm bg-gradient-to-r from-cyan-300 to-cyan-500 text-transparent bg-clip-text drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-cyan-400 filter drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
        <path d={feature.icon}></path>
      </svg>
      {feature.text}
    </span>
  </OrbitingCircles>
{/each}

<!-- 2nd orbit - Pink gradient -->
{#each features.slice(3, 6) as feature, index}
  <OrbitingCircles class="h-[1px] w-[1px] border-none bg-transparent" radius={130} duration={80} delay={index * -26.67} reverse>
    <span class="flex items-center gap-1 font-bold text-sm bg-gradient-to-r from-pink-300 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-pink-400 filter drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
        <path d={feature.icon}></path>
      </svg>
      {feature.text}
    </span>
  </OrbitingCircles>
{/each}

<!-- 3rd orbit - Purple gradient -->
{#each features.slice(6) as feature, index}
  <OrbitingCircles class="h-[1px] w-[1px] border-none bg-transparent" radius={220} duration={100} delay={index * -33.33}>
    <span class="flex items-center gap-1 font-bold text-xs bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3 text-purple-400 filter drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]">
        <path d={feature.icon}></path>
      </svg>
      {feature.text}
    </span>
  </OrbitingCircles>
{/each}

</div>