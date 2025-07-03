import { Col, Row, Tag, Typography } from "antd";
import { useEffect, useState } from "react";

const { Paragraph,Text,Title } = Typography;
function Education() {
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
  
  const education=[
    {
      "name":'資訊管理 碩士',
      "school":'國立成功大學',
      "img":'https://img.icons8.com/?size=100&id=23319&format=png&color=000000',
      "date":'2023年9月—2025年7月',
      "color":'#f50',
      "content":'在研究中設計並實作基於GNN的異常偵測模型，專注於具有多層級、複雜關係的階層式結構資料（產品零件樹狀圖）。透過圖卷積與注意力機制，模型能有效捕捉節點間的結構特徵與跨層級的依賴關係，進一步辨識出潛在異常行為或異常節點。此研究成果有助於實現更精確的風險預警、詐欺偵測以及系統異常監控，並展現圖神經網路在異質結構資料分析中的應用潛力。'
    },{
      "name":'工業與資訊管理 學士',
      "school":'國立成功大學',
      "img":'https://img.icons8.com/?size=100&id=23319&format=png&color=000000',
      "date":'2017年9月—2021年6月',
      "color":'#2db7f5',
      "content":'畢業專題為以深度學習為核心，建構足底影像之疾病判別模型，透過 CNN 等架構進行特徵提取與分類，實現輔助醫療判讀功能。'
    }
  ]

  const working=[
    {
      "name":'網頁開發與軟硬體管理人員',
      "place":'成大FinTech商創研究中心',
      "img":'https://img.icons8.com/?size=100&id=23319&format=png&color=000000',
      "date":'2021年10月—2023年8月',
      "color":'orange',
      "content":[
        '負責設計與開發前端後端功能，包含撰寫網頁介面、串接API、處理資料庫操作，並確保網站在不同裝置上的良好使用體驗。熟悉HTML、CSS、JavaScript及常見框架（如React），具備基本的Git使用經驗。',
        '負責公司內部電腦設備與網路環境的維護與管理，包括硬體設備安裝、故障排除、軟體安裝與更新、帳號權限設定及資訊安全維護。協助制定IT資產管理流程，並確保系統穩定運作及使用者支援。'
      ]
    }
  ]
  return (
    <div className="animate__animated animate__fadeIn animate__faster" style={{height: '100%', overflowY:'auto',overflowX:'hidden'}}>
      <Paragraph style={{padding:`${viewPadding}`}}>
        <Title level={2} style={{fontWeight:'bolder',left:'20px',top:'40px',position:'relative'}}><span className="p-3 text-light" style={{background:'rgb(205, 205, 205)'}}>學歷</span></Title>
        <div className="border " style={{paddingTop:'60px'}}>
            {education.map((item,key)=>(
              <div className="m-3" key={key} style={{backgroundColor:'rgb(248, 248, 248)'}}>
                <div className="p-2" style={{minHeight:'100px',margin:'10px'}}>
                  <Row className="pb-2 d-flex flex-row align-items-center justify-content-between">
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="d-flex flex-row align-items-center">
                      <div className="my-3">
                        <h5 style={{padding:0,margin:0}}>{item.name}</h5>
                        <p style={{padding:0,margin:2}} className="text-muted">{item.school}</p>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="text-md-end"><Tag color={item.color} className="p-1">{item.date}</Tag></Col>
                  </Row>
                  <div className="p-3 mb-3">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Title level={2} style={{fontWeight:'bolder',left:'20px',top:'40px',position:'relative'}}><span className="p-3 text-light" style={{background:'rgb(205, 205, 205)'}}>工作經歷</span></Title>
        <div className="border" style={{paddingTop:'60px'}}>
            {working.map((item,key)=>(
              <div className="m-3 border" key={key}>
                <div>
                  <div className="px-2 pt-2" style={{minHeight:'100px',marginTop:'10px',marginRight:'10px',marginLeft:'10px'}}>
                    <Row className="pb-2 d-flex flex-row align-items-center justify-content-between">
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} className="d-flex flex-row align-items-center">
                        <div className="my-3">
                          <h5 style={{padding:0,margin:0}}>{item.name}</h5>
                          <p style={{padding:0,margin:2}} className="text-muted">{item.place}</p>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} className="text-md-end"><Tag color={item.color} className="p-1">{item.date}</Tag></Col>
                    </Row>
                    
                  </div>
                </div>
                <ul className="p-3 mx-3 mb-3"  style={{backgroundColor:'rgb(248, 248, 248)'}}>
                      {item.content.map((value)=>(
                        <li className="my-2">{value}</li>
                      ))}
                </ul>
              </div>
            ))}
        </div>
      </Paragraph>
    </div>
  )
}

export default Education
