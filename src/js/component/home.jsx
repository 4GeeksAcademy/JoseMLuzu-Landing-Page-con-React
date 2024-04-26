import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  let data = [
    { title: "Card title 1", description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: "https://picsum.photos/id/12/367/267", buttonURL: "#" },
    { title: "Card title 2", description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: "https://picsum.photos/id/13/367/267", buttonURL: "#" },
    { title: "Card title 3", description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: "https://picsum.photos/id/14/367/267", buttonURL: "#" },
    { title: "Card title 4", description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: "https://picsum.photos/id/15/367/267", buttonURL: "#" }
  ];

  return (
    <div className="body">
      <Navbar />
      <div className="pt-5">
        <Jumbotron />
      </div>

      <div className="container">
        <div className="row">
          {data.map((value, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <Card title={value.title} description={value.description} image={value.image} buttonURL={value.buttonURL} />
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
