import React from 'react';
import { Link } from 'react-router-dom'; // Import Link jika Anda menggunakan react-router

        const Navbar = () => {
            return (
                <div className='navbar'
                     style={{
                         width: '1440px',
                         height: '108px',
                         padding: '16px 32px',
                         backgroundColor: '#FF710D',
                     }}
                >
                    <Link to="/">
                        <img 
                            src="GambarConnect.png" 
                            alt="" 
                            style={{
                                position: 'absolute',
                                top: '20px',
                                left: '70px'
                            }}
                        />
                    </Link>
        
                    <Link to="/">
                        <img 
                            src="Logo.png" 
                            alt="" 
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '24.52px',
                                padding: '8px',
                                margin: '8px',
                                backgroundColor: '#FFECD0',
                                position: 'absolute',
                                top: '25px',
                                left: '1070px'
                            }}
                        />
                    </Link>
        
                    <span
                        style={{
                            width: '138px',
                            height: '17px',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '24px',
                            lineHeight: '36px',
                            verticalAlign: 'middle',
                            color: '#FFFFFF',
                            position:'absolute',
                            top: '30px',
                            left: '150px'
                        }}
                    >
                        <Link to="/" style={{ color: '#FFFFFF' }}>BizConnect</Link>
                    </span>
        
                    <ul>
                        <li style={{
                            width: '88px',
                            height: '14px',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '30px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            position: 'absolute',
                            top: '35px',
                            left: '600px'
                        }}>
                            <Link to="/" style={{ color: '#FFFFFF' }}>Beranda</Link>
                        </li>
        
                        <li style={{
                            width: '73px',
                            height: '14px',
                            fontFamily: 'Poppins',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '30px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            position: 'absolute',
                            top: '35px',
                            left: '720px'
                        }}>
                            <Link to="/etalase" style={{ color: '#FFFFFF' }}>Etalase</Link>
                        </li>
                        
                        <li style={{
                            width: '95px',
                            height: '14px',
                            fontFamily: 'Poppins',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '30px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            position: 'absolute',
                            top: '35px',
                            left: '820px'
                        }}>
                            <Link to="/Informasi" style={{ color: '#FFFFFF' }}>Informasi</Link>
                        </li>
        
                        <li style={{
                            width: '102px',
                            height: '14px',
                            fontFamily: 'Poppins',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '30px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            position: 'absolute',
                            top: '35px',
                            left: '940px'
                        }}>
                            <Link to="/mentoring" style={{ color: '#FFFFFF' }}>Mentoring</Link>
                        </li>
        
                        <li style={{
                            width: '122px',
                            height: '14px',
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '30px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            position: 'absolute',
                            top: '37px',
                            left: '1120px'
                        }}>
                            <Link to="/mawar-eva" style={{ color: '#FFFFFF' }}>Mawar Eva</Link>
                        </li>
                    </ul>
                    </div>
    );
}

export default Navbar;


