/**
 * Add link-element to the document head
 *
 * @param type rel attribute of link-element
 * @param href href attribute of link-element
 */
export const addLink = (type: string, href: string, attrs = {}) => {
  const link = document.createElement('link');

  Object.assign(link, attrs, {
    rel: type,
    href,
  });

  return new Promise((resolve, reject) => {
    link.onerror = () => reject(new Error(`could not load link ${href}`));

    if ('onload' in link) {
      link.onload = resolve;
    } else {
      setTimeout(resolve, 50);
    }

    document.head.appendChild(link);
  });
};
