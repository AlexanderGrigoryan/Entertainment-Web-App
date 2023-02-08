import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import BookmarkEmpty from "../assets/images/icon-bookmark-empty.svg";
import Movies from "../assets/images/icon-category-movie.svg";
import data from "../data.json";

function Trending() {
  return (
    <Container>
      <Title>Trending</Title>
      <SliderBox>
        {data
          .filter((trend) => trend.isTrending === true)
          .map((item, index) => {
            return (
              <TrendingItem key={index} image={item.thumbnail.trending?.small}>
                <BookmarkCircle>
                  <Image src={BookmarkEmpty} alt="empty bookmark" />
                </BookmarkCircle>
                <Details>
                  <Information>
                    <Text>{item.year}</Text>
                    <Circle></Circle>
                    <Info>
                      <CategoryImage src={Movies} alt="movies" />
                      <Text>{item.category}</Text>
                    </Info>
                    <Circle></Circle>
                    <Text>{item.rating}</Text>
                  </Information>
                  <Name>{item.title}</Name>
                </Details>
              </TrendingItem>
            );
          })}
      </SliderBox>
    </Container>
  );
}

export default Trending;

const Container = styled.div``;

const SliderBox = styled.div`
  display: flex;
  column-gap: 16px;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: -0.3125px;
  margin-bottom: 16px;
  color: #ffffff;
`;

const TrendingItem = styled.div(
  (props: { image: string | undefined }) => css`
    width: 240px;
    height: 140px;
    border-radius: 8px;
    padding: 8px 8px 16px 16px;
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
  padding-top: 45px;
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
