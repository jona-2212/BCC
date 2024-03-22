import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Daftarkan.css'; // Pastikan nama file CSS sesuai dengan yang Anda miliki

const Daftarkan = () => {
    return (
        <div>
            <Navbar />
            <form action="">
            <div className="contain">
                <div className="contain1"></div>
                <h1 className="satu">Daftarkan Produk Usaha <br />Kamu di BizConnect</h1>
                <div className="gambar"><img src="gambar.png" alt="" /></div> 
                <div className="gambar2"><img src="gambar2.png" alt="" /></div> 
                <div className="gambar3"><img src="gambar3.png" alt="" /></div> 
                <div className="gambar4"><img src="gambar4.png" alt="" /></div> 
                <div className="cek"><img src="cek.png" alt="" /></div> 
                <p className="dua">Yuk lengkapi form dibawah untuk dapat mendaftarkan produk <br />atau jasa kamu</p>
                <p className="tiga">Daftarkan Produk di <span className="empat">BizConnect</span> </p>
                <p className="lima">Lengkapi form pendaftaran dibawah untuk melanjutkan</p>
                <p className="enam">Nama Produk</p>
                <p className="tujuh">Deskripsi Produk</p>
                <p className="delapan">Kategori</p>
                <p className="sembilan">Harga</p>
                <div className="sepuluh">
                    <label htmlFor="nama"><input type="text" id="nama" placeholder="" /></label>
                </div> 
                <div className="sebe">
                    <input type="text" id="label2" placeholder="" />
                </div>
                <div className="duabe">
                    <input type="text" id="label3" placeholder="" />
                </div>
                <div className="tigabe">
                    <input type="text" id="label4" placeholder="" />
                </div>
                <div className="button"> <button type="submit"  >Daftarkan Produk</button>
                </div>
                <div className="foto">
                    
                <input type="file" id="fileInput" style={{ display: 'none' }} />
              
              <label htmlFor="fileInput">Unggah Foto Produk</label>
                </div>
            </div></form>
            <Footer />
        </div>
    );
}

export default Daftarkan;
