import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Sugestões para você</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>D</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Dave Mustaine_</span>
              <span className="relation">Novo no Instagram</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Chuck Schuldiner_</span>
              <span className="relation">Novo no Instagram</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>K</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Kirk Hammett_</span>
              <span className="relation">Novo no Instagram</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>K</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Kiko Loureiro_</span>
              <span className="relation">Novo no Instagram</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
