import styled from "styled-components";

export const SpanEspecializacion = styled.span`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.54);
  z-index: 1;
  color: #fff;
  font-weight: 900;
  display: inline-block;
  font-size: 13px;
  padding: 5px 10px;
  left: 5px;
  top: 5px;
  border-radius: 3px;
`;
export const SpanEstado = styled.span`
  position: absolute;
  background-color: ${(props) => (props.estado ? "#ce2d4f" : "rgba(0, 0, 0, 0.54)")};
  z-index: 1;
  color: #fff;
  font-weight: 900;
  display: inline-block;
  font-size: 13px;
  padding: 5px 10px;
  right: 5px;
  top: 5px;
  border-radius: 3px;
`;
