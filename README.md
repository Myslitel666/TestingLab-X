1) Задайте переменную среды MY_APP_HTTP_URL, содержащую протокол http/https и домен, с помощью `setx MY_APP_HTTP_URL http://[domain]` (cmd),
   которая используется в launchSetting.json 
2) Создайте .env файл в корне проекта TestingLabFront-end, и поместите в него следующее содержимое: `REACT_APP_API_URL = "http://[domain]:[port]"`;
3) Запустите Server и Front.
