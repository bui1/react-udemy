export function selectBook(book){
    // selectBook is a actioncreator it needs to return an action -- object with a type property
    return {
        type: "BOOK_SELECTED",
        payload: book
    };
};

