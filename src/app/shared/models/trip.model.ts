export class Trip {
  colour: string = getRandomColor();
  level: 1 | 2 = 1;
  start: string = '';
  end: string = '';
  connectedWithArrow = false;
  visited = false;

  constructor(start: string, end: string) {
    this.start = start;
    this.end = end;
  }
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}