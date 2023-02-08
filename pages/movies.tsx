import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import BookmarkEmpty from "../assets/images/icon-bookmark-empty.svg";
import MoviesIcon from "../assets/images/icon-category-movie.svg";
import data from "../data.json";

function Movies() {
  return (
    <Container>
      <Title>Movies</Title>
      <Content>
        {data
          .filter((category) => category.category === "Movie")
          .map((item) => {
            return (
              <>
                <ContentBox>
                  <TrendingItem image={item.thumbnail.regular.small}>
                    <BookmarkCircle>
                      <Image src={BookmarkEmpty} alt="empty bookmark" />
                    </BookmarkCircle>
                  </TrendingItem>
                  <Details>
                    <Information>
                      <Text>{item.year}</Text>
                      <Circle></Circle>
                      <Info>
                        <CategoryImage src={MoviesIcon} alt="movies" />
                        <Text>{item.category}</Text>
                      </Info>
                      <Circle></Circle>
                      <Text>{item.rating}</Text>
                    </Information>
                    <Name>{item.title}</Name>
                  </Details>
                </ContentBox>
              </>
            );
          })}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 16px;
`;

const ContentBox = styled.div``;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: -0.3125px;
  margin-bottom: 24px;
  color: #ffffff;
`;

const TrendingItem = styled.div(
  (props: { image: string }) => css`
    width: 164px;
    height: 110px;
    border-radius: 8px;
    padding: 8px 8px 0 0;
    background: white;
    display: flex;
    flex-direction: column;
    background: url(${props.image});
  `
);

const BookmarkCircle = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: rgba(16, 20, 30, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`;

const Details = styled.div`
  margin-top: 8px;
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const Info = styled.div`
  display: flex;
  column-gap: 6px;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.5);
`;

const Circle = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
`;

const CategoryImage = styled(Image)`
  width: 12px;
  height: 12px;
`;

const Name = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  margin-top: 5px;
  color: #ffffff;
`;