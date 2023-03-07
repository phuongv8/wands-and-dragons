export function handleProductUpdate(id, price, quantity, reloadData) {
  const URL =
    "http://localhost:5000/wndapi/product/update/" +
    id +
    "?quantity=" +
    quantity +
    "&price=" +
    price;

  try {
    fetch(URL, { method: "PUT" }).then(() => reloadData());
  } catch (error) {
    console.log(error);
  }
}

export async function handleRemoveProduct(id) {
  const URL = "http://localhost:5000/wndapi/product/" + id;
  try {
    fetch(URL, { method: "DELETE" });
  } catch (error) {
    console.log(error);
  }
}

export function handleQuantityUpdate(id, quantity) {
  const URL =
    "http://localhost:5000/wndapi/product/decrease-quantity/" +
    id +
    "?quantity=" +
    quantity;
  try {
    fetch(URL, { method: "PUT" });
  } catch (error) {
    console.log(error);
  }
}

export function handleAddNewItem(newItem) {
  const URL = "http://localhost:5000/wndapi/product/"
  try{
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    })
  }catch(error){
    console.log(error)
  }
}
