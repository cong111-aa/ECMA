function createBook(title, author, year, price) {
    const book = {
        title,
        author,
        year,
        price,
        getBookInfo() {
            return ` ${this.title} - Tác giả: ${this.author}, Năm: ${this.year}, Giá: ${this.price}đ`;
        },
        calculateDiscount(discount) {
            const finalPrice = this.price - (this.price * discount) / 100;
            return `Giá sau khi giảm ${discount}%: ${finalPrice}đ`;
        },
        ["isNewBook"]: year >= 2022
    };
    return book;
}