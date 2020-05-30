import { AsyncStorage } from "react-native";

/**
 * storeData - async function, accepts any arbitrary value, serializes it to JSON,
 * performs locally data persistence. (KEY IS HARDCODED)
 * @function storeData
 * @param {any} value - React component.
 */

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("Recipeious", jsonValue);
    console.log("Data saved successfuly!");
  } catch (err) {
    console.log(`Something go terribly rong! ${err.message}`);
  }
};

/**
 * getData - async function, retreives locally stored pice of data, perform deserialization
 * and returns data as it is. (KEY IS HARDCODED)
 * @function getData
 */

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("Recipeious");
    console.log("Data retrieved successfuly!");
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (err) {
    console.log(`Something go terribly rong! ${err.message}`);
  }
};
