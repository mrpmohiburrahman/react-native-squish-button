# react-native-squish-button

Button with elastic border

## Demo

<img  alt="react-native-squish-button in action" src="https://github.com/mrpmohiburrahman/react-native-squish-button/blob/main/example/react-native-squish-button-demo.gif?raw=true" width="250" hight="800"/>  

## Installation

```sh
yarn add react-native-squish-button
```

or

```sh
npm install react-native-squish-button
```

### Dependencies

---
This library depends on [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/), [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/), [react-native-svg](https://github.com/software-mansion/react-native-svg).
Please, install these beforehand.

## Usage

```ts
import { SquishButton } from 'react-native-squish-button';

// ...

<SquishButton
    width={300}
    height={100}
    color="#4E5372"
    squish={7}
    radius={5}
    text="hello"
    textStyle={{
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 16,
    }}
/>
```

## Props

| Name |description| type |required |
|---------|---------|---------|---------|
| text  | Svg Text from react-native-svg   |string | Yes   |
| textStyle| color, fontFamily, fontWeight, fontSize for svg text |style Object | Yes   |
| squish  | Intensity of squish   |number | Yes   |
| height  | Height of button   |number | Yes   |
| width   | Width  of button   |number | Yes   |
| radius  | Radius of button   |number | Yes   |
| color   | Background color of the button | string | Yes   |
| spacing | ⚠️ This is only for internal calculation |number | No   |

## Contributing

Help me make this library great.

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## Social

<a href="https://twitter.com/mrp_mohibur" target="_blank">
    <img src="https://img.shields.io/twitter/follow/mrp_mohibur?label=Follow&style=social" alt="Twitter Follow" style="height: auto !important; width: 85px !important;" />
</a>
<a href="https://www.linkedin.com/in/mrpmohiburrahman/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" style="height: auto !important; width: 100px !important;" />
</a>
<a href="https://www.reddit.com/user/mrpm0h18urr4hm4n/" target="_blank">
    <img src="https://img.shields.io/reddit/user-karma/combined/mrpm0h18urr4hm4n?style=social" alt="Reddit User Karma" style="height: auto !important; width: 285px !important;" />
</a>
