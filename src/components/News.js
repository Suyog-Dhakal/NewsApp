import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor");
    this.state = { articles: [], loading: false, page: 1 };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b7dfca1f10e7453c9f7d7b6fde7101fa&page=1&pageSize=20";
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
    });
  }

  handlePreviousClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b7dfca1f10e7453c9f7d7b6fde7101fa&page=${
        this.state.page - 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);

      this.setState({
        page: this.state.page - 1,
        articles: parseddata.articles,
      });
    }
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b7dfca1f10e7453c9f7d7b6fde7101fa&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);

    this.setState({
      page: this.state.page + 1,
      articles: parseddata.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp -Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
