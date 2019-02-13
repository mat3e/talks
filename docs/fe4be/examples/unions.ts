/// 8. \\\

// alias, a better readabiity
type NameOrNameArray = string | string[];

function createName(name: NameOrNameArray) {
  // length is in both a string and an array
  alert(name.length);
  if (typeof name === 'string') {
    return name;
  }
  return name.join(' ');
}

alert(`Cześć, ${createName(['Adam', 'Małysz'])}`);
alert(`Cześć, ${createName('Diablo Włodarczyk')}`);

function test(obj: { option?: string }) {
  // if(obj.option)
  alert(obj.option.toUpperCase());
}

test({ option: 'foo' });
