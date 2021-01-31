import { useEffect } from 'react';
import styled from 'styled-components';
import { SVG } from '@svgdotjs/svg.js';

const Container = styled.div`
  position: fixed;
  left: 20px;
  width: 360px;
  height: 100%;

  &:after {
    position: absolute;
    top: 400px;
    left: 0;
    content: "";
    width: 100%;
    height: calc(100% - 400px);
    background-color: #fff;
  }
`;

function Logo() {
  useEffect(() => {
    const draw = SVG().addTo('#logo').size('100%', '100%');
    const rect = draw.rect(360, 400).fill('white');
    const background = draw.rect(360, 400).fill('white');

    const group = draw.group().transform({
      translate: [40, 120],
      scale: [0.046, -0.046],
    });
    group.path('M30 905 l0 -75 100 0 100 0 0 -400 0 -400 75 0 75 0 2 398 3 397 93 3 92 3 0 74 0 75 -270 0 -270 0 0 -75z');
    group.path('M680 907 c0 -75 0 -77 28 -82 131 -28 189 -156 119 -263 -35 -52 -88 -72 -190 -72 -66 0 -89 -3 -93 -14 -3 -8 59 -108 142 -230 l148 -216 83 0 c46 0 83 3 83 6 0 3 -47 75 -104 159 l-104 154 52 30 c62 34 111 88 139 150 31 67 30 188 -2 258 -42 95 -150 175 -255 189 l-46 7 0 -76z');

    const text = draw.text(add => {
      add.tspan("OGER'S").newLine().attr({dx: 90, y: 40});
      add.tspan('LIFE').newLine().attr({dx: 47, y: 100});
    });
    text.font({
      size: 60,
      weight: 500,
    });

    const mask = draw.mask().add(background).add(group).add(text);
    rect.maskWith(mask);
  });

  return (
    <Container id="logo" />
  );
}

export default Logo;
