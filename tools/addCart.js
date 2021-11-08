export function addCart (item, state, setState) {
    const addtoCart = setState([...state, item])
    console.log(item);

    return console.log(item.name, "as been added to cart");
}