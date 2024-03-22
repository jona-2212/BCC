import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Artikel = () => {
    return (
        <div className='artikel'
        style={{
            backgroundColor:'rgba(251, 242, 240, 1)',
            width: '100%',
            height: '2505px',
            
            
        }}>
            <Navbar />
            <img src="/artikel1.png" 
                style={{
                    position: 'relative',
                    top: '50px',
                    display: 'block',
                    margin: 'auto'
                }}
                alt="" 
            />
            <img src="/kalender.png" 
                style={{
                    position: 'relative',
                    top: '80px',
                    left: '120px'
                }}
                alt="" 
            />
            <p style={{
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#272727',
    position: 'relative',
    top: '50px',
    left: '160px'
}}>
    03 Maret 2024
</p>

            <h2 style={{
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: '34px',
    lineHeight: '51px',
    color: '#272727',
    position: 'relative',
    top: '70px',
    left: '125px'
}}>
    Tips & Trik Menjadi Mahasiswa Wirausaha
</h2>
            <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '26px',
                lineHeight: '39px',
                textAlign: 'justify',
                marginTop: '30px',
                marginLeft: '50px',
                marginRight: '50px',
                color: '#272727',
                position: 'relative',
                top: '60px',
                left: '80px'
            }}>
                Hai Sobat <span style={{ color: '#C6391A' }}>BizConnect  </span> 
                <br />
                <p
                style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '30px',
                    textAlign:'justify',
                    marginTop: '20px',
                    position: 'relative',
                    marginLeft: '0px',
                    marginRight:'150px',
                    top: '-20px',
                    

                    color: '#272727' 
                }}>
Menjadi mahasiswa wirausaha adalah impian banyak individu yang ingin menggabungkan pengalaman kuliah dengan pengembangan bisnis. Namun, langkah-langkah untuk mencapai tujuan ini seringkali tidak jelas bagi banyak mahasiswa. Berikut adalah beberapa tips dan trik yang dapat membantu mahasiswa meraih kesuksesan sebagai seorang wirausaha:</p>
            </p>
            <ol style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
                textAlign:'justify',
                marginTop: '20px',
                marginLeft: '130px',
                marginRight:'130px',
                color: '#272727',
                position: 'relative',
                top: '60px',
                
            }}>
                <li>
                    <strong>1. Tentukan Bidang Usaha yang Tepat</strong><br />
                    Menentukan bidang usaha yang tepat merupakan langkah pertama yang krusial. Pilihlah bidang yang sesuai dengan minat, passion, dan keahlian Anda. Perhatikan juga potensi pasar dan tren yang ada saat ini. Misalnya, jika Anda memiliki minat dalam teknologi, mungkin memulai bisnis dalam bidang pengembangan aplikasi atau teknologi informasi bisa menjadi pilihan yang tepat.
                </li>
                <li style={{
                    position: 'relative',
                    top: '40px'
                }}>
                    <strong>2. Bangun Jaringan yang Kuat</strong><br />
                    Jaringan adalah kunci sukses dalam dunia bisnis. Manfaatkan kesempatan di kampus untuk memperluas jaringan Anda. Ikuti seminar, workshop, dan acara networking untuk bertemu dengan sesama mahasiswa wirausaha dan juga profesional di industri yang relevan. Jangan ragu untuk meminta saran dan masukan dari mereka yang telah sukses dalam berbisnis.
                </li>
                <li style={{
                    position: 'relative',
                    top: '80px'
                }}>
                    <strong>3. Pelajari Keterampilan Bisnis</strong><br />
                    Selain ilmu akademis, keterampilan bisnis juga sangat penting. Pelajari manajemen keuangan, pemasaran, dan manajemen waktu. Anda juga bisa mengikuti kursus atau workshop khusus untuk meningkatkan keterampilan bisnis Anda. Keterampilan ini akan sangat berguna dalam mengelola bisnis Anda dengan efektif.
                </li>
                <li
                style={{
                    position: 'relative',
                    top: '120px'
                }}>
                    <strong>4. Berani Mengambil Risiko</strong><br />
                    Wirausaha adalah tentang mengambil risiko. Jangan takut untuk mencoba hal-hal baru dan mengambil peluang yang muncul di sekitar Anda. Namun, pastikan untuk melakukan riset dan perencanaan yang matang sebelum mengambil keputusan besar.
                </li>
                <li style={{
                    position: 'relative',
                    top: '160px'
                }}>
                    <strong>5. Manfaatkan Teknologi</strong><br />

                    Teknologi dapat menjadi alat yang sangat powerful dalam mengembangkan bisnis Anda. Manfaatkan internet dan media sosial untuk memasarkan produk atau jasa Anda secara efektiff. Bangunlah keberadaan online yang kuat dan aktif untuk menjangkau lebih banyak pelanggan potensial.
                    </li>
            </ol>
            <Footer />
        </div>
    );
}
        

export default Artikel;
