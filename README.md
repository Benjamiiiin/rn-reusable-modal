# rn-reusable-modal

A simple modal component for React Native which is rendered once at the top of your app, and can have its contents interchanged globally from any of your app's child components. Good for apps with lots of different modals!

The modal has a transparent backdrop, and its contents expand with a simple "grow" animation. Tapping the backdrop closes the modal; if the keyboard is up, the keyboard will be dismissed instead.

<!--img src="./assets/demo.gif" width='320'/-->

## How to Use

See the example app in `src/example` for correct usage of the modal. The component needs to be rendered near the root of your app, such that it can expand to the full size of the screen inside the view.


## Properties

### backdropOpacity (optional): number
Changes the opacity of the backdrop when the modal is visible.

### containerStyle (optional): ViewStyle
Style object to customise the container which holds your modal contents. The default style centers your modal contents in the middle of the screen.

### backdropStyle (optional): ViewStyle
Style object to customise the backdrop view itself.


## Future

I plan to add support for different layers of modals (e.g. when you want to bring a modal up on top of another modal), and to make sure everything is fine and dandy in terms of memory cleanup before I publish this as an npm package.

## About

Made by ***friggitydingo*** to support the development of **Astorum: ***Beyond the Sky*****, a mobile sci-fi MMO built with React Native.

[![Discord URL](https://img.shields.io/badge/-white?logo=discord&style=social&label=Join%20the%20Discord)](http://discord.gg/qRMMvxW3yc)

[![Twitter URL](https://img.shields.io/twitter/follow/BenScottSteer?style=social)](https://twitter.com/BenScottSteer)

[![YouTube URL](https://img.shields.io/youtube/channel/views/UCwppDiBFjGgwC7ycyEJuDeA?label=Watch%20on%20YouTube&style=social)](https://www.youtube.com/channel/UCwppDiBFjGgwC7ycyEJuDeA)

