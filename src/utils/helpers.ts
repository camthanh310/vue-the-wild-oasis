function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(value)
}

function getImageUrl(path: string, value: string | number): string {
  const baseURL = 'http://the-wild-oasis-api.test'
  return `${baseURL}/${path}/${value}`
}

function getCabinImage(value: number | string): string {
  return getImageUrl('cabins', value)
}

export default {
  formatCurrency,
  getCabinImage
}
