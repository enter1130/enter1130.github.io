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
          碩士就讀於國立成功大學資訊管理研究所，專注於圖神經網路（GNN）及異常偵測技術，具備資料前處理、模型建構、性能分析與優化的實作經驗，致力於將先進的人工智慧技術應用於實際問題解決，提升系統效能與準確性。
          除研究領域外，亦具備網站開發及 IT 管理經驗，協助企業進行電腦設備維護、帳號與權限管理、資訊安全防護及資源監控，確保內部系統穩定運作。熟悉 GCP 雲端平台之架構設計與資源部署，具備跨平台服務整合能力。
          技術專長涵蓋 Python、PyTorch、SQL 等程式與資料處理工具，並熟悉 Git、Docker 等開發與版本控制工具，能靈活運用於各項系統開發與維護工作。
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
