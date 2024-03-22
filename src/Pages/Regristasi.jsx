import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer1 from '../components/Footer1';

const Registrasi = () => {
    return (
        <div>
            <Navbar />
            <div 
                className='registrasi'
                style={{
                    backgroundColor: '#FBF2F0',
                    width: '100%',
                    height: '1195px', 
                    position:'absolute',
                    top:'108px'
                }}
            >
                <Link to="/">
                    <img 
                        src="Gambar1.png" 
                        alt="" 
                        style={{
                            position: 'absolute',
                            top: '300px',
                            left: '50px'
                        }}
                    />
<h2 style={{ 
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: '34px',
    lineHeight: '51px',
    color: '#272727',
    textAlign:'center',
    position: 'absolute',
    top: '750px',
    left: '70px'
}}>
    Ayo Registrasi Pelaku Usaha 
    <br/> 
    di <span style={{ color: '#C6391A' }}>BizConnect</span>
</h2>
                </Link>
                <p style={{
                    width: '500px',
                    height: '17px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '36px',
                    color: '#272727',
                    position: 'absolute',
                    top: '250px',
                    left: '900px'
                }}>Registrasi Pelaku Usaha</p>
                <p style={{
                    width: '529px',
                    height: '14px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '27px',
                    color: '#272727',
                    position: 'absolute',
                    top: '300px',
                    left: '900px'
                }}>
                    Silahkan isi form berikut untuk melanjutkan</p>
                
                <form>
                    <label htmlFor="NamaToko"></label>
                    <input
                        type="text"
                        id="NamaToko"
                        placeholder="Nama Toko"
                        style={{
                            width: '500px',
                            height: '60px',
                            borderRadius: '10px',
                            border: '1.5px solid #C6391A',
                            padding: '8px 16px',
                            backgroundColor: '#FBF2F0',
                            gap: '8px',
                            position: 'absolute',
                             top: '350px',
                            left: '900px'

                        }}
                    />
                                
                    <label htmlFor="NoWhatsapp"></label>
                    <input
                        type="text"
                        id="NoWhatsapp"
                        placeholder="No Whatsapp"
                        style={{
                            width: '500px',
                            height: '60px',
                            borderRadius: '10px',
                            border: '1.5px solid #C6391A',
                            padding: '8px 16px',
                            backgroundColor: '#FBF2F0',
                            gap: '8px',
                            position: 'absolute',
                            top: '430px',
                            left: '900px'
                        }}
                    />
                     
                    <label htmlFor="NamaInstagram"></label>
                    <input
                        type="text"
                        id="NamaInstagram"
                        placeholder="Nama Instagram"
                        style={{
                            width: '500px',
                            height: '60px',
                            borderRadius: '10px',
                            border: '1.5px solid #C6391A',
                            padding: '8px 16px',
                            backgroundColor: '#FBF2F0',
                            gap: '8px',
                            position: 'absolute',
                            top: '510px',
                            left: '900px'
                        }}
                    />
                    
                    <label htmlFor="PilihUniversitas"></label>
                    <select
                        id="PilihUniversitas"
                        style={{
                            width: '500px',
                            height: '60px',
                            borderRadius: '10px',
                            border: '1.5px solid #C6391A',
                            padding: '8px 16px',
                            backgroundColor: '#FBF2F0',
                            gap: '8px',
                            position: 'absolute',
                            top: '590px',
                            left: '900px'
                        }}
                    >
                        <option value="default">Pilih Universitas</option>
                        <option value="Universitas Brawijaya">Universitas Brawijaya</option>
                        <option value="Universitas Indonesia">Universitas Indonesia</option>
                        <option value="Institut Teknologi Bandung">Institut Teknologi Bandung</option>
                    </select>

                    <label htmlFor="Fakultas"></label>
                    <input
                        type="text"
                        id="Fakultas"
                        placeholder="Fakultas"
                        style={{
                            width: '500px',
                            height: '60px',
                            borderRadius: '10px',
                            border: '1.5px solid #C6391A',
                            padding: '8px 16px',
                            backgroundColor: '#FBF2F0',
                            gap: '8px',
                            position: 'absolute',
                            top: '670px',
                            left: '900px'
                        }}
                    />
                    
                    <label htmlFor="PilihProvinsi"></label>
                    <select
                        id="PilihProvinsi"
                        style={{
                            width: '500px',
                            height: '60px',
                            borderRadius: '10px',
                            border: '1.5px solid #C6391A',
                            padding: '8px 16px',
                            backgroundColor: '#FBF2F0',
                            gap: '8px',
                            position: 'absolute',
                            top: '750px',
                            left: '900px'
                        }}
                    >
                        <option value="default">Pilih Provinsi</option>
                        <option value="Jawa Timur">Jawa Timur</option>
                        <option value="DKI Jakarta">DKI Jakarta</option>
                        <option value="Jawa Barat">Jawa Barat</option>
                    </select>

                    <label htmlFor="KabupatenKota"></label>
                    <input
                        type="text"
                        id="KabupatenKota"
                        placeholder="Kabupaten/Kota"
                        style={{
                            width: '500px',
                            height: '60px',
                            borderRadius: '10px',
                            border: '1.5px solid #C6391A',
                            padding: '8px 16px',
                            backgroundColor: '#FBF2F0',
                            gap: '8px',
                            position: 'absolute',
                            top: '830px',
                            left: '900px'
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: '500px',
                            height: '50px',
                            borderRadius: '10px',
                            border: 'none',
                            backgroundColor: '#C6391A',
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginTop: '20px',
                            position: 'absolute',
                            top: '890px',
                            left: '900px'
                        }}
                    >
                       Regristasi Pelaku Usaha
                    </button>
                </form>
            </div>
            <Footer1 />
        </div>
    );
}

export default Registrasi;