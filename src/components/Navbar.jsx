import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Image } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout, FcGlobe } from 'react-icons/fc'
import Globe from '../images/globe.png'


const Navbar = () => {
  return (
        <Flex p='2' borderBottom='1px' borderColor='gray.100'>
            <Image src={Globe} alt="globe" boxSize='50px' />
            <Box fontSize='3xl' color='blue.400' fontWeight='bold' ml='20px'>
                <Link to='/'>Langly - Your Online Translator</Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' />
                    <MenuList>
                        <Link to='/'>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>

                        <Link to='/languages'>
                            <MenuItem icon={<FcGlobe />}>Languages</MenuItem>
                        </Link>

                        <Link to='/translator'>
                            <MenuItem icon={<FcAbout />}>Translator</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
};

export default Navbar;
