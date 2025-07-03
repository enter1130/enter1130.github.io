import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Image, Row, Typography } from "antd";
import { useEffect, useState } from "react";

const { Paragraph,Text,Title } = Typography;
function Works() {
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
  
  const working=[
    {
      "name":'ISO 14068-1 國際證照培訓',
      "site":'https://nz68-1.hub-fintech-ncku.tw/',
      "place":'國立成功大學永續金融管理學苑 ',
      "img":'https://academy.hub-fintech-ncku.tw/assets/icon/%E5%AD%B8%E8%8B%91-iso14068-1.png',
      "date":'2025年6月',
    },{
      "name":'ISO 42001 國際證照培訓',
      "site":'https://aims.hub-fintech-ncku.tw/',
      "place":'國立成功大學永續金融管理學苑 ',
      "img":'https://academy.hub-fintech-ncku.tw/assets/icon/%E5%AD%B8%E8%8B%91-iso42001.png',
      "date":'2025年4月',
    },{
      "name":'國立成功大學永續金融管理學苑 入口網站',
      "site":'https://academy.hub-fintech-ncku.tw',
      "place":'國立成功大學永續金融管理學苑',
      "img":'https://academy.hub-fintech-ncku.tw/assets/logo/academy.png',
      "date":'2025年1月',
    },{
      "name":'第五屆永續、轉型金融科技暨影響力投資國際實務論壇',
      "site":'https://forum.2024.hub-fintech-ncku.tw/',
      "place":'成大FinTech商創研究中心',
      "img":'https://forum.2023.hub-fintech-ncku.tw/assets/partner/new-fintech-logo.png',
      "date":'2024年8月',
    },{
      "name":'The 5th International Conference on ESG Management and Green FinTech',
      "site":'https://conference.2024.hub-fintech-ncku.tw/',
      "place":'成大FinTech商創研究中心',
      "img":'https://forum.2023.hub-fintech-ncku.tw/assets/partner/new-fintech-logo.png',
      "date":'2024年7月',
    },{
      "name":'《成功永續金質獎》',
      "site":'https://sfta.reward.ncku.org.tw/',
      "place":'永續金融科技產學小聯盟',
      "img":'https://sfta.reward.ncku.org.tw/file/sfta_reward.png',
      "date":'2024年8月',
    },{
      "name":'永續金融科技產學小聯盟 官網',
      "site":'https://sfta.ncku.org.tw',
      "place":'永續金融科技產學小聯盟',
      "img":'https://sfta.ncku.org.tw/assets/logo/alliancelogo.webp',
      "date":'2023年1月',
    }
  ]
  return (
    <div className="animate__animated animate__fadeIn animate__faster" style={{height: '100%', overflowY:'auto',overflowX:'hidden'}}>
      <Paragraph style={{padding:`${viewPadding}`}}>
        <Title level={2} style={{fontWeight:'bolder',left:'20px',top:'40px',position:'relative'}}><span className="p-3 text-light" style={{background:'rgb(205, 205, 205)'}}>作品</span></Title>
        <div className="border" style={{paddingTop:'60px'}}>
            {working.map((item,key)=>(
              <div className="m-3" key={key}>
              <div className="p-2" style={{minHeight:'100px',margin:'10px'}}>
                <Row className="pb-2">
                  <Col xs={24} sm={24} md={10} lg={8} xl={8} className="p-3 d-flex justify-content-center align-items-center">
                    <Image style={{maxHeight:'250px'}} preview={false} src={item.img} />
                  </Col>
                  <Col xs={24} sm={24} md={14} lg={16} xl={16} className="p-3">
                    <div className="d-flex flex-column justify-content-start align-items-start" style={{height:'100%',width:'100%'}}>
                      <div className="text-start pt-3">
                        <p style={{padding:0,margin:2}} className="text-muted">{item.place}</p>
                        <Title level={3} style={{padding:0,margin:0}}>{item.name}</Title>
                        <div className="pt-3"><span className="p-2 text-light" style={{background:'rgb(170, 170, 170)'}}>{item.date}</span></div>
                      </div>
                      <div className="d-flex justify-content-end align-items-end"  style={{height:'100%',width:'100%'}}>
                        <Button type={'text'} className="menu-btn rounded-0" onClick={()=>window.open(item.site)} variant="text" icon={<ArrowRightOutlined />}>前往</Button>
                      </div>
                    </div>
                  </Col>
                  <Divider />
                </Row>
              </div>
              </div>
            ))}
        </div>
      </Paragraph>
    </div>
  )
}

export default Works
