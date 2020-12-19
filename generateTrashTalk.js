// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(options) {
  // 錯誤處理
  if (!options.career) return '做為一個身心健全人，選一個職業再送出很難??!$%^&*!!!'
  // 定義變數
  const target = options.career
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // 宣告需要用到的變數
  let targetTranslate
  let oneTask

  switch (target) {
    case 'engineer':
      targetTranslate = '工程師'
      oneTask = sample(task.engineer)
      break;
    case 'designer':
      targetTranslate = '設計師'
      oneTask = sample(task.designer)
      break;
    case 'entrepreneur':
      targetTranslate = '創業家'
      oneTask = sample(task.entrepreneur)
      break;
  }

  const onePhrase = sample(phrase)

  return `身為一個${targetTranslate}，${oneTask}，${onePhrase}吧!`

}

module.exports = generateTrashTalk