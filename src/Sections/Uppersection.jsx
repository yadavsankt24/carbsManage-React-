import "./Uppersection.css";
import { Image, Heading, Input, Stack, AspectRatio } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const Uppersection = () => {
  return (
    <Box className="upperSection">
      {/* <Navbar /> */}
      <Box className="Top">
        <Stack marginTop="150px">
          <Heading as="h1">Keto & Low-Carb Made Easy</Heading>
          <Heading as="h2">The #1 Low-Carb and Keto Diet App</Heading>
          <Heading as="h5" size="sm">
            For healthy & sustainable low-carb living
          </Heading>
          <Box className="flex">
            <Input
              variant="unstyled"
              type="email"
              placeholder="Enter email address"
            />
            <Box id="signup">Create Free Account</Box>
          </Box>
          <Stack>
            <Link
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.wombatapps.carbmanager&hl=en"
            >
              <Image
                src="https://www.carbmanager.com/_nuxt/img/cd5b00b.png"
                alt=""
              />
            </Link>
            <Link
              target="_blank"
              href="https://apps.apple.com/us/app/carb-manager-keto-diet-app/id410089731"
            >
              <Image
                src="https://www.carbmanager.com/_nuxt/img/189f2dc.png"
                alt=""
              />
            </Link>
          </Stack>
        </Stack>
        <Image src="https://www.carbmanager.com/_nuxt/img/9bfac4e.png" alt="" />
      </Box>
    </Box>
  );
};

