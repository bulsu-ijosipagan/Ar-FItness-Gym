import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import './Header.css';

export function Header({ menuOpen, onToggle, onClose }) {
  return <header className="nav-wrap">
    <nav className="nav container">
      <a className="brand" href="#top" onClick={onClose}><span className="brand-mark">AR</span><span className="brand-copy"><strong>FITNESS</strong><small>GYM</small></span></a>
      <button className="menu-toggle" onClick={onToggle} aria-label="Toggle menu">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <a href="#equipment" onClick={onClose}>Equipment</a><a href="#how-to-use" onClick={onClose}>How it works</a><a href="#visit" onClick={onClose}>Visit us</a>
        <a className="nav-button" href="#equipment" onClick={onClose}>Explore equipment <ArrowRight size={16} /></a>
      </div>
    </nav>
  </header>;
}
