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

function Projects(props) {
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
              <EuiTextColor color="default">Шамиль </EuiTextColor>
              <EuiTextColor color="default">Сайтханов </EuiTextColor>
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
            Я могу действовать и выполнять задачи самостоятельно, а также с
            удовольствием могу работать в команде, творчески подходить к решению
            проблемы. Люблю заканчивать начатую работу, прежде чем приступать к
            новому. Умею направлять сильные стороны человека в нужное для них
            русло. Получаю удовольствие помогая людям. Люблю работать, учиться,
            и всегда рад изучать что-то новое. Не имею каких-либо вредных
            привычек. Для меня очень важно уважение в команде. Мне нравятся
            задачи, в которых я могу проявить свое аналитическое мышление. Лучше
            всего работаю в команде, ценю честность и рабочую этику Хорошо
            справляюсь с поставленными задачами, и соблюдаю все правила и могу
            находить качественные решения.
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageTemplate>
  );
}

export default Projects;
