import { QueryClient } from "@tanstack/svelte-query"
import type { LayoutLoad } from "./$types"
import { browser } from "$app/environment"

export const load: LayoutLoad = async ({ url }) => {
  // FIXME: accessing to URL in layout make queryClient.prefetchQuery not working,
  // If you comment this line out, prefetchQuery will work normally
  console.log(url.pathname)

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
        staleTime: 60 * 1000,
      },
    },
  })

  return { queryClient  }
}
