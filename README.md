# Тествое задание

[Задание](#about-the-task) <br>
[Запуск проекта](#start_project) <br>
[Остановка проекта](#stop_project)


## Задание <a name = "about-the-task"></a>

- Добавление новой записи
- Новая запись добавляет при условии, что её длина меньше N символов или равна ей
- Отображение списка добавленных записей
- Удаление из списка добавленных записей
- Переключение статуса записи Выполнено / Невыполненный при клике на её название

## Запуск проекта <a name = "start_project"></a>

Перед работой с проектом, убедитесь, что у Вас установлен [Docker](https://docs.docker.com). <br>

1. Скопируйте проект
2. Перейдите в папку с проектом и выполните команду: `docker run -p 5000:5000 -t front`
3. После запуска контейнера с именем front вы увидите следующее сообщение
<a href="https://imgur.com/PmUxKzi"><img src="https://i.imgur.com/PmUxKzi.png" title="source: imgur.com" /></a>

4. Проект будет доступен по адресу [http://localhost:5000](http://localhost:5000)


## Остановка проекта <a name = "stop_project"></a>

1.  Узанйте <b>CONTAINER_ID</b> требуемого контейнера выполнив команду: `docker ps`
2. Введите команду `docker stop` <b>`CONTAINER_ID`</b>, где CONTAINER_ID из п.1