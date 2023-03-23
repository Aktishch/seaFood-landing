const setAccordion = (element: HTMLElement): void => {

  const accordion = element as HTMLElement
  const toggle = accordion.querySelector('*[data-accordion-toggle]') as HTMLElement
  const content = accordion.querySelector('*[data-accordion-content]') as HTMLElement

  const setAccordionHeight = (): void => {

    if (accordion.dataset.accordion == 'hidden') {

      content.style.maxHeight = '0'

    } else {

      content.style.maxHeight = `${content.scrollHeight}px`

    }

  }

  toggle.classList.add('pointer')
  content.classList.add('overflow-hidden', 'ease', 'duration-3')

  setAccordionHeight()

  toggle.addEventListener('click', ((): void => {

    if (accordion.dataset.accordion == 'hidden') {

      accordion.dataset.accordion = 'active'

      setAccordionHeight()

    } else {

      accordion.dataset.accordion = 'hidden'

      setAccordionHeight()

    }

  }) as EventListener)

}

const accordionClose = (value: string): void => {

  const accordions = document.querySelectorAll(`*[data-accordion-close="${value}"]`) as NodeListOf<Element>

  accordions.forEach((element: Element): void => {

    const accordion = element as HTMLElement

    if (!accordion) return

    const content = accordion.querySelector('*[data-accordion-content]') as HTMLElement

    if (accordion.dataset.accordion == 'active') {

      accordion.dataset.accordion = 'hidden'
      content.style.maxHeight = '0'

    }

  })

}

const init = (): void => {

  const accordions = document.querySelectorAll('*[data-accordion]') as NodeListOf<Element>

  accordions.forEach((element: Element): void => {

    const accordion = element as HTMLElement

    if (!accordion) return

    setAccordion(accordion)

  })

  document.addEventListener('click', ((event: Event): void => {

    if (!(event.target as HTMLElement).closest('[data-accordion-close="click"]')) accordionClose('click')

  }) as EventListener)

  document.addEventListener('scroll', ((): void => {

    accordionClose('scroll')

  }) as EventListener)

}

export default { init }