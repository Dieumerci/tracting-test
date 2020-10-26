import React, { useState } from "react";
import axios from "axios";

const HomeForm = (props) => {

    const [post, setPost] = useState(props.initialFormState);

    const handleInputChange = (evt) => {
        // const { name, value } = evt.target
        setPost({ ...post, [evt.target.name]: evt.target.value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addPost(post);
        setPost(props.initialFormState);
    };

    return (
            <form onSubmit={handleSubmit} >
                <label className="label has-text-dark">Upload CSV or XLSX file :</label>
                <div className="field has-addons">

                    <div className="control is-expanded">
                        <input className="input" type="text" name="description" value={post.description} onChange={handleInputChange} placeholder="e.g .csv"/>
                    </div>
                    <div className="control">
                        <button className="button is-info" type="submit">
                            Send
                        </button>
                    </div>
                </div>
            </form>
    )
}

export default HomeForm;