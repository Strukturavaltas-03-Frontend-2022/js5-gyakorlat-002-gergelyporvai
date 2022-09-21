/* 1. Írj egy függvényt `validateVisaCardNumber` néven,
ami paraméterként egy visa kártyaszámot vár stringként, szóközök nélkül!
A függvény egy `Boolean` értékben visszaadja,
hogy a paraméterként megadott kártyaszám megfelelő formátumú e, vagy sem. */

const validateVisaCardNumber = (visa = "string") => {
  const pattern = /^4\d{3}(\d{4}){3}$/;
  return !!visa.match(pattern);
};

export default validateVisaCardNumber;
