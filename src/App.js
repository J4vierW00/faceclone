import React from "react";
import "./App.css";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Btns from "./components/buttons/Btns";

function App() {
  return (
    <div className="App">
      <div className="Conten">
        <Card
          title="Desarrollo Full Stack Español-Codificandolo"
          subtitle="Publicacion de grupo de Jan Armando Negro 36 min"
          imageAvatar="../src/gallo-face.jpg"
          body="Por que hay mucha gente de un tal psaint?"
        />
        <Footer emoji="😆 14" texto="comentarios" />
        <hr />
        <Btns thumb="👍 Me gusta" cloud="💬 Comentar" />
        <hr />
      </div>
    </div>
  );
}

export default App;
