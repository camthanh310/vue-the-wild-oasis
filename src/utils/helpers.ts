type ImageValue = string | number

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(value)
}

function getImageUrl(path: string, value: ImageValue): string {
  const baseURL = 'http://the-wild-oasis-api.test'
  return `${baseURL}/${path}/${value}/image`
}

function getCabinImage(value: ImageValue): string {
  return getImageUrl('cabins', value)
}

export default {
  formatCurrency,
  getCabinImage
}
