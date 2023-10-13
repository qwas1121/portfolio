import React, { useState } from "react";
import "./main.css";
import IMAGES from "./images/images";

const Main = () => {
  // 상세정보
  const [activeTab, setActiveTab] = useState("Detail");
  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div id="banner">
        <div className="text">
          <h1>I am A Dreamer</h1>
          <p>SonSehee's Portfolio</p>
        </div>
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
              <a href="mailto:sh_s91@naver.com">sh_s91@naver.com</a>
            </p>
            <p>
              <span>Blog</span>
              <a href="https://sehee21.tistory.com/" target="_balnk">
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
        <div className="pjContent">
          <p className="pjTitle">Alterlink NFT </p>
          <div className="inner">
            <div className="img"></div>
            <div className="cont">
              <div className="description">
                <p>NFT 민팅 & 채팅 프로젝트 (진행중)</p>
              </div>
              <div className="featureList">
                <div className="feature">
                  <p className="type">Frontend</p>
                  <p className="text">
                    <span>다양한 시각적 효과를 넣었습니다.</span>
                    <span>메타마스크 지갑 연동 버튼을 추가했습니다.</span>
                    <span>
                      현재 NFT를 소유하고 있지 않다면 채팅페이지 접근할 수
                      없도록 했습니다.
                    </span>
                  </p>
                  <p className="type">Backend</p>
                  <p className="text">
                    <span>
                      만약 DB에 사용자의 지갑주소가 없다면 로그인 페이지로
                      이동되도록 했고, 로그인을 하면 입력한 정보가 DB에
                      저장되도록 했습니다.
                    </span>
                    <span>
                      socket.io와 openai api를 사용하여 선택한 언어에 맞게 채팅
                      내용이 번역되어 보여지도록 했습니다.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
