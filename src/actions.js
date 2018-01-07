import * as at from './actionTypes';

export const changeIndex = index => ({
  type: at.CHANGEINDEX,
  index,
});

export const changeType = type => ({
  type: at.CHANGETYPE,
  data: type,
});

export const changeTheme = theme => ({
  type: at.CHANGETHEME,
  theme,
});

export const changeBg = bg => ({
  type: at.CHANGEBG,
  bg,
});
