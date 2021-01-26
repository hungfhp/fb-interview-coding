function TreeNode(value, parent, left, right) {
  return {
    value,
    parent,
    left,
    right
  }
}

var tree = {
  root: null,
  init: function () {
    this.insertToTree(100)
    this.insertToTree(50)
    this.insertToTree(25)
    this.insertToTree(200)
    this.insertToTree(75)
    this.insertToTree(350)
    this.insertToTree(125)
    this.insertToTree(30)
    this.insertToTree(60)
  },
  insertToTree: function (value) {
    if (this.root == null) {
      this.root = TreeNode(value, null, null, null)
    } else {
      this.insertToNode(this.root, value)
    }
  },
  insertToNode: function (node, value) {
    if (value < node.value) {
      if (node.left) {
        this.insertToNode(node.left, value)
      } else {
        node.left = TreeNode(value, node)
      }
    } else {
      if (node.right) {
        this.insertToNode(node.right, value)
      } else {
        node.right = TreeNode(value, node)
      }
    }
  },

}

tree.init()

function PrintTreeLevel(tree) {
  var root_level = [tree.root]
  PrintNextLevel(root_level)

  function PrintNextLevel(level) {
    let next_level = []
    level.forEach(node => {
      if (node) {
        process.stdout.write(`${node.value} `)
        next_level.push(node.left)
        next_level.push(node.right)
      }
    });
    if (next_level.length) {
      console.log('')
      PrintNextLevel(next_level)
    }
  }
}

PrintTreeLevel(tree)
