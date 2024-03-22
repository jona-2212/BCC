import React from 'react';
import { Link } from 'react-router-dom'; // Import Link jika Anda menggunakan react-router
import { register } from '../Api/service/register';
const Register = () => {
    const handleRegister = (event) => {
      event.preventDefault()
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    register(data)
    console.log(data)
    }
  return (
    <div className="layout" style={{
      width: 'full',
      height: '1024px',
      top: '3040px',
      left: '12807px',
      backgroundColor: '#C6391A',
    }}>
      <div className="container" style={{
        width: 'full',
        height: '900px',
        position: 'absolute',
        top: '62px',
        left: '70px',
        borderRadius: '25px',
        padding: '8px',
        backgroundColor: '#FBF2F0',
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
            dengan <span style={{ color: '#C6391A' }}>BizConnect</span>
          </h1>
          <form onSubmit ={handleRegister}>
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
  name='name'
  style={{
    width: '500px',
    height: '60px',
    borderRadius: '10px',
    border: '1.5px solid #C6391A',
    padding: '8px 16px',
    margin: '8px',
    backgroundColor: ' #FBF2F0',
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
              name='email'
              style={{
                width: '500px',
                height: '60px',
                borderRadius: '10px',
                border: '1.5px solid #C6391A',
                padding: '8px 16px',
                margin: '8px',
                backgroundColor: ' #FBF2F0',
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
              name='password'
              style={{
                width: '500px',
                height: '60px',
                borderRadius: '10px',
                border: '1.5px solid #C6391A',
                padding: '8px 16px',
                margin: '8px',
                backgroundColor: ' #FBF2F0',
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
                backgroundColor: ' #C6391A',
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
                backgroundColor: ' #C6391A',
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
