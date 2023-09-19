import {useDispatch, useSelector} from "react-redux";
import {clearInputValue, setInputValue} from "../features/slices/articleSlices";
import {useState} from "react";
import {supabase} from "../lib/api";
import {useNavigate} from "react-router-dom";

const AddPost = () =>{
    const dispatch = useDispatch();
    const { title, description, author} = useSelector((store) => store.article);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // handle input change
    const handleInputChange = (field, value) =>{
        dispatch(setInputValue({field, value}));
    }

    // handle submit functionality
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const {
                data,
                error
            } = await supabase.from('articles').insert({title: title, description: description, author: author, timestamp: new Date()});
        dispatch(clearInputValue());
        navigate('/');
        console.log(data, error)
        }catch (e) {
            setError(e);
        }

    }
    return(
        <div className='add-new-post'>
            <h1>Add New Post</h1>
            <form id='newPostForm' onSubmit={handleSubmit}>
                <div className="input">
                    <input type="text" id='title' placeholder='Title' value={title} onChange={(e) => handleInputChange('title', e.target.value)}/>
                </div>
                <div className="input">
                    <textarea name="description" placeholder='Description' value={description} onChange={(e) => handleInputChange('description', e.target.value)} id="description" cols="30" rows="10"></textarea>
                </div>
               <div className="input">
                   <input type="text" id='author' placeholder='Author' value={author} onChange={(e) => handleInputChange('author', e.target.value)} />
               </div>
                <button id='add-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddPost;