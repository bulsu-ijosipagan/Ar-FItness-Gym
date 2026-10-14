import React from 'react';
import { ArrowRight, Dumbbell } from 'lucide-react';
import './Hero.css';

export function Hero({ featuredEquipment }) {
  return <section className="hero container">
    <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> Pulilan's home of strength</div>
      <h1>Train with<br /><em>the right</em> tools.</h1><p className="hero-text">Take a look around AR Fitness Gym. Explore the equipment on our floor and tap any piece to see how to use it with confidence.</p>
      <a className="button button-primary" href="#equipment">See the equipment <ArrowRight size={18} /></a>
      <div className="hero-proof"><strong>15</strong><span>pieces of equipment<br />ready for your next session</span></div>
    </div>
    <div className="hero-visual"><div className="hero-image"><img className="hero-image-backdrop" src={featuredEquipment.image} alt="" aria-hidden="true" /><img className="hero-image-main" src={featuredEquipment.image} alt={featuredEquipment.name} /></div><div className="hero-stamp"><Dumbbell size={17} /><span>Find your<br /><b>strong</b></span></div><div className="hero-stat"><strong>AR</strong><span>Fitness<br />Gym</span></div></div>
  </section>;
}
