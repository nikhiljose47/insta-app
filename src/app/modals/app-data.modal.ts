export class AppDataModal {
    title: String
    category: String
    fileLink: String
    categoryName: String
    subCategoryName: String

    constructor(title: String, category: String, fileLink: String, categoryName: String, subCategoryName: String) {
        this.title = ""
        this.category = ""
        this.fileLink = ""
        this.categoryName = ""
        this.subCategoryName = ""
    }
}