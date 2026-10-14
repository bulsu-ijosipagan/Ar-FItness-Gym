import React from "react";
import ownerImage from "../public/images/KotsGymOwner.jpg";
import "./Owner.css";

export function Owner() {
  return (
    <section className="owner container" id="owner">
      <div className="owner-image">
        <img src={ownerImage} alt="Raymond Arceo, owner of AR Fitness Gym" />
      </div>
      <div className="owner-copy">
        <div className="section-kicker">04 / The person behind the gym</div>
        <h2>
          Meet the
          <br />
          <em>coach</em> behind the <em>gym.</em>
        </h2>
        <p>
          AR Fitness Gym was built to be a welcoming place where people can
          train with purpose and grow stronger together.
        </p>
        <div className="owner-name">
          <span>Owner & founder</span>
          <strong>Raymond Arceo</strong>
        </div>
      </div>
    </section>
  );
}
