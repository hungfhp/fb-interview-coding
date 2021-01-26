function TreeNode(value, parent, left, right) {
  return {
    value,
    parent,
    left,
    right
  }
}

var tree = {
  root: TreeNode(100, null, null, null),
  linked_list_head: null,
  insertToTree: function (value) {
    // node = this.root
    this.insertToNode(this.root, value)
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
  traveselTree: function () {
    this.printNode(this.root)
  },
  printNode: function (node) {
    if (node) {
      this.printNode(node.left)
      this.fuseLinkedList(node)
      // console.log(node.value)
      this.printNode(node.right)
    }
  },
  fuseLinkedList: function (node) {
    if (this.linked_list_head == null) {
      this.linked_list_head = TreeNode(node.value, null, null, null)
      this.linked_list_head.left = null
      return
    }

    let linked_node = this.linked_list_head
    
    while(linked_node && linked_node.right) {
      linked_node = linked_node.right
    }

    const new_tail = TreeNode(node.value, null, linked_node, null)
    
    linked_node.right = new_tail
  },
  printLinkedList: function () {
    let linked_node = this.linked_list_head

    while(linked_node) {
      console.log(linked_node.value)
      linked_node = linked_node.right
    }
  }
}


tree.insertToTree(101)
tree.insertToTree(50)
tree.insertToTree(25)
tree.insertToTree(200)
tree.insertToTree(75)
tree.insertToTree(125)
tree.insertToTree(350)
tree.insertToTree(30)
tree.insertToTree(60)


tree.traveselTree()
tree.printLinkedList()
// console.log(tree.linked_list_head)
// console.log(tree.root)