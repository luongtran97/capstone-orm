export const regex = {
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
  phone: /^([+]\d{2})?\d{10}$/,
  user: /^(?=[a-zA-Z0-9._]{6,12}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
  date: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
  blank: /^S+$/,
  onlyNumCharacter: /^[a-zA-Z0-9\s]+$/,
};
export const imgUrl = "http://localhost:8080/public/img/";
