// setInterval is used so every 50 milliseconds, the code inside these brackets runs
// Docs: https://developer.mozilla.org/en-US/docs/Web/API/setInterval

setInterval(
    () => {
            // Now this code should run every 50 milliseconds! This is so there is no "flicker"
            // when messages are added by the software and removed by the extension

            // Docs: (for for( const node...) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
            // Docs: (for $(''))              https://api.jquery.com/attribute-equals-selector/
            // Docs: (for $('.chat_avatar...) https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors
            for (const node of $('.chat_avatar[data-rank="0"]') ) {
                // The line above says, basically "for every element that is a chat avatar with rank 0 (guest rank), do this"
                // Docs: https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode
                node.parentNode.remove();
                // And this is to delete the "parent node" (the container the element/avatar is in)

                // Docs: https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode
                // ^^^^ First example in docs is also documentation for parentNode.remove();

                // This removes the message instead of just the avatar. Unintended side-effects may
                // appear regarding the user list and DMs with guests, though.
            }
        }, 50)

// And of course we do this every 50 milliseconds