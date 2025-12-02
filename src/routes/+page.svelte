<script lang="ts">
  let { data } = $props()
</script>

<div class="flex flex-col items-center justify-center max-w-3xl gap-2">
  <h1 class="text-4xl font-bold">Template</h1>
  <p>
    {data.message}
  </p>
</div>
