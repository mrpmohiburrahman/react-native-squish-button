// Inspiration: https://dribbble.com/shots/11522189-Button-squish-animation
import * as React from 'react';
import {
  GestureHandlerRootView,
  LongPressGestureHandler,
  type LongPressGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Svg, { Path, Text as SvgText } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);
export type SquishButtonProps = {
  squish?: number;
  width?: number;
  height?: number;
  spacing?: number;
  radius?: number;
  color?: string;
  text?: string;
  textStyle?: {
    color?: string;
    fontFamily?: string;
    fontWeight?:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900';
    fontSize?: number;
  };
};

export const SquishButton: React.FC<SquishButtonProps> = ({
  squish = 5,
  width = 100,
  height = 100,
  spacing: s = 20,
  radius = 5,
  color = 'gold',
  text = `hello world`,
  textStyle = {
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 16,
  },
}) => {
  const squishOffset = useSharedValue(0);
  const gestureHandler =
    useAnimatedGestureHandler<LongPressGestureHandlerGestureEvent>({
      onStart: () => (squishOffset.value = withSpring(squish)),
      onFinish: () => (squishOffset.value = withSpring(0)),
    });

  const bottom = useDerivedValue(() => {
    return `Q${width / 2},${height - s - squishOffset.value} ${
      width - s - radius
    },${height - s}`;
  });
  const top = useDerivedValue(() => {
    return `Q${width / 2},${s + squishOffset.value} ${s + radius},${s}`;
  });
  const right = useDerivedValue(() => {
    return `Q${width - s - squishOffset.value},${height / 2} ${width - s},${
      s + radius
    }`;
  });
  const left = useDerivedValue(() => {
    return `Q${s + squishOffset.value},${height / 2} ${s},${
      height - s - radius
    }`;
  });

  const path = useAnimatedProps(() => {
    const d = `
    M${s + radius},${height - s}
    ${bottom.value}
    Q${width - s},${height - s} ${width - s},${height - s - radius}
    ${right.value}
    Q${width - s},${s} ${width - s - radius},${s}
    ${top.value}
    Q${s},${s} ${s},${s + radius}
    ${left.value}
    Q${s},${height - s} ${s + radius},${height - s}
  `;
    return { d };
  });

  return (
    <GestureHandlerRootView>
      <LongPressGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View>
          <Svg
            viewBox={`0 0 ${width} ${height}`}
            width={width + s}
            height={height + s}
          >
            <AnimatedPath animatedProps={path} fill={color} fillOpacity="1" />
            <SvgText
              fill={textStyle.color}
              fontFamily={textStyle.fontFamily}
              fontWeight={textStyle.fontWeight}
              fontSize={textStyle.fontSize}
              textAnchor="middle"
              x={width / 2}
              y={height / 2}
              dy={(textStyle.fontSize ? textStyle.fontSize : 16) * 0.25}
            >
              {text}
            </SvgText>
          </Svg>
        </Animated.View>
      </LongPressGestureHandler>
    </GestureHandlerRootView>
  );
};
