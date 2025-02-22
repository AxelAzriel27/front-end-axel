// const ambilDataUser = () => {
//   fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then(({ data }) => {
//       data.forEach(({ first_name, last_name }) => {
//         console.log(`${first_name} ${last_name}`);
//       });
//     });
// };
// ambilDataUser();
// export { ambilDataUser };
const ambilDataUser = () => {
  return fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then(({ data }) => {
      data.forEach(({ first_name, last_name }) => {
        console.log(`${first_name} ${last_name}`);
      });
    });
};

export { ambilDataUser as number2 };
