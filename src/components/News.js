import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "Tom Wildie",
      title:
        "Perth has 50:50 chance of hosting Ashes Test match, says WA Cricket chief Christina Matthews",
      description:
        "Hopes of Perth hosting the fifth and final Ashes Test have faded, with Cricket Australia chief Christina Matthews saying there is a 50:50 chance of the match being hosted in Western Australia.",
      url: "http://www.abc.net.au/news/2021-11-27/doubts-growing-about-ashes-test-match-in-perth/100656298",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/50d29816d1247c38f18f63cf53b1a77d?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=172&width=862&height=485",
      publishedAt: "2021-11-27T06:09:17Z",
      content:
        "WA Cricket chief executive Christina Matthews says there is now only a 50-50 chance of the fifth and final Ashes Test match being played in Perth.\r\nKey points:\r\n<ul><li>The fifth Test between Austral… [+2450 chars]",
    },
    {
      source: { id: "news24", name: "News24" },
      author: "Khanyiso Tshwaku",
      title:
        "Cricket SA CEO on India tour: 'It's still on the cards despite current chaos'",
      description:
        "Cricket South Africa's acting chief executive officer Pholetsi Moseki said the much-needed India tour that's scheduled for next month is very much on the cards.",
      url: "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-ceo-on-india-tour-its-still-on-the-cards-despite-current-chaos-20211126",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/1426/ad34720dad414cd1967b2a4d30f7e50c.jpg",
      publishedAt: "2021-11-26T21:29:55+00:00",
      content:
        "<ul><li>Cricket South Africa's acting chief executive officer Pholetsi Moseki said the highly anticipated India tour is still on the cards.</li><li>The ongoing Netherlands tour is hanging in the bala… [+3233 chars]",
    },
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: "BBC Sport",
      title: "Dressing-room review in cricket plan",
      description:
        "A full review of dressing-room culture is part of a wide-ranging action plan to tackle discrimination and racism in cricket in England and Wales.",
      url: "http://www.bbc.co.uk/sport/cricket/59417260",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13AF9/production/_121833608_gettyimages-1344060699.jpg",
      publishedAt: "2021-11-26T15:22:29.7007196Z",
      content:
        "Emotional Rafiq tells MPs about racism at Yorkshire\r\nA full review of dressing-room culture is part of a wide-ranging action plan to tackle discrimination and racism in cricket in England and Wales.\r… [+3924 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor");
    this.state = { articles: this.articles, loading: false };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp -Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="mytitle"
              description="mydesc"
              imageUrl=""
              newsUrl="TODO"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
