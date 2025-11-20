"use strict";
//---- Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими
var SettingStatus;
(function (SettingStatus) {
    SettingStatus["Enabled"] = "enabled";
    SettingStatus["Disabled"] = "disabled";
})(SettingStatus || (SettingStatus = {}));
const settings = {
    notifications: SettingStatus.Enabled,
    darkMode: SettingStatus.Disabled,
    autoSave: SettingStatus.Enabled,
    locationAccess: SettingStatus.Disabled,
    backup: SettingStatus.Enabled
};
function getEnabledSettings(settings) {
    const enabledSettings = [];
    for (const key in settings) {
        if (settings[key] === 'enabled') {
            enabledSettings.push(key);
        }
    }
    return enabledSettings;
}
function displaySettings(settings) {
    const enabledSettings = getEnabledSettings(settings);
    document.write(`Enabled settings for : <br>`);
    enabledSettings.forEach((el, i) => document.write(`${i + 1}. ${el}<br>`));
}
displaySettings(settings);
