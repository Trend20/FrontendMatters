import {useDispatch, useSelector} from "react-redux";
import {setInputValue} from "../features/slices/articleSlices";

const AddPost = () =>{
    const dispatch = useDispatch();
    const { title, description, author, coverImg} = useSelector((store) => store.article);

    // handle input change
    const handleInputChange = (field, value) =>{
        dispatch(setInputValue({field, value}));
    }

    // handle submit functionality
    const handleSubmit = (e) =>{
        e.preventDefault();

    }
    return(
        <div className='add-new-post'>
            <h1>Add New Post</h1>
            <form id='newPostForm'>
                <div className="input">
                    <input type="text" id='title' placeholder='Title' value={title} onChange={(e) => handleInputChange('title', e.target.value)}/>
                </div>
                <div className="input">
                    <textarea name="description" placeholder='Description' value={description} onChange={(e) => handleInputChange('description', e.target.value)} id="description" cols="30" rows="10"></textarea>
                </div>
               <div className="input">
                   <input type="text" id='author' placeholder='Author' value={author} onChange={(e) => handleInputChange('author', e.target.value)} />
               </div>
                <div className="input">
                    <input type="file" id='img' value={coverImg} onChange={(e) => handleInputChange('coverImg', e.target.value)}/>
                </div>
                <button id='add-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddPost;