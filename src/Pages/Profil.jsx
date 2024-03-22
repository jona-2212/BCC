import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profil = () => {
    return (
        <div className='main'
        style={{
            backgroundColor:'rgba(251, 242, 240, 1)',
            width: '100%',
            height: '2505px',
        }}>
            <Navbar />
            <form action="">
            <div style={{
                width: '910px',
                height: '1068px',
                borderRadius: '15px', 
                padding: '24px 32px', 
                marginBottom: '32px', 
                backgroundColor: 'rgba(255, 255, 255, 1)', 
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)', 
            }}>
                <h2 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '34px',
                    lineHeight: '51px',
                    textAlign: 'center',
                    color: 'rgba(39, 39, 39, 1)',
                }}>
                    PROFIL
                </h2>
                <div style={{
                    width: '832px', 
                    height: 'fit-content', 
                    padding: '8px', 
                    marginBottom: '8px',
                }}>
                    Informasi mengenai akun kamu
                </div>
                <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: '19.62px',
                    lineHeight: '29.43px',
                    color: 'rgba(39, 39, 39, 1)',
                }}>
                    Foto Profil
                </p>
                <img src="store2.png" alt="" />
               <div>
                <input type="file" id="fileInput" style={{ display: 'none' }} />
              
                <label htmlFor="fileInput">Unggah Foto</label>
                <button style={{
                    width: '193px',
                    height: '60px',
                    borderRadius: '8px',
                    padding: '16px 32px',
                    marginBottom: '8px',
                    backgroundColor: 'rgba(198, 57, 26, 1)'
                
                }}></button>
                <p style={{
                     fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', lineHeight: '30px', marginBottom: '4px'
                }}>Nama Lengkap</p>
             <input type="text" style={{
                width: '816px',
                height: '70px',
                borderRadius: '10px',
                border: '0.5px solid rgba(91, 91, 91, 1)',
                padding: '8px 16px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '30px',
                color: 'rgba(39, 39, 39, 1)',
                verticalTrim: 'capHeight',
             }} />
             <p style={{
                     fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', lineHeight: '30px', marginBottom: '4px'
                }}>Tempat</p>
                 <input type="text" style={{
                width: '400px',
                height: '70px',
                borderRadius: '10px',
                border: '0.5px solid rgba(91, 91, 91, 1)',
                padding: '8px 16px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '30px',
                color: 'rgba(39, 39, 39, 1)',
                verticalTrim: 'capHeight',
             }} />
              <p style={{
                     fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', lineHeight: '30px', marginBottom: '4px'
                }}>Tanggal Lahir</p>
                 <input type="text" style={{
                width: '400px',
                height: '70px',
                borderRadius: '10px',
                border: '0.5px solid rgba(91, 91, 91, 1)',
                padding: '8px 16px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '30px',
                color: 'rgba(39, 39, 39, 1)',
                verticalTrim: 'capHeight',
            }} />
    <p style={{
                     fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', lineHeight: '30px', marginBottom: '4px'
                }}>Email</p>
                                 <input type="email" style={{
                width: '400px',
                height: '70px',
                borderRadius: '10px',
                border: '0.5px solid rgba(91, 91, 91, 1)',
                padding: '8px 16px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '30px',
                color: 'rgba(39, 39, 39, 1)',
                verticalTrim: 'capHeight',
            }} />
             <p style={{
                     fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', lineHeight: '30px', marginBottom: '4px'
                }}>Jenis Kelamin</p>
                <div>
  <input
    type="radio"
    style={{
      width: '24px',
      height: '24px',
      border: '2px solid rgba(198, 57, 26, 1)',
      borderStyle: 'solid',
      borderColor: 'rgba(198, 57, 26, 1)',
      marginRight: '5px', // Optional: add some space between the radio button and label
    }}
    id="Laki-Laki"
    name="isi"
    value="Laki-Laki"
  />
  <label htmlFor="Laki-Laki" style={{

        fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', marginBottom: '4px'
  }}>Laki-Laki</label>

  <input
    type="radio"
    style={{
      width: '24px',
      height: '24px',
      borderStyle: 'solid',
      borderColor: 'rgba(198, 57, 26, 1)',
      marginRight: '5px', // Optional: add some space between the radio button and label
    }}
    id="Perempuan"
    name="isi"
    value="Perempuan"
  />
  <label htmlFor="Perempuan"
  style={{

    fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', marginBottom: '4px'
}}>Perempuan</label>
</div>
<div>
  <input type="submit" id="submit" />
  <label htmlFor="submit" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', lineHeight: '30px', marginBottom: '4px', color:'rgba(255, 236, 208, 1)', textAlign:'center' }}>Simpan Perubahan</label>
  <button style={{ width: '279px', height: '60px', borderRadius: '8px', padding: '16px 32px', display: 'flex', gap: '8px', backgroundColor: 'rgba(198, 57, 26, 1)' }}>

  </button>
  
</div>
                </div>
            </div></form>
            <Footer />
        </div>
    );
}

export default Profil;
