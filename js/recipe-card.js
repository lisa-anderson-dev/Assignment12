class Recipe {
    constructor(title, servings, ingredients=[]) {
        this._title = title;
        this._servings = servings;
        this._ingredients = ingredients;
    }
    display = () => {
        let outputStr = `${this._title}\n`;
        outputStr += `Serves: ${this._servings}\n`;
        outputStr += `Ingredients:\n`;
        for (let item of this._ingredients) {
            outputStr += `- ${item}\n`;
        }
        console.log(outputStr);
    }
}

let guacamole = new Recipe(
    'Guacamole', 
    4, 
    [
        '3 Avocados',
        '1 Lime',
        '1 Teaspoon Salt',
        '1/2 Cup Onion',
        '3 Tablespoons Cilantro',
        '2 Diced Tomatoes',
        '1 Teaspoon Garlic',
        '1 Pinch Ground Pepper'
    ]
);

guacamole.display();
