import { Heading, VStack, SimpleGrid, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const PLANET_DATA = [
  { planet: "Mars", earthYearsPerYear: 1.88 },
  { planet: "Venus", earthYearsPerYear: 0.62 },
  { planet: "Earth", earthYearsPerYear: 1 },
  { planet: "Eris", earthYearsPerYear: 558 },
  { planet: "Mercury", earthYearsPerYear: 0.24 },
  { planet: "Pluto", earthYearsPerYear: 248 },
  { planet: "Saturn", earthYearsPerYear: 29.46 },
  { planet: "Neptune", earthYearsPerYear: 164 },
  { planet: "Jupiter", earthYearsPerYear: 11.86 },
  { planet: "Uranus", earthYearsPerYear: 83.7 },
  { planet: "Haumea", earthYearsPerYear: 283 },
  { planet: "Makemake", earthYearsPerYear: 309 },
];

export default function Home() {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <>
      <NextSeo
        title="What Year Is It Right Now?"
        description="Things aleem builds: What years do they know? Do they know years? Let's find out!"
      />
      <VStack
        height={{ base: "90vh", md: "100vh" }}
        justifyContent="center"
        textAlign="center"
        spacing={8}
      >
        <Heading fontSize={{ base: 42, md: "6xl" }} fontWeight="black">
          What Year Is It Right Now?
        </Heading>

        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 2, md: 8 }}>
          {PLANET_DATA.map(({ planet, earthYearsPerYear }) => (
            <Text key={planet} fontSize={{ base: "lg", md: "3xl" }}>
              {planet}:{" "}
              {Math.floor((CURRENT_YEAR * earthYearsPerYear * 100) / 100) <
              10000
                ? Math.floor((CURRENT_YEAR * earthYearsPerYear * 100) / 100)
                : Math.floor(
                    (CURRENT_YEAR * earthYearsPerYear * 100) / 100
                  ).toLocaleString()}
            </Text>
          ))}
        </SimpleGrid>

        <VStack justifyContent="center">
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
            Have you discovered a new planet?
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            submitplanet@whatyearisitrightnow.com
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
