# Labs QR-пульт

Простой сборщик и расшифровщик QR-кодов для камер GoPro с прошивкой [GoPro Labs](https://gopro.github.io/labs/) (проверялся под HERO11 Black).

- **Собрать.** Отметьте, какие функции включить, а какие выключить, и получите один общий QR-код.
- **Включено.** Журнал того, что вы применяли, и коды, которые выключают отмеченное или всё сразу.
- **Наборы.** Свои сохранённые комбинации, например «Влог» или «Вернуть как было».
- **Расшифровать.** Фото или текст чужого QR-кода разбирается по командам.

## Где хранятся данные

Только на устройстве, в хранилище браузера. На сервер ничего не отправляется. Чтобы перенести данные на другое устройство или сохранить их на всякий случай, используйте «Наборы → Резервная копия»: файл можно сохранить в «Файлы», iCloud или Google Drive.

На iPhone приложение, добавленное на экран «Домой», и сайт, открытый в Safari, хранят данные **раздельно**. Пользуйтесь чем-то одним или переносите данные резервной копией.

## Установка на iPhone

Откройте сайт в Safari, нажмите «Поделиться», затем «На экран Домой». После первого запуска приложение работает и без интернета.

## Устройство проекта

Это статический сайт без сборки:

- `index.html` — всё приложение;
- `vendor/` — [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) 1.4.4 (MIT) и [jsQR](https://github.com/cozmo/jsQR) 1.4.0 (Apache-2.0);
- `sw.js` — офлайн-кэш. Когда меняете файлы, увеличьте `VERSION` в этом файле.

Чтобы запустить локально, выполните `python -m http.server` в этой папке.

Интерфейс на русском и английском: кнопка в правом верхнем углу. Английские строки лежат в `i18n.js`.

Неофициальный проект, с GoPro никак не связан.

---

## English

**Labs QR Remote** — build and decode QR codes for GoPro cameras running [GoPro Labs](https://gopro.github.io/labs/) firmware (tested against HERO11 Black). Open **https://chestermaxlp.github.io/gopro-labs-qr/** and switch the language with the button in the top-right corner.

- **Build** — pick features to turn on or off and get one combined QR code. Tap any line under the QR to flip it on/off or leave it out.
- **Enabled** — a log of what you applied, plus codes to turn off selected features or everything.
- **Sets** — save your own combinations (e.g. "Vlog", "Back to normal").
- **Decode** — a photo or the text of any Labs QR code, explained command by command.

Data stays on your device only (browser storage); use **Sets → Backup** to move it. On iPhone: open in Safari → Share → Add to Home Screen; it works offline after the first launch.

Static site, no build step. Unofficial project, not affiliated with GoPro.
