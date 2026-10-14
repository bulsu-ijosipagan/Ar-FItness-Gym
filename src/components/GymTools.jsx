import React from 'react';
import { CheckCircle2, ChevronRight, MoveUpRight, X } from 'lucide-react';
import './GymTools.css';

export function GymTools({ equipment, selected, onSelect, onClose }) {
  return <>
    <section className="equipment-section container" id="equipment"><div className="section-heading"><div><div className="section-kicker">03 / On the gym floor</div><h2>Choose your <em>tool.</em></h2></div><p>Tap a card to open its movement guide.</p></div>
      <div className="equipment-grid">{equipment.map((item) => <button className="equipment-card" key={item.id} onClick={() => onSelect(item)}><div className="equipment-image"><img src={item.image} alt={item.name} /><span className="card-number">{item.id}</span><span className="view-guide">View guide <MoveUpRight size={16} /></span></div><div className="equipment-card-body"><div><span>{item.focus}</span><h3>{item.name}</h3></div><ChevronRight size={20} /></div></button>)}</div>
    </section>
    {selected && <div className="guide-backdrop" role="presentation" onClick={(event) => event.target === event.currentTarget && onClose()}><article className="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guide-title"><button className="guide-close" onClick={onClose} aria-label="Close equipment guide"><X size={21} /></button><div className="guide-photo"><img src={selected.image} alt={selected.name} /></div><div className="guide-content"><div className="section-kicker">Equipment {selected.id} / Movement guide</div><h2 id="guide-title">{selected.name}</h2><span className="guide-focus">{selected.focus}</span><p>{selected.guide}</p><div className="guide-checks"><span><CheckCircle2 size={17} /> Keep it controlled</span><span><CheckCircle2 size={17} /> Choose a safe weight</span><span><CheckCircle2 size={17} /> Ask staff if unsure</span></div><button className="button button-primary" onClick={onClose}>Got it <CheckCircle2 size={17} /></button></div></article></div>}
  </>;
}
