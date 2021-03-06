import React, { useState } from 'react';
import { Container, Form, Button, Accordion, Card } from 'react-bootstrap';

import PostModel from '../../models/PostModel';

import './CreatePost.css';

const CreatePost = (props) => {
    const tagsList = [
        'Physical Health', 'Mental Health', 'Finances', 'Career Development', 'Education', 'Social Issues', 'Political', 'Neighborhood Development', 'Crime and Safety', 'Substance Abuse', 'Childcare', 'Elderly Care', 'Bartering Services', 'Landscaping and Lawncare', 'Home Repair & Remodeling' 
    ]
    // const [cityList] = useCities();

    const [category, setCategory] = useState('') 
    const [tags, setTags] = useState('')
    const [city, setCity] = useState('') 
    const [title, setTitle] = useState('') 
    const [message, setMessage] = useState('') 

    const refreshPage = () => {
        window.location.reload();
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(" Post Submitted!", { category, tags, city, title, message })
        PostModel.create({ category, tags, city, title, message }).then((data) => {
            console.log("Post created!"); 
            refreshPage();
        });
    }

    return (   
        <Container className="post-modal">
            <h3>Create New Post!</h3>
            {/* TODO {allCities.length > 0 ?  */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Check 
                            inline label="Needing Help"
                            type="radio" 
                            name="tagOption" 
                            id="tag-Need" 
                            value="Needing Help"
                            inputRef={(ref) => {this.input = ref}}
                            onChange={(e) => setCategory(e.target.value)}
                            />
                        <Form.Check 
                            inline label="Offering Help"
                            type="radio" 
                            name="tagOption" 
                            id="tag-Offer" 
                            value="Offering Help" 
                            inputRef={(ref) => {this.input = ref}}
                            onChange={(e) => setCategory(e.target.value)}
                            />
                        <Form.Check 
                            inline label="Neighborhood Suggestions" 
                            type="radio" 
                            name="tagOption" 
                            id="tag-Suggest" 
                            value="Neighborhood Suggestions" 
                            onChange={(e) => setCategory(e.target.value)}
                            />
                    </Form.Group>
                    {/* TODO fix this!!! */}
                    <Form.Group>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle 
                                    as={Button} 
                                    variant="outline-info" 
                                    size="sm" 
                                    eventKey="1">
                                    Select Categories:
                                </Accordion.Toggle>


                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    {['checkbox'].map((tags) => (
                                        <Form.Check>
                                        {tagsList.map((tags, idx) => (
                                            <Form.Check 
                                                inline key={idx} 
                                                label={tags} 
                                                value={tags}
                                                onChange={(e) => setTags(oldTags => [...oldTags, e.target.value])} />
                                        ))}
                                        </Form.Check>
                                    ))}
                                    </Card.Body>
                                </Accordion.Collapse>



                            </Card>
                        </Accordion>
                    </Form.Group>
                    {/* TODO Fix this!!! */}
                    <Form.Group>
                        <Form.Label>Select City</Form.Label>
                        {/* <Form.Control as="select" onChange={(e)=> setCity(e.target.value)}> */}
                            {/* TODO fix this!!! */}
                            {/* {cityList > 0 ? cityList.map(city => { */}
                            {/* return <option value={city.id} key={city.id}>{city.city}, {city.state}</option>    
                            }): null} */}
                        {/* </Form.Control> */}
                        <Form.Control 
                            type="text" 
                            name="cityName"
                            onChange={(e)=> setCity(e.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control 
                            type="text"
                            name="postTitle" 
                            onChange={(e)=> setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Label>Message: </Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="postMessage"
                            onChange={(e)=> setMessage(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Button 
                            variant="info"
                            type="submit" 
                            value="Post" 
                            >Submit Post</Button>
                    </Form.Group>
                </Form>
            {/* TODO :null} */}
        </Container>
    )
}

export default CreatePost;