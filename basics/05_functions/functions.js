function getName(name, age, city) {
  var name = "Sathithya yogi M";
  if (!name || !age || !city) {
    console.log("Enter all required fields");
  } else {
    console.log(
      ` Hai My Name is ${name},my age is ${age} and i am from ${city}`
    );
  }
}

function getCurrentDate() {
  let today = new Date().toISOString().slice(0, 10);
  return today;
}

const getDate = function (){
  let today = new Date().toISOString().slice(0, 10);
  return today;
}

getCurrentDate();

const currentDate = getDate();
console.log(currentDate);
