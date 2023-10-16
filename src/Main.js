import React, { useState, useRef } from "react";
import "./main.css";
import IMAGES from "./images/images";
import projectData from "./projectData";
import projectData2 from "./projectData2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageModal = ({ images, video, onClose }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const videoRef = useRef(null);
  const hasVideo = video && video.length > 0;

  const mainMedia = hasVideo ? images.slice(0, -2).concat(video) : images;
  const thumbnailMedia = hasVideo ? images.slice(0, -1) : images;

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const mainSliderSettings = {
    asNavFor: nav2,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentIndex) => {
      if (hasVideo && currentIndex === images.length - 1) {
        playVideo();
      } else {
        pauseVideo();
      }
    },
  };
  const thumbnailSliderSettings = {
    asNavFor: nav1,
    focusOnSelect: true,
    slidesToShow: 4,
    arrows: false,
  };

  return (
    <div id="imageModal">
      <div className="modalContent">
        <div className="mainSlide">
          <Slider ref={(slider) => setNav1(slider)} {...mainSliderSettings}>
            {mainMedia.map((media, index) => {
              const fileExtension = media.split(".").pop();
              if (fileExtension === "mp4") {
                return (
                  <div key={index}>
                    <video id="video" controls muted autoPlay>
                      <source src={media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <img src={media} alt="project" />
                  </div>
                );
              }
            })}
          </Slider>
        </div>
        <div className="thumbnailSlide">
          <Slider
            ref={(slider) => setNav2(slider)}
            {...thumbnailSliderSettings}
          >
            {thumbnailMedia.map((image, index) => (
              <div key={index}>
                <img src={image} alt="project" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <button onClick={onClose} className="closeBtn">
        X
      </button>
    </div>
  );
};

const Main = () => {
  // 상세정보
  const [activeTab, setActiveTab] = useState("Detail");
  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  // 이미지 클릭 시 모달
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState([]);
  const [currentVideo, setCurrentVideo] = useState([]);

  return (
    <>
      <div id="banner">
        <p className="text mainTitle01 font2">I am A</p>
        <p className="text mainTitle02 font2">Dreamer</p>
      </div>
      <div id="info">
        <div className="infoMenu">
          <img src={IMAGES.character} alt="" />
          <p>
            “안녕하세요. 풀스택 개발자를 꿈꾸는 <span>손세희</span>입니다.”
          </p>
          <button
            className={`btnDetail ${activeTab === "Detail" ? "on" : ""}`}
            onClick={() => handleClick("Detail")}
          >
            상세정보
          </button>
          <button
            className={`btnSkill ${activeTab === "Skills" ? "on" : ""}`}
            onClick={() => handleClick("Skills")}
          >
            SKILLS
          </button>
          <button
            className={`btnHistory ${activeTab === "History" ? "on" : ""}`}
            onClick={() => handleClick("History")}
          >
            이력
          </button>
        </div>
        <div className="infoContents">
          <div
            className={`contWrap contDetail ${
              activeTab === "Detail" ? "on" : ""
            }`}
          >
            <p>
              <span>NAME</span>손세희
            </p>
            <p>
              <span>BIRTH</span>1991.11.21
            </p>
            <p>
              <span>Residence</span>서울시 광진구
            </p>
            <p>
              <span>Phone</span>손세희
            </p>
            <p>
              <span>Email</span>
              <a href="mailto:sh_s91@naver.com" rel="noopener noreferrer">
                sh_s91@naver.com
              </a>
            </p>
            <p>
              <span>Blog</span>
              <a
                href="https://sehee21.tistory.com/"
                target="_balnk"
                rel="noopener noreferrer"
              >
                https://sehee21.tistory.com/
              </a>
            </p>
          </div>
          {/* contDetail */}
          <div
            className={`contWrap contSkills ${
              activeTab === "Skills" ? "on" : ""
            }`}
          >
            <div className="skill skillFront">
              <p>Frontend</p>
              <div className="skillList">
                <img
                  className="html"
                  src={IMAGES.frontSkill_html}
                  alt="html, css, javascript"
                />
                <img src={IMAGES.frontSkill_jquery} alt="jquery" />
                <img src={IMAGES.frontSkill_react} alt="react" />
                <img src={IMAGES.frontSkill_typsecript} alt="typescript" />
              </div>
            </div>
          </div>
          {/* contSkill */}
          <div
            className={`contWrap contHistory ${
              activeTab === "History" ? "on" : ""
            }`}
          >
            <p>
              <span>2007.03~2010.02</span>
              <span>이화미디어 고등학교 졸업</span>
            </p>
            <p>
              <span>2010.03~2014.07</span>
              <span>청강문화산업 대학교 졸업</span>
            </p>
            <p>
              <span>2014.10~2018.05</span>
              <span>MTA기획 퇴사</span>
            </p>
            <p>
              <span>2018.08~2019.01</span>
              <span>
                그린아트컴퓨터학원 디지털디자인&lt;웹표준,html5&gt; 웹디자인
                취업훈련과정 수료
              </span>
            </p>
            <p>
              <span>2019.05~2022.05</span>
              <span>브로컨설팅그룹 퇴사</span>
            </p>
            <p>
              <span>2021.12 ~ 2022.06</span>
              <span>SBS아카데미게임학원 Unity&#40;유니티&#41; 수료</span>
            </p>
            <p>
              <span>2022.05~2022.07</span>
              <span>아티젠 퇴사</span>
            </p>
            <p>
              <span>2023.04~</span>
              <span>브로컨설팅그룹 재직중</span>
            </p>
          </div>
          {/* contHistory */}
        </div>
      </div>
      {/* info */}

      <div id="projects01" className="projects">
        <h2>PROJECTS</h2>
        <h3>- React&Node -</h3>
        {projectData.map((project, index) => (
          <div className="pjContent" key={index}>
            <p className="pjTitle">{project.title}</p>
            <div className="inner">
              <div
                className="img"
                onClick={() => {
                  setCurrentImage(project.modalImages);
                  setCurrentVideo(project.modalVideo);
                  setModalOpen(true);
                }}
              >
                <img src={project.image} alt="" />
              </div>
              <div className="cont">
                <div className="description">
                  <p>{project.description}</p>
                </div>
                <div className="featureList">
                  {project.features.map((feature, fIndex) => (
                    <div className="feature" key={fIndex}>
                      <p className="type">{feature.type}</p>
                      <p className="text mgbt">
                        {feature.text.map((text, tIndex) => (
                          <span key={tIndex}>{text}</span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="urls">
                  {project.urls.map((url, uIndex) => (
                    <p key={uIndex}>
                      <span>{url.label}</span>
                      <a
                        href={url.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {url.link}
                      </a>
                    </p>
                  ))}
                </div>
                <div className="skills"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ImageModal
          images={currentImage}
          video={currentVideo}
          onClose={() => setModalOpen(false)}
        />
      )}

      <div id="projects02" className="projects">
        <h2>PROJECTS</h2>
        <h3>- Publishing -</h3>
      </div>
    </>
  );
};
export default Main;
