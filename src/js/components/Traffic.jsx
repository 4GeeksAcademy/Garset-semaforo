import React, { useState } from "react";

const SemaforoConCalle = () => {
  const [colorActivo, setColorActivo] = useState("rojo");

  
  const estilos = {
    contenedor: {
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    cielo: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: "50%",
      backgroundColor: "#80ebeb", 
    },
    calle: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "50%",
      backgroundColor: "#2c3e50", 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lineaCalle: {
      width: "100%",
      height: "10px",
      backgroundColor: "#ecf0f1", 
      margin: "20px 0",
      position: "relative",
    },
    poste: {
      width: "30px",
      height: "200px",
      backgroundColor: "#7f8c8d", 
      position: "absolute",
      bottom: "50%",
    },
    semaforo: {
      width: "120px",
      height: "320px",
      backgroundColor: "#333",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "20px 0",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
      cursor: "pointer",
      position: "absolute",
      bottom: "50%",
      marginBottom: "200px", 
    },
    luz: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      backgroundColor: "#444",
      transition: "background-color 0.3s, box-shadow 0.3s",
    },
  };

 
  const handleClick = (color) => {
    setColorActivo(color);
  };

  return (
    <div style={estilos.contenedor}>
     
      <div style={estilos.cielo}></div>
      
      
      <div style={estilos.calle}>
        
        <div style={estilos.lineaCalle}></div>
        <div style={estilos.lineaCalle}></div>
        
        
        <div style={estilos.poste}></div>
        
        
        <div style={estilos.semaforo}>
          
          <div
            style={{
              ...estilos.luz,
              backgroundColor: colorActivo === "rojo" ? "#ff0000" : "#444",
              boxShadow: colorActivo === "rojo" ? "0 0 20px #ff0000" : "none",
            }}
            onClick={() => handleClick("rojo")}
          />
          
          <div
            style={{
              ...estilos.luz,
              backgroundColor: colorActivo === "amarillo" ? "#ffff00" : "#444",
              boxShadow: colorActivo === "amarillo" ? "0 0 20px #ffff00" : "none",
            }}
            onClick={() => handleClick("amarillo")}
          />
          
          <div
            style={{
              ...estilos.luz,
              backgroundColor: colorActivo === "verde" ? "#00ff00" : "#444",
              boxShadow: colorActivo === "verde" ? "0 0 20px #00ff00" : "none",
            }}
            onClick={() => handleClick("verde")}
          />
        </div>
      </div>
    </div>
  );
};

export default SemaforoConCalle;