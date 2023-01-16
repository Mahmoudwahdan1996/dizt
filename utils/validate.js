import { helpers } from "vuelidate/lib/validators";

export function isValidImgType(file) {
  return /\.(jpe?g|png)$/i.test(file.name);
}

export function isValidImgSize(fileSize, maxSize) {
  const sizeInKB = fileSize / 1024 / 1024;
  if (sizeInKB <= maxSize) {
    return true;
  } else {
    return false;
  }
}

export const isImage = (checked = false) =>
  helpers.withParams({ type: "imageFile" }, (value) => {
    return value && checked == false ? isValidImgType(value) : true;
  });

export const convertArabicNumberToEnglishNumber = (value) => {
  const converted = value.replace(
    /[٠١٢٣٤٥٦٧٨٩]/g,
    (d) => d.charCodeAt(0) - 1632
  );

  return converted;
};

export const validPhoneNumber = (value) => {
  if (
    value &&
    value.match(/^(05|5|009665|\+9665)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/)
  ) {
    return true;
  } else {
    return false;
  }
};

export const isRequired = (value) => {
  if (value !== "") {
    return true;
  } else {
    return false;
  }
};

export const maxWords = (param) =>
  helpers.withParams({ type: "maxWords", maxWords: param }, (value) =>
    value ? value.split(" ").length <= param : true
  );