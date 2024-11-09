class Book extends CatalogEntry {
    constructor(title, year, author, genre) {
        super(title, year);
        this.author = author;
        this.genre = genre;
    }

    getDescription() {
        return `"${this.title}" by ${this.author} (${this.year}) - Genre: ${this.genre}.`;
    }
}