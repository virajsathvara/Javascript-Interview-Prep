const parents = [
  { id: 1, name: "Parent 1", parentId: null },
  { id: 2, name: "Child 1-1", parentId: 1 },
  { id: 3, name: "Grandchild 1-1-1", parentId: 2 },
  { id: 4, name: "Grandchild 1-1-2", parentId: 2 },
  { id: 5, name: "Child 1-2", parentId: 1 },
  { id: 6, name: "Parent 2", parentId: null },
  { id: 7, name: "Child 2-1", parentId: 6 },
];

function fillChildren(parents) {
  for (let i = 1; i < parents.length + 1; i++) {
    const p = parents[i - 1];
    const parent = p.parentId && parents[p.parentId - 1];
    if (parent) {
      if (parent.children?.length) {
        parent.children.push(p);
        continue;
      }
      parent.children = [p];
    }
  }
}

fillChildren(parents);
console.log(JSON.stringify(parents));
