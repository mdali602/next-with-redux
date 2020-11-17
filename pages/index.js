import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/actions/weatherActionReducer";
import Card from "../components/Card";
import Container from "../components/Container";
import Description from "../components/Description";
import Grid from "../components/Grid";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function Home() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <Container>
      <Head>
        <title>Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Title>Cities Weather</Title>
        <Grid>
          {list?.map((city) => (
            <Card key={city.id}>
              <SubTitle>{city.name}</SubTitle>
              {Object.keys(city.main).map((key) => (
                <Description key={key}>
                  {key}: {city.main[key]}{" "}
                </Description>
              ))}
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
}
