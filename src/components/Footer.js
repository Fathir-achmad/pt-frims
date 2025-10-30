import Logo from "../assets/Logo.png";

function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container px-5">
        <div className="row g-4 justify-content-between">
          {/* Kolom 1: Logo dan Info Perusahaan */}
          <div className="col-lg-6 col-md-6">
            <h5 className="d-flex align-items-center fw-bold mb-4">
              <img src={Logo} width="40" className="me-3" alt="Logo" />
              <span>PT FRIMS SUKSES BERSAMA</span>
            </h5>
            <p className="small text-white-50 mb-4">
              Perusahaan terpercaya dalam bidang perdagangan dan jasa reparasi dengan pengalaman lebih dari 10 tahun melayani kebutuhan industri dan rumah tangga.
            </p>
            <ul className="list-unstyled small">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt-fill me-3 text-primary fs-5"></i>
                <span className="text-white-50">
                  Jl. A6 Teluk Gong No. 5A, Pejagalan, Penjaringan, Jakarta Utara, DKI Jakarta, 14450
                </span>
              </li>
              <li className="mb-3">
                <a
                  href="https://wa.me/+6285888657743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50 text-decoration-none hover-link d-flex align-items-center"
                >
                  <i className="bi bi-whatsapp me-3 text-success fs-5"></i>
                  <span>+62 858-8865-7743</span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="mailto:frims.suksesbersama@gmail.com"
                  className="text-white-50 text-decoration-none hover-link d-flex align-items-center"
                >
                  <i className="bi bi-envelope-fill me-3 text-danger fs-5"></i>
                  <span>frims.suksesbersama@gmail.com</span>
                </a>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-clock-fill me-3 text-warning fs-5"></i>
                <span className="text-white-50">Senin - Sabtu: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>

          {/* Kolom 2: Sosial Media */}
          <div className="col-lg-3 col-md-6 text-center text-lg-end">
            <h5 className="fw-bold mb-4">Ikuti Kami</h5>
            <p className="small text-white-50 mb-3">
              Dapatkan update terbaru dari kami melalui media sosial
            </p>
            <div className="d-flex gap-4 justify-content-center justify-content-lg-end">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-social"
              >
                <i className="bi bi-instagram fs-3"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-social"
              >
                <i className="bi bi-facebook fs-3"></i>
              </a>
              <a
                href="https://wa.me/+6285888657743"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-social"
              >
                <i className="bi bi-whatsapp fs-3"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Garis pemisah + hak cipta */}
        <hr className="border-secondary mt-5 mb-4" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small mb-0 text-white-50">
              © {new Date().getFullYear()} PT FRIMS SUKSES BERSAMA. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
