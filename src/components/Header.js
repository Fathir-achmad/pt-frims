import Hero from '../assets/machine.jpg';
import './style/header.css';

function Header() {
  return (
    <div className="jumbotron" id='header'>
      <div className="container jumbotron position-relative">
        <div className="row d-flex align-items-center position-absolute top-50 translate-middle-y w-100">
          
          {/* Kolom Kiri: Teks dan Tombol */}
          <div className="col-lg-6 px-5 text-start Title">
            <h1 className="display-6 fw-semibold">
              Solusi Tepat untuk Kebutuhan Mesin dan Perdagangan Anda
            </h1>
            <p className="fs-5 mt-3">
              Kami hadir untuk memberikan layanan reparasi mesin serta penyediaan suku cadang
              dan perlengkapan teknis secara profesional, cepat, dan terpercaya — membantu bisnis
              Anda tetap berjalan optimal setiap saat.
            </p>
            {/* <button className="btn btn-primary btn-lg shadow rounded-3 px-4 mt-3 me-3 py-3">
              Mulai Sekarang
            </button>
            <button className="btn border border-primary text-primary btn-lg rounded-3 mt-3 px-4 py-3">
              Lihat Portofolio <i className="bi bi-arrow-right-short"></i>
            </button> */}
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="col-lg-6 text-end d-lg-block d-none rounde">
            <img src={Hero} alt="Hero" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
