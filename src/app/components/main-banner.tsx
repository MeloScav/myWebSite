import { Container } from "react-bootstrap";
import TitleDecorated from "./title-decorated";
import TextHighlighted from "./text-highlighted";

const MainBanner = () => {
  return (
    <Container className="main-banner">
      <div className="main-banner__content mw-1000 mx-auto">
        <TitleDecorated className="text-center">
          Méloé Scavezzoni
        </TitleDecorated>
        <p className="fs-xl mt-6">
          <strong>
            <span className="text-secondary">UX</span> /{" "}
            <span className="text-primary">UI</span> designeuse
          </strong>{" "}
          et développeuse web frontend, mon objectif est de créer des designs au{" "}
          <strong>pixel perfect</strong> qui reflètent parfaitement la vision du
          client tout en maintenant une{" "}
          <TextHighlighted className="fw-bold">
            expérience utilisateur
          </TextHighlighted>{" "}
          optimale.
        </p>
      </div>
    </Container>
  );
};

export default MainBanner;