import './style/content.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

function Service(){
    return(
        <div id='service'>
            <div className="container px-5 py-5">
                <div className='row'>
                    <div className='col-12 text-center mb-4'>
                        <h2 className='fw-bold'>Layanan Kami</h2>
                        <div className="underline mx-auto mt-3" style={{width: '80px', height: '3px', backgroundColor: '#0d6efd'}}></div>
                        <p className='text-muted mt-3'>Kami menyediakan berbagai layanan berkualitas untuk memenuhi kebutuhan Anda</p>
                    </div>
                </div>
                
                <div className='container mt-5'>
                    <div className='row text-center'>
                        <div className='col-lg-3 col-md-6 mb-4'>                    
                            <div className="card w-100 h-100 p-4 border-0 shadow-sm hover-lift">
                                <i className='bi bi-tools text-primary display-3 mb-3'></i>
                                <div className="card-body p-0">
                                    <h5 className="card-title mb-3 fw-bold">Reparasi & Perawatan</h5>
                                    <p className="card-text text-muted mb-3">Reparasi dan Perawatan Mesin Umum dengan tenaga ahli berpengalaman.</p>
                                    <ul className='list-unstyled text-start text-muted small'>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Service berkala</li>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Perbaikan mesin</li>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Maintenance rutin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>       
                        
                        <div className='col-lg-3 col-md-6 mb-4'>                    
                            <div className="card w-100 h-100 p-4 border-0 shadow-sm hover-lift">
                                <i className='bi bi-car-front-fill text-primary display-3 mb-3'></i>
                                <div className="card-body p-0">
                                    <h5 className="card-title mb-3 fw-bold">Suku Cadang Mobil</h5>
                                    <p className="card-text text-muted mb-3">Perdagangan Suku Cadang dan Aksesori Mobil original dan terpercaya.</p>
                                    <ul className='list-unstyled text-start text-muted small'>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Sparepart original</li>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Aksesori mobil</li>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Harga kompetitif</li>
                                    </ul>
                                </div>
                            </div>
                        </div>        
                        
                        <div className='col-lg-3 col-md-6 mb-4'>                    
                            <div className="card w-100 h-100 p-4 border-0 shadow-sm hover-lift">
                                <i className='bi bi-gear-fill text-primary display-3 mb-3'></i>
                                <div className="card-body p-0">
                                    <h5 className="card-title mb-3 fw-bold">Mesin Industri</h5>
                                    <p className="card-text text-muted mb-3">Perdagangan Mesin dan Perlengkapannya untuk berbagai kebutuhan industri.</p>
                                    <ul className='list-unstyled text-start text-muted small'>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Mesin produksi</li>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Peralatan industri</li>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Konsultasi teknis</li>
                                    </ul>
                                </div>
                            </div>
                        </div>   
                        
                        <div className='col-lg-3 col-md-6 mb-4'>                    
                            <div className="card w-100 h-100 p-4 border-0 shadow-sm hover-lift">
                                <i className='bi bi-house-heart-fill text-primary display-3 mb-3'></i>
                                <div className="card-body p-0">
                                    <h5 className="card-title mb-3 fw-bold">Perlengkapan Rumah</h5>
                                    <p className="card-text text-muted mb-3">Perdagangan Barang Pecah Belah dan Perlengkapan Dapur berkualitas tinggi.</p>
                                    <ul className='list-unstyled text-start text-muted small'>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Peralatan dapur</li>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Barang pecah belah</li>
                                        <li className='mb-2'><i className='bi bi-check-circle-fill text-success me-2'></i>Non-plastik</li>
                                    </ul>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className='row mt-5 pt-5'>
                <div className='col-12 text-center mb-5'>
                    <h3 className='fw-bold display-6'>Mengapa Memilih Kami?</h3>
                    <p className='text-muted'>Keunggulan yang membedakan kami dari yang lain</p>
                </div>
                </div>
                <div className='row g-4'>
                <div className='col-lg-3 col-md-6'>
                    <div className='text-center'>
                    <div className='bg-primary bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3'>
                        <i className='bi bi-award-fill text-primary fs-1'></i>
                    </div>
                    <h5 className='fw-bold mb-2'>Berpengalaman</h5>
                    <p className='text-muted small mb-0'>Lebih dari 10 tahun melayani berbagai industri</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='text-center'>
                    <div className='bg-success bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3'>
                        <i className='bi bi-patch-check-fill text-success fs-1'></i>
                    </div>
                    <h5 className='fw-bold mb-2'>Terpercaya</h5>
                    <p className='text-muted small mb-0'>Produk original dengan garansi resmi</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='text-center'>
                    <div className='bg-warning bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3'>
                        <i className='bi bi-headset text-warning fs-1'></i>
                    </div>
                    <h5 className='fw-bold mb-2'>Support 24/7</h5>
                    <p className='text-muted small mb-0'>Tim siap membantu kapan saja Anda butuhkan</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='text-center'>
                    <div className='bg-danger bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3'>
                        <i className='bi bi-lightning-charge-fill text-danger fs-1'></i>
                    </div>
                    <h5 className='fw-bold mb-2'>Cepat & Efisien</h5>
                    <p className='text-muted small mb-0'>Proses cepat tanpa mengorbankan kualitas</p>
                    </div>
                </div>
                </div>
                
                {/* Stats Section */}
                <div className='row mt-5 pt-5 bg-light rounded p-5'>
                    <div className='col-12 text-center mb-4'>
                        <h3 className='fw-bold'>Pencapaian Kami</h3>
                    </div>
                    <div className='col-md-3 col-6 text-center mb-3'>
                        <i className='bi bi-briefcase-fill text-primary display-4 mb-3'></i>
                        <h2 className='fw-bold text-primary'>150+</h2>
                        <p className='text-muted'>Proyek Selesai</p>
                    </div>
                    <div className='col-md-3 col-6 text-center mb-3'>
                        <i className='bi bi-people-fill text-primary display-4 mb-3'></i>
                        <h2 className='fw-bold text-primary'>200+</h2>
                        <p className='text-muted'>Klien Puas</p>
                    </div>
                    <div className='col-md-3 col-6 text-center mb-3'>
                        <i className='bi bi-award-fill text-primary display-4 mb-3'></i>
                        <h2 className='fw-bold text-primary'>10+</h2>
                        <p className='text-muted'>Tahun Pengalaman</p>
                    </div>
                    <div className='col-md-3 col-6 text-center mb-3'>
                        <i className='bi bi-star-fill text-primary display-4 mb-3'></i>
                        <h2 className='fw-bold text-primary'>4.9</h2>
                        <p className='text-muted'>Rating Rata-rata</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;