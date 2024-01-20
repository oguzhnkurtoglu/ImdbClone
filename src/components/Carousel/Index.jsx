import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const Slider = () => {
  return (
    <Carousel autoplay >
    <div className='relative '>
      <h3 style={contentStyle}>1</h3>
      <div className=' absolute bottom-0 left-2 bg-white w-[100px] h-[200px]'>
        <span className=' text-black absolute bottom-5'>Title</span>
        <span className=' text-black absolute bottom-1'>Add WL!</span>
      </div>
    </div>
    <div className='relative '>
      <h3 style={contentStyle}>2</h3>
      <div className=' absolute bottom-0 left-2 bg-white w-[100px] h-[200px]'>
        <span className=' text-black absolute bottom-5'>Title</span>
        <span className=' text-black absolute bottom-1'>Add WL!</span>
      </div>
    </div>
    <div className='relative '>
      <h3 style={contentStyle}>3</h3>
      <div className=' absolute bottom-0 left-2 bg-white w-[100px] h-[200px]'>
        <span className=' text-black absolute bottom-5'>Title</span>
        <span className=' text-black absolute bottom-1'>Add WL!</span>
      </div>
    </div>
    <div className='relative '>
      <h3 style={contentStyle}>4</h3>
      <div className=' absolute bottom-0 left-2 bg-white w-[100px] h-[200px]'>
        <span className=' text-black absolute bottom-5'>Title</span>
        <span className=' text-black absolute bottom-1'>Add WL!</span>
      </div>
    </div>
  </Carousel>
  )
}

export default Slider