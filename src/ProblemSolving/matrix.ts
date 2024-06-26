export class Matrix {
  rws: string[][] = [];
  cols: number[][] = [];
  constructor(str: string) {
    const rawRows = str.split("\n");
    this.rws = rawRows.map((r) => r.split(" "));
    for (let r = 0; r < this.rws.length; r++) {
      for (let c = 0; c < this.rws[r].length; c++) {
        if (this.cols[c]?.length) {
          this.cols[c].push(Number(this.rws[r][c]));
          continue;
        }
        this.cols[c] = [Number(this.rws[r][c])];
      }
    }
  }

  get rows() {
    this.rws.forEach((r) => r.map((rc) => parseInt(rc)));
    return this.rws;
  }

  get columns() {
    return this.cols;
  }
}

const matrix = new Matrix("1");
console.log(matrix.rows);
console.log(matrix.columns);
