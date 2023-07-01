import { Heading, VStack, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";

type PlanetData = {
  planet: string;
  earthYearsPerYear: number;
};

const PLANET_DATA = [
  { planet: "Mercury", earthYearsPerYear: 0.24 },
  { planet: "Venus", earthYearsPerYear: 0.62 },
  { planet: "Earth", earthYearsPerYear: 1 },
  { planet: "Mars", earthYearsPerYear: 1.88 },
  { planet: "Jupiter", earthYearsPerYear: 11.86 },
  { planet: "Saturn", earthYearsPerYear: 29.46 },
  { planet: "Uranus", earthYearsPerYear: 83.7 },
  { planet: "Neptune", earthYearsPerYear: 164 },
  { planet: "Pluto", earthYearsPerYear: 248 },
  { planet: "Eris", earthYearsPerYear: 558 },
  { planet: "Haumea", earthYearsPerYear: 283 },
  { planet: "Makemake", earthYearsPerYear: 309 },
] as PlanetData[];

export default function Home() {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>What Year Is It Right Now?</title>
        <meta
          name="description"
          content="Things aleem builds: What years do they know? Do they know years? Let's find out!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack
        justifyContent="center"
        height={{ base: "90vh", md: "100vh" }}
        spacing={8}
      >
        <Heading
          fontSize={{ base: 42, md: "6xl" }}
          textAlign="center"
          fontFamily="ness"
          fontWeight="black"
        >
          What Year Is It Right Now?
        </Heading>

        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          spacing={{ base: 2, md: 8 }}
          px={{ base: 1, md: 0 }}
          justifyContent="center"
        >
          {PLANET_DATA.map(({ planet, earthYearsPerYear }) => (
            <Heading
              fontFamily="ness"
              key={planet}
              fontWeight="normal"
              size={{ base: "md", md: "lg" }}
            >
              {planet}:{" "}
              {Math.floor((CURRENT_YEAR * earthYearsPerYear * 100) / 100) <
              10000
                ? Math.floor((CURRENT_YEAR * earthYearsPerYear * 100) / 100)
                : Math.floor(
                    (CURRENT_YEAR * earthYearsPerYear * 100) / 100
                  ).toLocaleString()}
            </Heading>
          ))}
        </SimpleGrid>

        <VStack justifyContent="center">
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            textAlign="center"
            fontWeight="bold"
            fontFamily="ness"
          >
            Have you discovered a new planet?{" "}
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            textAlign="center"
            fontFamily="ness"
          >
            submitplanet@whatyearisitrightnow.com{" "}
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
