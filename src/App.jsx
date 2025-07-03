import { Card, Col, Row } from 'antd';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import About from './Home/About';
import Menu from './Home/Menu';

function App() {
  const [content, setContent] = useState(<About />);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [cardWidth, setCardWidth] = useState(0);

  const prevDivRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 頁面載入時先更新一次

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!prevDivRef.current) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        setCardWidth(width);
      }
    });

    resizeObserver.observe(prevDivRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [viewportWidth]); // 只要視窗寬度變，重新啟動監聽

  const returnResult=(result)=>{
    setContent(result)
  }

  return (
    <div className='align-self-center justify-content-center d-flex'>
      <Row
        gutter={8}
        align={'middle'}
        justify={'space-around'}
        style={viewportWidth>1051?{ height: `${viewportHeight}px`, width: `${viewportWidth - 100}px` }:{}}
      >
        <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <Card
            ref={prevDivRef}
            className='p-3 m-3 rounded-0 animate__animated animate__fadeInLeft animate__faster'
            style={viewportWidth > 768 ? { height: `${viewportHeight - 150}px` } : {}}
          >
            <Menu width={cardWidth} viewportWidth={viewportWidth} result={returnResult} />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
          <Card className='p-3 m-3 rounded-0 animate__animated animate__fadeInRight animate__faster' styles={{body:{height: '100%',padding: 0}}} style={{ height: `${viewportHeight - 150}px`,overflow: 'hidden' }}>
            {content}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
