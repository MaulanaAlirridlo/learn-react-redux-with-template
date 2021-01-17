import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePost } from "./postSlice";

export function EditPost(props) {
  var id = props.match.params.id;
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <button onClick={()=>{dispatch(updatePost(id)); history.goBack()}}>Edit</button>
    </div>
  )
}