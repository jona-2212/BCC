import React from "react";
import { Link } from 'react-router-dom';

const Reset = () => {
  

  return (
    <div className="layar" style={{
        width: 'full',
        height: '1024px',
        top: '3040px',
        left: '12807px',
        backgroundColor: 'rgba(251, 242, 240, 1)'
        ,
    }}>
         <p style={{ 
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '27px',
      color: 'rgba(198, 57, 26, 1)',
      textAlign: 'center',
      position:'absolute',
      top:'300px',
      left:'450px'

                
    }}>
      <Link to="/Login" style={{ textDecoration: 'none', color: 'rgba(198, 57, 26, 1)' }}>
      ⭠ Kembali ke login
      </Link>
    </p>
        <h2 style={{ 
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '34px',
      lineHeight: '51px',
      textAlign: 'center',
      color: '#272727',
      position:'absolute',
      top:'350px',
      left:'600px'
    }}>
      Buat Password Baru
    </h2>

         <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '27px', textAlign: 'center', color: '#272727', position:'absolute',
            top:'400px',
            left:'600px' }}>
        Silahkan masukkan password baru kamu
        </p>
      <Link to="/Login"> {/* Komponen Link untuk navigasi */}
        <button
        type="submit"
          style={{
            width: '639px',
            height: '60px',
            borderRadius: '8px',
            padding: '16px 32px',
            margin: '8px',
            backgroundColor: 'rgba(198, 57, 26, 1)',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 300ms ease-in-out', 
            position:'absolute',
            top:'600px',
            left:'450px'
          }}
         
        >
          Lupa Password
        </button>
      </Link>
      <label htmlFor="password"></label>
                    <input
                        type="text"
                        id="password"
                        placeholder="Password Baru"
                        style={{
                            width: '639px',
                            height: '60px',
                            borderRadius: '10px',
                            border: '1.5px solid rgba(198, 57, 26, 1)',
                            padding: '8px 16px',
                            margin: '8px',
                            backgroundColor: 'rgba(251, 242, 240, 1)',
                            cursor: 'pointer',
                            transition: 'background-color 300ms ease-in-out',
                            position:'absolute',
                            top:'420px',
                            left:'450px'
                          }}
                  
                    />
    
      <label htmlFor="Password konfirmasi"></label>
                    <input
                        type="text"
                        id="passsword konfirmasi"
                        placeholder=" Konfirmasi Password "
                        style={{
                            width: '639px',
                            height: '60px',
                            borderRadius: '10px',
                            border: '1.5px solid rgba(198, 57, 26, 1)',
                            padding: '8px 16px',
                            margin: '8px',
                            backgroundColor: 'rgba(251, 242, 240, 1)',
                            cursor: 'pointer',
                            transition: 'background-color 300ms ease-in-out',
                            position:'absolute',
                            top:'500px',
                            left:'450px'
                          }}
                  
                    />
    </div>
  );
};

export default Reset;

