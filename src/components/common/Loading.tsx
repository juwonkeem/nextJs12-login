import React from 'react'
import { instance } from '@/helpers'
import { useState, useEffect } from 'react'

export default function Loading() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    initLoading()
  }, [])

  const initLoading = () => {
    instance.interceptors.request.use(
      (config) => {
        const timer = setTimeout(() => {
          setLoading(true)
        }, 1000)
        return { ...config, timer }
      },
      (error) => {
        setLoading(false)
        return Promise.reject(error)
      }
    )

    instance.interceptors.response.use(
      (response: any) => {
        clearTimeout(response.config.timer)
        setLoading(false)
        return response
      },
      (error) => {
        clearTimeout(error.config.timer)
        setLoading(false)
        return Promise.reject(error)
      }
    )
  }

  if (!loading) return null

  return (
    <div className="pageLoading" id="loader">
      <div className="spinner"></div>
    </div>
  )
}
