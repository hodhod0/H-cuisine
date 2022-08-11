import React from "react";
import NavBar from "../../components/navbar/NavBar";
import img from "../../assets/images/123.png";
import briefimg from "../../assets/images/1234.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <img className="home-image" src={img} alt="image" />
      <div>
        <h3 className="brief-home">Brief</h3>
      </div>

      <div className="d-flex container-home">
        <img src={briefimg} alt="image" width={450} height={250} />

        <div className="discription-home">
          <p>
            Welcome to our humble cuisine, the place when you can have a special
            taste. We made plates from around the world, and our main goal is to
            make you happy. Have a nice taste :)
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
