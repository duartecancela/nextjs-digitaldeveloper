import { DiscussionEmbed } from 'disqus-react'
const DisqusComments = ({ post }) => {
  const disqusShortname = 'your-disqus-shortname'
  const disqusConfig = {
    url: 'https://digitaldeveloper-dev.disqus.com/',
    identifier: '2', // Single post id
    title: 'teste2', // Single post title
  }
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
export default DisqusComments
