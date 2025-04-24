import React, { useState, useEffect } from "react";

const App = () => {
  const [orientation, setOrientation] = useState("row");

  // Salvar e recuperar a orientação selecionada
  useEffect(() => {
    const savedOrientation = localStorage.getItem("orientation") || "row";
    setOrientation(savedOrientation);
  }, []);

  useEffect(() => {
    // Persistir a orientação
    localStorage.setItem("orientation", orientation);
  }, [orientation]);

  return (
    <div>
      <h2>Selecione a orientação:</h2>
      <label>
        <input
          type="radio"
          name="orientation"
          value="row"
          checked={orientation === "row"}
          onChange={() => setOrientation("row")}
        />
        Linha
      </label>
      <label>
        <input
          type="radio"
          name="orientation"
          value="column"
          checked={orientation === "column"}
          onChange={() => setOrientation("column")}
        />
        Coluna
      </label>
    </div>
  );
};

export default App;
