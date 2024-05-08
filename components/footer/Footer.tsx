import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbBrandLeetcode } from 'react-icons/tb';
import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <>
      <hr />
      <div className='footer-container'>
        <p>© {new Date().getFullYear()} Shivansh's Portfolio</p>
        <div className='flex justify-between gap-4 items-center'>
          <SocialIcon
            url='https://github.com/shiv901'
            label='GitHub'
            icon={<FaGithub />}
          />

          <SocialIcon
            url='https://www.linkedin.com/in/shiv901/'
            label='LinkedIn'
            icon={<FaLinkedin />}
          />

          <SocialIcon
            url='https://www.leetcode.com/shiv901'
            label='Leet Code'
            icon={<TbBrandLeetcode />}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
