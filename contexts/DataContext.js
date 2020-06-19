import React, { useEffect, useState, createContext } from "react";

// utilities
import { uuid } from "../utils/uuid";

// storage utils
import { storeData, getData } from "../utils/asyncStorage";

const Context = createContext({});

export const DataContext = ({ children }) => {
  const [dataIsLoading, setDataIsLoading] = useState(true);

  const [categories, setCategories] = useState([]);
  //   const {} = categories;

  const [dishes, setDishes] = useState([]);
  //   const {} = dishes;

  const [dataModalHidden, setDataModalHidden] = useState(true);
  const [dataModalContext, setDataModalContext] = useState("");

  useEffect(() => {
    /** load initial data */
    setDataIsLoading(true);
    setTimeout(() => {
      setDataIsLoading(false);
    }, 500);
  }, [categories, dishes]);

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
    await storeData(categories, "recipeiousUsernameCategories");
  };

  /**
   * @function - method that initialized new category whenever it created,
   * performs data serialization and storing, once category is created.
   * @param {object} category - category mean to be a category object.
   */
  const addNewCategory = (category) => {
    category.id = uuid();
    setCategories((categories) => {
      const newCategoriesArray = [...categories, category];
      storeCategoriesLocally(newCategoriesArray);
      return newCategoriesArray;
    });
  };

  // remove category - and all dishes that HAS THIS ONLY CATEGORY .length === 1

  const removeCategory = (categoryName) => {
    const newCategories = categories.filter(
      (category) => category.title !== categoryName
    );
    setCategories(() => [...newCategories]);

    /* loop over all dishes and remove dishes wich only category is categoryName */
    const dishesToRemove = dishes.filter(
      (dish) =>
        dish.category.includes(categoryName) && dish.category.length === 1
    );

    dishesToRemove.forEach((dish) => removeDish(dish.id));

    storeCategoriesLocally(newCategories);
  };

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
    await storeData(dishes, "recipeiousUsernameDishes");
  };

  /**
   * @function - method that initialized new dish whenever it created,
   * performs data serialization and storing, once category is created.
   * @param {object} dish - dish mean to be a dish object.
   */
  const addNewDish = (dish) => {
    dish.id = uuid();
    dish.isFavorite = false;

    setDishes((dishes) => {
      const newDishesArray = [...dishes, dish];
      storeDishesLocally(newDishesArray);
      return newDishesArray;
    });
  };

  /**
   * @function - removes dish from the list, saves data locally.
   * @param {string} id - id required to find and delete pice of data from state.
   */
  const removeDish = (id) => {
    setDishes((dishes) => {
      const filteredDishes = dishes.filter((obj) => obj.id !== id);

      const newDishes = [...filteredDishes];
      storeDishesLocally(newDishes);

      return newDishes;
    });
  };

  /**
   * @function - changes dish isFavorite property to true, saves data locally.
   * @param {string} id - id required to find and update pice of data in state.
   */
  const markDishAsFavorite = (id) => {
    setDishes((dishes) => {
      const dishToUpdate = dishes.find((obj) => obj.id === id);
      dishToUpdate.isFavorite = true;

      const newDishes = [...dishes];
      storeDishesLocally(newDishes);

      return newDishes;
    });
  };

  /**
   * @function - changes dish isFavorite property to false, saves data locally.
   * @param {string} id - id required to find and update pice of data in state.
   */
  const removeFavoriteMarkFromDish = (id) => {
    setDishes((dishes) => {
      const dishToUpdate = dishes.find((obj) => obj.id === id);
      dishToUpdate.isFavorite = false;

      const newDishes = [...dishes];
      storeDishesLocally(newDishes);

      return newDishes;
    });
  };

  /**
   * @function - opens data modal in order to insure that user wants to delete either
   * category or recipe. As well defines data modal context, so we can have access
   * to it from modal.
   * @param {string} data - title of recipe or category that we want to remove.
   */
  const openDataModal = (data) => {
    setDataModalContext(data);
    setDataModalHidden(false);
  };

  /**
   * @function - closes data modal when user confirm deletion, or wants to roll back.
   */
  const closeDataModal = () => {
    setDataModalHidden(true);
  };

  /**
   * @function - cleans up data modal context state when either back is pressed or
   * deletion performed
   */
  const cleanDataModalContextState = () => {
    setDataModalContext("");
  };

  return (
    <Context.Provider
      value={{
        // data is loading
        dataIsLoading,

        // categories
        categories,
        addNewCategory,
        removeCategory,
        fetchAllCategories,

        // dishes
        dishes,
        addNewDish,
        removeDish,
        markDishAsFavorite,
        removeFavoriteMarkFromDish,
        fetchAllDishes,

        // data modal
        dataModalHidden,
        openDataModal,
        closeDataModal,

        // data modal context - title of thing we want to remove
        dataModalContext,
        cleanDataModalContextState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
