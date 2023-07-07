import { URL } from '@/constants'
import { apiCall } from '@/helpers'
import React from 'react'
import { alertService } from 'services/alert.service'

export default function ImplantPage() {
  const getCommandList = async () => {
    const res = await apiCall.get(URL.COMMON.COMMAND_LIST, {})
    console.log(res.data)
  }

  const handleAlert = () => {
    alertService.popup('알랏 테스트', () => {
      console.log('Success callback executed!!')
    })
  }

  return (
    <div>
      <p style={{ padding: 10 }}>implant</p>
      <div style={{ padding: 10 }}>
        <p>
          <button
            className="bg-purple-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600
                      focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={handleAlert}
          >
            Alert
          </button>
        </p>
        <br />
        <p>
          <button
            className="bg-purple-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600
                      focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={getCommandList}
          >
            getCommandList
          </button>
        </p>
      </div>
    </div>
  )
}
