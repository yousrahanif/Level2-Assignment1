function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}



function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  let newItems = items.filter((item) => item.rating >= 4.0);
  return newItems;
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArray: T[] = [];
  for (const arr of arrays) {
    for (const val of arr) {
      newArray.push(val);
    }
  }
  return newArray;
}




class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}



function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}





interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let highest = products[0];
  for (const prod of products) {
    if (prod.price > highest.price) {
      highest = prod;
    }
  }
  return highest;
}





enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}





async function squareAsync(n: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (n < 0) {
      return reject("Error: Negative number not allowed");
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}
