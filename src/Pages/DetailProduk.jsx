import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Footer3 from '../components/Footer3';

const DetailProduk = () => {
    return (
        <div>
            <Navbar />
            <main style={{
                width:'full',
                height:'1000px',
                backgroundColor: 'rgba(251, 242, 240, 1)'
            }}>

            
                <div style={{
                    width: '639.5px', // Lebar tetap
                    height: '638px', // Tinggi tetap
                    borderRadius: '25px', // Radius sudut
                    border: '3px solid rgba(198, 57, 26, 1)', // Border dengan ketebalan 3px, gaya solid, dan warna sesuai spesifikasi
                    padding: '16px 32px', // Padding atas & bawah 16px, kiri & kanan 32px
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px', // Gap antar elemen di dalam flex container
                    fontFamily: 'Poppins, sans-serif', // Font family Poppins
                    fontWeight: 400, // Font weight 400
                    fontSize: '20px', // Ukuran font 20px
                    lineHeight: '30px', // Tinggi baris 30px
                    color: 'rgba(39, 39, 39, 1)', // Warna teks
                    backgroundColor: 'rgba(251, 242, 240, 1)', // Warna latar belakang
                    position:'absolute',
                    top:'200px',
                    left:'800px'
                }}>
                     <div style={{
                    width: '592px', // Lebar tetap
                    height: '178.29px', // Tinggi tetap
                    borderRadius: '25px', // Radius sudut
                    border: '3px solid rgba(198, 57, 26, 1)', // Border dengan ketebalan 3px, gaya solid, dan warna sesuai spesifikasi
                    padding: '16px 32px', // Padding atas & bawah 16px, kiri & kanan 32px
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px', // Gap antar elemen di dalam flex container
                    fontFamily: 'Poppins, sans-serif', // Font family Poppins
                    fontWeight: 400, // Font weight 400
                    fontSize: '20px', // Ukuran font 20px
                    lineHeight: '30px', // Tinggi baris 30px
                    color: 'rgba(39, 39, 39, 1)', // Warna teks
                    backgroundColor: 'rgba(251, 242, 240, 1)', // Warna latar belakang
                    position:'absolute',
                    top:'450px',
                    left:'-750px'
                }}></div>
    <h1  style={{
            fontFamily: 'Poppins, sans-serif', // Font family
            fontWeight: 700, // Font weight
            fontSize: '42px', // Font size
            lineHeight: '63px', // Line height
            color: 'rgba(39, 39, 39, 1)', // Text color
            position:'absolute',
            top:'30px',
            left:'20px'
        }}>
            <span>Pipe Bouquet Flowers</span>
        </h1>
    
                </div>
                <div style={{
            fontFamily: 'Poppins, sans-serif', // Font family
            fontWeight: 700, // Font weight
            fontSize: '34px', // Font size
            lineHeight: '51px', // Line height
            color: 'rgba(198, 57, 26, 1)',
            position:'absolute',
            top:'300px',
            left:'820px' // Font color (PRIMARY NEW)
        }}>
            Rp 56.000
        </div>
         
                <h1 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: 'rgba(39, 39, 39, 1)',
                    position:'absolute',
                    top:'400px',
                    left:'820px'
                    
                    
                }}> Deskripsi Produk: <br />
                    Pipe Bouquet Flowers adalah buket bunga yang unik dan<br /> menarik, 
                 dibuat dengan menggunakan pipa sebagai
                 <br /> wadahnya. Dirancang dengan kreativitas tinggi oleh para 
                 <br />pengrajin terampil, cocok sebagai hadiah spesial atau 
                 <br />hiasan untuk ruangan.</h1>
                <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: 'rgba(39, 39, 39, 1)',
                    position:'absolute',
                    top:'690px',
                    left:'820px'
                }}>Tertarik dengan produk?</p>
                <button style={{
            width: '596px', // Fill width
            height: '70px', // Fixed height
            borderRadius: '10px', // Border radius
            padding: '8px 16px', // Padding
            backgroundColor: 'rgba(198, 57, 26, 1)', // Background color
            color: '#fff', // Text color
            border: 'none', // Remove default button border
            fontSize: '16px', // Font size
            fontWeight: 'bold', // Font weight
            textAlign:'center',
            cursor: 'pointer',
            position:'absolute',
                    top:'750px',
                    left:'825px' 
            // Show pointer cursor on hover
        }}>
    
        </button>
        <button style={{
            fontFamily: 'Poppins, sans-serif', // Font family
            fontWeight: 500, // Font weight
            fontSize: '20px', // Font size
            lineHeight: '30px', // Line height
            color: 'rgba(255, 236, 208, 1)', // Text color
            backgroundColor: 'transparent', // Transparent background
            border: 'none', // No border
            cursor: 'pointer', // Show pointer cursor on hover
            position:'absolute',
                    top:'770px',
                    left:'1090px' 
        }}>
            Chat Whatsapp
        </button>
               <div
               style={{
                position:'absolute',
                    top:'200px',
                    left:'50px'
               }}><img src="photo.png" alt="" /></div> 
                <div
                style={{
                    position:'absolute',
                        top:'670px',
                        left:'70px'
                   }}><img src="sosmed.png" alt="" /></div>
                   <p style={{
            fontFamily: 'Poppins, sans-serif', // Font family
            fontWeight: 400, // Font weight
            fontSize: '18px', // Font size
            lineHeight: '27px', // Line height
            color: 'rgba(39, 39, 39, 1)', // Text color
            position:'absolute',
                    top:'670px',
                    left:'120px'
        }}>
            @gloomybloom
        </p>
    
               <div
               style={{
                position:'absolute',
                    top:'780px',
                    left:'70px'
               }}><img src="loc.png" alt="" /></div> 
<p style={{
            fontFamily: 'Poppins, sans-serif', // Font family
            fontWeight: 400, // Font weight
            fontSize: '18px', // Font size
            lineHeight: '27px', // Line height
            color: 'rgba(39, 39, 39, 1)', // Text color
            position:'absolute',
                    top:'785px',
                    left:'120px'
        }}>
           Malang, Jawa Timur
        </p>

               
               <div style={{
                position:'absolute',
                    top:'600px',
                    left:'820px'
               }}><img src="store1.png" alt="" /></div> 
               <p style={{
            fontFamily: 'Poppins, sans-serif', // Font family
            fontWeight: 400, // Font weight
            fontSize: '20px', // Font size
            lineHeight: '30px', // Line height
            color: 'rgba(39, 39, 39, 1)',
            position:'absolute',
                    top:'610px',
                    left:'900px' // Text color
        }}>
            Gloomy Bloom
        </p>

                <div style={{
                position:'absolute',
                    top:'730px',
                    left:'70px'
               }}><img src="apartment.png" alt="" /></div>
<p style={{
            fontFamily: 'Poppins, sans-serif', // Font family
            fontWeight: 400, // Font weight
            fontSize: '18px', // Font size
            lineHeight: '27px', // Line height
            color: 'rgba(39, 39, 39, 1)', // Text color
            position:'absolute',
                    top:'730px',
                    left:'120px'
        }}>
           Fakultas Ilmu Komputer, Universitas Brawijaya
        </p>
               <div style={{
                position:'absolute',
                    top:'250px',
                    left:'1370px'
               }}><img src="favorite.png" alt="" /></div> 
               <div style={{
                position:'absolute',
                    top:'760px',
                    left:'1030px'
               }}><img src="wa.png" alt="" /></div> 
            </main>
            <Footer3 />
        </div>
    );
}

export default DetailProduk;
