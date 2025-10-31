export function sortByOrder(objList) {
  if ("order" in objList[0] && objList[0].order !== undefined) {
    objList.sort((a, b) => a.order - b.order);
  } else {
    console.error(
      "Error in sortByOrder: Failed to sort by order. Order key doesn't exist."
    );
  }
}
