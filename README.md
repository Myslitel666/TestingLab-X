1) Установите Node.js, Microsoft SQL Server, SSMS и dotnet 7.0;

2) Выполните import database файла \TestingLabBack-end\Database\TestingLabX.bacpac на свой SQL Server.

3) Задайте переменную среды MY_APP_HTTP_URL, содержащую протокол http/https и Server domain, с помощью `setx MY_APP_HTTP_URL http://[domain]` (cmd),
которая используется в launchSetting.json для конфигурации web-приложения.
   В целях локального развёртывания достаточно указать IP-address Вашего устройства, подключённого к сети. (Команда ipconfig в терминале Windows; IPv4);

4) Запустите back-end. Обратите внимание на используемый port;

5) Создайте .env файл в корне проекта TestingLabFront-end, и поместите в него следующее содержимое: `REACT_APP_API_URL = "http://[domain]:[port]"`;

6) Выполните команду `npm i` в корне проекта TestingLabFront-end, чтобы установить необходимые зависимости в React Project.

7) Запустите front.
