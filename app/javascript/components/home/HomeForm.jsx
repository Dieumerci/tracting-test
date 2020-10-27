import React, {Component , useState } from "react";
import axios from "axios";
class HomeForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            courseID: '',
            instructorName: '',
            courseCode: '',
            selectedFile: null
        };
        this.textInput = React.createRef();
    }
    componentDidMount() {}
    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    //gets the values entered by user and sets it the corresponding state variable
    onChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    //calls api to save the uploaded file
    onClickHandler = () => {
        const data = new FormData()
        const url = "/api/v1/posts/";
        const token = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token
        data.append('file', this.state.selectedFile)
        axios.post(url, data)
            .then((result) => {
                console.log(result)
            }).then(alert("Saved"));
        this.props.changeTab('MainPage');

    }

    render() {
        return (
            <div className='container'>
                <label className="label">Upload Files</label>
                <div className="field has-addons">
                    <div className="file">
                        <label className="file-label">
                            <p className="control is-expanded has-icons-left has-icons-right">
                                <input
                                    className="file-input is-warning"
                                    type="file"
                                    ref={(input) => {
                                        this.filesInput = input
                                    }}
                                    name="file"
                                    placeholder='UploadCSV...'
                                    onChange={this.onChange}
                                />
                                <span className="file-cta">
                                  <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                  </span>
                                  <span className="file-label">
                                    Choose a file…
                                  </span>
                                </span>
                            </p>
                            <p className="control">
                                <button className="button is-info" variant='button is-info' onClick={this.onClickHandler}>Upload</button>
                            </p>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeForm;