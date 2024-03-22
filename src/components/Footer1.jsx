import React from 'react';
import { Link } from 'react-router-dom'; // Import Link jika Anda menggunakan react-router

const Footer1 = () => {
  return (
    <>
      <div className='footer1'style={{
                width: '1513px',
                height: '350px',
                padding: '24px 48px',
                backgroundColor: '#FBF2F0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position:'absolute',
                top:'1265px',
                left:'0px'
            }}>
                <p style={{
            width: '322px',
            height: '14px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '30px',
            color: '#513623',
            position: 'absolute',
            top: '160px',
            left: '55px'
        }}>Platform Mahasiswa Wirausaha</p>
        <p style={{
    width: '149px',
    height: '18px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '24px',
    verticalAlign: 'middle',
    color: '#C6391A',
    lineHeight: '36px',
    position: 'absolute',
    top: '110px',
    left: '150px'
}}>BizConnect</p>

<p style={{
    width: '203px',
    height: '15px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#272727',
    verticalAlign: 'middle',
    position: 'absolute',
    top: '70px',
    left: '550px'
}}>BIZCONNECT</p>

 <p style={{
    width: '203px',
    height: '15px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#513623', 
    verticalAlign: 'middle',
    position: 'absolute',
    top: '70px',
    left: '800px'
  }}>LAYANAN</p>

  <p style={{
    width: '337px',
    height: '15px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#272727',
    verticalAlign: 'middle',
    position:'absolute',
    top: '70px',
    left: '1050px'
  }}>ALAMAT</p>

<p style={{
    width: '337px',
    height: '59px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#272727', 
    verticalAlign: 'middle',
    position:'absolute',
    top: '120px',
    left: '1050px'
  }}>Jl. Veteran, Ketawanggede, Lowokwaru,
  <br /> Kota Malang, Jawa Timur, Indonesia - 
  <br />65145.</p>

  <Link to="/etalase" style={{
    width: '203px',
    height: '11px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#272727',
    textDecoration: 'none',
    position: 'absolute',
    top: '120px',
    left: '550px'
  }}>Etalase</Link>

  <Link to="/komunitas" style={{
    width: '203px',
    height: '11px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#272727',
    textDecoration: 'none',
    position: 'absolute',
    top: '160px',
    left: '550px'
  }}>Komunitas</Link>

<Link to="/TentangKami" style={{
    width: '203px',
    height: '11px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#513623',
    textDecoration: 'none',
    position: 'absolute',
    top: '200px',
    left: '550px'
  }}>Tentang Kami</Link>

<Link to="/Daftarkan Usaha" style={{
    width: '203px',
    height: '11px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#272727',
    textDecoration: 'none',
    position: 'absolute',
    top: '240px',
    left: '550px'
  }}>Daftarkan Usaha</Link>


<Link to="/FAQ" style={{
    width: '203px',
    height: '11px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#272727',
    textDecoration: 'none',
    position: 'absolute',
    top: '120px',
    left: '800px'
  }}>FAQ</Link>

<Link to="/Kerjasama" style={{
    width: '203px',
    height: '11px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#272727',
    textDecoration: 'none',
    position: 'absolute',
    top: '160px',
    left: '800px'
  }}>Kerjasama</Link>

<Link to="/Hubungi Kami" style={{
    width: '203px',
    height: '11px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#272727',
    textDecoration: 'none',
    position: 'absolute',
    top: '200px',
    left: '800px'
  }}>Hubungi Kami</Link>

<Link to="/Konsultasi Mentor" style={{
    width: '203px',
    height: '11px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#272727',
    textDecoration: 'none',
    position: 'absolute',
    top: '240px',
    left: '800px'
  }}>Konsultasi Mentor</Link>

<img 
    src="logo1.png" 
    alt="" 
    style={{
    position: 'absolute',
    top: '100px',
    left: '50px'
}}

 />

<img 
    src="ig.png" 
    alt="" 
    style={{
    position: 'absolute',
    top: '210px',
    left: '50px'
}}
/>

<img 
    src="fb.png" 
    alt="" 
    style={{
    position: 'absolute',
    top: '210px',
    left: '245px'
}}
/>

<img 
    src="yt.png" 
    alt="" 
    style={{
    position: 'absolute',
    top: '210px',
    left: '115px'
}}
/>

<img 
    src="twitter.png" 
    alt="" 
    style={{
    position: 'absolute',
    top: '212px',
    left: '180px'
}}
/>

            </div>

<div className='Footer2'
style={{
    width: '1513px', 
    height: '70px', 
    position: 'absolute',
    top: '1615px', 
    left:'0px',
    padding: '8px 16px', 
    gap: '8px', 
    backgroundColor: ' #C6391A',
}}>
    <p style={{
    width: '1408px', 
    height: '14px', 
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '50px',
    textAlign: 'center', 
    color: '#FFFFFF', 
    position: 'absolute',
    left: '100px'
  }}>Copyright © 2024. BizConnect. All Rights Reserved</p>

</div>
    </>
  );
}

export default Footer1;
