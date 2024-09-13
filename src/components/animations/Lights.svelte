<script lang="ts">
  import { cn } from "../../lib/utils";

  let className: any = "";
  
  export { className as class };
</script>

<div class={cn("w-full h-full overflow-hidden", className)}>
  <div
    style="background:conic-gradient(from 180deg at 50% 50%, #7C3AED 0deg, #A78BFA 180deg, #C4B5FD 1turn); filter:blur(75px); opacity:20%;"
    class="w-full h-full absolute inset-0"
  />
</div>
