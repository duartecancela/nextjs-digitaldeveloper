import { DiscussionEmbed } from 'disqus-react'
const DisqusComments = ({ post }) => {
  const disqusShortname = 'digitaldeveloper-dev.disqus.com'
  const disqusConfig = {
    url: 'https://www.digitaldeveloper.dev/blog/test-post',
    identifier: 'test-post', // Single post id
    title: 'test-post', // Single post title
  }
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
export default DisqusComments
