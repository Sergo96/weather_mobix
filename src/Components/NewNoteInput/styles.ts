import styled from "styled-components";


// interface INewNoteInputType {
//     orange: {
//         default: string
//         hover: string
//     };
//     pink:{
//         default: string
//         hover: string
//     }
// }

const theme: any = {
    orange: {
        default: "#d88423",
        hover: "#937628"
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457"
    }
};


export const ButtonSearch = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

ButtonSearch.defaultProps = {
    theme: "orange"
};