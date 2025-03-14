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
    }),
  }),

  postCloseAccount:build.mutation({
    query: (closeAcccount)=>({
      url: '/admin/closeAccount',
      method: 'POST',
      body: closeAcccount,
    }),
  }),

  getViewResidents:build.query({
    query:()=> 'admin/viewResidents',
  }),

  postViewResidentById:build.mutation({
    query:(residentId)=>({
    url: 'admin/viewResidentById',
    method: 'POST',
    body: residentId
    }),
  }),

  getViewAllVisitors:build.query({
    query:()=> 'admin/viewAllVisitors',
  }),

  postViewVisitorByOtpId:build.mutation({
    query:(viewVisitorById)=>({
      url : 'admin/viewVisitorByOtpId',
      method: 'POST',
      body: viewVisitorById
    }),
  }),

  getAllSecurityPersonnel:build.query({
    query:()=> 'admin/getAllSecurityPersonnel',
  }),

  postSecurityPersonnelById:build.mutation({
    query:(securityDetail)=>({
      url: 'admin/getSecurityPersonnelById',
      method: 'POST',
      body: securityDetail

    }),
  }),

})
})

  export const {usePostSecurityPersonnelByIdMutation, useGetAllSecurityPersonnelQuery, usePostViewVisitorByOtpIdMutation, useGetViewAllVisitorsQuery, usePostViewResidentByIdMutation, useGetViewResidentsQuery,usePostCloseAccountMutation, usePostSignUpMutation, usePostLoginMutation, useValidateOtpMutation, usePostGenerateOtpMutation } = gatePassApi


