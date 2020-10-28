import React, { Component } from 'react';

class CreatePost extends Component {

    constructor(props) {
        super(props);

        // TODO this.onChangeCreatePostCity = this.onChangeCreatePostCity.bind(this);
        this.onChangeCreatePostType = this.onChangeCreatePostType.bind(this);
        this.onChangeCreatePostDescription = this.onChangeCreatePostDescription.bind(this);
        this.onChangeCreatePostResponsible = this.onChangeCreatePostResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            // TODO CreatePost_city: '',
            CreatePost_type: '',
            CreatePost_description: '',
            CreatePost_completed: false
        }
    }

    // TODO 
    // onChangeCreatePostCity(e) {
    //     this.setState({
    //         CreatePost_type: e.target.value
    //     });
    // }

    onChangeCreatePostType(e) {
        this.setState({
            CreatePost_type: e.target.value
        });
    }

    onChangeCreatePostDescription(e) {
        this.setState({
            CreatePost_description: e.target.value
        });
    }

    onChangeCreatePostResponsible(e) {
        this.setState({
            CreatePost_responsible: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        // TODO console.log(`CreatePost Type: ${this.state.CreatePost_city}`);
        console.log(`CreatePost Type: ${this.state.CreatePost_type}`);
        console.log(`CreatePost Description: ${this.state.CreatePost_description}`);
        
        this.setState({
            // TODO CreatePost_city: '',
            CreatePost_type: '',
            CreatePost_description: '',
            CreatePost_completed: false
        })
    }

    render() {
        return (
            <div className="container">
                <div style={{marginTop: 100}}>
                    <h3>Create New Post</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" 
                                        type="radio" 
                                        name="typeOptions" 
                                        id="typeNeed" 
                                        value="Need"
                                        checked={this.state.CreatePost_type==='Needing Help'} 
                                        onChange={this.onChangeCreatePostType}
                                        />
                                <label className="form-check-label">Needing Help</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="typeOptions" 
                                        id="typeOffering" 
                                        value="Offering" 
                                        checked={this.state.CreatePost_type==='Offering Help'} 
                                        onChange={this.onChangeCreatePostType}
                                        />
                                <label className="form-check-label">Offering Help</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="typeOptions" 
                                        id="typeGeneral" 
                                        value="General" 
                                        checked={this.state.CreatePost_type==='Neighborhood Suggestion'} 
                                        onChange={this.onChangeCreatePostType}
                                        />
                                <label className="form-check-label">Neighborhood Suggestions</label>
                            </div>
                        </div>
                        <div className="form-group"> 
                        {/* TODO create a dropdown or auto-fill line for Cities */}
                            <label>Description: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.CreatePost_description}
                                    onChange={this.onChangeCreatePostDescription}
                                    />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create CreatePost" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePost;
