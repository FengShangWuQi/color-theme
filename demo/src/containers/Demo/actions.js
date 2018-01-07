import * as at from './actionTypes';

export const changeOption = (option, key, value) => ({
  type: at.CHANGEOPTION,
  option,
  key,
  value,
});

export const changeThemeSet = (type, index, key, colors) => ({
  type: at.CHANGETHEMESET,
  data: type,
  index,
  key,
  colors,
});

export const changeBg = background => ({
  type: at.CHANGEBG,
  background,
});
