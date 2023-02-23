import { useState } from "react";
import Cookies from "js-cookie";
import requireAuth from '../Contexts/requireAuth'

function CreatePost() {

    return (
      <div>CreatePost</div>
    )
  }
  

export default requireAuth(CreatePost);
//export default CreatePost;