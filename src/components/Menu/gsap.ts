export const inAnimation = (timeline: any) => {
  timeline
    .to('._behanceParent', 0.6, { opacity: 1, y: 0 }, 1)
    .to('._instagramParent', 0.6, { opacity: 1, y: 0 }, 1.2)
    .to('._linkedinParent', 0.6, { opacity: 1, y: 0 }, 1.4)
}

export const outAnimation = (timeline: any) => {
  timeline.to(['._behanceParent', '._instagramParent', '._linkedinParent'], 0, { opacity: 0, y: 50 }, 1)
}
