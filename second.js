function afficherHeure() {
    const date = new Date(); 
    const heure = date.getHours(); 
    const minute = date.getMinutes(); 
    const seconde = date.getSeconds(); 
  
    const heureDiv = document.getElementById("img"); 
    heureDiv.innerHTML = heure + ":" + minute + ":" + seconde; 
  }
  
  
  setInterval(afficherHeure, 1000);
  