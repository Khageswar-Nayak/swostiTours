import React, { useEffect, useState } from "react";
import { achievements } from "../Constants";
import rocketSvg from "../assets/achievements/rocket.svg";

const words = [
  "guests fall in love with",
  "present you the perfect vacation",
  "enables everyone to travel the world",
  "win hearts and make you celebrate life",
];

const Achievements = () => {
  const [word, setWord] = useState("");
  let count = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === words.length) {
        count = 0;
      }
      setWord(words[count]);
      count++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="achievements">
      <div className="achievements-firstdiv">
        <p>We're curating experiences that</p>
        <h3>{word}</h3>
      </div>
      <div className="achievements-seconddiv">
        {achievements.map((achievement) => (
          <div key={achievement.title} className="allAchievements">
            <img src={achievement.svg} alt="logo" />
            <h2>{achievement.number} </h2>
            <p>{achievement.title}</p>
          </div>
        ))}
        <div>
          <img src={rocketSvg} alt="logo" />
          <p className="last-paragraph">
            Our Lakshya - Bharat Ki Sabse Behtareen Travel Company
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
