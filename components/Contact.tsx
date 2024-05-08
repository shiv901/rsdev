'use client';
import { Card, ConfigProvider, Space, theme } from 'antd';
import { BsMailbox } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa6';

export default function Contact() {
  return (
    <>
      <h1
        id='contact'
        className='text-6xl underline text-center bg-black backdrop-filter bg-opacity-60 backdrop-blur-md p-3 shadow-lg mt-64'
      >
        Contact Me
      </h1>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <div className='container flex justify-evenly my-40'>
          <Card>
            <a href='tel:9990941900' className='flex items-center gap-2'>
              <FaPhone /> <span>+91 999 094 1900</span>
            </a>
          </Card>

          <Card>
            <a
              href='mailto:shivansh901@gmail.com'
              className='flex items-center gap-2'
            >
              <BsMailbox /> <span>Shivansh901@gmail.com</span>
            </a>
          </Card>
        </div>
      </ConfigProvider>
    </>
  );
}
