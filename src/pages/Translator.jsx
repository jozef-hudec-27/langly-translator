import React, { useState, useEffect } from 'react';
import { fetchAvailableLanguages, baseUrl, translateApi } from '../utils/fetchApi';

import { Box, Textarea, Text, Select, Button, Spinner, IconButton  } from '@chakra-ui/react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
  } from '@chakra-ui/react'

import { FaCopy } from 'react-icons/fa' 


const Translator = () => {

    function displayErrAlert() {
        return (
            <>
                <br />
                    <Alert status='error' w='700px' justifyContent='center'>
                        <AlertIcon />
                        <AlertTitle mr={2}>Error Translating Text!</AlertTitle>
                        <AlertDescription>Something went wrong. Was unable to translate input.</AlertDescription>
                        <CloseButton position='absolute' right='8px' top='8px' onClick={() => setShowErrAlert(false)} />
                    </Alert>
                <br />
            </>
        )
    }

    function displaySucAlert() {
        setTimeout(() => {
            setShowSucAlert(false)
        }, 5000)

        return (
            <>
                <br /><br />
                    <Alert status='success' justifyContent='center' w='400px'>
                        <AlertIcon />
                        <AlertTitle mr={2}>Translated Text copied to clipboard.</AlertTitle>
                    </Alert>
            </>
        )
    }

    const [toBeTranslated, setToBeTranslated] = useState('')
    const [translatedText, setTranslatedText] = useState('')

    const [lang, setLang] = useState('Not Set')

    const [languages, setLanguages] = useState(null)

    const [error1, setError1] = useState(false)
    const [error2, setError2]  = useState(false)

    const [loading, setLoading] = useState(false)

    const [showErrAlert, setShowErrAlert] = useState(false)
    const [showSucAlert, setShowSucAlert] = useState(false)

    useEffect(async () => {
        const data = await fetchAvailableLanguages(`${baseUrl}/languages`)
        const languages = await data.languages

        setLanguages(languages)
    }, [])

    if (!languages) return (
        <div align='center'>
            <Spinner size='xl' />
        </div>
    )


    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setToBeTranslated(inputValue)
      }

    let translateQuery = async () => {

        if (toBeTranslated === '') {
            setError1(true)
        } 

        if (['Not Set', ''].includes(lang)) {
            setError2(true)
        }

        if (toBeTranslated !== '') {
            setError1(false)
        } 

        if (!(['Not Set', ''].includes(lang))) {
            setError2(false)
        }

        if ((!error1) && (!error2)) {
            if (!(['Not Set', ''].includes(lang)) && toBeTranslated !== '') {
                setLoading(true)

                const timeId = setTimeout(() => {
                    setShowErrAlert(true)
                    setLoading(false)                 
                }, 10000)

                const data = await translateApi(lang, toBeTranslated)
                const response = await data.data.translations
                setTranslatedText(response?.translatedText)
                setLoading(false)
                clearTimeout(timeId)


                }
            }
    }

  return (
    <Box align='center'>
        {showErrAlert && displayErrAlert()}

        <>
            <Text mb='8px'>Language: automatic</Text>
            <Textarea
            value={toBeTranslated}
            onChange={handleInputChange}
            placeholder='Enter whatever you want to translate'
            size='bg'
            width={800}
            height={300}
            isInvalid={error1}
            />
        </>
        <br /><br /><br />
        <>
            <Text mb='8px'>Language: {lang}</Text>
            <Select placeholder='Select Language' onChange={e => setLang(e.target.value || 'Not Set')} w='fit-content' p='2'>
                {languages.map(({ language, name }) => (
                    <option value={language}>{name} ({language})</option>
                ))} 
            </Select>
            <Textarea
            value={translatedText}
            placeholder='Your translated text will be here'
            size='bg'
            width={800}
            height={300}
            isInvalid={error2}
            />
        </>
        {showSucAlert && displaySucAlert()}
        
        <br /><br />
        <Button isLoading={loading} colorScheme='blue' onClick={translateQuery}>Translate</Button>
        {translatedText && (
            <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Copy to clipboard'
                icon={<FaCopy />}
                ml={2}
                onClick={() => {
                    navigator.clipboard.writeText(translatedText)
                    setShowSucAlert(true)
                }}
            />
        )}
        <br />
    </Box>
  )
};


export default Translator;
