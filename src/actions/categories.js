export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

/**
 * Action creator
 * @param {*} categories 
 */
export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories,
    }
}

