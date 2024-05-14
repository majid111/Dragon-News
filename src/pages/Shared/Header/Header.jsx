import moment from 'moment';
import Logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={Logo} alt="" />
            <p className='text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;