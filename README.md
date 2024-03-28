# Codychat Antiguest
## What is this?
This is a Chrome extension (that should be compatible with Firefox, afaik) that is designed to remove guest messages on
Codychat-powered websites. To ease the process of approval, the extension only works on Teen-chat.org, Kidschat.net, Chat-avenue.com, and 321chat.com.
If you have a site you want supported, it's just a matter of adding a URL like in the manifest.json to the manifest.json.

## Explainers
- `manifest.json` is the Chrome v3 manifest file for this plugin. 
- To learn more about the manifest, [the migration docs](https://developer.chrome.com/docs/extensions/develop/migrate) and the [docs](https://developer.chrome.com/docs/extensions/reference/manifest)
- For the purposes of this plugin, all you need to know is to make the plugin work on other sites it's matter of adding a `, "*://(your site name)/*` to `matches:` in `manifest.json` - be sure to keep the `"` where they are right now, and to not add extra commas at the end - and you should be good!
- The code itself is pretty simple, it's in background.js and it runs on only the sites specified in the `matches` part of `manifest.json` - it has comments all over it to help you know what it's doing in plain English
- If you do not trust my explainers, there are documentation links to show each portion's documentation, however that isn't simple English mostly.
- Excellent resources for learning technologies like used here are Mozilla Developer Network and the Chrome Docs, both linked here

## Learn More
- [Chrome Manifest Documentation](https://developer.chrome.com/docs/extensions/reference/manifest)
- [Javascript References](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS References](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [jQuery Reference](https://api.jquery.com)
- Note: Some say jQuery is 'dead' and not worth knowing - however Codychat uses it extensively, and many other sites do as well.
- You probably should rely on something like alpine.js or htmx for new projects, but jQuery is still worth knowing how to use a little!