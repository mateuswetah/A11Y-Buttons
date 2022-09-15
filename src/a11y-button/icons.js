const { SVG, Path } = wp.components;

export const toggleHighContrastIcon =
    <SVG xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" width="1em" viewBox="0 0 24 24">
        <Path d="m0 12c0 6.6274 5.3726 12 12 12 6.6274 0 12-5.3726 12-12 0-6.6274-5.3726-12-12-12-6.6274 0-12 5.3726-12 12zm12 8.9032v-17.806c4.9212 0 8.9032 3.9828 8.9032 8.9032 0 4.9212-3.9828 8.9032-8.9032 8.9032z" stroke-width="2.1429"/>
    </SVG>;

export const decreaseFontSizeIcon = 
    <SVG xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.25em" width="1.25em" viewBox="0 0 24 24">
        <Path d="m3.0061 18.634h-3.0061l4.5804-13.268h3.6151l4.5739 13.268h-3.0061l-3.3235-10.236h-0.10367zm-0.18788-5.2153h7.1006v2.1898h-7.1006zm12.008-0.23323v-2.3193h9.1737v2.3193z" stroke-width="1.5203"/>
    </SVG>

export const increaseFontSizeIcon = 
    <SVG xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.25em" width="1.25em" viewBox="0 0 24 24">
        <Path d="m3.0061 18.634h-3.0061l4.5804-13.268h3.6151l4.5739 13.268h-3.0061l-3.3235-10.236h-0.10367zm-0.18788-5.2153h7.1006v2.1898h-7.1006zm15.435 3.194v-9.1737h2.3194v9.1737zm-3.4272-3.4272v-2.3193h9.1737v2.3193z" stroke-width="1.5203"/>
    </SVG>

export const resetFontSizeIcon = 
    <SVG xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.25em" width="1.25em" viewBox="0 0 24 24">
        <Path d="m8.6214 18.634h-3.0061l4.5804-13.268h3.6151l4.5739 13.268h-3.0061l-3.3235-10.236h-0.10367zm-0.18788-5.2153h7.1006v2.1898h-7.1006z" stroke-width="1.5203"/>
    </SVG>

export const skipToContentIcon = 
    <SVG xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.25em" width="1.25em" viewBox="0 0 24 24">
        <Path d="M0 0h24v24H0z" fill="none"/>
        <Path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"/>
    </SVG>

export default { increaseFontSizeIcon, decreaseFontSizeIcon, resetFontSizeIcon, toggleHighContrastIcon, skipToContentIcon };