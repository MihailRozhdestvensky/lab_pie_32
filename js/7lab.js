fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById('container');
        container.innerHTML = '';
        
        data.products.forEach(function(product) {
            container.innerHTML += `
                <div class="product">
                    <img src="${product.images[0]}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <h3>Цена: $${product.price}</h3>
                    <h3>Категория: ${product.category}</h3>
                </div>`;
        });
    })
    .catch(error => {
        console.error('Ошибка загрузки:', error);
        document.getElementById('container').innerHTML = 
            '<p>Ошибка загрузки продуктов</p>';
    });

function searchProducts() {
    let searchWord = document.getElementById('searchInput').value;
    let searchContainer = document.getElementById('searchContainer');
    searchContainer.innerHTML = '';

    fetch(`https://dummyjson.com/products/search?q=${searchWord}`)
        .then(res => res.json())
        .then(data => {
            data.products.forEach(function(product) {
                searchContainer.innerHTML += `
                    <div class="product">
                        <img src="${product.images[0]}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <h3>Цена: $${product.price}</h3>
                        <h3>Категория: ${product.category}</h3>
                    </div>`;
            });
            
            if (data.products.length === 0) {
                searchContainer.innerHTML = '<p>Продукты не найдены</p>';
            }
        })
        .catch(error => {
            console.error('Ошибка поиска:', error);
            searchContainer.innerHTML = '<p>Ошибка поиска</p>';
        });
}

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});