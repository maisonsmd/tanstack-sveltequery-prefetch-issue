# Issue description

For some reason, when accessing `url` object inside root `layout.ts`, `prefetchQuery` stops working:
- `fetch` function is still called by `prefetchQuery`
- `prefetchQuery` result doesn't appear in the cache `SvelteQueryDevtools`
