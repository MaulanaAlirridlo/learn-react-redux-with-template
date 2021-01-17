import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost } from "./postSlice";

export function AddPost() {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <button onClick={()=>{dispatch(addPost()); history.goBack()}}>Add</button>
    </div>
  )
}