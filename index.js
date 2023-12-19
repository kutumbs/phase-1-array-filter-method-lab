const drivers = ['Bobby',]
const findMatching = (drivers, string) => {
    return drivers.filter(driver => driver.toLowerCase().includes(string.toLowerCase()))
  }
const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()))
  }

const matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}
