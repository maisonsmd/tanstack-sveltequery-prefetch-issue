import { getPostById } from '$lib/data'
import type { Post } from '$lib/types'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ parent, params }) => {
  const postId = parseInt(params.postId)

  const { queryClient } = await parent()

  console.log('prefetching post', postId)

  await queryClient.prefetchQuery<Post>({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId),
  })

  return { postId }
}
