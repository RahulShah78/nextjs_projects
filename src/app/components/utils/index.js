
export async function getAllProducts(){
    const apiResponse = await fetch('https://fakestoreapi.cpm/products')
    const result =await apiResponse.json()
    return result;
}