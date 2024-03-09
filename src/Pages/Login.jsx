import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./LoginLabel.css";

const Login = () => {
    return (
        <div className="container">
            <div className="Login">
                <h1 style={{
                 width: '671px',
                 height: '109px',
                 fontFamily: 'Poppins',
                 fontWeight: 700,
                 fontSize: '40px',
                 lineHeight: '60px',
                 textAlign: 'center'
  }}>
                    Hola, Selamat Datang di <span style={{ color: 'rgba(255, 113, 13, 1)' }}>BizConnect</span></h1>
                <form action="">
                    <h3 style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '36px', lineHeight: '54px', width: '529px', height: '25px' }}>Masuk Ke BizConnect</h3>
                    <p style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', width: '529px', height: '14px' }}>Silahkan masukkan informasi akun kamu.</p>


                    <input  type="email" id="email" placeholder="Email" 
                    style={{
                    width: '500px',
                    height: '60px',
                    borderRadius: '10px',
                    border: '1.5px solid rgba(255, 113, 13, 1)',
                    padding: '8px 16px',
                    margin: '8px',
                    backgroundColor: 'rgba(255, 253, 208, 1)',
                    color: 'rgba(255, 113, 13, 1)',
  }}
/>

                    
                    <input type="password" id="password" placeholder="Password"
                    style={{
                        width: '500px',
                        height: '60px',
                        borderRadius: '10px',
                        border: '1.5px solid rgba(255, 113, 13, 1)',
                        padding: '8px 16px',
                        margin: '8px',
                        backgroundColor: 'rgba(255, 253, 208, 1)',
                        color: 'rgba(255, 113, 13, 1)',
      }} />
                    <br />
                    <input type="checkbox" id="remember" name="remember"
                       style={{
                        width: '18px',
                        height: '18px',
                        top: '3px',
                        left: '3px',
                        Color: 'rgba(255, 113, 13, 1)'

                      }}
                     />
                    <label htmlFor="remember"
                     style={{
                        width: '95px',
                        height: '11px',
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: 'rgba(39, 39, 39, 1)'
                      }}
                    >
                      Ingat Saya</label>
                      <p style={{ width: '146px', height: '27px', padding: '8px', gap: '8px' }}>
                    <Link to="/forgot-password" style={{
                      width: '130px',
                      height: '11px',
                      fontFamily: 'Poppins',
                      fontWeight: 400,
                       fontSize: '16px',
                       lineHeight: '24px',
                       textAlign: 'right',
                        color: 'rgba(39, 39, 39, 1)'
                         }}>
                      Lupa Password
                        </Link>
                        </p>
                       

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
                        cursor: 'pointer'
                      }}
                    >
                      Masuk
                    </button>
                   

                    <br />
                    <p>Atau</p>
                    <button 
                    type="submit"
                     style={{
                       width: '500px',
                       height: '60px',
                       borderRadius: '10px',
                       padding: '8px, 16px, 8px, 16px',
                       margin: '8px',
                       backgroundColor: 'rgba(255, 113, 13, 1)',
                       color: 'white',
                       border: 'none',
                       cursor: 'pointer'
                     }}
                   >
                     Masuk dengan Google</button>
                    <p style={{
                        width: '174px',
                        height: '11px',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                     fontSize: '16px',
                     lineHeight: '24px',
                        textAlign: 'center',
                        color: 'rgba(39, 39, 39, 1)'
                    }}>Belum memiliki akun?</p>
                    <Link to="/register"
                     style={{
                        width: '133px',
                        height: '11px',
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: 'rgba(255, 113, 13, 1)'
                      }}>Daftar Sekarang</Link>
                </form>
                <div className="right">
                    <img src="/Gambar1.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;
