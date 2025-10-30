import { useState } from 'react';
import './style/content.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

function Portofolio(){
    const [activeFilter, setActiveFilter] = useState('All');
    
    const portfolioItems = [
        {
            id: 1,
            title: 'Reparasi Mesin Industri',
            category: 'Business',
            description: 'Proyek reparasi dan maintenance mesin produksi untuk pabrik tekstil',
            image: 'https://via.placeholder.com/400x300/0d6efd/ffffff?text=Reparasi+Mesin',
            icon: 'bi-tools'
        },
        {
            id: 2,
            title: 'Suku Cadang Premium',
            category: 'Business',
            description: 'Penyediaan suku cadang original untuk berbagai jenis kendaraan',
            image: 'https://via.placeholder.com/400x300/198754/ffffff?text=Suku+Cadang',
            icon: 'bi-car-front'
        },
        {
            id: 3,
            title: 'Website Perusahaan',
            category: 'Company Profile',
            description: 'Pembuatan website company profile untuk PT. Maju Jaya Abadi',
            image: 'https://via.placeholder.com/400x300/dc3545/ffffff?text=Company+Profile',
            icon: 'bi-laptop'
        },
        {
            id: 4,
            title: 'Peralatan Dapur Premium',
            category: 'Personal',
            description: 'Koleksi peralatan dapur dan pecah belah berkualitas tinggi',
            image: 'https://via.placeholder.com/400x300/ffc107/ffffff?text=Peralatan+Dapur',
            icon: 'bi-house-heart'
        },
        {
            id: 5,
            title: 'Instalasi Mesin Pabrik',
            category: 'Business',
            description: 'Instalasi dan setup mesin produksi untuk industri manufaktur',
            image: 'https://via.placeholder.com/400x300/6610f2/ffffff?text=Instalasi+Mesin',
            icon: 'bi-gear'
        },
        {
            id: 6,
            title: 'Branding & Identity',
            category: 'Company Profile',
            description: 'Pembuatan logo dan brand identity untuk startup teknologi',
            image: 'https://via.placeholder.com/400x300/fd7e14/ffffff?text=Branding',
            icon: 'bi-palette'
        },
        {
            id: 7,
            title: 'Aksesori Mobil Custom',
            category: 'Personal',
            description: 'Customisasi dan instalasi aksesori mobil sesuai keinginan',
            image: 'https://via.placeholder.com/400x300/20c997/ffffff?text=Aksesori+Mobil',
            icon: 'bi-car-front-fill'
        },
        {
            id: 8,
            title: 'Konsultasi Bisnis',
            category: 'Company Profile',
            description: 'Layanan konsultasi untuk pengembangan bisnis dan strategi',
            image: 'https://via.placeholder.com/400x300/0dcaf0/ffffff?text=Konsultasi',
            icon: 'bi-briefcase'
        }
    ];

    const categories = ['All', 'Company Profile', 'Business', 'Personal'];

    const filteredItems = activeFilter === 'All' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <div id='portofolio'>
            <div className='container px-5 py-5'>
                <div className='row'>
                    <div className='col-12 text-center mb-4'>
                        <h2 className='fw-bold'>Portofolio Kami</h2>
                        <div className="underline mx-auto mt-3" style={{width: '80px', height: '3px', backgroundColor: '#0d6efd'}}></div>
                        <p className='text-muted mt-3'>Lihat berbagai proyek dan layanan yang telah kami kerjakan</p>
                    </div>
                </div>
                
                {/* Filter Buttons */}
                <div className='row mt-4 text-center'>
                    <div className='col'>
                        <div className='portofolio-section m-auto d-block overflow-auto'>
                            {categories.map((category) => (
                                <button 
                                    key={category}
                                    className={`btn me-3 mb-3 ${activeFilter === category ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setActiveFilter(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Portfolio Cards */}
                <div className='row portofolio-cards mt-5 m-auto'>
                    {filteredItems.map((item) => (
                        <div key={item.id} className='col-lg-4 col-md-6 mb-4'>
                            <div className="card w-100 h-100 border-0 shadow-sm hover-lift overflow-hidden">
                                <div className='position-relative overflow-hidden' style={{height: '250px'}}>
                                    <img 
                                        src={item.image} 
                                        className="card-img-top w-100 h-100 object-fit-cover" 
                                        alt={item.title}
                                    />
                                    <div className='position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center opacity-0 hover-overlay'>
                                        <i className={`${item.icon} text-white`} style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <span className='position-absolute top-0 end-0 m-3 badge bg-primary'>
                                        {item.category}
                                    </span>
                                </div>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-3">{item.title}</h5>
                                    <p className="card-text text-muted mb-3">{item.description}</p>
                                    <button className='btn btn-outline-primary btn-sm'>
                                        Lihat Detail <i className='bi bi-arrow-right ms-2'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className='row mt-5'>
                        <div className='col text-center'>
                            <i className='bi bi-folder-x display-1 text-muted'></i>
                            <p className='text-muted mt-3'>Tidak ada portofolio untuk kategori ini</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portofolio;