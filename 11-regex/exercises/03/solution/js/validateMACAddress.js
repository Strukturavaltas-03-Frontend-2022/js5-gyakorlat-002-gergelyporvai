/* 3. Írj  egy függvényt `validateMACAddress`,
ami paraméterként egy MAC címet vár stringként!
A függvény egy `bollean` értékben visszaadja,
hogy a paraméterként megadott MAC cím megfelelő formátumú e, vagy sem. */

const validateMACAddress = (MAC = "string") => {
  const pattern = /^([0-9A-F]{2}.){5}[0-9A-F]{2}$/;
  return !!MAC.match(pattern);
};

export default validateMACAddress;
