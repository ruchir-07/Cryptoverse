import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const crptyoNewsHeaders =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'a33b882dedmshe39e3a4919abdbcp184ccfjsnf196b14581b7',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

  const createRequest = (url) =>  ({ url, headers: crptyoNewsHeaders })

  export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi