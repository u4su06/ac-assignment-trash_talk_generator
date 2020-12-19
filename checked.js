// 轉換 options = req.body 物件
const checked = (career) => {
  if (!career) return
  const options = {
    engineer: false,
    designer: false,
    entrepreneur: false
  }
  options[career] = true;
  return options
}

module.exports = checked;