class Task {
    constructor(text, category, endDate) {
        this.text = text;
        this.category = category;
        this.endDate = endDate;
        this.isDone = false;
        this.doneDate = undefined;
        this.completed = false;
    }

}