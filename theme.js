export let switchTheme = () => {
    let root = document.querySelector(':root')
    let theme = document.querySelector('.theme')
    
    if (theme.dataset.theme == 'lightTheme'){
        theme.dataset.theme = 'darkTheme'
        root.style.setProperty('--bg-color', '#131333')
        root.style.setProperty('--font-color', '#f3f3f3')
        root.style.setProperty('--line-color', '#831232')
        root.style.setProperty('--dark-line-color', '#323273')
    }
    else{
        theme.dataset.theme = 'lightTheme'
        root.style.setProperty('--bg-color', '#f3f3f3')
        root.style.setProperty('--font-color', '#131333')
        root.style.setProperty('--line-color', '#323273')
        root.style.setProperty('--dark-line-color', '#831232')
    }
}