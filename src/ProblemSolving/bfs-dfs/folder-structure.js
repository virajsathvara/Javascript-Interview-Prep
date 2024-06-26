class Node {
  constructor(name) {
    this.name = name;
    this.children = {};
  }
}

class FileTree {
  constructor() {
    this.node = new Node("");
  }

  insertFile(filePath) {
    const children = filePath.split("/").slice(1);
    console.log(children);
    let current = this.node;
    for (const child of children) {
      if (!current.children[child]) {
        current.children[child] = new Node(child);
      }
      current = current.children[child];
    }
  }

  printStructure() {
    console.log("////// DFS //////////");
    this.printDFS(this.node, "");
    {
      console.log("////// BFS //////////");
      console.log("-- " + this.node.name);
      this.printBFS(this.node, "");
    }
  }

  printDFS(node, indent) {
    console.log(indent + "--" + node.name);
    if (!Object.keys(node.children)?.length) return;
    for (const child of Object.values(node.children)) {
      this.printDFS(child, indent + " ");
    }
  }

  printBFS(node, indent) {
    Object.values(node.children).forEach((child) =>
      console.log(indent + "-- " + child.name),
    );
    Object.values(node.children).forEach((child) =>
      this.printBFS(child, indent + " "),
    );
  }
}
const files = [
  "/webapp/assets/html/a.html",
  "/webapp/assets/html/b.html",
  "/webapp/assets/js/c.js",
  "/webapp/index.html",
];

const fileTree = new FileTree("start");
for (const file of files) {
  fileTree.insertFile(file);
}
fileTree.printStructure();
