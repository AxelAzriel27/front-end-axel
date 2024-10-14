const ambilDataUser = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const { data } = await response.json();
    return data.map(
      ({ first_name, last_name }) => `${first_name} ${last_name}`
    );
  } catch (error) {
    console.log(error);
  }
};

export { ambilDataUser as number3 };
