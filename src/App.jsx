import React from 'react';
import { equipment, gymFamilyImages } from './data/equipment';
import arEntrance from './public/images/ARentrance.jpg';
import { Footer } from './components/Footer';
import { GymTools } from './components/GymTools';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Owner } from './components/Owner';
import { Rates } from './components/Rates';
import { Visit } from './components/Visit';
import './styles.css';

export function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  React.useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return <div className="site-shell">
    <Header menuOpen={menuOpen} onToggle={() => setMenuOpen((open) => !open)} onClose={() => setMenuOpen(false)} />
    <main id="top"><Hero featuredEquipment={{ image: arEntrance, name: 'AR Fitness Gym entrance' }} /><section className="ticker"><div className="ticker-track"><span>LOOK AROUND</span><i>✦</i><span>CHOOSE YOUR TOOL</span><i>✦</i><span>MOVE WITH PURPOSE</span><i>✦</i><span>LOOK AROUND</span><i>✦</i><span>CHOOSE YOUR TOOL</span></div></section><Intro /><Rates /><GymTools equipment={equipment} selected={selected} onSelect={setSelected} onClose={() => setSelected(null)} /><Owner /><Visit images={gymFamilyImages} /></main>
    <Footer />
  </div>;
}
