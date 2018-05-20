exports.beautifyString = (string) => {
  string = string.replace(/_/g, ' ');
  string = string.replace(/\b(\w{2}$|\w)/g, (match) => match.toUpperCase());
  return string;
}