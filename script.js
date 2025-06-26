// Show snack on html
const snacks = [
    { id: 'snack1', name: 'Onigiri', price: 130, discount: 0.1, category: 'snack' },
    { id: 'snack2', name: 'Pudding', price: 150, discount: 0, category: 'snack' },
    { id: 'snack3', name: 'Ramen', price: 300, discount: 0.2, category: 'snack' },
    { id: 'snack4', name: 'Sandwich', price: 250, discount: 0, category: 'snack' },
    { id: 'snack5', name: 'Taiyaki', price: 160, discount: 0.1, category: 'snack' },
    { id: 'snack6', name: 'Wafer', price: 120, discount: 0, category: 'snack' },
    { id: 'snack7', name: 'Bento Box', price: 500, discount: 0.2, category: 'snack' },
    { id: 'snack8', name: 'Biscuit', price: 140, discount: 0, category: 'snack' },
    { id: 'snack9', name: 'Gummy Candy', price: 110, discount: 0.05, category: 'snack' },
    { id: 'snack10', name: 'Potato Chips', price: 150, discount: 0, category: 'snack' },
    { id: 'snack11', name: 'Melonpan', price: 160, discount: 0.1, category: 'snack' },
    { id: 'snack12', name: 'Chewing Gum', price: 90, discount: 0, category: 'snack' },
    { id: 'drink1', name: 'Water Bottle', price: 100, discount: 0, category: 'drink' },
    { id: 'drink2', name: 'Soda Can', price: 130, discount: 0.05, category: 'drink' },
    { id: 'drink3', name: 'Peach Milk', price: 140, discount: 0.1, category: 'drink' },
    { id: 'drink4', name: 'Ice Cream', price: 180, discount: 0.15, category: 'drink' },
];

const snackRack = document.getElementById("snack-rack");
const drinkRack = document.getElementById("drink-rack");

snacks.forEach(snack => {
        const item = document.createElement("button");
        item.className = "snack-item";
        item.setAttribute("data-id", snack.id);
        item.innerHTML = `<img src="assets/${snack.id}.png">
                          <p>${snack.name} <span class="tag-price">\u00a5${snack.price}</span></p>
                          `;

        if (snack.discount > 0) {
            item.querySelector(".tag-price").style.backgroundColor = `#BCC07B`;
        } else {
            item.querySelector(".tag-price").style.backgroundColor = `#ABCDDE`;
        }

        (snack.category === "snack" ? snackRack : drinkRack).appendChild(item);
    }
);



