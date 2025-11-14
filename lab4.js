
//Array Destructuring
//bai1
function getFirstLast(array) {
    if (!array || array.length === 0) return [];
    return [array[0], array[array.length - 1]];
}

console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]
console.log(getFirstLast([10]));         // [10, 10]
console.log(getFirstLast([]));           // []

// bai2
function swapElements(arr) {
    if (arr.length < 4) return arr;
    [arr[1], arr[3]] = [arr[3], arr[1]];
    return arr;
}

console.log(swapElements([1, 2, 3, 4, 5]));
console.log(swapElements([10, 20, 30]));

//Object Destructuring
// bai1
const user = {
    id: 1,
    personalInfo: {
        name: "javascript",
        contact: {
            email: "javascript@email.com",
            phone: "123-456-7890",
        },
    },
};

function getUserInfo({ personalInfo: { name, contact: { email } } }) {
    return { name, email };
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' 
//bai2
function createProduct({ name, price, category = "general", inStock = true }) {
    return { name, price, category, inStock };
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// Kết quả: { name: 'Laptop', price: 999, category: 'general', inStock: true }

//Promises
//bai1

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(2000).then(() => console.log("2 seconds passed"));

function fetchMultipleData(urls) {
    return Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
}

fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
    console.log(users)
);

//Async/Await
async function processOrder(orderId) {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const products = await getProducts(order.productIds);
    return { order, user, products };
}

async function safeApiCall(apiFunction, ...args) {
    try {
        const result = await apiFunction(...args);
        return { data: result, error: null };
    } catch (error) {
        return { data: null, error };
    }
}



