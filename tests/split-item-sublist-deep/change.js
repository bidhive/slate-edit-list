import expect from "expect";

export default function(plugin, change) {
  const { value } = change;
  const selectedBlock = value.document.getDescendant("_selection_key");

  change.moveToStartOfNode(selectedBlock).moveForward(2); // It|em 1

  plugin.changes.splitListItem(change);

  // check new selection
  const selectedNode = change.value.document.getTexts().get(2);
  expect(change.value.selection.anchor.key).toEqual(selectedNode.key);
  expect(change.value.selection.focus.key).toEqual(selectedNode.key);
  expect(change.value.selection.anchor.offset).toEqual(0);
  expect(change.value.selection.focus.offset).toEqual(0);

  return change;
}
