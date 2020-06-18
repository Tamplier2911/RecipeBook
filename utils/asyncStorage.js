import { AsyncStorage } from "react-native";

/**
 * storeData - async function, accepts any arbitrary value, serializes it to JSON,
 * performs locally data persistence.
 * @function storeData
 * @param {any} value - React component.
 */

export const storeData = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log("Data saved successfuly!");
  } catch (err) {
    console.log(`Something go terribly rong! ${err.message}`);
  }
};

/**
 * getData - async function, retreives locally stored pice of data, perform deserialization
 * and returns data as it is.
 * @function getData
 */

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log("Data retrieved successfuly!");
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (err) {
    console.log(`Something go terribly rong! ${err.message}`);
  }
};
