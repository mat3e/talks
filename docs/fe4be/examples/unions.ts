/// 8. Unie \\\

// alias, dla lepszej czytelności
type NameOrNameArray = string | string[];

function createName(name: NameOrNameArray) {
  // obence i w tablicy i w stringu
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
