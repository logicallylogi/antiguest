// We use this jQuery Listener right here to listen to when every AJAX call is completed
// AJAX is the type of request made to update the chat's live feed, so we know every time AJAX completes,
// the messages in chat are probably updated and need removal if they are guest-posted
// Docs: https://api.jquery.com/ajaxcomplete/
$(document).on( "ajaxComplete", function() {
            // This is much lighter on resources and completely removes any "flicker" that might've been seen
            // with the last revision

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
        });