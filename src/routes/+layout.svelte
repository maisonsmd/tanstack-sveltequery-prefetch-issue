<script lang="ts">
  import { QueryClientProvider } from '@tanstack/svelte-query'
  import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools'
  import type { LayoutData } from './$types'
  import '../app.css'

  export let data: LayoutData
</script>

<QueryClientProvider client={data.queryClient} >
  <main>
    <slot />
  </main>
  <SvelteQueryDevtools />
</QueryClientProvider>