import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Leonard Ugorji is a UX/UI Designer and UI Developer, who unintentionally started his career in the university. Fun fact: He skipped lessons to design on Maya. 😄'}
                </p>

                {paragraphTwo || (
                  <p className="about-wrapper__info-text">
                    Leo is currently a UX Designer at Centric Gateway working with the SeerBit Team.
                    He is a founding member of the
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                      href="https://www.linkedin.com/groups/8737901/"
                    >
                      Inspire Innovative Cohort
                    </a>
                    . He enjoys building high-quality applications and is learning ReactJS at the
                    moment.
                  </p>
                )}

                {paragraphThree || (
                  <p className="about-wrapper__info-text">
                    Leo likes being challenged especially when it creates that opportunity to learn
                    something new—that&apos;s what excites him about this industry. He&apos;s also a
                    contributor to the{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                      href="https://github.com/mikhael28/paretOS"
                    >
                      ParetoOS open source project
                    </a>{' '}
                    . At his leisure, he plays table tennis, basketball, and spends time with his
                    family and friends.
                  </p>
                )}

                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
