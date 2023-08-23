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

const SquishButton = ({
  squish = 5,
  width = 100,
  height = 100,
  spacing: s = 20,
  radius = 5,
  color = 'gold',
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
  const fontSize = 16;
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
              fill="white"
              fontFamily="Helvetica"
              fontWeight="bold"
              fontSize={fontSize}
              textAnchor="middle"
              x={width / 2}
              y={height / 2}
              dy={fontSize * 0.25}
            >
              Button
            </SvgText>
          </Svg>
        </Animated.View>
      </LongPressGestureHandler>
    </GestureHandlerRootView>
  );
};

export default SquishButton;
