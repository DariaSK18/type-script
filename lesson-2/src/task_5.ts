//---- Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими

enum SettingStatus {
    Enabled = 'enabled',
    Disabled = 'disabled'
}

type Settings = {
    [key: string]: SettingStatus
}

const settings: Settings = {
    notifications: SettingStatus.Enabled,
    darkMode: SettingStatus.Disabled,
    autoSave: SettingStatus.Enabled,
    locationAccess: SettingStatus.Disabled,
    backup: SettingStatus.Enabled
}

function getEnabledSettings(settings: Settings): string [] {
    const enabledSettings: string[] = []

    for(const key in settings) {
        if(settings[key] === 'enabled'){
            enabledSettings.push(key)
        }
    }
    return enabledSettings
}

function displaySettings(settings: Settings): void {
    const enabledSettings: string[] = getEnabledSettings(settings)
    document.write(`Enabled settings for : <br>`)
    enabledSettings.forEach((el,i) => document.write(`${i+1}. ${el}<br>`))
}

displaySettings(settings)

