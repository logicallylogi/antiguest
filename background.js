setInterval(() => {
    // We use setInterval to make the script that actually does everything run every 100ms
    // 100ms is 1/10th of a second, which has very little flicker.
    // Docs: https://developer.mozilla.org/en-US/docs/Web/API/setInterval

    for (const node of $('div[data-rank="0"]') ) {
        // The line above says, basically "for every element that is a chat avatar with rank 0 (guest rank), do this"
        // Docs: https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode

        if (node.parentNode.nodeName === "LI") {
            // We want to make sure the node is a "list item" that way only messages are deleted
            // Resource: https://stackoverflow.com/questions/254302/how-can-i-determine-the-type-of-an-html-element-in-javascript
            // Docs: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName

            node.parentNode.remove();
            // And this is to delete the "parent node" (the container the element/avatar is in)
            // Docs: https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode

            // ^^^^ First example in docs is also documentation for parentNode.remove();
            // This removes the message instead of just the avatar. Unintended side-effects may
            // appear regarding the user list and DMs with guests, though.
        }
    } 
}, 100);
// Here's where we actually define setInterval's 100ms