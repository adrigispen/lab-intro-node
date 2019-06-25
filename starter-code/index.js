class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.length < pos) return null;
    this.items.sort((a,b) => a-b);
    return this.items[pos];
  }

  max() {
    if (this.length == 0) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if (this.length == 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }

  average() {
    if (this.length == 0) throw new Error("EmptySortedList");
    return this.sum()/this.length;
  }

  sum() {
    return this.items.reduce((acc, cv) => acc + cv, 0);
  }
};

module.exports = SortedList;
