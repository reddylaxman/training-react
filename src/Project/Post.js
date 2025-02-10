import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Posts = () => {
    const [posts, setPosts] = useState([
        {
            title: "React",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFi4_-9fNmkOc4nkBq6YLPG8higxuZsBuXGQ&s",
            content: "React js content"
        },
        {
            title: "Node",
            image: "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png",
            content: "Node js content"
        }
    ]);

    const [newPost, setNewPost] = useState({ title: "", image: "", content: "" });

    const addPost = () => {
        if (newPost.title && newPost.image && newPost.content) {
            setPosts([...posts, newPost]);
            setNewPost({ title: "", image: "", content: "" });
        }
    };

    const deletePost = (index) => {
        setPosts(posts.filter((post, i) => i !== index));
    };
    

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8} className="mb-4 mt-4">
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="text" value={newPost.image} onChange={(e) => setNewPost({ ...newPost, image: e.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} />
                        </Form.Group>
                        <Button className="mt-2" onClick={addPost}>Add Blog</Button>
                    </Form>
                </Col>
                {posts.map((post, index) => (
                    <Col md={8} className="mb-4" key={index}>
                        <Card>
                            <Card.Img variant="top" src={post.image} width={20} height={250} style={{width:"50%",margin:"0px"}}/>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.content}</Card.Text>
                                <Button variant="danger" onClick={() => deletePost(index)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Posts;
