import styled from "styled-components";

export const Dropdown = styled.div`
  padding-right: 10px;
  color: black;
  background-color: #1d2227;
`;
export const Profile = styled.div`
  display: flex;
  gap: 20px;
  text-align: center;
  border-bottom: 0.5px solid #999;
  padding: 10px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  width: 100%;
`;
export const DropdownMenu = styled.div`
  color: black;
  position: absolute;
  color: #333;
  border-radius: 5.5px;
  z-index: 1000;

  & ul {
    list-style-type: none;
    padding-left: 10px;
    width: 300px;
    padding-right: 10px;
  }
  & li {
    display: flex;
    cursor: pointer;
    margin-bottom: 10px;
    text-decoration: none;
    font-size: 15px;
    padding: 10px 5px;
  }
  & ul li:hover {
    background-color: #dcdcdc;
    border-radius: 1px solid #dcdcdc;
  }
`;
export const DropdownOrg = styled.div`
  display: block;

  & ul {
    list-style-type: none;
    border-bottom: 0.5px solid #0000001f;
    padding-right: 10px;
  }
`;

export const DropdownAcc = styled.div`
  display: block;
  & ul {
    list-style-type: none;
    border-bottom: 0.5px solid #0000001f;
    padding-right: 10px;
  }
`;

export const SignOut = styled.div`
  display: block;
  & ul {
    list-style-type: none;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
