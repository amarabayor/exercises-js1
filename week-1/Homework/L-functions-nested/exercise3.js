function getYear(yOld) {
    const date = new Date();
    const year = date.getFullYear();
    return parseInt(year) - parseInt(yOld);
  }
  function getMessage(name, year) {
    return `My name is ${name} and i was born at ${year}`;
  }
  console.log(getMessage('Amara', getYear(10))); //My name is Amara and i was born at 2010.
  
  function birthYear(age) {
      return 1997 - age;
    }
     
    function sentence(name, age) {
      let year = birthYear(age);
      const message = `My name is ${name} and I was born in ${year}.`;
      return message;
    }
     
    console.log(sentence("Aleksey", 23)); //My name is Andriy and I was born in 1974.