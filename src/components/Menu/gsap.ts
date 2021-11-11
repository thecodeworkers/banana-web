export const inAnimation = (timeline: any) => {
  timeline
    .to('.behance-black-parent', 0.6, { opacity: 1, y: 0 }, 1)
    .to('.insta-black-parent', 0.6, { opacity: 1, y: 0 }, 1.2)
    .to('.linkedin-black-parent', 0.6, { opacity: 1, y: 0 }, 1.4)
}

export const outAnimation = (timeline: any) => {
  timeline.to(['.behance-black-parent', '.insta-black-parent', '.linkedin-black-parent'], 0, { opacity: 0, y: 50 }, 1)
}
