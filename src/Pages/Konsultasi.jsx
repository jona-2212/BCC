import React from 'react';
import { Link } from 'react-router-dom'; // Import Link jika Anda menggunakan react-router
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Konsultasi = () => {    


    return (
        <div className='navbar'
             style={{
                 width: 'full',
                 height: '108px',
                 padding: '16px 32px',
                 backgroundColor: 'rgba(198, 57, 26, 1)',
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

            <div
                className='contain'
                style={{
                    width: '100%',
                    height: '700px',
                    position: 'absolute',
                    top: '107px',
                    padding: '16px 32px',
                    backgroundColor: 'rgba(198, 57, 26, 1)',
                    gap: '8px',
                    left: '0px'
                }}
            >
                <img 
                    src="orang1.png" 
                    alt="" 
                    style={{
                        width: '685.9px',
                        height: '478px',
                        left: '781px',
                        
                        position: 'absolute',
                        top: '37.18px', // Set the top value
                        
                    }}
                />
                <p
                 style={{
        width: '622px',
        height: '101px',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: '40px',
        lineHeight: '60px',
        color: '#FFFFFF',
        position: 'absolute',
        top: '150px',
        left: '50px'
    }}
>
    Mentoring Bisnis 
    <br />
    Bersama Proffesional
</p>
<p
    style={{
        width: '640px',
        height: '89px',
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '30px',
        position: 'absolute',
        top: '290px',
        left: '50px',
        color: '#FFFFFF'
    }}
>
Yuk mentoring sekarang mengenai bisnis dengan
<br /> professional dibidang wirausaha.
</p>

            </div>
            <div className='contain1'
              style={{
                width: '100%',
                height: '800px',
                top: '740px',
                borderRadius: '50px',
                padding: '24px 48px',
                margin: '0 48px',
                backgroundColor: 'rgba(251, 242, 240, 1)',
                position: 'absolute',
                left:'-50px'
                
            }}>
         


        <p
        style={{
            width: '1276px',
            height: '25px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '34px',
            verticalTrim: 'Cap height',
            lineHeight: '51px',
            textAlign: 'center',
            position: 'absolute',
            top:'10px',
            left:'30px'
            
        }}
        >Konsultasi Dengan Mentor 
        <p
        style={{
        color: 'rgba(198, 57, 26, 1)',
        position: 'absolute',
        top:'0px',
        left:'865px'
        }}>BizConnect</p>
        </p>
        <p style={{
    width: '1276px',
    height: '17px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '20px',
    verticalTrim: 'Cap height',
    lineHeight: '30px',
    textAlign: 'center',
    color: '#272727',
    position: 'absolute',
    top:'60px',
    left:'120px'
    }}>
      BizConnect menyediakan layanan konsultasi mengenai usaha kamu lho, yuk coba sekarang.
    </p>
    


<img  src="home4.png" 
 alt="" 
 style={{
    position: 'absolute',
        top: '150px',
        left: '620px'
 }}/>
 <img  src="home2.png" 
 alt="" 
 style={{
    position: 'absolute',
        top: '150px',
        left: '960px'
 }}/>
<img  src="home3.png" 
 alt="" 
 style={{
    position: 'absolute',
        top: '150px',
        left: '270px'
 }}/>
<div className='contain3'
style={{
    width: '100%',
    height: '745px',
    borderRadius: '50px 50px 0 0',
    padding: '32px',
    margin: '0 48px',
    backgroundColor: 'rgba(227, 214, 211, 1)',
    position: 'absolute',
    top: '700px',
    left: '-50px'
    
}}>
    <button style={{
        width: '993px',
        height: '150px',
        top: '1303px',
        left: '224px',
        borderRadius: '25px',
        padding: '16px 32px',
        margin: '8px', 
        backgroundColor: 'rgba(198, 57, 26, 1)',
        color: 'white',
        fontSize: '16px',
        textAlign: 'center',
        lineHeight: '118px', 
        cursor: 'pointer',
        position:'absolute',
        top:'-80px',
        left:'250px'
        
    }}>
        <p style={{
            width: '1276px',
            height: '25px',
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontSize: '34px',
            verticalTrim: 'Cap height',
            lineHeight: '51px',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 1)',
            position:'absolute',
            top:'30px',
            left:'-135px'
    
        }}>Private Mentoring dengan Mentor BizConnect</p>

        <p style={{
            width: '1276px',
            height: '14px',
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '20px',
            verticalTrim: 'Cap height',
            lineHeight: '30px',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 1)',
            position:'absolute',
            top:'80px',
            left:'-135px'
    
        }}> BizConnect menyediakan konsultasi bisnis dengan para professional.</p>
    
    </button>
    
 <div

 style={{
    maxWidth: '416px',
width: '100%',
height: '520px',
borderRadius: '25px',
border: '0.5px solid #5B5B5B',
padding: '24px',
margin: '24px',
backgroundColor: '#FFFFFF',
boxSizing: 'border-box',
position:'absolute',
top:'70px',
left:'70px'
 }}>

  </div>
  <div
 style={{
    maxWidth: '416px',
width: '100%',
height: '520px',
borderRadius: '25px',
border: '0.5px solid #5B5B5B',
padding: '24px',
margin: '24px',
backgroundColor: '#FFFFFF',
boxSizing: 'border-box',
position:'absolute',
top:'70px',
left: '530px'

 }}>

  </div>
  <div
 style={{
    maxWidth: '416px',
width: '100%',
height: '520px',
borderRadius: '25px',
border: '0.5px solid #5B5B5B',
padding: '24px',
margin: '24px',
backgroundColor: '#FFFFFF',
boxSizing: 'border-box',
position:'absolute',
top:'70px',
left:'970px'
 }}>

  </div>
    
  <div style={{ 
      width: '352px',
      height: '17px',
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '36px',
      position:'absolute',
        top:'350px',
        left:'140px'
    }}>
      <h3>Adam Sadam
      </h3>
      </div>
    <p style={{
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '20px',
        color: 'rgba(39, 39, 39, 1)',
        lineHeight: '30px',
        position:'absolute',
        top:'400px',
        left:'140px'
    }}> Ketua Bisnis Indonesia</p>

<button
  style={{
    width: '368px',
    height: '60px',
    borderRadius: '10px',
    padding: '16px 32px',
    marginBottom: '8px',
    backgroundColor: 'rgba(198, 57, 26, 1)',
    color: 'rgba(255, 255, 255, 1)',
    border: 'none', // Optionally, if you don't want any border
    cursor: 'pointer',
    position:'absolute',
        top:'500px',
        left:'120px'
  }}
>
  Rp 185.000
</button>
    <img src="mentor1.png" alt="" style={{
         width:'300.25px',
         height:'158.51px',
         position:'absolute',
         top:'120px',
         left:'620px'
         
    }} />
    <div>
      <div style={{ 
      width: '352px',
      height: '17px',
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '36px',
      position:'absolute',
      top:'350px',
      left:'600px'
    }}>
      <h3>Bima Wardhana </h3></div>
      <p style={{
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '30px',
        position:'absolute',
        top:'400px',
        left:'600px'
    }}> CEO Muda Berkarya</p>
<div>
<Link to="/DetailMentor"> 
<button
  style={{
    width: '368px',
    height: '60px',
    borderRadius: '10px',
    padding: '16px 32px',
    marginBottom: '8px',
    backgroundColor: 'rgba(198, 57, 26, 1)',
    color: 'rgba(255, 255, 255, 1)',
    border: 'none', // Optionally, if you don't want any border
    cursor: 'pointer',
    position:'absolute',
        top:'500px',
        left:'580px'
  }}
>
  Rp 170.000
</button>
</Link>
</div>
     <img src="mentor2.png" alt="" style={{
          width:'300.25px',
         height:'158.51px',
         position:'absolute',
         top:'120px',
         left:'1050px'
     }} />

      </div>
      <div style={{ 
      width: '352px',
      height: '17px',
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '36px',
      position:'absolute',
        top:'350px',
        left:'1050px'
      
    }}>
      <h3>Nadia Rivera</h3>
      </div>
      <p style={{
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '20px',
        color: 'rgba(39, 39, 39, 1)',
        lineHeight: '30px',
        position:'absolute',
        top:'400px',
        left:'1050px'
    }}> CEO Cipta Kreasi</p>
<button
  style={{
    width: '368px',
    height: '60px',
    borderRadius: '10px',
    padding: '16px 32px',
    marginBottom: '8px',
    backgroundColor: 'rgba(198, 57, 26, 1)',
    color: 'rgba(255, 255, 255, 1)',
    border: 'none', // Optionally, if you don't want any border
    cursor: 'pointer',
    position:'absolute',
        top:'500px',
        left:'1020px'
  }}
>
  Rp 210.000
</button>
 <img src="mentor3.png" alt="" style={{
    width:'300.25px',
         height:'158.51px',
    position:'absolute',
         top:'120px',
         left:'150px'
 }} />
</div>



            </div>
            <div className='footer'style={{
                width: '1513px',
                height: '350px',
                padding: '24px 48px',
                backgroundColor: 'rgba(251, 242, 240, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position:'absolute',
                top:'2103px',
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
    color: '#FF710D',
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
    color: '#513623',
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
    color: '#513623',
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
    color: '#513623', 
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
    color: '#513623',
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
    color: '#513623',
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
    color: '#513623',
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
    color: '#513623',
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
    color: '#513623',
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
    color: '#513623',
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
    color: '#513623',
    textDecoration: 'none',
    position: 'absolute',
    top: '240px',
    left: '800px'
  }}>Konsultasi Mentor</Link>

<img 
    src="Bcorange.png" 
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
    top: '2453px', 
    left:'0px',
    padding: '8px 16px', 
    gap: '8px', 
    backgroundColor: 'rgba(251, 242, 240, 1)',
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
  }}>Copyright © 2024. BizConnect. All Rights Reserved</p>

</div>

        </div>
    );
}

export default Konsultasi;


