export const cart = [];

export function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
