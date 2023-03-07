import React from "react";

const AboutUsHeader = () => {
  return (
    <div className="jumbotron about-us-header-container">
      <div className="container about-us-container">
        <div className="about-us-header-image">
          <img
            className="about-us-header-photo display-3"
            src="/images/logo.png"
          ></img>
        </div>
        <p className="about-us-company-info">
          Wands & Dragons is the first site on the Wizard Wide Web to meet all
          of your magical wishes... whether it's back to school seasons and you
          require new cloaks or perhaps you need a potion for a certain
          adventure.
          <br></br>
          <br></br>
          Since 1934, we have carried Ollivander's best, Madame Malkin's finest,
          and have supplied Hogwart's greatest imaginary witches and wizards.
          Ran by a team of 4 dedicated and hardworking magic makers who were
          educated at the finest school in witchcraft and wizardry, Wands and
          Dragons is sure to have something for everyone. Here you'll find
          everything you need to bottle fame, brew glory, and even (if you
          dare..) put a stopper in death.
        </p>
      </div>
    </div>
  );
};

export default AboutUsHeader;
