import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import styles from "./Post.module.css";

const post = (props) => {

    const photos = props.post.images;
    const user = props.post.user;
    const tags = props.post.tags;

    return (
        <Container className={styles.container}>
            <div className="mx-auto">
                <Card className={styles.card} >
                    <Card.Header>
                        <div className={styles.cardHeader}>
                            <img
                                src={user.profile.img}
                                align="left"
                                className={styles.profilePhoto}
                                alt=""
                            />
                            <div className={styles.cardHeaderName}>
                                <span className={styles.name} >{user.profile.name}</span>
                                <p className={styles.location}>
                                    <span>
                                        <FontAwesomeIcon icon={faLocationArrow} style={{ color: "teal" }} />
                                    </span>
                                    <span className={styles.infospace}>{user.community}</span>
                                </p>
                            </div>

                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <div>
                                {
                                    tags.map(tag => (
                                        <Button variant="outline-primary" size="sm" className="ml-1">
                                            <FontAwesomeIcon icon={faHashtag} />
                                            <span>{tag}</span>
                                        </Button>
                                    ))
                                }
                            </div>
                        </Card.Subtitle>
                        <div className={styles.carousel}>
                            <Carousel>{
                                photos.map(
                                    photo => (
                                        <Carousel.Item>
                                            <img
                                                className="w-100 h-100"
                                                src={photo.location}
                                                alt=""
                                            />
                                            <Carousel.Caption>
                                                <p className={styles.photoInfo}>{photo.info}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )
                                )
                            }</Carousel>
                        </div>
                        <Card.Text>{props.post.desc}</Card.Text>
                        <Button variant="info">More info</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container >
    );
}

export default post;