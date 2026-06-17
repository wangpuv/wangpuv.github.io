import { useEffect, useState } from 'react'

/** Single global toast, driven by the `app:toast` window event. */
export default function Toast() {
  const [msg, setMsg] = useState('')
  const [show, setShow] = useState(false)

  useEffect(() => {
    let hideTimer
    let clearTimer
    const onToast = (e) => {
      setMsg(e.detail)
      setShow(true)
      clearTimeout(hideTimer)
      clearTimeout(clearTimer)
      hideTimer = setTimeout(() => setShow(false), 2600)
      clearTimer = setTimeout(() => setMsg(''), 3000)
    }
    window.addEventListener('app:toast', onToast)
    return () => {
      window.removeEventListener('app:toast', onToast)
      clearTimeout(hideTimer)
      clearTimeout(clearTimer)
    }
  }, [])

  return (
    <div className={`toast${show ? ' is-visible' : ''}`} role="status" aria-live="polite">
      {msg}
    </div>
  )
}
