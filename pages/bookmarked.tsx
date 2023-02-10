import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import BookmarkEmpty from "../assets/images/icon-bookmark-empty.svg";
import BookmarkFull from "../assets/images/icon-bookmark-full.svg";
import MoviesIcon from "../assets/images/icon-category-movie.svg";
import BookmarkedApi from "../data.json";
import useData from "@/hooks/useData";

function Bookmarked() {
  const { data, setData } = useData();

  useEffect(() => {
    setData(BookmarkedApi);
  }, [data]);

  return (
    <Container>
      <Movies>
        <Title>Bookmarked Movies</Title>
        {data
          .filter(
            (category) => category.category === "Movie" && category.isBookmarked
          )
          .map((item, index) => {
            return (
              <>
                <BookmarkedMovies key={index}>
                  <TrendingItem image={item.thumbnail.regular.small}>
                    <BookmarkButton
                      onClick={() => {
                        const bookmarkedData = [...data];
                        const dataIndex = bookmarkedData.findIndex(
                          (element) => element.title === item.title
                        );
                        if (bookmarkedData[dataIndex].isBookmarked) {
                          bookmarkedData[dataIndex].isBookmarked = false;
                        } else {
                          bookmarkedData[dataIndex].isBookmarked = true;
                        }
                        setData(bookmarkedData);
                      }}
                    >
                      {item.isBookmarked ? (
                        <Image src={BookmarkFull} alt="empty bookmark" />
                      ) : (
                        <Image src={BookmarkEmpty} alt="empty bookmark" />
                      )}
                    </BookmarkButton>
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
                </BookmarkedMovies>
              </>
            );
          })}
      </Movies>

      <TvSeries>
        <Title>Bookmarked Tv Series</Title>
        {data
          .filter(
            (category) =>
              category.category === "TV Series" && category.isBookmarked
          )
          .map((item, index) => {
            return (
              <>
                <BookmarkedTv key={index}>
                  <TrendingItem image={item.thumbnail.regular.small}>
                    <BookmarkButton>
                      {item.isBookmarked ? (
                        <Image src={BookmarkFull} alt="empty bookmark" />
                      ) : (
                        <Image src={BookmarkEmpty} alt="empty bookmark" />
                      )}
                    </BookmarkButton>
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
                </BookmarkedTv>
              </>
            );
          })}
      </TvSeries>
    </Container>
  );
}

export default Bookmarked;

const Container = styled.div`
  margin-bottom: 40px;
`;

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 16px;
`;

const TvSeries = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 16px;
  margin-top: 24px;
`;

const BookmarkedMovies = styled.div``;

const BookmarkedTv = styled.div`
  margin-top: 24px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: -0.3125px;
  /* margin-bottom: 24px; */
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

const BookmarkButton = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: rgba(16, 20, 30, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  border: none;
  cursor: pointer;
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
