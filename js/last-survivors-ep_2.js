// 'xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh' = 'acdeghlmnqrvyz'

// let str = "zzzab"
// str = "azab"
// str = "bzb"
// str = "cz"

const CHECK =
  'xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh';

function lastSurvivors(str) {
  let charCodeArray = str
    .toLowerCase()
    .split('')
    .map(el => el.toString().charCodeAt(0));

  do {
    charCodeArray = [...checkTwink(charCodeArray)];
  } while (charCodeArray.length !== checkTwink(charCodeArray).length);

  let result = charCodeArray
    .map(el => String.fromCharCode(el))
    .sort()
    .join('');
  return result;
}

function checkTwink(updCharCodeArr) {
  for (let i = 0; i < updCharCodeArr.length - 1; i++) {
    let firstElement = updCharCodeArr[i];
    for (let j = i + 1; j < updCharCodeArr.length; j++) {
      let secondElement = updCharCodeArr[j];
      if (firstElement == secondElement) {
        let newCharCode = updCharCodeArr[i] == 122 ? 97 : ++updCharCodeArr[i];
        updCharCodeArr.splice(j, 1);
        updCharCodeArr.splice(i, 1, newCharCode);
        return updCharCodeArr;
      }
    }
  }
  return updCharCodeArr;
}

console.log(lastSurvivors(CHECK));
