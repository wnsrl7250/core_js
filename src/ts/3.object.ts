const user: {
  id?: number; // optional Property
  name: string;
  age: number;
} = {
  name: "tiger",
  age: 40,
};

user.id = 10;
// user.address = 'a'

const config: {
  readonly apiKey: string;
} = {
  apiKey: "ASxsdfjeiovnxxijok@",
};

// config.apiKey = "aaaaaa"
