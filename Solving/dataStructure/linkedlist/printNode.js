function printLinkedList(head) {
    let temp = head
    while(temp !== null){
        console.log(temp.data);
        temp = temp.next;
    }
}