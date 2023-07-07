import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AlertType } from 'constants/types/common'
import { alertService } from 'services/alert.service'

export default function Alert() {
  const router = useRouter()
  const [alert, setAlert] = useState<AlertType | null>()

  useEffect(() => {
    const subscription = alertService.alert.subscribe((alert) => setAlert(alert))
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    alertService.clear()
  }, [router])

  const handleCancel = () => {
    alertService.clear()
  }

  const handleOk = () => {
    if (alert && alert.OkCallback) {
      alert.OkCallback()
    }
    alertService.clear()
  }

  if (!alert) return null

  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-white px-16 py-14 rounded-md text-center">
        <h1 className="text-xl mb-4 font-bold text-slate-500">{alert.message}</h1>
        <button className="bg-red-500 px-4 py-2 rounded-md text-md text-white" onClick={handleCancel}>
          Cancel
        </button>
        <button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold" onClick={handleOk}>
          Ok
        </button>
      </div>
    </div>
  )
}
