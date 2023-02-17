import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import BookmarkEmpty from "../assets/images/icon-bookmark-empty.svg";
import BookmarkFull from "../assets/images/icon-bookmark-full.svg";
import MoviesIcon from "../assets/images/icon-category-movie.svg";
import MovieApi from "../data.json";
import useData from "@/hooks/useData";
import Search from "@/components/Search";
import useSearchShow from "@/hooks/useSearchShow";
import PlayIcon from "../assets/images/icon-play.svg";

function Movies() {
  const { data, setData } = useData();
  const { searchShow, setSearchShow } = useSearchShow();

  useEffect(() => {
    setData(MovieApi);
  }, [data]);

  const searchMovies: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchShow(event.target.value);
  };

  const filteredMovies =
    searchShow.trim().length > 0
      ? data.filter((element) =>
          element.title.toLowerCase().includes(searchShow.toLowerCase())
        )
      : data;

  return (
    <Container>
      <Search onChange={searchMovies} placeholder="Search for movies" />
      <Title>Movies</Title>
      <Content>
        {filteredMovies
          .filter((category) => category.category === "Movie")
          .map((item, index) => {
            return (
              <>
                <ContentBox key={index}>
                  <TrendingItem
                    image={item.thumbnail.regular.small}
                    mediumImage={item.thumbnail.regular.medium}
                    largeImage={item.thumbnail.regular.large}
                  >
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
                    <PlayButton>
                      <Image src={PlayIcon} alt="play icon" />
                      <PlayButtonText>Play</PlayButtonText>
                    </PlayButton>
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

const Container = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 1024px) {
    margin-left: 36px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    column-gap: 30px;
    row-gap: 24px;
  }

  @media screen and (min-width: 1024px) {
    column-gap: 40px;
    row-gap: 32px;
  }
`;

const ContentBox = styled.div``;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: -0.3125px;
  margin-bottom: 24px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
`;

interface TrendingItemProps {
  image: string;
  mediumImage: string;
  largeImage: string;
}

const TrendingItem = styled.div(
  (props: TrendingItemProps) => css`
    width: 164px;
    height: 110px;
    border-radius: 8px;
    padding: 8px 8px 0 0;
    background: white;
    display: flex;
    flex-direction: column;
    background: url(${props.image});
    background-size: cover;

    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${props.image});
      background-size: cover;
    }

    @media screen and (min-width: 768px) {
      width: 220px;
      height: 140px;
      padding: 16px 16px 0 0;
      background: url(${props.mediumImage});
      background-size: cover;

      &:hover {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url(${props.mediumImage});
        background-size: cover;
      }
    }

    @media screen and (min-width: 1024px) {
      width: 280px;
      height: 174px;
      padding: 16px 16px 0 0;

      &:hover {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url(${props.largeImage});
        background-size: cover;
      }

      &:hover ${PlayButton} {
        display: flex;
      }
    }
  `
);

const PlayButton = styled.button`
  width: 117px;
  height: 48px;
  border-radius: 28.5px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  display: none;
  justify-content: left;
  align-items: center;
  column-gap: 19px;
  padding-left: 9px;
  align-self: center;
  margin-top: 15px;
  cursor: pointer;
  transition: all ease 0.5s;
`;

const PlayButtonText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  color: #ffffff;
`;

const BookmarkButton = styled.button`
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
  font-size: 11px;
  font-weight: 300;
  line-height: 13.86px;
  color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

const Circle = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
`;

const CategoryImage = styled(Image)`
  width: 10px;
  height: 10px;

  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 17.64px;
  margin-top: 5px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;
