// 获取所有类选择器panel选中的元素
const panels = document.querySelectorAll('.panel')

// 为每个panel元素注册事件监听器——在触发点击事件时，移除所有panel的active类属性，并为当前panel添加active类属性
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}