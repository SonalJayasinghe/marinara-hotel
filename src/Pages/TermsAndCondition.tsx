import {
  Box,
  Center,
  Flex,
  Heading,
  VStack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect } from "react";
import Footer from "../components/Footer";

function TermsAndCondition() {
  useEffect(() => {
    document.title = "Terms and Conditions";
  }, []);

  return (
    <>
      <Flex minH={"100vh"}>
        <VStack width="100%">
          <Box w="100%" position={"fixed"} zIndex={2}>
            <NavBar />
          </Box>

          <Box w="100%" marginTop={"95px"}>
            <Center>
              <Heading textAlign={"center"} padding={3} marginBottom={6}>
                {" "}
                Terms and Conditions{" "}
              </Heading>
            </Center>
          </Box>

          <Box
            borderRadius={45}
            bg={useColorModeValue("gray.50", "teal.900")}
            width={"90%"}
            padding={10}
            overflow={"hidden"}
            verticalAlign={"center"}
          >
            <Text align={"left"}>
              <p>
                Please read the following terms and conditions carefully before
                using our website or making a reservation at Marinara Hotel. By
                accessing our website or making a reservation, you agree to
                abide by these terms and conditions.
              </p>
              <br />
              <b>Reservations</b>
              <br />

              <ul>
                <li>
                  All reservations are subject to availability and confirmation.
                </li>
                <li>
                  Guests must provide accurate and complete information during
                  the reservation process.
                </li>
                <li>
                  Rates and availability are subject to change without prior
                  notice.
                </li>
              </ul>
              <br />
              <b>Check-in and Check-out</b>
              <br />
              <ul>
                <li>
                  Check-in time is from 2:00 PM onwards, and check-out time is
                  by 12:00 PM.
                </li>
                <li>
                  Early check-in and late check-out may be available upon
                  request and are subject to additional charges and
                  availability.
                </li>
              </ul>
              <br />
              <b>Cancellation Policy</b>
              <br />
              <ul>
                <li>
                  Cancellation policies vary based on the type of reservation
                  and rate plan. Please refer to your reservation confirmation
                  for specific details.
                </li>
                <li>
                  Non-refundable reservations cannot be canceled or modified and
                  will incur full charges.
                </li>
              </ul>
              <br />
              <b>Payment</b>
              <br />
              <ul>
                <li>
                  Payment for reservations is required at the time of booking or
                  as specified in the reservation details.
                </li>
                <li>
                  We accept major credit cards for online payments. A valid
                  credit card must be presented upon check-in.
                </li>
              </ul>
              <br />
              <b>Children and Extra Beds</b>
              <br />
              <ul>
                <li>
                  Children policies and extra bed availability may vary. Please
                  refer to your reservation confirmation for details.
                </li>
              </ul>
              <br />
              <b>Guest Responsibilities</b>
              <br />
              <ul>
                <li>
                  Guests are responsible for any damage or loss caused to hotel
                  property during their stay.
                </li>
                <li>
                  Guests are expected to follow the hotel's rules and
                  regulations, including those related to behavior, noise, and
                  security.
                </li>
              </ul>
            </Text>
          </Box>

          <Box w="100%" marginTop={"auto"}>
            <Footer />
          </Box>
        </VStack>
      </Flex>
    </>
  );
}

export default TermsAndCondition;
