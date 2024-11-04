import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import NewSingle from "./NewSingle";
import Error from "./Error";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=442ddc5bc43b4bfe96fc12755ea25cd1`;
    // const url = `https://newsdata.io/api/1/latest?apikey=pub_44596ae658833c7ae92781cc4b6f4bc1a142e`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
        });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <NewSingle key={item.url} item={item} />
      ));
    } else {
      return <Error />;
    }
  }
  render() {
    return (
      // <div className='row'>
      <Container>
        <Row>
          <h1 className="my-4">News Blog API</h1>
          <hr></hr>
          <p>
            A news blog that collects the latest news from the UK using a REST
            API.
          </p>
          {this.renderItems()}
        </Row>
      </Container>
    );
  }
}

export default News;
