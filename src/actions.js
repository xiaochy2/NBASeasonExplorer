export const add = team => ({
  type: "ADD",
  team
});

export const del = team => ({
  type: "DEL",
  team
});

export const filtTeam = filtOption => ({
  type: "FILT",
  filtOption
});

export const addData = data => ({
  type: "ADDDATA",
  data
});
export const clearAll = () => ({
  type: "CLEAR"
});
