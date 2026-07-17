import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scissors, Shirt, Briefcase, Ruler, Video, MessageCircle, 
  Star, Mail, Phone, Globe, Play
} from 'lucide-react';

// --- KOMPONEN PEMBANTU (Helper Components) ---

// Navigasi Atas (Navbar)
const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="font-bold text-2xl tracking-tight text-slate-950">
        Harapan <span className="text-purple-600">Umat.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
        <a href="#program" className="hover:text-purple-600 transition">Program</a>
        <a href="#fasilitas" className="hover:text-purple-600 transition">Fasilitas</a>
        <a href="#biaya" className="hover:text-purple-600 transition">Biaya</a>
        <a href="#testimoni" className="hover:text-purple-600 transition">Testimoni</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden md:block text-sm font-medium text-slate-700 hover:text-slate-950">
          Masuk
        </button>
        <button className="bg-slate-950 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-lg shadow-slate-950/10">
          Daftar Sekarang
        </button>
      </div>
    </div>
  </nav>
);

// Ikon Melayang (Floating Icon) untuk Hero Section
const FloatingCard = ({ children, delay, className }) => (
  <motion.div
    className={`absolute flex items-center justify-center p-5 bg-white rounded-3xl shadow-xl shadow-slate-100 ${className}`}
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
    whileHover={{ scale: 1.1, rotate: delay * 10 }}
  >
    {children}
  </motion.div>
);

// Card Testimoni
const TestimonialCard = ({ name, role, text, rating, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, margin: "-100px" }} 
    transition={{ delay: delay * 0.1, duration: 0.5 }}
    className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-50 flex flex-col h-full"
  >
    <div className="flex gap-0.5 text-orange-400 mb-6">
      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i < rating ? "currentColor" : "none"} />)}
    </div>
    <p className="text-slate-700 mb-8 italic flex-grow">"{text}"</p>
    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-lg">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-slate-950">{name}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  </motion.div>
);


// --- KOMPONEN UTAMA (Main App) ---
function App() {
  const facilityTools = [
    'Mesin Jahit Singer', 'Mesin Obras Juki', 'Zoom Online Class', 
    'WhatsApp Group Discussion', 'Modul Premium', 'Sertifikat Resmi',
    'Setrika Uap Profesional', 'Meja Potong Luas'
  ];

  return (
    <div className="font-sans bg-slate-50 min-h-screen text-slate-900 selection:bg-purple-200">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Floating Icons Background */}
        <FloatingCard className="top-[15%] left-[10%] md:left-[15%]" delay={0}>
          <Scissors size={28} className="text-purple-600" />
        </FloatingCard>
        <FloatingCard className="top-[20%] right-[10%] md:right-[20%] bg-orange-50" delay={0.3}>
          <Shirt size={28} className="text-orange-500" />
        </FloatingCard>
        <FloatingCard className="bottom-[25%] left-[12%] md:left-[18%]" delay={0.6}>
          <Ruler size={28} className="text-blue-500" />
        </FloatingCard>
        <FloatingCard className="bottom-[20%] right-[12%] md:right-[15%] bg-emerald-50" delay={0.9}>
          <Briefcase size={28} className="text-emerald-500" />
        </FloatingCard>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl relative z-10"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6 shadow-inner shadow-purple-200/50">
            ✨ Pendaftaran Angkatan Baru Telah Dibuka
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 leading-tight mb-8 tracking-tighter">
            Platform Belajar Menjahit <span className="text-purple-600">All-in-One</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Tingkatkan keahlian menjahit Anda bersama Kursus Menjahit Harapan Umat. Dari dasar hingga mahir, semua dalam satu tempat yang modern dan fleksibel.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition shadow-xl shadow-purple-600/30 flex items-center gap-2 mx-auto">
            Mulai Belajar Sekarang <Play size={20} className="fill-white" />
          </button>
        </motion.div>
      </section>

      {/* 2. BENTO GRID SECTION (Program) */}
      <section className="py-28 px-6 max-w-7xl mx-auto" id="program">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-5 tracking-tight">Dibuat untuk semua kalangan</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">Dari pemula yang baru memegang jarum hingga profesional yang ingin membuka butik.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[280px]">
          {/* Card Lebar (Pemula) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-100/50 md:col-span-2 flex flex-col justify-end relative overflow-hidden group border border-slate-50"
          >
            <div className="absolute top-10 right-10 bg-purple-100 p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Shirt size={36} className="text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-950 mb-3 tracking-tight">Untuk Pemula</h3>
            <p className="text-slate-600 max-w-lg leading-relaxed">Belajar teknik dasar, pengenalan alat, dan pembuatan pola simpel untuk pemakaian sehari-hari.</p>
          </motion.div>

          {/* Card Tinggi (Jadwal) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}
            className="bg-slate-950 p-10 rounded-3xl shadow-2xl shadow-slate-950/10 md:row-span-2 flex flex-col relative overflow-hidden text-white"
          >
            <div className="bg-white/10 p-5 rounded-2xl w-fit mb-auto">
              <Video size={36} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-3 mt-10 tracking-tight">Jadwal Fleksibel</h3>
            <p className="text-slate-300 leading-relaxed">Akses kelas online & materi rekaman kapan saja. Cocok untuk Anda yang sibuk.</p>
          </motion.div>

          {/* Card Kecil 1 (Profesional) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.3 }}
            className="bg-orange-50 p-10 rounded-3xl shadow-xl shadow-slate-100/50 flex flex-col justify-between border border-orange-100"
          >
            <Briefcase size={32} className="text-orange-500 mb-6" />
            <div>
              <h3 className="text-2xl font-bold text-slate-950 mb-2 tracking-tight">Untuk Profesional</h3>
              <p className="text-slate-600">Teknik menjahit tingkat lanjut & pembuatan gaun pesta.</p>
            </div>
          </motion.div>

          {/* Card Kecil 2 (Bisnis) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.4 }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-100/50 flex flex-col justify-between border border-slate-50"
          >
            <MessageCircle size={32} className="text-blue-500 mb-6" />
            <div>
              <h3 className="text-2xl font-bold text-slate-950 mb-2 tracking-tight">Kelas Bisnis</h3>
              <p className="text-slate-600">Cara memulai usaha jahit, *pricing*, dan manajemen butik.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. TOOLS CAROUSEL (Fasilitas) */}
      <section className="py-24 bg-white overflow-hidden" id="fasilitas">
        <div className="text-center mb-16 max-w-xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">Didukung dengan fasilitas terbaik</h2>
        </div>
        <div className="relative w-full flex">
          <motion.div 
            className="flex gap-8 px-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...facilityTools, ...facilityTools].map((tool, index) => (
              <div key={index} className="flex items-center justify-center px-10 py-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:border-purple-100 hover:bg-purple-50 transition-colors">
                <span className="font-semibold text-slate-800 text-lg">{tool}</span>
              </div>
            ))}
          </motion.div>
          {/* Gradients for fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </section>

      {/* 4. TESTIMONIAL SECTION */}
      <section className="py-28 px-6 max-w-7xl mx-auto" id="testimoni">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">Kata Mereka</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <TestimonialCard 
            delay={0}
            rating={5}
            name="Siti Aminah" 
            role="Ibu Rumah Tangga" 
            text="Kursus ini sangat membantu saya yang mulai dari nol. Mentornya sabar banget. Sekarang saya bisa jahit baju anak sendiri!" 
          />
          <TestimonialCard 
            delay={2}
            rating={5}
            name="Rina Marlina" 
            role="Pemilik Butik" 
            text="Materi kelas bisnisnya luar biasa. Benar-benar membuka wawasan saya untuk manajemen order jahit yang profesional dan menguntungkan." 
          />
          <TestimonialCard 
            delay={4}
            rating={5}
            name="Dewi Lestari" 
            role="Mahasiswi" 
            text="Jadwalnya fleksibel banget, bisa diakses habis kuliah. Grup diskusinya juga aktif membantu kalau saya bingung buat pola." 
          />
        </div>
      </section>

      {/* 5. FOOTER SECTION */}
      <footer className="relative bg-slate-950 text-white overflow-hidden py-24 px-6 mt-20">
        {/* Giant Background Text Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] blur-[1px] select-none">
          <h1 className="text-[20vw] font-black tracking-tighter whitespace-nowrap">HARAPAN UMAT</h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-3xl mb-3 tracking-tight">Kursus Menjahit<br/>Harapan Umat.</h3>
            <p className="text-slate-400 max-w-sm leading-relaxed">Membangun keahlian, merajut masa depan yang lebih baik dan mandiri.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              <a href="#" className="p-3.5 bg-white/5 hover:bg-purple-600 rounded-full transition group"><Mail size={20} className="text-slate-300 group-hover:text-white" /></a>
              <a href="#" className="p-3.5 bg-white/5 hover:bg-purple-600 rounded-full transition group"><Phone size={20} className="text-slate-300 group-hover:text-white" /></a>
              <a href="#" className="p-3.5 bg-white/5 hover:bg-purple-600 rounded-full transition group"><Globe size={20} className="text-slate-300 group-hover:text-white" /></a>
            </div>
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Harapan Umat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;