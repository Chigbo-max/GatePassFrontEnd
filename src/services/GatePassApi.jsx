import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const gatePassApi = createApi({
    reducerPath: 'gatePassApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
    
    
    
    endpoints: (build) => ({
      postSignUp: build.mutation({
        query: (userData) =>({
          url: '/signup',
          method: 'POST',
          body: userData
      }) 
    }),

    postLogin: build.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData
    })
  }),

  postGenerateOtp: build.mutation({
    query: (otpData) => ({
      url: '/generateOtp',
      method: 'POST',
      body: otpData,
    }),
  }),

  validateOtp: build.mutation({
    query: (validateOtp)=>({
      url: '/security/validateOtp',
      method: 'POST',
      body: validateOtp,
    })
  })



})
})

  export const {usePostSignUpMutation, usePostLoginMutation, useValidateOtpMutation, usePostGenerateOtpMutation } = gatePassApi


