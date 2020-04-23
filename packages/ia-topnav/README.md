# \<ia-topnav>

The top navigation menu for archive.org

## Installation

```bash
yarn add @internetarchive/ia-topnav
```

## Usage

```js
// ia-top-nav.js
import IATopNav from '@internetarchive/ia-topnav';
export default IATopNav;
```

```html
<!-- index.html -->
<script type="module">
  import './ia-topnav.js';
</script>

<style>
  /* Defaults */
  ia-topnav {
    --white: #fff;
    --grey13: #222;
    --grey20: #333;
    --grey28: #474747;
    --grey60: #999;
    --grey80: #ccc;

    --linkColor: #428bca;
    --linkHoverColor: var(--white);
    --subnavLinkColor: #aaa;
    --primaryTextColor: var(--white);
    --inverseTextColor: var(--grey20);
    --lightTextColor: var(--grey60);
    --activeColor: var(--white);
    --activeButtonBg: var(--grey20);
    --iconFill: var(--grey60);

    --searchActiveBg: var(--grey20);
    --searchActiveInputBg: var(--white);
    --searchMenuBg: var(--grey20);
    --desktopSearchIconFill: var(--grey20);

    --mediaMenuBg: var(--grey13);
    --mediaLabelDesktopColor: var(--grey60);
    --activeDesktopMenuIcon: var(--grey28);

    --mediaSliderBg: var(--grey20);
    --mediaSliderDesktopBg: var(--grey28);

    --primaryNavBg: var(--grey13);
    --primaryNavBottomBorder: var(--grey20);

    --desktopSubnavBg: var(--grey20);

    --dropdownMenuBg: var(--grey20);

    --loginTextColor: var(--grey60);

    --themeFontFamily: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --logoWidthTablet: 263px;
  }
</style>

<ia-topnav></ia-topnav>
```

Config object:

```js
{
  baseUrl: "archive.org", // domain used to build most links
  waybackUrl: "web.archive.org", // domain used for Wayback search
  screenName: "really_long_screen_name_that_may_be_truncated_on_mobile", // full screen name displayed in user menu
  username: "shaneriley", // short user name used for desktop nav and some link building
  eventCategory: "MobileTopNav" // Google Analytics event category
}
```

# Development

## Prerequisite

```bash
yarn install
```

## Start Development Server

```bash
yarn start  // start development server and typescript compiler
```

## Testing

```bash
yarn test
```

## Testing via browserstack

```bash
yarn test:bs
```

## Demoing using storybook

```bash
yarn storybook
```

## Linting

```bash
yarn lint
```