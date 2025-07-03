import { Card, Col, Row } from 'antd';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Menu from './Home/Menu';

function App() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(<Home />);
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

    setTimeout(() => {
      setLoading(false)
    }, 1000);

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

  if(loading) return(<OverlapLineLoading />)
  return (
    <div className='align-items-center justify-content-center d-flex'>
      <Row
        gutter={8}
        align={'middle'}
        justify={'space-around'}
        style={viewportWidth>768?{ height: `${viewportHeight}px`, width: `${viewportWidth - 100}px` }:{}}
      >
        <Col xs={24} sm={24} md={8} lg={8} xl={6} xxl={6}>
          <Card
            ref={prevDivRef}
            className='p-3 m-3 rounded-0 animate__animated animate__fadeIn animate__faster shadow card-bg'
            style={viewportWidth > 768 ? { height: `${viewportHeight - 150}px` } : {}}
          >
            <Menu width={cardWidth} viewportWidth={viewportWidth} result={returnResult} />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={16} lg={16} xl={18} xxl={18}>
          <Card className='p-3 m-3 rounded-0 animate__animated animate__fadeIn animate__faster shadow card-bg' styles={{body:{height: '100%',padding: 0}}} style={{ height: viewportWidth > 768 ?`${viewportHeight - 150}px`:'',overflow: 'hidden' }}>
            {content}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function OverlapLineLoading() {
  return (
    <>
      <div className="overlap-line-loading">
        <div className="loading-text">Loading</div>
        <div className="loading-bar"></div>
      </div>

      <style>{`
        .overlap-line-loading {
          position: fixed;
          inset: 0;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 4px;
          z-index: 9999;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          user-select: none;
        }

        .loading-text {
          position: relative;
          color: #555;
          font-weight: 600;
          font-size: 1.6rem;
          line-height: 1.2;
          padding: 0 8px;
          border-radius: 4px;
          user-select: none;
          white-space: nowrap;
          align-self: flex-end;
          margin-right: 10px;  /* 靠右邊 */
          z-index: 2;
        }

        .loading-bar {
          position: relative;
          width: 100vw;
          height: 4px;
          background: #ddd;
          border-radius: 2px;
          overflow: hidden;
        }

        .loading-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, #888, #444);
          border-radius: 2px;
          animation: slide 1.4s infinite ease-in-out;
          z-index: 1;
        }

        @keyframes slide {
          0% {
            left: -40%;
            opacity: 0.5;
          }
          50% {
            left: 100%;
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}


export default App;
