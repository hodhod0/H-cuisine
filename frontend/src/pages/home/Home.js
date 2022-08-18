import React from "react";
import NavBar from "../../components/navbar/NavBar";
import img from "../../assets/images/back5.jpg";
import home1 from "../../assets/images/home1.jpg"
import briefimg from "../../assets/images/1234.png";
import "./Home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <img className="home-image" src={img} alt="image" height={500}/>

      <div className="py-5">
        <h3 className="brief-home mt-5">Brief</h3>
        <div className="d-flex container-home">
          <img src={briefimg} alt="image" width={500} height={250} className="home-image-brief" />

          <div className="discription-home">
            <p>
              Welcome to our humble cuisine, the place when you can have a
              special taste. We made plates from around the world, and our main
              goal is to make you happy. Have a nice taste :)
            </p>
          </div>
        </div>
        <div className="d-flex container-home mt-5">
          <div className="discription-home ">
            <p>
              Welcome to our humble cuisine, the place when you can have a
              special taste. We made plates from around the world, and our main
              goal is to make you happy. Have a nice taste :)
            </p>
          </div>
          <img src={home1} alt="image" width={500} height={250}  className="home-image-brief"/>
        </div>
      </div>
      <div>
        {/* <div className="blur">
    
        </div>
        <div className="d-flex container-home mt-5">
          <div className="discription-home ">
            <p>
              Welcome to our humble cuisine, the place when you can have a
              special taste. We made plates from around the world, and our main
              goal is to make you happy. Have a nice taste :)
            </p>
          </div>
          <img src={briefimg} alt="image" width={500} height={250} />
        </div> */}
      </div>
      <Footer/>
    </>
  );
};

export default Home;
