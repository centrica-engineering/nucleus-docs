import nsCEJsDoc from "@connectedhomes/nucleus/ce-doc.json";
import nsCustomElements from "@connectedhomes/nucleus/custom-elements.json";
import sfCEJsDoc from "@connectedhomes/nucleus-snowflakes/ce-doc.json";
import sfCustomElements from "@connectedhomes/nucleus-snowflakes/custom-elements.json";

sfCEJsDoc.forEach((tag) => {
  if (!tag.category) {
    tag.category = tag.category ?? "Snowflakes";
  }
});

const customElements = {
  tags: [
    ...nsCustomElements.tags,
    ...sfCustomElements.tags,
  ]
};

const ceJsDoc = [
  ...nsCEJsDoc,
  ...sfCEJsDoc,
];

export { customElements, ceJsDoc };
