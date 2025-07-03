import { Button, Col, Image, Row } from "antd";
import { useState } from "react";
import About from "./About";
import Education from "./Education";
import Home from "./Home";
import Skill from "./Skill";
import Works from "./Works";

function Menu({width,result,viewportWidth }) {

  // 可以設定圖片最大寬度不要超過父容器寬度
  const imgWidth = width > 0 ? width * 0.5 : 120; // 80% 寬度，預設 200px
  const [activeButton, setActiveButton] = useState('home');

  const handleClick = (key,value) => {
    setActiveButton(key);
    result(value);
  };
  return (
    <div className="align-item-center justify-content-center d-flex flex-column" style={{ width: "100%", justifyContent: "center",marginTop:viewportWidth > 768 ?'150px':'' }}>
      <div className="border rounded-circle my-3 align-self-center justify-content-center d-flex" style={{height: `${imgWidth}px`,width: `${imgWidth}px`,boxSizing: 'border-box',overflow: 'hidden'}}>
        <Image src="avatar.png" preview={false} alt="React Logo" style={{objectFit: 'cover'}} />
      </div>
      <Row className="text-center" style={{marginTop:'30px'}}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Button
            className="my-1 rounded-0 border-0 menu-btn"
            variant="text"
            onClick={() => handleClick('home', <Home />)}
            style={{
              backgroundColor: activeButton === 'home' ? 'rgb(205, 205, 205)' : 'transparent',
              color: activeButton === 'home' ? 'white' : 'black',
            }}
          >
            Home
          </Button>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Button
            className="my-1 rounded-0 border-0 menu-btn"
            variant="text"
            onClick={() => handleClick('about', <About />)}
            style={{
              backgroundColor: activeButton === 'about' ? 'rgb(205, 205, 205)' : 'transparent',
              color: activeButton === 'about' ? 'white' : 'black',
            }}
          >
            關於我
          </Button>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Button
            className="my-1 rounded-0 border-0 menu-btn"
            variant="text"
            onClick={() => handleClick('skill', <Skill />)}
            style={{
              backgroundColor: activeButton === 'skill' ? 'rgb(205, 205, 205)' : 'transparent',
              color: activeButton === 'skill' ? 'white' : 'black',
            }}
          >
            技能
          </Button>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Button
            className="my-1 rounded-0 border-0 menu-btn"
            variant="text"
            onClick={() => handleClick('eduction', <Education />)}
            style={{
              backgroundColor: activeButton === 'eduction' ? 'rgb(205, 205, 205)' : 'transparent',
              color: activeButton === 'eduction' ? 'white' : 'black',
            }}
          >
            學歷與工作經歷
          </Button>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Button
            className="my-1 rounded-0 border-0 menu-btn"
            variant="text"
            onClick={() => handleClick('other', <Works />)}
            style={{
              backgroundColor: activeButton === 'other' ? 'rgb(205, 205, 205)' : 'transparent',
              color: activeButton === 'other' ? 'white' : 'black',
            }}
          >
            作品
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Menu;
