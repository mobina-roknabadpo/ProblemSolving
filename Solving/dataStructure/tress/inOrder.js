function inOrder(root) {
	if(root === null){
        return;
    }
    inOrder(root.left);
    process.stdout.write(root.data + " ");
    inOrder(root.right);
}