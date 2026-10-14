import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Intro.css';

export function Intro() {
  return <section className="intro container" id="how-to-use">
    <div className="section-kicker">01 / Your equipment guide</div><div className="intro-grid"><h2>Know your tools.<br /><span>Move with <em>confidence.</em></span></h2><div className="intro-content"><p>Not sure where to start? Browse the machines and training tools at AR Fitness Gym. Select any image for a quick guide to setup, movement, and the muscles it targets.</p><a className="text-link" href="#equipment">Browse all equipment <ArrowRight size={17} /></a></div></div>
    <div className="metrics"><div><strong>15</strong><span>Equipment<br />guides</span></div><div><strong>01</strong><span>Simple<br />click</span></div><div><strong>100%</strong><span>Better<br />form</span></div></div>
  </section>;
}
