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
                    Currently designing at Centric Gateway working with the SeerBit Team. I am a
                    founding member of the
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                      href="https://www.linkedin.com/groups/8737901/"
                    >
                      Inspire Innovative Cohort
                    </a>
                    . I enjoy building high-quality applications and I am learning ReactJS at the
                    moment.
                  </p>
                )}

                {paragraphThree || (
                  <p className="about-wrapper__info-text">
                    I like being challenged especially when it creates that opportunity to learn
                    something new—that&apos;s what excites me about this industry. I also contribute
                    to the{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                      href="https://github.com/mikhael28/paretOS"
                    >
                      ParetoOS open source project
                    </a>{' '}
                    . At my free time, I play table tennis or basketball, and I spend quality time
                    with my family and friends.
                  </p>
                )}

                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://drive.google.com/file/d/1PxQjVkjwTY_yUk20JR_yVV5hRT0w5Me_/view?usp=sharing"
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
