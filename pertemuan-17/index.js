// 1. Promise
import { messages } from "./promise.js";
messages();

// 2. Fetch
import { number2 } from "./fetch.js";
number2();

//3. Async Await
const ambilDataUser = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const { data } = await response.json();
    data.forEach(({ first_name, last_name }) => {
      console.log(`${first_name} ${last_name}`);
    });
  } catch (error) {
    console.log(error);
  }
};
ambilDataUser();

// 4. Axios
// const ambilDataUser = async () => {
//   try {
//     const response = await axios.get("https://reqres.in/api/users");
//     const { data } = response.data;
//     data.forEach(({ first_name, last_name }) => {
//       console.log(`${first_name} ${last_name}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// ambilDataUser();
