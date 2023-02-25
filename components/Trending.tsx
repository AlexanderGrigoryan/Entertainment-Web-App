import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import useData from "@/hooks/useData";
import TrendingApi from "../data.json";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Trending() {
  const { data, setData } = useData();

  useEffect(() => {
    setData(TrendingApi);
  }, [data]);

  const mediaQueryType: "min" | "max" | undefined = "min";

  const options = {
    autoplay: true,
    interval: 2000,
    fixedWidth: 370,
    rewind: true,
    gap: -116,
    pagination: false,
    arrows: false,
    mediaQuery: mediaQueryType,
    breakpoints: {
      768: {
        fixedWidth: 470,
        gap: 40,
      },
    },
  };

  return (
    <Container>
      <Title>Trending</Title>
      <Splide
        options={options}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <CustomSplideTrack>
          {data
            .filter((trend) => trend.isTrending === true)
            .map((item, index) => {
              return (
                <SplideSlide>
                  <TrendingItem
                    key={index}
                    image={
                      item.thumbnail.trending?.small ||
                      item.thumbnail.regular.small
                    }
                  >
                    <BookmarkCircle
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
                        <Image
                          width={11.67}
                          height={14}
                          src="/assets/icon-bookmark-full.svg"
                          alt="empty bookmark"
                        />
                      ) : (
                        <Image
                          width={11.67}
                          height={14}
                          src="/assets/icon-bookmark-empty.svg"
                          alt="empty bookmark"
                        />
                      )}
                    </BookmarkCircle>
                    <PlayButton>
                      <Image
                        width={30}
                        height={30}
                        src="/assets/icon-play.svg"
                        alt="play icon"
                      />
                      <PlayButtonText>Play</PlayButtonText>
                    </PlayButton>
                    <Details>
                      <Information>
                        <Text>{item.year}</Text>
                        <Circle></Circle>
                        <Info>
                          {item.category === "Movie" ? (
                            <CategoryImage
                              width={10}
                              height={10}
                              src="/assets/icon-category-movie.svg"
                              alt="movies"
                            />
                          ) : (
                            <CategoryImage
                              width={10}
                              height={10}
                              src="/assets/icon-category-tv.svg"
                              alt="tv series"
                            />
                          )}
                          <Text>{item.category}</Text>
                        </Info>
                        <Circle></Circle>
                        <Text>{item.rating}</Text>
                      </Information>
                      <Name>{item.title}</Name>
                    </Details>
                  </TrendingItem>
                </SplideSlide>
              );
            })}
        </CustomSplideTrack>
      </Splide>
    </Container>
  );
}

export default Trending;

const Container = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: -0.3125px;
  margin-bottom: 16px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
    margin-bottom: 25px;
  }
`;

const TrendingItem = styled.div(
  (props: { image: string | undefined }) => css`
    max-width: 240px;
    height: 140px;
    border-radius: 8px;
    padding: 8px 8px 16px 16px;
    background: white;
    display: flex;
    flex-direction: column;
    background: url(${props.image});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${props.image});
      background-repeat: no-repeat;
      background-size: cover;
    }

    @media screen and (min-width: 768px) {
      max-width: 470px;
      height: 230px;
      padding: 16px 24px 24px 24px;

      &:hover ${PlayButton} {
        display: flex;
      }
    }
  `
);

const BookmarkCircle = styled.button`
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
  transform: translate(0, 20px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
`;

const PlayButtonText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  color: #ffffff;
`;

const Details = styled.div`
  padding-top: 45px;

  @media screen and (min-width: 768px) {
    padding-top: 106px;
  }
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  height: 14px;

  @media screen and (min-width: 768px) {
    height: 16px;
  }
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

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
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
  align-self: center;
`;

const Name = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  margin-top: 5px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const CustomSplideTrack = styled(SplideTrack)`
  width: 100%;
`;
