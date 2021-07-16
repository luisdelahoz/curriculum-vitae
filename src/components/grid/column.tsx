import styled from 'styled-components';

const Column = styled.div<{
  mobile: number;
  small?: number;
  medium?: number;
  large?: number;
  extralarge?: number;
}>`
  /* 320px — 480px: Mobile devices */
  width: ${(props) => `calc(100% / 12 * ${props.mobile})`};

  /* 481px — 768px: iPads, Tablets */
  @media (min-width: 481px) and (max-width: 768px) {
    width: ${(props) => `calc(100% / 12 * ${props.small || props.mobile})`};
  }

  /* 769px — 1024px: Small screens, laptops */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: ${(props) =>
      `calc(100% / 12 * ${props.medium || props.small || props.mobile})`};
  }

  /* 1025px — 1200px: Desktops, large screens */
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: ${(props) =>
      `calc(100% / 12 * ${
        props.large || props.medium || props.small || props.mobile
      })`};
  }

  /* 1201px and more —  Extra large screens, TV */
  @media (min-width: 1201px) {
    width: ${(props) =>
      `calc(100% / 12 * ${
        props.extralarge ||
        props.large ||
        props.medium ||
        props.small ||
        props.mobile
      })`};
  }
`;

export default Column;
