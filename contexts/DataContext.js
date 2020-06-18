import React, { useEffect, useState, createContext } from "react";

// storage utils
import { storeData, getData } from "../utils/asyncStorage";

const Context = createContext({});

export const DataContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const {} = categories;

  const [dishes, setDishes] = useState([]);
  const {} = dishes;

  useEffect(() => {
    /** load initial data */
  }, []);

  /**
   * @function - asynchronouse method to fetch all categories during initialization.
   * @param {string} key - key is required to getData in order to fetch data from
   * local storage, initialy HARDCODED.
   */
  const fetchAllCategories = async () => {
    const data = await getData("recipeiousUsernameCategories");
    setCategories(() => [...data]);
  };

  /**
   * @function - asynchronouse method to store categories when new category
   * is added.
   * @param {any} value - value may be any data structure that then going to be
   * serialized to string and store in local storage.
   * @param {string} key - key is required to storeData in order to save data to
   * local storage, initialy HARDCODED.
   */
  const storeCategoriesLocally = async (categories) => {
    await getData(categories, "recipeiousUsernameCategories");
  };

  /**
   * @function - method that initialized new category whenever it created,
   * performs data serialization and storing, once category is created.
   * @param {object} category - category mean to be a category object.
   */
  const addNewCategory = (category) => {
    setCategories((categories) => {
      const newCategoriesArray = [...categories, category];
      storeCategoriesLocally(newCategoriesArray);
      return newCategoriesArray;
    });
  };

  // remove category

  /**
   * @function - asynchronouse method to fetch all dishes during initialization.
   * @param {string} key - key is required to getData in order to fetch data from
   * local storage, initialy HARDCODED.
   */
  const fetchAllDishes = async () => {
    const data = await getData("recipeiousUsernameDishes");
    setDishes(() => [...data]);
  };

  /**
   * @function - asynchronouse method to store dishes when new dish is added.
   * @param {any} value - value may be any data structure that then going to be
   * serialized to string and store in local storage.
   * @param {string} key - key is required to storeData in order to save data to
   * local storage, initialy HARDCODED.
   */
  const storeDishesLocally = async (dishes) => {
    await getData(dishes, "recipeiousUsernameDishes");
  };

  /**
   * @function - method that initialized new dish whenever it created,
   * performs data serialization and storing, once category is created.
   * @param {object} dish - dish mean to be a dish object.
   */
  const addNewDish = (dish) => {
    setDishes((dishes) => {
      const newDishesArray = [...dishes, dish];
      storeDishesLocally(newDishesArray);
      return newDishesArray;
    });
  };

  // remove dish
  // add dish to favorite

  return (
    <Context.Provider
      value={{
        // categories
        addNewCategory,
        fetchAllCategories,

        // dishes
        addNewDish,
        fetchAllDishes,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
