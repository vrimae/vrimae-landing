import { useState, useEffect } from 'react';
import { LayoutDashboard, ShoppingCart, Package, TrendingUp, FileText, Sparkles, LogOut, Settings, User, Bell } from 'lucide-react';

const features = [
  {
    id: 'dashboard',
    name: 'Dashboard Utama',
    icon: LayoutDashboard,
    description: 'Ringkasan performa bisnis harian Anda dalam satu pandangan. Pantau pendapatan, tren, dan aktivitas terbaru.',
    content: (
      <div className="mockup-inner-dashboard fade-in">
        <div className="m-cards">
          <div className="m-stat-card"><div className="m-label">Pendapatan Hari Ini</div><div className="m-val text-green">Rp 4.520.000</div><div className="m-trend">+12.5%</div></div>
          <div className="m-stat-card"><div className="m-label">Total Pesanan</div><div className="m-val">128</div><div className="m-trend">+5.2%</div></div>
          <div className="m-stat-card"><div className="m-label">Pengunjung</div><div className="m-val">342</div><div className="m-trend">-1.5%</div></div>
          <div className="m-stat-card"><div className="m-label">Rata-rata Transaksi</div><div className="m-val">Rp 35.300</div><div className="m-trend">+2.1%</div></div>
        </div>
        <div className="m-dashboard-grid">
          <div className="m-chart-area">
            <div className="m-chart-title">Grafik Pendapatan Mingguan</div>
            <div className="m-chart-bars">
              <div className="m-chart-bar" style={{height: '40%'}}></div>
              <div className="m-chart-bar" style={{height: '60%'}}></div>
              <div className="m-chart-bar" style={{height: '30%'}}></div>
              <div className="m-chart-bar" style={{height: '80%'}}></div>
              <div className="m-chart-bar" style={{height: '100%', backgroundColor: 'var(--color-primary-light)'}}></div>
              <div className="m-chart-bar" style={{height: '70%'}}></div>
              <div className="m-chart-bar" style={{height: '50%'}}></div>
            </div>
          </div>
          <div className="m-dashboard-side">
            <div className="m-dash-list">
              <div className="m-list-title">Aktivitas Terbaru</div>
              <div className="m-list-item"><div className="m-list-icon"></div><div className="m-list-text">Pesanan #1042 selesai</div></div>
              <div className="m-list-item"><div className="m-list-icon"></div><div className="m-list-text">Stok Susu menipis</div></div>
              <div className="m-list-item"><div className="m-list-icon"></div><div className="m-list-text">Pesanan #1041 selesai</div></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'kasir',
    name: 'Sistem Kasir (POS)',
    icon: ShoppingCart,
    description: 'Proses pesanan dengan cepat dan akurat. Antarmuka yang bersih dirancang untuk kecepatan transaksi di kasir.',
    content: (
      <div className="mockup-inner-pos fade-in">
        <div className="m-pos-grid">
          <div className="m-pos-items">
            <div className="m-pos-filters">
              <div className="m-filter active">Semua</div>
              <div className="m-filter">Kopi</div>
              <div className="m-filter">Non-Kopi</div>
              <div className="m-filter">Makanan</div>
            </div>
            <div className="m-pos-search">🔍 Cari menu atau barcode...</div>
            <div className="m-pos-products">
              {[1,2,3,4,5,6,7,8].map(i => (
                <div key={i} className="m-product">
                  <div className="m-prod-img"></div>
                  <div className="m-prod-name">Espresso Latte</div>
                  <div className="m-prod-price">Rp 28.000</div>
                </div>
              ))}
            </div>
          </div>
          <div className="m-pos-cart">
            <div className="m-cart-header">Pesanan Saat Ini</div>
            <div className="m-cart-items">
              <div className="m-cart-item">
                <div className="m-c-info">
                  <div className="m-c-name">Matcha Latte</div>
                  <div className="m-c-price">Rp 28.000 x 2</div>
                </div>
                <div className="m-c-total">Rp 56.000</div>
              </div>
              <div className="m-cart-item">
                <div className="m-c-info">
                  <div className="m-c-name">Croissant</div>
                  <div className="m-c-price">Rp 15.000 x 1</div>
                </div>
                <div className="m-c-total">Rp 15.000</div>
              </div>
            </div>
            <div className="m-cart-summary">
              <div className="m-c-row"><span>Subtotal</span><span>Rp 71.000</span></div>
              <div className="m-c-row"><span>Pajak (11%)</span><span>Rp 7.810</span></div>
              <div className="m-c-row m-c-grand"><span>Total</span><span className="text-green">Rp 78.810</span></div>
            </div>
            <div className="m-cart-btn">Bayar Sekarang (F2)</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'inventori',
    name: 'Inventori',
    icon: Package,
    description: 'Pantau stok bahan baku secara real-time. Dapatkan notifikasi saat stok menipis untuk mencegah kehabisan barang.',
    content: (
      <div className="mockup-inner-inventory fade-in">
        <div className="m-inv-header">
          <div className="m-inv-search">🔍 Cari bahan baku...</div>
          <div className="m-btn-small">+ Tambah Barang</div>
        </div>
        <div className="m-table">
          <div className="m-tr m-th">
            <div className="m-td" style={{flex: 2}}>Nama Barang</div>
            <div className="m-td">Kategori</div>
            <div className="m-td">Stok Saat Ini</div>
            <div className="m-td">Batas Minimum</div>
            <div className="m-td">Status</div>
            <div className="m-td">Aksi</div>
          </div>
          <div className="m-tr">
            <div className="m-td" style={{flex: 2, fontWeight: 600}}>Biji Kopi Arabica</div><div className="m-td">Bahan Baku</div><div className="m-td">12 Kg</div><div className="m-td">5 Kg</div><div className="m-td"><span className="m-badge green">Aman</span></div><div className="m-td">...</div>
          </div>
          <div className="m-tr">
            <div className="m-td" style={{flex: 2, fontWeight: 600}}>Susu Full Cream</div><div className="m-td">Bahan Baku</div><div className="m-td text-red">2 Liter</div><div className="m-td">10 Liter</div><div className="m-td"><span className="m-badge red">Kritis</span></div><div className="m-td">...</div>
          </div>
          <div className="m-tr">
            <div className="m-td" style={{flex: 2, fontWeight: 600}}>Gula Aren</div><div className="m-td">Bahan Baku</div><div className="m-td text-yellow">5.5 Kg</div><div className="m-td">5 Kg</div><div className="m-td"><span className="m-badge yellow">Menipis</span></div><div className="m-td">...</div>
          </div>
          <div className="m-tr">
            <div className="m-td" style={{flex: 2, fontWeight: 600}}>Cup Plastik 16oz</div><div className="m-td">Kemasan</div><div className="m-td">450 Pcs</div><div className="m-td">100 Pcs</div><div className="m-td"><span className="m-badge green">Aman</span></div><div className="m-td">...</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'laporan',
    name: 'Laporan',
    icon: FileText,
    description: 'Lihat seluruh rekapan dan riwayat transaksi, arus kas masuk/keluar, lengkap dengan fitur ekspor ke Excel.',
    content: (
      <div className="mockup-inner-laporan fade-in">
        <div className="m-ana-tabs" style={{marginBottom: '1rem'}}>
          <span className="active">Laporan Penjualan</span>
          <span>Arus Kas</span>
          <span>Laporan Laba Rugi</span>
        </div>
        <div className="m-inv-header">
          <div className="m-inv-search">Periode: Bulan Ini 📅</div>
          <div className="m-btn-small" style={{backgroundColor: '#10b981'}}>⬇ Export Excel</div>
        </div>
        <div className="m-table">
          <div className="m-tr m-th">
            <div className="m-td">Tanggal</div>
            <div className="m-td">No. Referensi</div>
            <div className="m-td">Kategori</div>
            <div className="m-td" style={{justifyContent: 'flex-end'}}>Pemasukan</div>
            <div className="m-td" style={{justifyContent: 'flex-end'}}>Pengeluaran</div>
          </div>
          <div className="m-tr">
             <div className="m-td">15 Jul 2026</div><div className="m-td">INV-1042</div><div className="m-td">Penjualan POS</div><div className="m-td text-green" style={{justifyContent: 'flex-end'}}>Rp 78.810</div><div className="m-td" style={{justifyContent: 'flex-end'}}>-</div>
          </div>
          <div className="m-tr">
             <div className="m-td">15 Jul 2026</div><div className="m-td">EXP-0891</div><div className="m-td">Beli Bahan</div><div className="m-td" style={{justifyContent: 'flex-end'}}>-</div><div className="m-td text-red" style={{justifyContent: 'flex-end'}}>Rp 350.000</div>
          </div>
          <div className="m-tr">
             <div className="m-td">14 Jul 2026</div><div className="m-td">INV-1041</div><div className="m-td">Penjualan POS</div><div className="m-td text-green" style={{justifyContent: 'flex-end'}}>Rp 124.000</div><div className="m-td" style={{justifyContent: 'flex-end'}}>-</div>
          </div>
          <div className="m-tr" style={{borderTop: '2px solid rgba(255,255,255,0.1)'}}>
             <div className="m-td" style={{fontWeight: 700}}>Total</div><div className="m-td"></div><div className="m-td"></div><div className="m-td text-green" style={{fontWeight: 700, justifyContent: 'flex-end'}}>Rp 202.810</div><div className="m-td text-red" style={{fontWeight: 700, justifyContent: 'flex-end'}}>Rp 350.000</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'analitik',
    name: 'Analitik Pro',
    icon: TrendingUp,
    description: 'Ubah data menjadi wawasan bisnis. Laporan komprehensif dengan bantuan visualisasi grafik interaktif.',
    content: (
      <div className="mockup-inner-analytics fade-in">
        <div className="m-ana-header">
          <div className="m-ana-tabs"><span className="active">Ringkasan</span><span>Performa Produk</span><span>Tren Waktu</span></div>
        </div>
        <div className="m-ana-content">
          <div className="m-ana-main-chart">
            <div className="m-chart-title">Penjualan vs Target (Bulan Ini)</div>
            <svg viewBox="0 0 100 30" className="m-line-chart">
              <path d="M0,25 C10,25 20,10 30,15 C40,20 50,5 60,10 C70,15 80,5 100,2" fill="none" stroke="var(--color-primary-light)" strokeWidth="2"/>
              <path d="M0,20 C20,20 40,15 60,18 C80,20 90,12 100,10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2"/>
              <path d="M0,30 L0,25 C10,25 20,10 30,15 C40,20 50,5 60,10 C70,15 80,5 100,2 L100,30 Z" fill="url(#grad)" opacity="0.2"/>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary-light)"/>
                  <stop offset="100%" stopColor="transparent"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="m-ana-side">
            <div className="m-dash-list">
               <div className="m-list-title">Top 3 Produk</div>
               <div className="m-list-item" style={{justifyContent: 'space-between'}}><span>1. Matcha Latte</span><span className="text-green">142 terjual</span></div>
               <div className="m-list-item" style={{justifyContent: 'space-between'}}><span>2. Kopi Susu Aren</span><span className="text-green">98 terjual</span></div>
               <div className="m-list-item" style={{justifyContent: 'space-between'}}><span>3. Croissant</span><span className="text-green">65 terjual</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ai',
    name: 'Vrimae AI',
    icon: Sparkles,
    description: 'Asisten cerdas berbasis AI. Tanyakan apapun tentang kondisi bisnis Anda, AI akan menganalisis data secara real-time.',
    content: (
      <div className="mockup-inner-ai fade-in">
        <div className="m-ai-chat-container">
           <div className="m-ai-msg user">
             Bagaimana performa penjualan hari ini dibandingkan minggu lalu?
           </div>
           <div className="m-ai-msg ai">
             <div className="m-ai-icon"><Sparkles size={14} /></div>
             <div className="m-ai-bubble">
               Penjualan hari ini mencapai **Rp 4.520.000**, meningkat sebesar **12.5%** dibandingkan hari yang sama pada minggu lalu. Produk dengan penyumbang lonjakan terbesar adalah **Matcha Latte** (naik 30%).
               <br/><br/>
               Namun, karena lonjakan ini, stok **Susu Full Cream** Anda kini berstatus kritis (sisa 2 Liter). Saya sarankan untuk segera melakukan re-stock.
             </div>
           </div>
        </div>
        <div className="m-ai-input-area">
           <div className="m-ai-input">Ketik pertanyaan Anda tentang data bisnis...</div>
           <div className="m-ai-send">➤</div>
        </div>
      </div>
    )
  }
];

export default function HeroMockup() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 7000); // 7 seconds per slide for reading
    return () => clearInterval(timer);
  }, []);

  const activeFeature = features[activeTab];

  return (
    <div className="hero-mockup-container">
      {/* Feature Selector */}
      <div className="mockup-feature-selector">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <button
              key={f.id}
              className={`m-feature-btn ${i === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <Icon className="m-f-icon" />
              <span>{f.name}</span>
            </button>
          );
        })}
      </div>

      <div className="mockup-window interactive real-app">
        
        {/* Real App Top Bar */}
        <div className="m-app-topbar">
           <div className="m-app-breadcrumbs">
              <span>Vrimae App</span> <span className="m-chevron">›</span> <span className="m-current-page">{activeFeature.name}</span>
           </div>
           <div className="m-app-actions">
              <Bell size={16} className="m-top-icon" />
              <div className="m-user-avatar"><User size={14} /></div>
           </div>
        </div>
        
        <div className="mockup-body">
          {/* Real App Sidebar */}
          <div className="mockup-sidebar real">
            <div className="m-sb-logo">
               <div className="m-sb-logo-icon"></div>
            </div>
            
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.id} className={`m-sb-item real ${i === activeTab ? 'active' : ''}`}>
                  <Icon size={18} />
                </div>
              )
            })}
            
            <div className="m-sb-item real mt-auto"><Settings size={18} /></div>
            <div className="m-sb-item real text-red"><LogOut size={18} /></div>
          </div>
          
          <div className="mockup-content real">
            {/* Topbar inside real app structure? Actually let's put topbar above content but right of sidebar */}
            <div className="m-page-header">
               <h2>{activeFeature.name}</h2>
               {activeFeature.id === 'dashboard' && <span className="m-page-date">15 Juli 2026</span>}
            </div>
            <div className="m-page-content-scroll">
               {activeFeature.content}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Description */}
      <div className="mockup-description">
        <h3>{activeFeature.name}</h3>
        <p>{activeFeature.description}</p>
      </div>
    </div>
  );
}
