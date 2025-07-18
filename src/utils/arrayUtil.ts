function range(start: number, end: number): number[] {
  return Array.from(Array(end - start).keys()).map(nr => nr + start);
}

function repeat(count: number, action: (index: number) => undefined) {
  for (let index of range(0, count)) {
    action(index);
  }
}

export { range, repeat };
