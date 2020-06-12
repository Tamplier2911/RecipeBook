import { uuid } from "../utils/uuid";

class Category {
  constructor(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

// used in categoriesScreen
export const categoriesData = [
  new Category("categoryItalian", "Italian", "#2bba28"),
  new Category("categoryQuick", "Quick & Easy", "#5d2aea"),
  new Category("categoryHamburgers", "Hamburgers", "#7c7c7c"),
  new Category("categoryGerman", "German", "#6d5e54"),
  new Category("categoryExotic", "Exotic", "#82e26c"),
  new Category("categoryLight", "Light & Lovely", "#368dff"),
  new Category("categoryBreakfast", "Breakfast", "#51c8ff"),
  new Category("categoryAsian", "Asian", "#ff51b6"),
  new Category("categoryFrench", "French", "#303bba"),
  new Category("categorySummer", "Summer", "#ff6932"),
];
