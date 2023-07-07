import { AlertType } from 'constants/types/common'
import { BehaviorSubject } from 'rxjs'

const alertSubject = new BehaviorSubject<AlertType | null>(null)

export const alertService = {
  alert: alertSubject.asObservable(),
  popup,
  clear,
}

function popup(message: string, callback?: () => void) {
  const alertData: AlertType = {
    message,
    OkCallback: () => {
      if (callback) {
        callback()
      }
    },
  }

  alertSubject.next(alertData)
}

function clear() {
  alertSubject.next(null)
}
