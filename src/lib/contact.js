// Copy-to-clipboard + toast, used by every email/contact trigger so we never
// rely on the visitor having a configured mail client (mailto can open a blank
// tab or do nothing). Clicking copies the address and surfaces a confirmation.

export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // fall through to the legacy path below
  }
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

export function toast(message) {
  window.dispatchEvent(new CustomEvent('app:toast', { detail: message }))
}

export async function copyEmail(address, message) {
  await copyToClipboard(address)
  toast(message)
}
