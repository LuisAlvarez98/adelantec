import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
const FooterContainer = styled.section`
  background: #6fa8fe;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const FooterSubTitle = styled.h4`
  color: white;
  font-weight: bold;
`;

const FooterContent = styled.p`
  color: white;
`;

const FooterComponent = () => {
  return (
    <div className="footer">
      <FooterContainer>
        <Container fluid>
          <Row
            style={{
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <Col xs={12} md={6} lg={4}>
              <FooterSubTitle>Adelantec</FooterSubTitle>
              <FooterContent>
                Con nuestra plataforma es muy fácil encontrar lugar y acceder a
                las instalaciones del Tec.
              </FooterContent>
            </Col>
            <Col xs={12} style={{ marginTop: "30px" }}>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row",
                  justifyContent: "center",
                }}
              >
                <p style={{ color: "white" }}>
                  &#169; Copyright 2021 - Adelantec
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterContainer>
    </div>
  );
};

export default FooterComponent;
