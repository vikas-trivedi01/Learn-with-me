new Promise((resolve, reject) => {
    let value = Math.floor(Math.random()*100);
    console.log(`Age is ${value}`);
    if(value > 18) {
      resolve("You are eligible to vote");
    }
    else {
      reject(new Error("You must be greater than 18 to vote"));
    }
  })
  .then((result) => {
    return `Message : ${result}`;
  })
  .then((previousResult) => {
    return `System responded with result =  ${previousResult}!\n`;
  })
  .then((previousResult) => {
    console.log(`${previousResult} - You can leave this place now.\n - Have a goood day`);
  })
  .catch((error) => {
    console.log(`Error : ${error.message}`);
  })