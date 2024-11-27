import {Tree} from "./bst.mjs"

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree(array);

  // Pretty print the tree
  prettyPrint(tree.root);
  // Level Order (you can use either levelOrderITE or levelOrderREC)
//console.log("Level Order:");
//tree.LevelOrderITE((node) => console.log(node.data));

// Pre Order
//console.log("\nPre Order:");
//tree.preOrder(tree.root, (node) => console.log(node.data));

// Post Order
//console.log("\nPost Order:");
//tree.postOrder(tree.root, (node) => console.log(node.data));

// In Order
//console.log("\nIn Order:");
//tree.inOrder(tree.root, (node) => console.log(node.data));
