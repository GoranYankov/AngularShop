export class ArticleFormModel {
    constructor(
        public title:String,
        public img: String,
        public url:String,
        public body:String,
        public keywordsString: String,
        public description: String,
    ) {}
}