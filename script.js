document.addEventListener('DOMContentLoaded', () => {
    const items = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Fig',
        'Grape',
        'Kiwi',
        'Lemon',
        'Mango',
        'Orange'
    ];

    const itemList = document.getElementById('item-list');
    const searchInput = document.getElementById('search');

    // Function to render the list of items
    function renderList(filter = '') {
        itemList.innerHTML = '';
        const filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
        filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            itemList.appendChild(li);
        });
    }

    // Initial render
    renderList();

    // Event listener for search input
    searchInput.addEventListener('input', (event) => {
        renderList(event.target.value);
    });
});
