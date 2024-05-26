function Space() {}

const ERROR_MSG = "Spaceship lost forever.";
const SPACESHIP = 'X';
const NEW_LINE = '\n';

Space.prototype.findSpaceship = function(map) {
  const lines = map.split(NEW_LINE);
  const rowIndex = lines.findIndex(line => line.includes(SPACESHIP));
  
  if (rowIndex !== -1) {
      const columnIndex = lines[rowIndex].indexOf(SPACESHIP);
      return [rowIndex, columnIndex];
  } else {
      return ERROR_MSG;
  }
};
