
import { Carousel,Image,Card  } from 'antd';
import React from 'react';

const Slider = () => {
  const contentStyle ={
    height: '160px',
    color:'#fff',
    lineHeight:'160px',
    textAlign:'center',
    background:'blue'
  };
    const onChange = (currentSlide) => {
    };
    const { Meta } = Card;
  return (
    <>
      <Carousel afterChange={onChange} beforeChange={onChange}>
        <div>
          <h3 style={contentStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
        </div>
        <div>
          <h3 style={contentStyle}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h3>
        </div>
        <div>
        <Image
            width={200}
            src="https://sdcasitas.com/wp-content/uploads/2021/07/entry-way.jpg"
          />
        </div>
        <div>
          <h3 style={contentStyle}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</h3>
        </div>
    </Carousel>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </>
  );
};

export default Slider;