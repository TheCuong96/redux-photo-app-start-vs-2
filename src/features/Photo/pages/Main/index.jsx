import React from "react";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      Photo Main Page
      <Banner
        title="your awesome photos"
        backgroundUrl={Images.PINK_BG}
      ></Banner>
      <Container>
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;
