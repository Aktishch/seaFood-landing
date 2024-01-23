import dialog from './functions/dialog'

const getCookie = (): void => {

    const buner = document.querySelector('#cookie') as HTMLElement

    if (!buner) return

    const id: string = buner.id
    const value: string = String(buner.dataset.cookie)
    const path: string = String(buner.dataset.path)

    document.cookie = `cookie_${id}_${value}_active=1; path=${path}; max-age=${(7 * 24 * 60 * 60)}`
    dialog.close()
    buner.remove()

    console.log(document.cookie);
    

}

const init = (): void => {

    document.addEventListener('click', ((event: Event): void => {

        if ((event.target as HTMLButtonElement).hasAttribute('data-cookie-button')) getCookie()

    }) as EventListener)

}

export default { init }