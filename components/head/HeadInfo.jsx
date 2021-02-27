import Head from 'next/head'
import React from 'react'

function HeadeInfo({title,info,keywords}) {
     return (
          <Head>
               <meta name="deescrption" content={info}/>
               <meta name={keywords} content={info}/>
               <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
               <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
               <title>{title}</title>
          </Head>
     )
}

HeadeInfo.defaultProps={
     title:'Next js app',
     keywords:'sport news',
     info:'news sport'
}
export default HeadeInfo
