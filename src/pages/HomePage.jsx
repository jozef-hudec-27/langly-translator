import React from 'react';
import { BsTranslate } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { Circle, Center } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
const HomePage = () => {
    const cards = [
        {
            headline: 'See All Languages',
            url: '/languages',
            description: 'See all available languages you can use with our Translator - translate both FROM and TO!',
            icon: <BiWorld />
        },

        {
            headline: 'Translate Anything',
            url: '/translator',
            description: 'Translate anything with our fast, free-to-use translator - FOR FREE!',
            icon: <BsTranslate />
        }
    ]

    const FAQ = [
        {
            question: 'What is Langly?',
            answer: 'Langly is a free-to-use translating software for everyone to use.',
            color: 'red.200'
        },

        {
            question: 'What languages can I use?',
            answer: "You can see all available languages at '/languages' .",
            color: 'green.200'
        },

        {
            question: 'How much is your service?',
            answer: 'Langly IS and forever WILL BE free to use for everyone on the internet.',
            color: 'tomato'
        },

        {
            question: 'Who built Langly?',
            answer: 'Langly is built and run by a young, aspiring developer from Slovakia.',
            color: 'blue.200'
        },

        {
            question: 'Can I download Langly on my Android/Iphone?',
            answer: 'Unfortunately we have not yet developed non-web version of our app. Nevertheless we are working on it and it should be available soon.',
            color: 'orange.200'
        },

        {
            question: 'How accurate is Langly?',
            answer: "Langly is just as accurate as any other translator on the web. So don't worry you won't get your text translated.",
            color: 'purple.200'
        }
    ]


  return (
      <Box>
        <Circle h='300px' background='lightBlue' p='3' m='3' boxShadow='dark-lg'>
            <Box justify='center'>
                {cards.map(card => (
                    <>
                        <Link to={card.url}>
                        <p align='center'>{card.icon}</p>
                        <h1 style={{ fontWeight: 'bold' }} align='center'>{card.headline}</h1>
                        <p>{card.description}</p>
                        </Link>
                        <br /><br />
                    </>
                ))}
            </Box>
            
        </Circle>

        <br />
        <div align='center'>
            <Wrap spacing='20px' justify='center'>
                {FAQ.map(({ question, answer, color}) => (
                    <WrapItem boxShadow='2xl' rounded='md'>
                        <Center w='405px' h='180px' bg={color}>
                            <p><p style={{ fontWeight: 'bold' }}>{question}</p> {answer}</p>
                        </Center>
                    </WrapItem>   
                ))}
            </Wrap>
        </div>
        <br />
      </Box>
  )
};

export default HomePage;
