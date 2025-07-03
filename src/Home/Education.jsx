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
      "content":'我的研究方向著重於結合圖神經網路（GNN）與階層式結構資料，應用於產品異常偵測。針對具有多層級、複雜依賴關係的產品結構（例如零件樹狀圖），設計並實作出一套基於 GNN 的異常偵測模型，能夠捕捉跨層級的結構特徵與節點間的相互影響，精確識別潛在的異常產品或異常組件。<br />在技術實作上，採用 Python 作為主要開發語言，利用 PyTorch 深度學習框架實現模型建構與訓練，並結合 CUDA 技術加速圖資料的平行運算，顯著提升大規模資料的處理效能。模型同時融合圖卷積與注意力機制，強化對異質結構資料的特徵表徵能力。<br />本研究成果有助於實現產品製造與品質管理中的即時異常預警，協助企業及早發現潛在風險，進一步應用於智慧製造、品質監控及供應鏈風險管理，展現圖神經網路在產品異常偵測與階層式結構資料分析中的高度應用潛力。'
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
        '負責公司內部電腦設備與網路環境的維護與管理，包含硬體設備安裝配置、網路規劃與故障排除、軟體安裝更新、帳號權限設定及資訊安全維護，協助制定並執行 IT 資產管理流程，確保系統穩定運作及提升使用者支援效率。',
        '設計與開發網站前後端功能，包含撰寫高效且具良好使用者體驗的網頁介面、開發與串接 API、規劃與管理資料庫（MySQL），並確保跨瀏覽器與跨裝置的相容性。熟悉使用 Laravel、React、MySQL、Docker 等技術進行開發與部署，並善用 Git 進行版本控制及團隊協作。'
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
                  <Row className="pb-2 mx-3 d-flex flex-row align-items-center justify-content-between">
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="d-flex flex-row align-items-center">
                      <div className="my-3">
                        <h5 style={{padding:0,margin:0}}>{item.name}</h5>
                        <p style={{padding:0,margin:2}} className="text-muted">{item.school}</p>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="text-md-end"><Tag color={item.color} className="p-1">{item.date}</Tag></Col>
                  </Row>
                  <div className="p-3 mb-3">
                    <div dangerouslySetInnerHTML={{__html:item.content}} />
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
                    <Row className="pb-2 mx-3 d-flex flex-row align-items-center justify-content-between">
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
