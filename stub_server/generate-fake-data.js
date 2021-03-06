const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");

let patients = [];

const generatePatientsData = (number) => {
  let genderOptions = ["Male", "Female"];
  for (let i = 0; i < number; i++) {
    let id = i + 1;
    let avatarUrl = faker.image.avatar();
    let name = faker.name.findName();
    let gender = genderOptions[Math.floor(Math.random() * 100) % 2];
    let age = Math.floor(Math.random() * 35) + 30;
    let phone = faker.phone.phoneNumber("+234 (0) #########");
    let address = faker.address.streetAddress();
    patients.push({
      id: id,
      image: avatarUrl,
      name: name,
      gender: gender,
      age: age,
      phone: phone,
      address: address,
    });
  }

  return patients;
};

fs.writeFileSync(
  path.join(__dirname, "db.json"),
  JSON.stringify({ patients: generatePatientsData(20), users: [] })
);

console.log("Fake Data Generated");
