import React from 'react';
import styled from 'styled-components';
import { columnsWidthBreakpoint, contentMaxWidth } from './shared/breakpoints';
import { ExternalLink } from './shared/ExternalLink';
import { getSlideInStyle, slideInTransition } from './shared/slideIn';
import { NoWrap } from './shared/styledPrimitives';
import { useViewportEnter } from './shared/useViewportEnter';

export function Hero() {
  const [ref, entered] = useViewportEnter(0.66);
  return (
    <Container>
      <TextContainer ref={ref}>
        <Title style={getSlideInStyle(entered, 0)}>
          Don&apos;t settle for localhost:3000
        </Title>
        <Subtitle style={getSlideInStyle(entered, 1)}>
          Expect more from your <NoWrap>dev environment</NoWrap>
        </Subtitle>
        <Links style={getSlideInStyle(entered, 2)}>
          <Link href="https://cosmos.flatris.space">
            <span>Live demo</span>
            <Chevron />
          </Link>
          <Link href="https://twitter.com/ReactCosmos/status/1189127279533793281">
            <span>React Cosmos 5 in 21 tweets</span>
            <Chevron />
          </Link>
        </Links>
      </TextContainer>
      <PreviewContainer style={getSlideInStyle(entered, 3)}>
        <ExternalLink href="https://cosmos.flatris.space">
          <Preview src="/screenshot.png" alt="React Cosmos in action" />
        </ExternalLink>
      </PreviewContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 40vh 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TextContainer = styled.div`
  padding: 0 16px;
`;

const Title = styled.div`
  padding: 0 0 12px 0;
  font-size: 48px;
  line-height: 50px;
  font-weight: 600;
  letter-spacing: -0.03em;
  transition: ${slideInTransition};

  @media (max-width: ${columnsWidthBreakpoint}px) {
    font-size: 40px;
    line-height: 42px;
  }
`;

const Subtitle = styled.div`
  color: #566d7e;
  font-size: 32px;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: -0.02em;
  transition: ${slideInTransition};

  @media (max-width: ${columnsWidthBreakpoint}px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 48px 0 0 0;
  font-size: 24px;
  line-height: 24px;
  transition: ${slideInTransition};

  @media (max-width: ${columnsWidthBreakpoint}px) {
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
  }
`;

const Link = styled(ExternalLink)`
  margin: 16px 12px 0 12px;
  color: #078383;
  font-weight: 400;
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${columnsWidthBreakpoint}px) {
    font-weight: 500;
  }
`;

const Chevron = () => {
  return (
    <StyledChevron
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </StyledChevron>
  );
};

const StyledChevron = styled.svg`
  width: 24px;
  height: 24px;
  margin: 0 0 0 0px;
  transform: translate(0, 2.5px);

  @media (max-width: ${columnsWidthBreakpoint}px) {
    width: 20px;
    height: 20px;
    transform: translate(0, 1.5px);
  }
`;

const PreviewContainer = styled.div`
  margin: 10vh 0 0 0;
  max-width: ${contentMaxWidth}px;
  transition: ${slideInTransition};
`;

const Preview = styled.img`
  display: block;
  width: 100%;
`;
