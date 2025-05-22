import { Routes, Route } from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";
import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import BeritaPage from "./pages/BeritaPage";
import GdkPage from "./pages/GdkPage";
import PrestasiPage from "./pages/PrestasiPage";
import KegiatanPage from "./pages/KegiatanPage";
import GaleriPage from "./pages/GaleriPage";
import UnduhanPage from "./pages/UnduhanPage";


function App() {
  return (
    <div>
      <NavbarComponents/>
    
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/profil" Component={ProfilPage}/>
        <Route path="/berita" Component={BeritaPage}/>
        <Route path="/gdk" Component={GdkPage}/>
        <Route path="/prestasi" Component={PrestasiPage}/>
        <Route path="/kegiatan" Component={KegiatanPage}/>
        <Route path="/galeri" Component={GaleriPage}/>
        <Route path="/unduhan" Component={UnduhanPage}/>
        
      </Routes>
      <FooterComponents/>
    </div>
  )
}

export default App;

