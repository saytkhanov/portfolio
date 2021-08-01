import React from "react";
import {
  EuiFlexGroup,
  EuiButton,
  EuiFlexItem,
  EuiPageTemplate,
  BodyContent,
  EuiText,
  EuiAvatar,
  EuiTitle,
  EuiTextColor,
} from "@elastic/eui";

function AboutMe(props) {
  return (
    <EuiPageTemplate style={{ minHeight: 0 }}>
      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiAvatar
            style={{ width: 200, height: 200, borderRadius: 0 }}
            name="Cat"
            imageUrl="https://hhcdn.ru/photo/625935319.jpeg?t=1627848907&h=5-_4y_GsStuv8tKN-7Tu3w"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText>
            <h2>
              <EuiTextColor style={{ color: "blue" }}>Шамиль </EuiTextColor>
              <EuiTextColor style={{ color: "blue" }}>Сайтханов </EuiTextColor>
            </h2>
          </EuiText>
          <EuiText style={{ marginTop: 20 }}>
            <p>
              <EuiTextColor color="default">Возраст: 23 </EuiTextColor>
            </p>
          </EuiText>
          <EuiText>
            <p>
              <EuiTextColor color="default">Город: Москва </EuiTextColor>
            </p>
          </EuiText>
          <EuiText>
            <p>
              <EuiTextColor color="default">
                Опыт работы: 1,2 года{" "}
              </EuiTextColor>
            </p>
          </EuiText>
          <EuiText>
            <p>
              <EuiTextColor color="default">
                Закончил: Intocode Coding Bootcamp{" "}
              </EuiTextColor>
            </p>
          </EuiText>
          <EuiText>
            <p>
              <EuiTextColor color="default">
                Должность: Full-Stack Developer{" "}
              </EuiTextColor>
            </p>
          </EuiText>
          <EuiText>
            <p>
              <EuiTextColor color="default">Основной Стэк: MERN </EuiTextColor>
            </p>
          </EuiText>
          <EuiText style={{ marginTop: 25 }}>
            <b>Во время прохождения bootcamp разработал следующие проекты:</b>
            <br />
            <h3 style={{ color: "red" }}>base-speakers-app</h3>
            <br />
            Сайт, который помогает бизнесу найти дикторов для озвучивания
            рекламных роликов, фильмов, аудиороликов и т.д.
            <br />
            <p />
            ✅ Регистрация и авторизация
            <br />
            ✅ Добавление своих работ
            <br />
            ✅ Удаление, и изменение своих работ и данных
            <br />
            ✅ Возможность заказать услуги диктора
            <br />
            ✅ Поиск: по ФИО, по полу, по цене, по рейтингу
            <br />
            ✅ Пользователи могут оставлять отзыв, дать оценку
            <br />
            <p />
            Задачи, выполненные мной:
            <br />
            <p />
            ✅ Модели, контроллеры и роуты для дикторов и записей
            <br />
            ✅ Вывод рандомных дикторов на основной странице
            <br />
            ✅ Добавление и удаление записи
            <br />
            ✅ Дизайн сайта
            <br />
            ✅ Возможность добавления и изменения аватарки
            <br />
            ✅ Возможность добавления данных о себе и изменения личных данных
            <br />
            ✅ Вывод рейтинга
            <br />
            ✅ Выбор пола при регистрации
            <br />
            ✅ Вывод рандомных дикторов на основной странице
            <br />
            <p />
            Основной стэк:
            <br />
            <p />
            Бэкенд:
            <br />
            MongoDB, Express, Node.js, jwt-авторизация, mongoose,
            <br />
            exrpess-fileupload
            <br />
            <p />
            Фронтенд:
            <br />
            React, Redux, react-router, redux-thunk, Material UI,
            Styled-components, Bootstrap, Fuse.js
            <br />
            <p />
            git:{" "}
            <a href="https://github.com/saytkhanov/base-of-speakers-app">
              {" "}
              https://github.com/saytkhanov/base-of-speakers-app
            </a>
            <br />
            демо:{" "}
            <a href="https://github.com/saytkhanov/base-of-speakers-app">
              https://speakers-mern.herokuapp.com/
            </a>
            <br />
            <h3 style={{ color: "red" }}>students-bootcamp-app</h3>
            <br />
            ✅ Студент может оставлять и изменять заметки
            <br />
            ✅ Выбор статуса
            <br />
            ✅ Поиск студентов
            <br />
            ✅ Переключение на админа
            <br />
            ✅ Добавление студента, а также удаление
            <br />
            ✅ Добавление статуса
            <br />
            <p />
            Основной стэк:
            <br />
            <p />
            Бэкенд:
            <br />
            MongoDB, Express, NodeJS, jwt-авторизация, mongoose,
            <br />
            exrpess-fileupload
            <br />
            Фронтенд:
            <br />
            React, Redux, react-router, redux-thunk, Material UI,
            Styled-components, Bootstrap, Fuse.js
            <br />
            <p />
            Проект разрабатывался по методологии Git Workflow, Scrum
            <br />
            <p />
            git:{" "}
            <a href="https://github.com/saytkhanov/students-bootcamp-app">
              https://github.com/saytkhanov/students-bootcamp-app{" "}
            </a>
            <br />
            демо:{" "}
            <a href="https://students-mern.herokuapp.com">
              https://students-mern.herokuapp.com/
            </a>
            <br />
            <h3 style={{ color: "red" }}>links-mern-app</h3>
            <br />
            <p />
            ✅ Регистрация и авторизация
            <br />
            ✅ Добавление ссылок
            <br />
            ✅ Получение аналитики: по кликам, по дате создания и т.д.
            <br />
            ✅ Таблица из ссылок
            <br />
            <p />
            Основной стэк:
            <br />
            <p />
            Бэкенд:
            <br />
            MongoDB, Express, Node.js, jwt-авторизация, mongoose
            <br />
            Фронтенд:
            <br />
            React, Redux, react-router, redux-thunk, materialize.css, Bootstrap
            <br />
            <p />
            git:{" "}
            <a href="https://github.com/saytkhanov/links-mern-app">
              https://github.com/saytkhanov/links-mern-app
            </a>
            <br />
            демо:{" "}
            <a href="//links-mern.herokuapp.com/">
              https://links-mern.herokuapp.com/
            </a>
            <br />
            <p />
            В каждом проекте обязательно используется:
            <br />
            Eslint, Prettier
            <br />
            <p />
            Проекты разрабатывались по методологиям Git Workflow, Scrum
            <br />
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageTemplate>
  );
}

export default AboutMe;
