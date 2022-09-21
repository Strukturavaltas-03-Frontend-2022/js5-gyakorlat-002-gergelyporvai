/* 2. Írj egy függvényt `validateIPAddress`,
ami paraméterként egy IPv4 címet vár stringként!
A függvény egy `Boolean` értékben visszaadja,
hogy a paraméterként megadott IP cím megfelelő formátumú e, vagy sem. */

const validateIPAddress = (IPv4 = "string") => {
  const pattern = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
  return !!IPv4.match(pattern);
};

export default validateIPAddress;
