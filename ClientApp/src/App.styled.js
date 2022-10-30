import styled from "styled-components";

export default styled.div`
  height: calc(100% - 64px);
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    /* chrome based */
    width: 0px; /* ширина scrollbar'a */
    background: transparent; /* опционально */
  }
`;
