import { uuid } from "../utils/uuid";

class Category {
  constructor(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export const categoriesData = [
  new Category("category-italian", "Italian", "#2bba28"),
  new Category("category-quick", "Quick & Easy", "#5d2aea"),
  new Category("category-hamburgers", "Hamburgers", "#7c7c7c"),
  new Category("category-german", "German", "#6d5e54"),
  new Category("category-exotic", "Exotic", "#82e26c"),
  new Category("category-breakfast", "Breakfast", "#51c8ff"),
  new Category("category-asian", "Asian", "#ff51b6"),
  new Category("category-french", "French", "#303bba"),
  new Category("category-simmer", "Summer", "#ff6932"),
];
