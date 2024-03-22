import React from 'react';
import { Link } from 'react-router-dom'; // Import Link jika Anda menggunakan react-router

const HomePage = () => {
    return (
        <div className='navbar'
             style={{
                 width: '100%',
                 height: '108px',
                 padding: '16px 32px',
                 backgroundColor: '#C6391A',
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
                    color: '#272727',
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
                    color: '#272727',
                    position: 'absolute',
                    top: '35px',
                    left: '600px'
                }}>
                    <Link to="/homepage" style={{ color: '#FFFFFF' }}>Beranda</Link>
                </li>

                <li style={{
                    width: '73px',
                    height: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    color: '#272727',
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
                    color: '#272727',
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
                    color: '#272727F',
                    position: 'absolute',
                    top: '35px',
                    left: '940px'
                }}>
                    <Link to="/Konsultasi" style={{ color: '#FFFFFF' }}>Mentoring</Link>
                </li>

                <li style={{
                    width: '122px',
                    height: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    color: '#272727',
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
                    backgroundColor: '#C6391A',
                    gap: '8px',
                    left: '0px'
                }}
            >
                <img 
                    src="Gambar1.png" 
                    alt="" 
                    style={{
                        position: 'absolute',
                        top: '100px', // Set the top value
                        left: '800px', // Set the left value
                    }}
                />
                <p
                 style={{
        width: '622px',
        height: '101px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '700',
        fontSize: '40px',
        lineHeight: '60px',
        color: '#FFFFFF',
        position: 'absolute',
        top: '150px',
        left: '50px'
    }}
>
    Etalase Produk 
    <br />
    Mahasiswa Wirausaha
</p>
<p
    style={{
        width: '671px',
        height: '89px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '30px',
        color: '#FFFFFF',
        position: 'absolute',
        top: '290px',
        left: '50px'
    }}
>
    BizConnect adalah platform yang tepat bagi mahasiswa wirausaha di Indonesia yang ingin memasarkan produk mereka secara online.
</p>
<Link to="/regristasi" style={{
    display: 'inline-block',
    width: '306px',
    height: '50px',
    borderRadius: '8px',
    padding: '16px 32px',
    backgroundColor: '#FFFFFF',
    color: '#272727',
    fontSize: '20px',
    fontWeight: 'normal',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: '24px',
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: '410px',
    left: '50px'
}}>
    Registrasi Pelaku Usaha
</Link>

            </div>
            <div className='contain1'
              style={{
                width: '1515px',
                height: '650px',
                top: '800px',
                padding: '24px 48px',
                backgroundColor: '#FBF2F0',
                gap: '120px',
                position: 'absolute',
                 top: '808px',
                left: '0px'
            }}>
                <p
    style={{
        width: '678px',
        height: '80px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        fontSize: '34px',
        lineHeight: '51px',
        color: '#272727',
        position: 'absolute',
        top: '100px',
        left: '800px'
    }}
>
    Mari Bergabung dengan 
    <br />Komunitas Mahasiswa Wirausaha
</p>
<p
    style={{
        width: '678px',
        height: '44px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '30px',
        color: '#272727',
        position: 'absolute',
        top: '200px',
        left: '800px'
        
    }}
>
    Bergabung sekarang dengan Komunitas Wirausaha se-Indonesia
    <br /> dan dapatkan manfaatnya
</p>
<p
    style={{
        width: '602px',
        height: '14px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '30px',
        color: '#272727',
        position: 'absolute',
        top: '302px',
        left: '850px'
    }}
>
    Mendapatkan relasi dengan sesama Mahasiswa Wirausaha
</p>
<p
    style={{
        width: '614px',
        height: '14px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '30px',
        color: '#272727',
        position: 'absolute',
        top: '353px',
        left: '850px'
        
    }}
>
    Sharing ilmu wirausaha bersama dengan Mahasiswa lainnya
</p>
<p
    style={{
        width: '521px',
        height: '14px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '30px',
        color: '#272727',
        position: 'absolute',
        top: '403px',
        left: '850px'
    }}
>
    Berkolaborasi usaha dengan Mahasiswa Wirausaha
</p>
<div>
            
            <Link to="/tujuan">
                <button
                    style={{
                        width: '292px',
                        height: '50px',
                        borderRadius: '8px',
                        padding: '16px 32px',
                        backgroundColor: '#C6391A',
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: '500',
                        fontFamily: 'Poppins, sans-serif',
                        lineHeight: '20px',
                        textAlign: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        top: '460px',
                        left: '800px',
                        position: 'absolute'
                    }}
                >
                    Bergabung Komunitas
                </button>
            </Link>
        </div>
   
<img  src="circle.png" 
 alt="" 
 style={{
    position: 'absolute',
        top: '300px',
        left: '800px'
 }}/>

<img  src="circle.png" 
 alt=""
 style={{
    position: 'absolute',
        top: '350px',
        left: '800px'
 }} />
 
 <img  src="circle.png" 
 alt="" 
 style={{
    position: 'absolute',
        top: '400px',
        left: '800px'
 }}/>
 <img  src="Gambarhome1.png" 
 alt="" 
 style={{
    width: '328px',
        height: '231px',
        top: '102px',
        left: '50px',
        position: 'absolute'
 }}/>
 <img  src="home5.png" 
 alt="" 
 style={{
   width: '328px',
 height: '231px',
 top: '250px',
 left: '300px',
 position: 'absolute'  
 }}
/>

            </div >

            <div className='contain2'
            style={{
                width: '1515px',
                height: '645px',
                top: '1448px',
                padding: '24px 48px',
                backgroundColor: '#FBF2F0',
                gap: '8px',
                position: 'absolute',
                top:'1458px',
                left:'0px'
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
            left:'50px'
            
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
    left:'150px'
    }}>
      BizConnect menyediakan layanan konsultasi mengenai usaha kamu lho, yuk coba sekarang.
    </p>
    


    <Link to="/Konsultasi">
                <button
                    style={{
                        width: '292px',
                        height: '50px',
                        borderRadius: '8px',
                        padding: '16px 32px',
                        backgroundColor: '#C6391A',
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: '500',
                        fontFamily: 'Poppins, sans-serif',
                        lineHeight: '20px',
                        textAlign: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        top: '520px',
                        left: '650px',
                        position: 'absolute'
                    }}
                >
                    Yuk Mulai Konsultasi
                </button>
            </Link>

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
        left: '280px'
 }}/>


            </div>
            <div className='footer'style={{
                width: '1515px',
                height: '350px',
                padding: '24px 48px',
                backgroundColor: '#FBF2F0',
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
    width: '1515px', 
    height: '70px', 
    position: 'absolute',
    top: '2453px', 
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

        </div>
    );
}

export default HomePage;


