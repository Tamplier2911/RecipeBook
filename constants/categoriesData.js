import { uuid } from "../utils/uuid";

class Category {
  constructor(title, color) {
    (this.id = uuid()), (this.title = title), (this.color = color);
  }
}

export const categoriesData = [
  new Category("Italian", "#7fffb2"),
  new Category("Quick & Easy", "#5d2aea"),
  new Category("Hamburgers", "#ea732a"),
  new Category("German", "#6d5e54"),
  new Category("Exotic", "#82e26c"),
  new Category("Breakfast", "#51c8ff"),
  new Category("Asian", "#ff51b6"),
  new Category("French", "#303bba"),
  new Category("Summer", "#dcff51"),
];
