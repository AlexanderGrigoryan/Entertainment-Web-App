import React from "react";
import styled from "styled-components";
import SearchIcon from "../assets/images/icon-search.svg";
import Image from "next/image";

interface SearchProps {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Search({ placeholder, onChange }: SearchProps) {
  return (
    <Container>
      <Form>
        <Button>
          <SearchImage src={SearchIcon} alt="search icon" />
        </Button>
        <Input onChange={onChange} type="search" placeholder={placeholder} />
      </Form>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  margin: 24px 0;
`;

const Form = styled.form`
  display: flex;
  column-gap: 16px;
  align-items: center;
  width: 100%;
  height: 24px;

  @media screen and (min-width: 768px) {
    height: 30px;
    column-gap: 28px;
  }
`;

const Button = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
`;

const SearchImage = styled(Image)`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  color: #ffffff;
  background: rgba(16, 20, 30, 1);
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Outfit", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 30px;

    &::placeholder {
      font-size: 24px;
      line-height: 30px;
    }
  }
`;
