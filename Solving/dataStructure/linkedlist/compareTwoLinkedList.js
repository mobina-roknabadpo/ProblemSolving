function CompareLists(llist1, llist2) {
  if (llist1 === null && llist2 === null) {
    return 1;
  }
  if (llist1 !== null && llist2 !== null) {
    return (
      llist1.data === llist2.data && CompareLists(llist1.next, llist2.next)
    );
  }
  return 0;
}
