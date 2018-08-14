// 二叉搜索树

function BinarySearchTree() {
  var  Node = function(key) {
      this.key = key
      this.left = null
      this.right = null
  }

  // node 父节点 newNode 子节点
  function insertNode(node, newNode) {
    if(newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  function inOrderTraverseNode(node, callback) {
    if(node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }
  // 
  function preOrderTraverseNode(node, callback) {
    if(node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  function postOrderTraverseNode(node, callback) {
    if(node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  var root = null

  this.insert = function(key) {
      var newNode = new Node(key)
      if (root === null) {
          root = newNode
      } else {
          insertNode(root, newNode)
      }
  }
  // 中序遍历
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback)
  }
  // 先序遍历
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  }
  // 后序遍历  
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  }
  // 找到最大的节点
  var maxNode = function(node) {
    if(node !== null) {
      if(node.right !== null) {
        maxNode(node.right)
        node = node.right
      } else {
        return node.key
      }
    }
    // if (node) {

    // }
  }

  var searchNode = function(node, key) {
    if(node === null) {
      return false
    }
    if(key < node.key) {
      return searchNode(node.left, key)
    } else if(key > node.key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }

  this.max = function() {
    return maxNode(root)
  }

  this.search = function (key) {
    return searchNode(root, key)
  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
// 遍历一遍， 中序遍历的回调函数
var printNode = function(val) {
  console.log(val)
}
tree.inOrderTraverse(printNode);
console.log('先序遍历咯')

tree.preOrderTraverse(printNode)
console.log('后序遍历')
tree.postOrderTraverse(printNode)

console.log('asd', tree.max())

