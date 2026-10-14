import React from 'react';
import { Facebook } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a className="brand" href="#top"><span className="brand-mark">AR</span><span className="brand-copy"><strong>FITNESS</strong><small>GYM</small></span></a><p>Explore. Learn. Get stronger.</p><a className="footer-facebook" href="https://www.facebook.com/profile.php?id=100088095751934" target="_blank" rel="noreferrer"><Facebook size={17} /> Facebook</a><span className="footer-note">© 2025 AR Fitness Gym</span></div></footer>;
}
