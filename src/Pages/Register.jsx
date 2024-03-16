import React from 'react';
import { Link } from 'react-router-dom'; // Import Link jika Anda menggunakan react-router

const Register = () => {
  return (
    <div className="layout" style={{
      width: 'full',
      height: '1024px',
      top: '3040px',
      left: '12807px',
      backgroundColor: '#FF710D',
    }}>
      <div className="container" style={{
        width: 'full',
        height: '900px',
        position: 'absolute',
        top: '62px',
        left: '70px',
        borderRadius: '25px',
        padding: '8px',
        backgroundColor: '#FFECD0',
        justifyContent: 'center',
        
      }}>
        <div className="Login">
          <h1 style={{
            width: '671px',
            height: '109px',
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '60px',
            textAlign: 'center',
            position: 'absolute', 
            top: '580px', 
            left: '0px'
          }}>
            Ayo Bergabung
            <br />
            dengan <span style={{ color: 'rgba(255, 113, 13, 1)' }}>BizConnect</span>
          </h1>
          <form action="">
          <h3 style={{
        fontFamily: 'Poppins',
         fontWeight: 600,
         fontSize: '36px',
        lineHeight: '54px',
         width: '529px',
         height: '25px', 
         position: 'absolute',
         top: '100px',
         right: '20px'
            }}>Buat akun BizConnect</h3>
           <p style={{
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '30px',
          width: '529px',
          height: '14px', 
          position: 'absolute',
         top: '150px',
         right: '20px'

            }}>Silahkan isi form berikut untuk melanjutkan</p>

        <input
  type="text"
  id="nama"
  placeholder="Nama"
  style={{
    width: '500px',
    height: '60px',
    borderRadius: '10px',
    border: '1.5px solid rgba(255, 113, 13, 1)',
    padding: '8px 16px',
    margin: '8px',
    backgroundColor: 'rgba(255, 253, 208, 1)',
    color: 'rgba(255, 113, 13, 1)',
    position: 'absolute',
    top: '200px',
    right: '40px'
  }}
/>
            <input
              type="email"
              id="email"
              placeholder="Email"
              style={{
                width: '500px',
                height: '60px',
                borderRadius: '10px',
                border: '1.5px solid rgba(255, 113, 13, 1)',
                padding: '8px 16px',
                margin: '8px',
                backgroundColor: 'rgba(255, 253, 208, 1)',
                color: 'rgba(255, 113, 13, 1)',
                position: 'absolute',
                top: '280px',
                right: '40px'
              }}
            />

            <input
              type="password"
              id="password"
              placeholder="Password"
              style={{
                width: '500px',
                height: '60px',
                borderRadius: '10px',
                border: '1.5px solid rgba(255, 113, 13, 1)',
                padding: '8px 16px',
                margin: '8px',
                backgroundColor: 'rgba(255, 253, 208, 1)',
                color: 'rgba(255, 113, 13, 1)',
                position: 'absolute',
                top: '370px',
                right: '40px'
              }}
            />
    
    
    
  <Link to="/Login" style={{
    width: 'fill',
    fontFamily: 'Poppins',
    fontWeight: 400,
    height: '24px',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'right',
    padding: '8px',
    color: 'rgba(39, 39, 39, 1)',
    gap: '219px',
    position: 'absolute',
    top: '447px',
    right: '40px'
  }}>
    Sudah memiliki akun?
  </Link>

            <button
              type="submit"
              style={{
                width: '500px',
                height: '60px',
                borderRadius: '8px',
                padding: '16px 32px',
                margin: '8px',
                backgroundColor: 'rgba(255, 113, 13, 1)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                position: 'absolute',
                top: '500px',
                right: '40px'
              }}
            >
              Daftar
            </button>

            <br />
            <p
            style={{
              position: 'absolute',
              top: '580px',
              right: '280px'
            }}>Atau</p>
            <button
              type="submit"
              style={{
                width: '500px',
                height: '60px',
                borderRadius: '10px',
                padding: '8px 16px',
                margin: '8px',
                backgroundColor: 'rgba(255, 113, 13, 1)',
                textAlign: 'center',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                position: 'absolute',
                top: '610px',
                right: '40px'
                
                
              }}
            >
             Daftar dengan Google
            </button>
        
          </form>
          <div className="right" style={{ position: 'absolute', top: '170px', left: '50px'  }}>
            <img src="/Gambar1.png" alt="" />
          </div>
          <div className="right" style={{ position: 'absolute', top: '620px', left: '840px'  }}>
            <img src="/GambarGoogle.png" alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
