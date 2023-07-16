const checkListsRate = (checkLists) => {
    console.log(checkLists);
    const countItems = checkLists?.checkItems.length
    const countComlpeted = checkLists?.checkItems.reduce(
        (acc, item) => item.state === "complete" ? acc + 1 : acc, 0)
    const isComlpeted = countComlpeted === countItems;
    return { countComlpeted: countComlpeted, isComlpeted: isComlpeted, countItems: countItems }
}

export { checkListsRate };