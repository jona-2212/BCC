import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer1 from '../components/Footer1';

const Informasi = () => {
    return (
        <div>
            <Navbar/>
            <div
                className='contain'
                style={{
                    width: '100%',
                    height: '510px',
                    position: 'absolute',
                    top: '107px',
                    padding: '16px 32px',
                    backgroundColor: 'rgba(198, 57, 26, 1)',
                    gap: '8px',
                    left: '0px'
                }}
            >
                <img 
                    src="pic.png" 
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
Informasi Seputar
<br />Mahasiswa Wirausaha

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
Kumpulan informasi mengenai artikel, lomba, dan <br /> webinar
</p>

<div className='contain1'
style={{
    backgroundColor:'rgba(251, 242, 240, 1)',
    width:'full',
    height:'1000px',
    position:'absolute',
    top:'500px'
}}

></div>
<p
        style={{
            width: '1276px',
            height: '25px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '25px',
            verticalTrim: 'Cap height',
            lineHeight: '51px',
            textAlign: 'center',
            position: 'absolute',
            top:'520px',
            left:'75px'
            
        }}
        >Artikel Terbaru
        <p
        style={{
        color: 'rgba(198, 57, 26, 1)',
        position: 'absolute',
        top:'0px',
        left:'735px'
        }}>BizConnect</p>
        </p>
        <Link to="/artikel" style={{
            
        }}><img src="1.png" alt="" style={{
            position:'absolute',
            top:'580px',
            left:'300px',
            width:'276px',
            height:'280px'
            
        }}/></Link>
            <link/>
            <img src="2.png" alt="" style={{
            position:'absolute',
            top:'580px',
            left:'650px',
            width:'276px',
            height:'280px'
            
        }}
        />
            <img src="3.png" alt=""  style={{
            position:'absolute',
            top:'580px',
            left:'1000px',
            width:'276px',
            height:'280px'
            
        }}/>
        <p
        style={{
            width: '1276px',
            height: '25px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '25px',
            verticalTrim: 'Cap height',
            lineHeight: '51px',
            textAlign: 'center',
            position: 'absolute',
            top:'860px',
            left:'160px'
            
        }}
        >Informasi Lomba dan Webinar
        <p
       
        style={{
        color: 'rgba(198, 57, 26, 1)',
        position: 'absolute',
        top:'40px',
        left:'495px'
        }}>#Mahasiswa Wirausaha</p>
        </p>
        <img src="info.png" alt="" style={{
            position:'absolute',
            top:'960px',
            left:'500px',
            width:'186px',
            height:'206px'
            
        }}/>
        <img src="info1.png" alt="" 
        style={{
            position:'absolute',
            top:'960px',
            left:'700px',
            width:'186px',
            height:'206px'
        }}/>
        <img src="info2.png" alt=""
        style={{
            position:'absolute',
            top:'960px',
            left:'900px',
            width:'186px',
            height:'206px'
            
        }} />


            </div>
            <Footer1/>
        </div>
        );
    }
    
    export default Informasi;
    
    
    
