import { AppProvider } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { PartnersStrip } from './components/sections/PartnersStrip';
import { RosterSection } from './components/sections/RosterSection';
import { MatchesSection } from './components/sections/MatchesSection';
import { MerchSection } from './components/sections/MerchSection';
import { NewsSection } from './components/sections/NewsSection';
import { TryoutsSection } from './components/sections/TryoutsSection';
import { PlayerModal } from './components/modals/PlayerModal';
import { StreamModal } from './components/modals/StreamModal';
import { NewsModal } from './components/modals/NewsModal';
import { CartDrawer } from './components/modals/CartDrawer';
import { ToastContainer } from './components/ui/ToastContainer';

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-obsidian text-gray-100">
        <Header />

        <main className="flex-grow">
          <HeroSection />
          <PartnersStrip />
          <RosterSection />
          <MatchesSection />
          <MerchSection />

          <section id="news" className="py-24 bg-surface/50 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <NewsSection />
              <TryoutsSection />
            </div>
          </section>
        </main>

        <Footer />

        {/* Global Overlays */}
        <PlayerModal />
        <StreamModal />
        <NewsModal />
        <CartDrawer />
        <ToastContainer />
      </div>
    </AppProvider>
  );
}

export default App;