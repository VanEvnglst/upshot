
function parseInitials(name) {
  if (name === undefined) return ''; 
  const nameArr = name.split(' ');
  const nameLength = nameArr.length;
  let initials = '';
  if(nameLength === 1){
    initials = `${nameArr[0].charAt(0)}`;
  } else if (nameLength === 2) {
    initials = `${nameArr[0].charAt(0)}${nameArr[1].charAt(0)}`;
  } else {
    initials = `${nameArr[0].charAt(0)}${nameArr[nameLength - 1].charAt(0)}`;
  }
  return initials;
}


export default {
  parseInitials
}