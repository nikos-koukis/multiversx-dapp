import { Box, BoxProps } from "@chakra-ui/react";
import bg from "../assets/home/bg.png";
import ImageBg from "./ImageBg/ImageBg";
import { PropsWithChildren } from "react";
interface IProps extends BoxProps { }

const Layout = ({ children, ...props }: PropsWithChildren<IProps>) => {
    return (
        <Box
            position={"relative"}
            pt={{ xs: "210px", md: "180px", "2xl": "248px" }}
            h="full"
            {...props}
        >
            <Box
                position={"fixed"}
                top={0}
                left={0}
                right={0}
                zIndex={-2}
                h="100vh"
                overflow={"hidden"}
            >
                <ImageBg src={bg} zIndex={-1} />
            </Box>
            <Box
                position={"absolute"}
                w="full"
                left={0}
                right="0"
                top={"50px"}
                px={{ xs: "15px", md: "30px" }}
            >
            </Box>
            {children}
        </Box>
    );
};

export default Layout;
