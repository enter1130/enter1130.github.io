import { Col, Divider, Image, Progress, Row, Typography } from "antd";
import { useEffect, useState } from "react";

const { Paragraph,Title } = Typography;
function Skill() {
  const [viewPadding, setViewPadding] = useState(window.innerWidth < 1052 ? '20px 20px' : '30px 50px');
    useEffect(() => {
      const handleResize = () => {
        setViewPadding(window.innerWidth < 1052 ? '20px 20px' : '30px 50px');
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // 頁面載入時先更新一次
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  const conicColors = {
    '0%': '#ffccc7',
    '50%': '#ffe58f',
    '100%': '#87d068',
  };

  const language=[
    {
      "name":'Chinese',
      "img":'https://img.icons8.com/?size=100&id=Ej50Oe3crXwF&format=png&color=000000',
      "progress":'80'
    },{
      "name":'Malay',
      "img":'https://img.icons8.com/?size=100&id=nQtyhesxmxhM&format=png&color=000000',
      "progress":'80'
    },{
      "name":'English',
      "img":'https://img.icons8.com/?size=100&id=t3NE3BsOAQwq&format=png&color=000000',
      "progress":'70'
    }
  ]
  
  const skill=[
    {
      "name":'python',
      "img":'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
      "progress":'80'
    },{
      "name":'laravel',
      "img":'https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000',
      "progress":'95'
    },{
      "name":'Javascript',
      "img":'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
      "progress":'90'
    },{
      "name":'React',
      "img":'https://img.icons8.com/?size=100&id=VXQrhy9fWtm1&format=png&color=000000',
      "progress":'90'
    },{
      "name":'Docker',
      "img":'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000',
      "progress":'70'
    },{
      "name":'Git',
      "img":'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',
      "progress":'86'
    }
  ]
  return (
    <div className="animate__animated animate__fadeIn animate__faster" style={{height: '100%', overflowY:'auto',overflowX:'hidden'}}>
      <Paragraph style={{padding:`${viewPadding}`}}>
        <Title level={2} style={{fontWeight:'bolder',left:'20px',top:'40px',position:'relative'}}><span className="p-3 text-light" style={{background:'rgb(205, 205, 205)'}}>技能</span></Title>
        <div className="border px-4 pb-4" style={{paddingTop:'60px'}}>
          <Row gutter={12}>
            <Col xs={24} md={24} lg={24} xl={24}>
              <Title className="text-muted" level={4}>Programming Skills</Title>
            </Col>
            {skill.map((item)=>(
              <Col xs={24} md={8} lg={6} xl={6}>
                <div style={{height:'130px'}} className="m-2 p-2 d-flex flex-row align-items-center justify-content-center">
                  <div className="text-center text-muted"><Image preview={false} className="me-1" src={item.img} alt={item.name} style={{maxHeight:'40px',width:'40px'}} />{item.name}</div>
                  <Progress showInfo={false} strokeColor={conicColors} percent={item.progress} />
                </div>
              </Col>
            ))}
            <Divider />
            <Col xs={24} md={24} lg={24} xl={24}>
            <Title className="text-muted" level={4}>Language Skills</Title>
            </Col>
            {language.map((item)=>(
              <Col xs={24} md={8} lg={6} xl={6}>
                <div style={{height:'130px'}} className="m-2 p-2 d-flex flex-row align-items-center justify-content-center">
                  <div className="text-center text-muted"><Image preview={false} className="me-1" src={item.img} alt={item.name} style={{maxHeight:'40px',width:'40px'}} />{item.name}</div>
                  <Progress showInfo={false} strokeColor={conicColors} percent={item.progress} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Paragraph>
    </div>
  )
}

export default Skill
