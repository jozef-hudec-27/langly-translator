import React, { useState, useEffect } from 'react';
import { fetchAvailableLanguages, baseUrl } from '../utils/fetchApi';
import { Spinner } from '@chakra-ui/react';


const Languages = () => {

    const [languages, setLanguages] = useState(null)

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


  return (
      
      <div align='center'>
          
          {languages?.map(({ language, name }) => {
              let flag = language
              
              if (['en', 'chr', 'haw', 'ser'].includes(language)) { flag = 'us'} 
              else if (['xh', 'af', 'zu'].includes(language)) { flag = 'za' } 
              else if (language == 'ar') { flag = 'sa'} 
              else if (language.includes('zh') || ['yue', 'hmn', 'bo', 'ug'].includes(language)) { flag = 'cn' } 
              else if (language === 'ja') { flag = 'jp' }
              else if (language === 'sq') { flag = 'al' }
              else if (language === 'am') { flag = 'et' }
              else if (language === 'hy') { flag = 'am' }
              else if (['as', 'gu', 'hi', 'kn', 'ml', 'mr', 'or', 'pa', 'ta', 'te'].includes(language)) { flag = 'in' }
              else if (['eu', 'ca', 'gl'].includes(language)) { flag = 'es' }
              else if (language === 'be') { flag = 'by' }
              else if (language === 'bn') { flag = 'bd' }
              else if (language === 'bs') { flag = 'ba' }
              else if (['ceb', 'fil'].includes(language)) { flag = 'ph' }
              else if (language === 'ny') { flag = 'mw' }
              else if (language === 'co') { flag = 'fr' }
              else if (language === 'cs') { flag = 'cz' }
              else if (language === 'da') { flag = 'dk' }
              else if (language === 'dz') { flag = 'bt' }
              else if (language === 'eo') { flag = 'eu' }
              else if (language === 'et') { flag = 'ee' }
              else if (language === 'fy') { flag = 'nl' }
              else if (language === 'ka') { flag = 'ge' }
              else if (language === 'el') { flag = 'gr' }
              else if (language === 'gn') { flag = 'py' }
              else if (language === 'ha') { flag = 'td' }
              else if (['iw', 'yi'].includes(language)) { flag = 'il' }
              else if (['ig', 'yo'].includes(language)) { flag = 'ng' }
              else if (language === 'ga') { flag = 'ie' }
              else if (language === 'jv') { flag = 'id' }
              else if (language === 'kk') { flag = 'kz' }
              else if (language === 'km') { flag = 'kh' }
              else if (language === 'ko') { flag = 'kr' }
              else if (['ku', 'ckb'].includes(language)) { flag = 'tr' }
              else if (language === 'ky') { flag = 'kg' }
              else if (language === 'lo') { flag = 'la' }
              else if (['la', 'rm', 'scn'].includes(language)) { flag = 'it' }
              else if (language === 'lb') { flag = 'lu' }
              else if (language === 'ms') { flag = 'my' }
              else if (language === 'mi') { flag = 'nz' }
              else if (language === 'my') { flag = 'mmr' }
              else if (language === 'ne') { flag = 'np' }
              else if (language === 'ps') { flag = 'af' }
              else if (language === 'fa') { flag = 'ir' }
              else if (language === 'sm') { flag = 'as' }
              else if (language === 'gd') { flag = 'gb-sct' }
              else if (language === 'sr') { flag = 'rs' }
              else if (language === 'st') { flag = 'ls' }
              else if (language === 'sn') { flag = 'zw' }
              else if (['sd', 'ur'].includes(language)) { flag = 'pk' }
              else if (language === 'si') { flag = 'lk' }
              else if (language === 'sl') { flag = 'si' }
              else if (language === 'su') { flag = 'sd' }
              else if (language === 'sw') { flag = 'bi' }
              else if (language === 'sv') { flag = 'se' }
              else if (language === 'tg') { flag = 'tj' }
              else if (language === 'ber') { flag = 'ma' }
              else if (language === 'tt') { flag = 'ru' }
              else if (language === 'tk') { flag = 'tm' }
              else if (language === 'uk') { flag = 'ua' }
              else if (language === 'vi') { flag = 'vn' }
              else if (language === 'cy') { flag = 'gb-wls' }
              else if (language === 'wo') { flag = 'sn' }
              
            return (
            <>
                <br />
                <img src={`https://countryflagsapi.com/png/${flag}`} alt={`'${flag}' flag not found`} />
                <h1>Language: <p style={{ fontWeight: 'bold' }}>{name}</p></h1>
                <br /> <hr />
            </> 
            )
            
          })}
      </div>
  )
};

export default Languages;
