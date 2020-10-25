import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeForm = props => {

    const [data, setData] = useState(props.initialFormState);
    const handleInputChange = (e) => {
            const { name, value } = e.target;
            setData(...data, {[name]: value });
        };
    return (
            <form onSubmit={ e => {e.preventDefault()
                if(!data.description) return;
                props.addData(data)
                setData(props.initialFormState)
            }}>
                <label className="label">Upload CSV or XLSX file :</label>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input className="input" type="text" name="description" value={data.description} onChange={handleInputChange} placeholder="e.g .csv"/>
                    </div>
                    <div className="control">
                        <button className="is-info">
                            Send
                        </button>
                    </div>
                </div>
            </form>
    )
}

export default HomeForm;