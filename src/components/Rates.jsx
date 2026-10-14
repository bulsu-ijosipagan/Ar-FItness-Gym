import React from 'react';
import { ArrowRight, CircleDollarSign, UserRound, UsersRound } from 'lucide-react';
import './Rates.css';

export function Rates() {
  return <section className="rates container" id="rates">
    <div className="rates-heading">
      <div className="section-kicker">02 / Entrance & membership</div>
      <h2>Train on your<br /><em>terms.</em></h2>
    </div>
    <div className="rates-content">
      <p>Drop in for a session or become part of the AR Fitness Gym community. Choose the option that works best for your training routine.</p>
      <div className="rate-cards">
        <article className="rate-card">
          <UserRound size={22} />
          <span>Members</span>
          <strong>₱70</strong>
          <small>entrance fee</small>
        </article>
        <article className="rate-card">
          <UsersRound size={22} />
          <span>Non-members</span>
          <strong>₱100</strong>
          <small>entrance fee</small>
        </article>
        <article className="rate-card rate-card-featured">
          <CircleDollarSign size={22} />
          <span>Membership</span>
          <strong>₱500</strong>
          <small>membership fee</small>
        </article>
      </div>
      <a className="text-link" href="#visit">Plan your visit <ArrowRight size={17} /></a>
    </div>
  </section>;
}
