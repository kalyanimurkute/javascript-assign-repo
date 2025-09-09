 // Array of food items
    const foods = [
      { name: "Purn Poli", image:"javascript-assign-repo/images/poli.jpg" },
      { name: "Thali Pith", image: "javascript-assign-repo/images/thali pith.jpg" },
      { name: "Laddu", image: "javascript-assign-repo/images/ladoo.jpg" },
      { name: "Idli Sambar", image: "javascript-assign-repo/images/idali.jpg" },
      { name: "Gulab Jamun", image: "javascript-assign-repo/images/gulab jamun.jpg" },
      { name: "Daltdka", image: "javascript-assign-repo/images/taltdka.jpg"},
      { name: "Barfi", image: "javascript-assign-repo/images/barfi.jpg"},
      { name: "Dosa", image: "javascript-assign-repo/images/dosa.jpg"}
    ];

    const container = document.getElementById("foodContainer");

    // Iterate over array and create cards
    foods.forEach(food => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${food.image}" alt="${food.name}">
        <h3>${food.name}</h3>
      `;

      container.appendChild(card);
    });