export function autoInput(id, des) {
  let divTyping = document.getElementById(id)
  let i = 0,
    timer = 0,
    str = des,
    reverse = false // 标志变量，控制是否反向输出字符串
  function typing() {
    if (!reverse && i < str.length) {
      divTyping.innerHTML = str.slice(0, i++) + '_'
      timer = setTimeout(typing, 300)
    } else if (reverse && i > 0) {
      divTyping.innerHTML = str.slice(0, i--) + '_'
      timer = setTimeout(typing, 300)
    } else {
      reverse = !reverse // 反转标志变量
      clearTimeout(timer)
      typing()
    }
  }
  typing()
}
