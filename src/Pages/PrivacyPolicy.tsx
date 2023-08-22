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
import { useEffect, useLayoutEffect } from "react";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy";
  }, []);


  useLayoutEffect(() => {
    window.scrollTo(0, 0)
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
              <Heading textAlign={"center"} padding={3}  marginBottom={6}>
                {" "}
                Privacy Policy{" "}
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
                At Marinara Hotel, we are committed to respecting and protecting
                your privacy. This Privacy Policy outlines how we collect, use,
                disclose, and safeguard your personal information when you visit
                our website, interact with us, or make reservations. By using
                our services, you consent to the practices described in this
                Privacy Policy.
              </p>
              <br/>
              <b>Information We Collect</b>
              <br/>
              <ul>
                <li>
                  <p>Personal Information:</p> We may collect personal
                  information, including but not limited to your name, contact
                  details, payment information, and reservation details.
                </li>
                <li>
                  <p>Usage Information:</p> We gather information
                  about how you interact with our website, such as your IP
                  address, browser type, and device information.
                </li>
                <li>
                  <p>Cookies:</p> Our website uses cookies and similar
                  tracking technologies to enhance your browsing experience and
                  collect usage information.
                </li>
              </ul>
              <br/>
              <b>How We Use Your Information</b>
              <br/>
              <ul>
                <li>
                  <p>
                    We use your personal information to process reservations,
                    provide customer service, and communicate with you about
                    your bookings.
                  </p>
                </li>
                <li>
                  <p>
                    Your contact information may be used to send you promotional
                    materials, updates, and news about Marinara Hotel. You can
                    opt out of these communications at any time.
                  </p>
                </li>
                <li>
                  <p>
                    We analyze usage information to improve our website,
                    services, and user experience.
                  </p>
                </li>
              </ul>
              <br/>
              <b>How We Share Your Information</b>
              <br/>
              <ul>
                <li>
                  <p>
                    We may share your information with service providers who
                    assist us in delivering our services, such as payment
                    processors and reservation management systems.
                  </p>
                </li>
                <li>
                  <p>
                    In cases where required by law or to protect our rights and
                    interests, we may disclose your information to legal
                    authorities.
                  </p>
                </li>
              </ul>
              <br/>
              <b>Data Security</b>
              <br/>
              <ul>
                <li>
                  <p>
                    We implement reasonable security measures to protect your
                    personal information from unauthorized access, disclosure,
                    alteration, or destruction.
                  </p>
                </li>
              </ul>
              <br/>
              <b>Your Choices</b>
              <br/>
              <ul>
                <li>
                  <p>
                    You have the right to access, update, or delete your
                    personal information. You can also request that we stop
                    using your information for marketing purposes.
                  </p>
                </li>
                <li>
                  <p>
                    You can manage your cookie preferences through your browser
                    settings.
                  </p>
                </li>
              </ul>
              <br/>
              <b>Third-Party Links</b>
              <br/>
              <ul>
                <li>
                  <p>
                    Our website may contain links to third-party websites. We
                    are not responsible for the privacy practices or content of
                    those websites.
                  </p>
                </li>
              </ul>
              <br/>
              <b>Children's Privacy</b>
              <br/>
              <ul>
                <li>
                  <p>
                    Our services are not intended for individuals under the age
                    of 18. We do not knowingly collect personal information from
                    children.
                  </p>
                </li>
              </ul>
              <br/>
              <b>Changes to the Privacy Policy</b>
              <br/>
              <ul>
                <li>
                  <p>
                    We reserve the right to update or modify this Privacy Policy
                    at any time. Changes will be effective upon posting on our
                    website.
                  </p>
                </li>
              </ul>
              <br/>
              <b>Contact Us</b>
              <br/>
              <ul>
                <li>
                  <p>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy, please contact us at the provided
                    contact information.
                  </p>
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

export default PrivacyPolicy;
