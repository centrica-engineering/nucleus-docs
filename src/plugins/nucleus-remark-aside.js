import { h as _h, s as _s } from 'hastscript';
import { remove } from 'unist-util-remove';
import { visit } from 'unist-util-visit';

/** Hacky function that generates an mdast HTML tree ready for conversion to HTML by rehype. */
function h(el, attrs = {}, children = []) {
	const { tagName, properties } = _h(el, attrs);
	return {
		type: 'paragraph',
		data: { hName: tagName, hProperties: properties },
		children,
	};
}

/** Hacky function that generates an mdast SVG tree ready for conversion to HTML by rehype. */
function s(el, attrs = {}, children = []) {
	const { tagName, properties } = _s(el, attrs);
	return {
		type: 'paragraph',
		data: { hName: tagName, hProperties: properties },
		children,
	};
}

/**
 * remark plugin that converts blocks delimited with `:::` into styled
 * asides (a.k.a. “callouts”, “admonitions”, etc.). Depends on the
 * `remark-directive` module for the core parsing logic.
 *
 * For example, this Markdown
 *
 * ```md
 * :::tip[Did you know?]
 * Astro helps you build faster websites with “Islands Architecture”.
 * :::
 * ```
 *
 * will produce this output
 *
 * ```astro
 * <aside class="starlight-aside starlight-aside--tip" aria-label="Did you know?">
 *   <p class="starlight-aside__title" aria-hidden="true">Did you know?</p>
 *   <section class="starlight-aside__content">
 *     <p>Astro helps you build faster websites with “Islands Architecture”.</p>
 *   </section>
 * </Aside>
 * ```
 */
export function nucleusRemarkAside() {
  console.log('processing aside');
  const Variant = {
    note: 'Note',
    tip: 'Tip',
    caution: 'Caution',
    danger: 'Danger',
    do: 'Do',
    dont: 'Don\'t'
  };

  const variants = new Set([...Object.keys(Variant)]);
  const isAsideVariant = (s) => variants.has(s);

	const iconPaths = {	
    // Information icon
    note: [
      s('path', {
        d: 'M11 17H13V11H11V17ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z',
      })
    ],
    // Rocket icon
    tip: [
      s('path', {
        d: 'M12 22C11.5667 22 11.175 21.8958 10.825 21.6875C10.475 21.4792 10.2 21.2 10 20.85C9.45 20.85 8.97917 20.6542 8.5875 20.2625C8.19583 19.8708 8 19.4 8 18.85V15.3C7.01667 14.65 6.22917 13.7917 5.6375 12.725C5.04583 11.6583 4.75 10.5 4.75 9.25C4.75 7.23333 5.45417 5.52083 6.8625 4.1125C8.27083 2.70417 9.98333 2 12 2C14.0167 2 15.7292 2.70417 17.1375 4.1125C18.5458 5.52083 19.25 7.23333 19.25 9.25C19.25 10.5333 18.9542 11.7 18.3625 12.75C17.7708 13.8 16.9833 14.65 16 15.3V18.85C16 19.4 15.8042 19.8708 15.4125 20.2625C15.0208 20.6542 14.55 20.85 14 20.85C13.8 21.2 13.525 21.4792 13.175 21.6875C12.825 21.8958 12.4333 22 12 22ZM10 18.85H14V17.95H10V18.85ZM10 16.95H14V16H10V16.95ZM9.8 14H11.25H12.75H14.2C15.1 13.5667 15.8333 12.9292 16.4 12.0875C16.9667 11.2458 17.25 10.3 17.25 9.25C17.25 7.78333 16.7417 6.54167 15.725 5.525C14.7083 4.50833 13.4667 4 12 4C10.5333 4 9.29167 4.50833 8.275 5.525C7.25833 6.54167 6.75 7.78333 6.75 9.25C6.75 10.3 7.03333 11.2458 7.6 12.0875C8.16667 12.9292 8.9 13.5667 9.8 14Z',
      })
    ],
    // Warning triangle icon
    caution: [
      s('path', {
        d: 'M1 21L12 2L23 21H1ZM4.45 19H19.55L12 6L4.45 19ZM12 18C12.2833 18 12.5208 17.9042 12.7125 17.7125C12.9042 17.5208 13 17.2833 13 17C13 16.7167 12.9042 16.4792 12.7125 16.2875C12.5208 16.0958 12.2833 16 12 16C11.7167 16 11.4792 16.0958 11.2875 16.2875C11.0958 16.4792 11 16.7167 11 17C11 17.2833 11.0958 17.5208 11.2875 17.7125C11.4792 17.9042 11.7167 18 12 18ZM11 15H13V10H11V15Z',
      }),
    ],
    // Error shield icon
    danger: [
      s('path', {
        d: 'M8.25 21L3 15.75V8.25L8.25 3H15.75L21 8.25V15.75L15.75 21H8.25ZM9.15 16.25L12 13.4L14.85 16.25L16.25 14.85L13.4 12L16.25 9.15L14.85 7.75L12 10.6L9.15 7.75L7.75 9.15L10.6 12L7.75 14.85L9.15 16.25ZM9.1 19H14.9L19 14.9V9.1L14.9 5H9.1L5 9.1V14.9L9.1 19Z',
      })
    ],
    // Dos shield icon
    do: [
      s('path', {
        d: 'M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z',
      })
    ],
    // Donts shield icon
    dont: [
      s('path', {
        d: 'M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.9 20 13.7667 19.8542 14.6 19.5625C15.4333 19.2708 16.2 18.85 16.9 18.3L5.7 7.1C5.15 7.8 4.72917 8.56667 4.4375 9.4C4.14583 10.2333 4 11.1 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM18.3 16.9C18.85 16.2 19.2708 15.4333 19.5625 14.6C19.8542 13.7667 20 12.9 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.1 4 10.2333 4.14583 9.4 4.4375C8.56667 4.72917 7.8 5.15 7.1 5.7L18.3 16.9Z',
      })
    ]
  };

  const transformer = (tree) => {
    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined || node.type !== 'containerDirective') {
        return;
      }
      const variant = node.name;
      if (!isAsideVariant(variant)) return;

      // remark-directive converts a container’s “label” to a paragraph in
      // its children, but we want to pass it as the title prop to <Aside>, so
      // we iterate over the children, find a directive label, store it for the
      // title prop, and remove the paragraph from children.
      let title = Variant[`${variant}`];
      remove(node, (child) => {
        if (child.data && 'directiveLabel' in child.data && child.data.directiveLabel) {
          if (
            'children' in child &&
            Array.isArray(child.children) &&
            'value' in child.children[0]
          ) {
            title = child.children[0].value;
          }
          return true;
        }
      });

      const aside = h(
        'aside',
        {
          'aria-label': title,
          class: `starlight-aside starlight-aside--${variant}`,
        },
        [
          h('p', { class: 'starlight-aside__title', 'aria-hidden': 'true' }, [
            s(
              'svg',
              {
                viewBox: '0 0 24 24',
                width: 16,
                height: 16,
                fill: 'currentColor',
                class: 'starlight-aside__icon',
              },
              iconPaths[variant]
            ),
            { type: 'text', value: title },
          ]),
          h('section', { class: 'starlight-aside__content' }, node.children),
        ]
      );

      parent.children[index] = aside;
    });
  };

  return function attacher() {
    return transformer;
  };
}
