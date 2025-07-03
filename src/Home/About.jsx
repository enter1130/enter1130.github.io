import { Divider, Typography } from "antd";
import { useEffect, useState } from "react";

const { Paragraph,Text,Title } = Typography;
function About() {

  const [viewPadding, setViewPadding] = useState(window.innerWidth < 1052 ? 20 : 50);
  useEffect(() => {
    const handleResize = () => {
      setViewPadding(window.innerWidth < 1052 ? 20 : 50);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 頁面載入時先更新一次

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="animate__animated animate__fadeIn animate__faster" style={{height: '100%', overflowY:'auto',overflowX:'hidden'}}>
      <Paragraph style={{padding:`${viewPadding}px`}}>
        <Title level={2} style={{fontWeight:'bolder',left:'20px',top:'40px',position:'relative'}}><span className="p-3 text-light" style={{background:'rgb(205, 205, 205)'}}>關於我</span></Title>
        <div className="border px-4 pb-4" style={{paddingTop:'60px'}}>
        <div className="text-muted" style={{textJustify:'justify',fontSize:'clamp(15px, 2.5vw, 19px)'}}>
          碩士就讀成大資管所，專注於GNN與異常偵測技術，具備資料處理、模型建構與效能分析的實作經驗，致力於將先進技術應用於實務問題解決。
          除研究經歷外，我也具備網站開發與 IT 管理經驗，曾協助企業進行設備維護、帳號權限設定與資訊安全管理，熟悉 GCP 雲端平台操作與資源部署。
        </div>
        <Divider />
        <div style={{ fontSize: 'clamp(12px, 2vw, 15px)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex' }}>
            <div className="text-muted" style={{ width: '90px' }}>中文姓名:</div>
            <div>曾子航</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="text-muted" style={{ width: '90px' }}>英文姓名:</div>
            <div>Chan Zi Hang</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="text-muted" style={{ width: '90px' }}>年齡:</div>
            <div>28</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="text-muted" style={{ width: '90px' }}>國籍:</div>
            <div>馬來西亞</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="text-muted" style={{ width: '90px' }}>居住地:</div>
            <div>台南市</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="text-muted" style={{ width: '90px' }}>聯絡電話:</div>
            <div>+886-900158238</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="text-muted" style={{ width: '90px' }}>聯絡電郵:</div>
            <div>chanzihang0311@gmail.com</div>
          </div>
        </div>
        </div>
      </Paragraph>
    </div>
  )
}

export default About
