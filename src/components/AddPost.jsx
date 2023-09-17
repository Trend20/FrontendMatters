import {useDispatch, useSelector} from "react-redux";
import {setInputValue} from "../features/slices/articleSlices";

const AddPost = () =>{
    const dispatch = useDispatch();
    const { title, description, author, coverImg} = useSelector((store) => store.article);

    // handle input change
    const handleInputChange = (field, value) =>{
        dispatch(setInputValue({field, value}));
    }
    return(
        <div>
            <h1>Add Post Component</h1>
            <form>
                <input type="text" value={title} onChange={(e) => handleInputChange('title', e.target.value)}/>
                <textarea name="description" value={description} onChange={(e) => handleInputChange('description', e.target.value)} id="description" cols="30" rows="10"></textarea>
                <input type="text" value={author} onChange={(e) => handleInputChange('author', e.target.value)} />
                <input type="file" value={coverImg} onChange={(e) => handleInputChange('coverImg', e.target.value)}/>
            </form>
        </div>
    )
}

export default AddPost;