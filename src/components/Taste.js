import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 35em;
  height: 35em;
  background-color: hsla(360, 0%, 50%, 0.5);
  border-radius: 50%; 
`;

export default function Tastes() {
  return (
    <Wrapper>
      <Circle>
      </Circle>
    </Wrapper>
  );
}