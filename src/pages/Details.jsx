import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect, useDispatch } from 'react-redux'
import { setTopNews, clearTopNews,getNews } from '../actions/news';
import { useHistory } from 'react-router-dom';

const Details = (news) => {
    const [articles, setArticles] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
      dispatch(getNews()).then((res) => {
      setArticles(res.articles)
      })
    }, [dispatch])

    const BackToHome = () => {
    history.push('/Home')
    }

  return (
    <Container>
        <Row className='justify-content-md-center py-4'>
          <Col xs lg='8'>
            <Button onClick={BackToHome}> Back To Home </Button>
          </Col>
        </Row>
      <Row className='justify-content-md-center my-5'>
        <Col sm={8}>
            {articles.map((post) => {
                if (post.publishedAt == news.match.params.newsItemPublishedAt) {     
                    return<ListGroup as="ul">
                      <ListGroup.Item as="li" active>
                        <b>Title :</b> {post.title}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <b> Author :</b> {post.author}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Description :</b> {post.description}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <b>Publication Date :</b> {post.publishedAt}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <b>Content :</b> {post.content}
                      </ListGroup.Item>
                      </ListGroup>
                } 
            })}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { setTopNews, clearTopNews }
)(Details);

