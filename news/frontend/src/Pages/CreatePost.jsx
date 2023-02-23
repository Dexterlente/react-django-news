import requireAuth from '../Contexts/requireAuth'

function CreatePost() {

    return (
      <div>CreatePost</div>
    )
  }
  

export default requireAuth(CreatePost);
// export default CreatePost;