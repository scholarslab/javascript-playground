
describe('Numbers', function() {
  it('Write a function named "thirteen" that adds 6 and 7.', function() {
    expect(thirteen()).toBe(13);
  });

  it('Write a function named "answer" that divides 84 in half.', function() {
    expect(answer()).toBe(42);
  });
});

describe('Strings', function() {
  it('Write a function "greetEric" that returns "Hello, Eric."', function() {
    expect(greetEric()).toBe('Hello, Eric.');
  });
});

describe('Boolean', function() {
  it('Write a function named "sevenIsEight" that tests whether 7 equals 8.', function() {
    expect(sevenIsEight()).toBe(false);
  });
});

describe('Array', function() {
  it('Write a function named "listOf3" that returns an array with three elements.', function() {
    expect(listOf3().length).toBe(3);
  });
});

describe('Object', function() {
  it('Write a function named "ammon" that returns an object with the "first_name" property set to "ammon".', function() {
    expect(ammon()).toEqual(jasmine.objectContaining({
      first_name: 'ammon'
    }));
  });
});

describe('Variables', function() {
  it('Write a function named "plus3" that adds 3 to any number.', function() {
    expect(plus3(39)).toBe(42);
    expect(plus3(15)).toBe(18);
    expect(plus3(0)).toBe(3);
    expect(plus3(-7)).toBe(-4);
  });

  it('Write a function named "hello" that greets any name passed into it. (hello("Jeremy") => "Hello, Jeremy."', function() {
    expect(hello('Eric')).toBe('Hello, Eric.');
    expect(hello('Jeremy')).toBe('Hello, Jeremy.');
    expect(hello('Ammon')).toBe('Hello, Ammon.');
    expect(hello('Laura')).toBe('Hello, Laura.');
    expect(hello('Ronda')).toBe('Hello, Ronda.');
    expect(hello('Alison')).toBe('Hello, Alison.');
  });
});

describe('Conditionals', function() {
  describe('if', function() {
    it('Write a function named "yesNo" that returns "yes" if passed true, and "no" otherwise.', function() {
      expect(yesNo(true)).toBe('yes');
      expect(yesNo(false)).toBe('no');
    });
  });
});

describe('Control Flow', function() {
  describe('loops', function() {
    describe('for ... of', function() {
      it('Write a function named "allPlus3" that takes an array of numbers and returns a new array adding 3 to each item in the first array.', function() {
        expect(allPlus3([1, 2, 3])).toEqual([4, 5, 6]);
        expect(allPlus3([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])).toEqual(
          [3, 4, 4, 5, 6, 8, 11, 16, 24, 37]);
      });
    });
  });
});
