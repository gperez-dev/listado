document.addEventListener("DOMContentLoaded", () => {
    cargarText();
  
    document.getElementById("agregar").addEventListener("click", () => {
      const newItem = document.getElementById("item").value;
      if (newItem !== "") {
        let items = JSON.parse(localStorage.getItem("items")) || [];
        items.push(newItem);
        localStorage.setItem("items", JSON.stringify(items));
        cargarText();
        document.getElementById("item").value = "";
      }
    });
  
    document.getElementById("limpiar").addEventListener("click", () => {
      localStorage.removeItem("items");
      cargarText();
    });
  });
  
  const cargarText = () => {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    let items = JSON.parse(localStorage.getItem("items")) || [];
  
    items.forEach(item => {
        const p = document.createElement("p");
        p.className = "list-group-item";
        p.textContent = item;
        contenedor.appendChild(p);
      });
  };