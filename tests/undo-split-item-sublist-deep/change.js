// const expect = require('expect');

export default function(plugin, change) {
    const { value } = change;
    const node = value.document.getDescendant("_selection_key");

    change
        .moveToStartOfNode(node).moveForward(2)
        .call(plugin.changes.splitListItem)
        .undo();

    // TODO fix undo, and test selection
    // Back to previous cursor position
    // expect(value.startBlock.text).toEqual(initialText);
    // expect(value.selection.toJS()).toEqual(initialSelection.toJS());

    return change;
}
