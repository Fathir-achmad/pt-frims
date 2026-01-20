import './style/content.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Hero from '../assets/industry.jpg';
import ApiLogo from '../assets/pt-api-logo.png';


function About() {
  return (
    <div id='about' className='bg-white'>
      <div className="container px-5 py-5">
        {/* Header Section */}
        <div className='row'>
          <div className='col-12 text-center mb-5'>
            <h2 className='fw-bold display-5'>Tentang Kami</h2>
            <div
              className="underline mx-auto mt-3 mb-3"
              style={{ width: '80px', height: '4px', backgroundColor: '#0d6efd', borderRadius: '2px' }}
            ></div>
            <p className='text-muted lead'>Mitra terpercaya Anda dalam solusi perdagangan dan jasa berkualitas</p>
          </div>
        </div>

        {/* Company Profile Section */}
        <div className='row align-items-center mb-5'>
          <div className='col-lg-6 mb-4 mb-lg-0'>
            <div className='position-relative'>
              <img
                src={Hero}
                alt="Profil Perusahaan"
                className='img-fluid rounded shadow-lg'
                style={{ borderRadius: '15px' }}
              />
            </div>
          </div>
          <div className='col-lg-6 ps-lg-5'>
            <span className='badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3'>Profil Perusahaan</span>
            <h3 className='mb-4 fw-bold'>Siapa Kami?</h3>
            <p className='text-muted mb-4 lh-lg'>
              <strong className='text-dark'>PT FRIMS SUKSES BERSAMA</strong> adalah perusahaan yang bergerak di bidang perdagangan dan jasa dengan pengalaman lebih dari 3 tahun. Komitmen kami adalah memberikan produk berkualitas tinggi dan layanan terbaik kepada seluruh pelanggan.
            </p>
            <p className='text-muted mb-4 lh-lg'>
              Dengan tim profesional dan berpengalaman, kami terus berinovasi untuk memenuhi kebutuhan pasar yang terus berkembang dan memberikan solusi terbaik bagi setiap klien kami.
            </p>
            
            {/* Stats */}
            <div className='row g-3 mb-4'>
              <div className='col-6'>
                <div className='border-start border-primary border-4 ps-3'>
                  <h4 className='fw-bold text-primary mb-0'>200+</h4>
                  <small className='text-muted'>Klien Puas</small>
                </div>
              </div>
              <div className='col-6'>
                <div className='border-start border-primary border-4 ps-3'>
                  <h4 className='fw-bold text-primary mb-0'>150+</h4>
                  <small className='text-muted'>Proyek Selesai</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className='row g-4 mb-5'>
          <div className='col-lg-6'>
            <div className='card border-0 shadow-sm h-100 hover-lift'>
              <div className='card-body p-4'>
                <div className='d-flex align-items-center mb-3'>
                  <div className='icon-box bg-primary bg-opacity-10 p-3 rounded-3 me-3'>
                    <i className='bi bi-eye-fill text-primary fs-3'></i>
                  </div>
                  <h4 className='fw-bold mb-0'>Visi Kami</h4>
                </div>
                <p className='text-muted mb-0 lh-lg'>
                  Menjadi perusahaan terdepan dalam industri perdagangan dan jasa dengan standar kualitas internasional, serta menjadi pilihan utama pelanggan yang mengutamakan keunggulan dan inovasi.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='card border-0 shadow-sm h-100 hover-lift'>
              <div className='card-body p-4'>
                <div className='d-flex align-items-center mb-3'>
                  <div className='icon-box bg-success bg-opacity-10 p-3 rounded-3 me-3'>
                    <i className='bi bi-bullseye text-success fs-3'></i>
                  </div>
                  <h4 className='fw-bold mb-0'>Misi Kami</h4>
                </div>
                <ul className='list-unstyled mb-0'>
                  <li className='mb-3 d-flex align-items-start'>
                    <i className='bi bi-check-circle-fill text-success me-2 mt-1'></i>
                    <span className='text-muted'>Memberikan produk dan layanan berkualitas tinggi yang memenuhi kebutuhan pelanggan</span>
                  </li>
                  <li className='mb-3 d-flex align-items-start'>
                    <i className='bi bi-check-circle-fill text-success me-2 mt-1'></i>
                    <span className='text-muted'>Membangun kepercayaan dan hubungan jangka panjang dengan pelanggan</span>
                  </li>
                  <li className='d-flex align-items-start'>
                    <i className='bi bi-check-circle-fill text-success me-2 mt-1'></i>
                    <span className='text-muted'>Berinovasi secara berkelanjutan untuk menghadapi tantangan masa depan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

                {/* Agencies & Dealers Section */}
<div className="row mt-5">
  <div className="col-12 text-center mb-5">
    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
      Agencies & Dealers
    </span>
    <h3 className="fw-bold display-6">
      Agencies & Authorized Dealers
    </h3>
    <p className="text-muted">
      Principal dan mitra resmi yang mendukung solusi marine & industrial kami
    </p>
  </div>

  <div className="col-lg-6 mb-4">
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-3 text-primary">
          Main Engines & Generator Engines
        </h5>
        <ul className="list-unstyled text-muted mb-0">
          <li>Yanmar Co., Ltd.</li>
          <li>Daihatsu Diesel Mfg. Co., Ltd.</li>
          <li>Mitsubishi Heavy Industries Ltd.</li>
          <li>Kawasaki Heavy Industries Ltd.</li>
          <li>IHI Corporation</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="col-lg-6 mb-4">
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-3 text-primary">
          Auxiliary Equipment
        </h5>
        <ul className="list-unstyled text-muted mb-0">
          <li>Alfa Laval KK</li>
          <li>Furuno Electric Co., Ltd.</li>
          <li>Mitsubishi Electric Corp.</li>
          <li>NABTESCO K.K.</li>
          <li>Yokogawa Denshi Kiki Co., Ltd.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
{/* Strategic Partners Section */}
<div className="row mt-5">
  <div className="col-12 text-center mb-5">
    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
      Strategic Partner
    </span>
    <h3 className="fw-bold display-6">
      Our Strategic Partners
    </h3>
    <p className="text-muted">
      Mitra strategis yang mendukung penguatan layanan dan pengembangan bisnis kami
    </p>
  </div>

  <div className="col-lg-6 mx-auto">
    <div className="card border-0 shadow-sm h-100 hover-lift">
      <div className="card-body p-4 text-center">

        {/* Logo */}
        <div className="mb-4">
          <img
            src={ApiLogo}
            alt="PT Assindo Perniagaan Internasional"
            className="img-fluid"
            style={{ maxHeight: '90px', objectFit: 'contain' }}
          />
        </div>

        <h5 className="fw-bold mb-3">
          PT Assindo Perniagaan Internasional
        </h5>

        <p className="text-muted mb-0 lh-lg">
          Mitra strategis PT FRIMS Sukses Bersama yang bergerak di bidang
          perdagangan dan distribusi produk industri, serta mendukung
          penyediaan solusi yang andal dan berkelanjutan bagi pelanggan.
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Values Section */}
        <div className='row mt-5'>
          <div className='col-12 text-center mb-5'>
            <span className='badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3'>Nilai-Nilai Kami</span>
            <h3 className='fw-bold display-6'>Fondasi Kesuksesan Kami</h3>
            <p className='text-muted'>Nilai-nilai yang menjadi dasar setiap keputusan dan tindakan kami</p>
          </div>
        </div>
        <div className='row g-4'>
          <div className='col-md-4'>
            <div className='card border-0 shadow-sm h-100 hover-lift text-center p-4'>
              <div className='card-body'>
                <div className='icon-box bg-primary bg-opacity-10 p-4 rounded-circle d-inline-flex mb-4'>
                  <i className='bi bi-shield-check text-primary display-4'></i>
                </div>
                <h5 className='fw-bold mb-3'>Integritas</h5>
                <p className='text-muted mb-0'>
                  Berkomitmen pada kejujuran, transparansi, dan etika bisnis yang tinggi dalam setiap transaksi dan hubungan dengan pelanggan.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card border-0 shadow-sm h-100 hover-lift text-center p-4'>
              <div className='card-body'>
                <div className='icon-box bg-success bg-opacity-10 p-4 rounded-circle d-inline-flex mb-4'>
                  <i className='bi bi-star-fill text-success display-4'></i>
                </div>
                <h5 className='fw-bold mb-3'>Kualitas</h5>
                <p className='text-muted mb-0'>
                  Mengutamakan standar kualitas tinggi dalam setiap produk dan layanan yang kami tawarkan kepada pelanggan setia kami.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card border-0 shadow-sm h-100 hover-lift text-center p-4'>
              <div className='card-body'>
                <div className='icon-box bg-warning bg-opacity-10 p-4 rounded-circle d-inline-flex mb-4'>
                  <i className='bi bi-people-fill text-warning display-4'></i>
                </div>
                <h5 className='fw-bold mb-3'>Kepuasan Pelanggan</h5>
                <p className='text-muted mb-0'>
                  Mengutamakan kepuasan dan kepercayaan pelanggan dengan memberikan pelayanan terbaik dan solusi yang tepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;