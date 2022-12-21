class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def print_preorder(node):
    if node.val == None:
        return
    print(node.val)
    print_preorder(node.left)
    print_preorder(node.right)

def print_inorder(node):
    if node.val == None:
        return
    print_inorder(node.left)
    print_inorder(node.val)
    print_inorder(node.right)

def print_postorder(node):
    if node.val == None:
        return
    print_postorder(node.left)
    print_postorder(node.right)
    print(node.val)


root = Node(5, Node())