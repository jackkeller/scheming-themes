/**
 * @param {string} className 
 * @param {HTMLElement} node
*/
export function useBodyClass(node, className) {
  document.body.classList.add(className);

  return {
    /**
     * @param {string} newClassName
     */
    update(newClassName) {
      document.body.classList.remove(className);
      document.body.classList.add(newClassName);
      className = newClassName;
    },
    destroy() {
      document.body.classList.remove(className);
    }
  };
}
