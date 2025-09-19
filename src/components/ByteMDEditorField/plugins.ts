import highlightssr from "@bytemd/plugin-highlight-ssr";
import highlight from "@bytemd/plugin-highlight";
import breaks from "@bytemd/plugin-breaks";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import gfm from "@bytemd/plugin-gfm";

export const plugins = [
    gfm(),
    highlightssr(),
    highlight(),
    breaks(),
    frontmatter(),
    gemoji(),
    mediumZoom(),
];