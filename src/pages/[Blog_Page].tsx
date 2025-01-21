import { useParams } from 'react-router-dom'

const Blog_Page = () => {
  const {id} = useParams()
  return (
    <div>
      <p>{id}</p>
    </div>
  )
}

export default Blog_Page
