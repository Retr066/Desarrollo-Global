import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ConteinerFooter = styled.div`
  margin-top: 10px;
`;

export const Footer = () => {
  return (
    <ConteinerFooter>
      Footer {"  "}
      <Link to="legal">ir Legal</Link>
    </ConteinerFooter>
  );
};
