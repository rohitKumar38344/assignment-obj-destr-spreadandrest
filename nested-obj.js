const person = {
  name: "Raman",
  age: 22,
  address: {
    street: "B8 Block B, Industrial Area.",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
  },
};

const getNameAndStreet = function (obj) {
  const { name: firstName, address: personAddr } = obj;
  return {
    name: firstName,
    address: personAddr,
  };
};

console.log(getNameAndStreet(person));
