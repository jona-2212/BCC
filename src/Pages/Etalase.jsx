import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Pastikan nama file CSS sesuai dengan yang Anda miliki

const Etalase = () => {
    return (
        <div>
            <Navbar/>
<div
className='contain'
style={{
    width: '100%',
    height: '500px',
    position: 'absolute',
    top: '107px',
    padding: '16px 32px',
    backgroundColor: 'rgba(251, 242, 240, 1)',
    gap: '8px',
    left: '0px'
}}

>
<p style={{
  width: '1296px', 
  height: '400px', 
  position: 'absolute',
  top: '146px',
  left: '72px',
  borderRadius: '25px', 
  padding: '16px 32px',
  gap: '32px', 
  backgroundColor: 'rgba(198, 57, 26, 1)',
  color: 'rgba(255, 255, 255, 1)',
  fontFamily: 'Poppins', 
  fontWeight: 700, 
  fontSize: '42px', 
  lineHeight: '63px', 
  textAlign: 'center', 

  position:'absolute',
  top:'40px',
  left:'120px'
}}>
  Etalase Produk Mahasiswa Wirausaha
</p>
<p style={{
  fontFamily: 'Poppins',
  fontWeight: 400, 
  fontSize: '20px', 
  lineHeight: '30px',
  textAlign: 'center', 
  color: 'rgba(255, 255, 255, 1)', 
  position:'absolute',
  top:'200px',
  left:'600px'
}}>
  Kumpulan produk dan jasa usaha Mahasiswa
</p>
<button style={{
  width: 'fit-content', 
  height: '50px', 
  borderRadius: '8px', 
  padding: '16px 32px', 
  backgroundColor: 'rgba(255, 255, 255, 1)', 
  color: 'rgba(0, 0, 0, 1)', 
  border: 'none', 
  cursor: 'pointer', 

  position:'absolute',
  top:'300px',
  left:'670px'
}}>
 Daftarkan Produk Kamu
</button>
<div className="contain1" style={{
    width:'full',
    height:'1640px',
    position:'absolute',
    top:'500px',

}}>

</div>

<div>
  <Link to="/detailproduk">
    <img src="pro.png" alt="" style={{
        width:'410px',
        height:'500px',
        position:'absolute',
        top:'700px',
        left:'150px'
    }}/> 
  </Link>
</div>
<img src="pro1.png" alt="" 
style={{
    width:'410px',
    height:'500px',
    position:'absolute',
    top:'700px',
    left:'570px'
}}/>
<img src="pro2.png" alt="" 
style={{
    width:'410px',
    height:'500px',
    position:'absolute',
    top:'700px',
    left:'990px'
}}/>
<img src="pro3.png" alt=""
style={{
    width:'410px',
    height:'500px',
    position:'absolute',
    top:'1250px',
    left:'150px'
}} />
<img src="pro4.png" alt="" 
style={{
    width:'410px',
    height:'500px',
    position:'absolute',
    top:'1250px',
    left:'570px'
}}/>
<img src="pro5.png" alt=""
style={{
    width:'410px',
    height:'500px',
    position:'absolute',
    top:'1250px',
    left:'990px'
}} />


</div>
<Footer/>
</div>
    );
}


export default Etalase;