import React from "react";
import { Link } from "react-router-dom";
function CreatePost() {

    return (
        <>
            <form action="POST">
                <input type="file" /><br />
                <input type="text" placeholder="Author" />
                <input type="text" placeholder="Location" /><br />
                <Link to='/postview'>POST</Link>
                <div>
                    <input type='submit'></input>
                </div>
                
            </form>
            </>
    )
};
export default CreatePost;