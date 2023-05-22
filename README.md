# Minimal Reproducible Example of react-native-web Animated transform error

## Why

A regression from react-native-web 0.19 where passing `undefined` to Animated.View style, there will be a runtime error:

```
AnimatedTransform.js:62 Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')
    at AnimatedTransform.__attach (AnimatedTransform.js:62:1)
    at AnimatedTransform.__addChild (AnimatedWithChildren.js:34:1)
    at AnimatedStyle.__attach (AnimatedStyle.js:86:1)
    at AnimatedStyle.__addChild (AnimatedWithChildren.js:34:1)
    at AnimatedProps.__attach (AnimatedProps.js:63:1)
    at new AnimatedProps (AnimatedProps.js:29:1)
    at useAnimatedProps.js:29:1
    at mountMemo (react-dom.development.js:17225:1)
    at Object.useMemo (react-dom.development.js:17670:1)
    at useMemo (react.development.js:1650:1)
```

## How

This project is created by `create-react-app` and just adding `react-native`/`react-native-web` and a [minimal App.js example](https://github.com/Kudo/repro-rn-web-animated-transform/blob/main/src/App.js#L6).

Steps to run the example:

```sh
$ git clone https://github.com/Kudo/repro-rn-web-animated-transform.git
$ cd repro-rn-web-animated-transform
$ npm i
$ npm start

# Open DevTools and see the error
```

Trying to downgrade to `react-native-web@~0.18.12`, the error is then dismissed. So the problem should be a regression from react-native-web 0.19.
