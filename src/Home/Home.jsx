import { DownloadOutlined, GithubOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, message, Row, Typography } from "antd";
import { useEffect, useState } from "react";

const { Paragraph,Text,Title } = Typography;
function Home() {

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

  const [messageApi, contextHolder] = message.useMessage();
  function Copyable(value){
    navigator.clipboard.writeText(value);
    messageApi.success(`${value} 已複製`)
  }

  return (
    <div className="animate__animated animate__fadeIn animate__faster d-flex justify-content-center align-items-center" style={{height: '100%', overflowY:'auto',overflowX:'hidden'}}>
      {contextHolder}
      <Paragraph style={{padding:`${viewPadding}px`}}>
        <div style={{padding:'30px'}}>
          <div className="text-muted" style={{textJustify:'justify',fontSize:'clamp(20px, 4vw, 200px)'}}>
            CHAN ZI HANG
          </div>
          <Row className="my-3" gutter={12}>
            <Col>
              <Button className="border-0 menu-btn m-1" icon={<GithubOutlined />} onClick={()=>window.open('https://github.com/enter1130')}><span style={window.innerWidth < 768 ?{display:'none'}:{}}>Github</span></Button>
            </Col>
            <Col>
              <Button className="border-0 menu-btn m-1" icon={<MailOutlined />} onClick={()=>Copyable('chanzihang0311@gmail.com')} ><span style={window.innerWidth < 768 ?{display:'none'}:{}}>chanzihang0311@gmail.com</span></Button>
            </Col>
            <Col>
              <Button className="border-0 menu-btn m-1" icon={<PhoneOutlined />} onClick={()=>Copyable('+886-900158238')} ><span style={window.innerWidth < 768 ?{display:'none'}:{}}>+886-900158238</span></Button>
            </Col>
            <Col>
              <Button className="border-0 menu-btn m-1" icon={<DownloadOutlined />} onClick={()=>window.open('/resume.pdf')} ><span style={window.innerWidth < 768 ?{display:'none'}:{}}>履歷 Download</span></Button>
            </Col>
          </Row>
        </div>
      </Paragraph>
    </div>
  )
}

export default Home
