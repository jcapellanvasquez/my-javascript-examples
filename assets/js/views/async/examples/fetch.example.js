export const runFecthExample = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then(console.log);

    // fin
};
