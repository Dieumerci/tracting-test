import React, { useState } from "react";
import axios from "axios";

const HomeForm = (props) => {

    const [post, setPost] = useState(props.initialFormState);

    const handleInputChange = (evt) => {
        // evt.preventDefault();
        // const { name, value } = evt.target
        setPost({ ...post, [evt.target.name]: evt.target.files[0]})
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addPost(post);
        setPost(props.initialFormState);
    };

    return (
            <form onSubmit={handleSubmit} >
                <label className="label has-text-dark">Upload CSV or XLSX file :</label>
                <div className="field has-addons has-addons-centered">
                    <div className="file has-name is-fullwidth">
                        <label className="file-label">
                            <p className="control is-expanded">
                                <input className="file-input" type="file" name="file" value={post.file} onChange={handleInputChange} placeholder="e.g .csv"/>
                            </p>
                            <span className="file-cta">
                                  <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                  </span>
                                  <span className="file-label">
                                    Choose a file…
                                  </span>
                            </span>

                            <p className="control">
                                <button className="button is-info" type="submit">
                                    Send
                                </button>
                            </p>
                        </label>
                    </div>
                </div>
            </form>
    )
}

export default HomeForm;