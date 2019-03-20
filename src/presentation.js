// Import React
import React from 'react';
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Layout, Fill,
  Slide,
  Text,
  Image,
  Appear,
  Notes,
  Code
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

// Import images
import dl from './images/dl-logo.svg';
import me from './images/me.jpg';
import perls from './images/perls.jpg';
import pleeco from './images/pleeco-logo-open.svg';
import eightHour from './images/8hour.jpg';
import fest404 from './images/404.png';
import spbfe from './images/spb-fe.png';
import expert from './images/expert.jpg';
import psychotherapist from './images/psychotherapist.jpg';
import shame from './images/shame.png';
import twix from './images/twix.jpg';
import relax from './images/relax.jpg';
import wargaming from './images/wargaming.svg';
import cogs from './images/cogs.png';
import friends from './images/friends.jpg';
import fireshow from './images/fireshow.jpg';
import copycats from './images/copycats.jpg';
import demons from './images/demons.png';
import laika from './images/laika.jpg';
import border from './images/border.jpg';

const LCode = styled(Heading)`
  text-align: left;
  font-family: monospace;
`;
const LHeading = styled(Heading)`
  text-align: left;
`;
const LLHeading = styled(Heading)`
  text-align: left;
  float: left;
  clear: both;
  margin: 0 -10px;
  padding: 10px;
`;
const RHeading = styled(Heading)`
  text-align: right;
`;
const LText = styled(Text)`
  text-align: left;
`;
const HalfText = styled(Text)`
  text-align: left;
  line-height: .5em;
`;
const LLText = styled(Text)`
  text-align: left;
  float: left;
  clear: both;
  margin: -10px -10px 0;
  padding: 10px;
`;
const RText = styled(Text)`
  text-align: right;
`;

const SPAN = styled(Text)`
  height: 10000px;
`;

const Thick = styled(Text)`
  font-family: serif;
  font-size: 1em;
  color: transparent;
  display: inline;
  line-height: 0;
`;
const Thin = styled(Text)`
  font-family: serif;
  font-size: 2em;
  color: transparent;
  display: inline;
  line-height: 0;
`;

const LImage = styled(Image)`
  margin-left: 0;
  margin-right: 0;
  display: inline-block;
  float: left;
`;

const Image15 = styled(Image)`
  margin-left: 38%;
  margin-right: 0;
  margin-top: -7%;
  display: inline-block;
  float: left;
  transform: rotate(-15deg);
`;

const Image15_2 = styled(Image)`
  margin-left: -19%;
  margin-right: 0;
  margin-top: -22%;
  display: inline-block;
  float: left;
  transform: rotate(15deg);
`;

const RImage = styled(Image)`
  margin-left: 0;
  margin-right: 0;
  display: inline-block;
  float: right;
`;

const ChushText = styled(Text)`
  transform: rotate(-45deg);
  font-size: 8em;
  position: absolute;
  width: 100%;
  margin-left: -50%;
  margin-top: -.5em;
  text-align: center;
  top: 50%;
  left: 50%;
  font-weight: bold;
  text-shadow: 0 0 15px #FFF, 0 0 30px #FFF, 0 0 45px #FFF, 0 0 60px #FFF;
`;

const SecondaryCT = styled(ChushText)`
  text-shadow: 0 0 15px #211000, 0 0 30px #211000, 0 0 45px #211000, 0 0 60px #211000;
`;
const CustomList = styled(List)`
  margin-left: 1.6em;
  text-align: left;
  list-style-type: none;
  margin-top: 0;
  
  li {
    margin-bottom: 0.25em;
  }

  li:before {
    content: "–"; /* en dash */
    position: absolute;
    margin-left: -1.1em; 
  }
`;

// Import theme

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#FFF',
    secondary: '#09091a',
    tertiary: '#455899',
    quaternary: '#CECECE',
    red: '#d85842',
    orange: '#ffdfbf',
    black: '#000'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const planList = [
  'О себе',
  'Дисклеймер',
  'В чём проблема?',
  'Реабилитация',
  'Чиним голову'
];

const plan = (index) => (
  <Slide bgColor="primary" textColor="tertiary" id={`part-${index + 1}`}>
    <LHeading size={1}>
      Ψ → IT
    </LHeading>
    <br/>
    <CustomList>
      {planList.map((item, itemIndex) =>
        <ListItem key={itemIndex} textColor={
          itemIndex < index ? 'quaternary' : itemIndex === index ? 'tertiary' : 'secondary'
        }>{item}</ListItem>)}
    </CustomList>
    <SPAN/>
  </Slide>
);


export default class Presentation extends React.Component {
  render() {
    let planStep = 2;

    return (
      <Deck
        contentWidth={1000}
        contentHeight={750}
        transition={[]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="orange">
          <LText>&nbsp;</LText>
          <LHeading size={1} textColor="secondary">
            Психология
          </LHeading>
          <LHeading size={2} textColor="secondary">
            для айтишников
          </LHeading>
          <LText textColor="tertiary">
            про выгорание и заботу о себе
          </LText>
          <br/>
          <br/>
          <RImage width="25%" src={wargaming}/>
          <br/>
          <br/>
          <br/>
          <br/>
          <LText textColor="secondary">
            Дима Семьюшкин
          </LText>
          <LText textColor="tertiary">
            март 2019, PiterJS
          </LText>
          <SPAN/>
        </Slide>
        <Slide>
          <LText textColor="secondary">О себе →</LText>
          <LHeading size={3}>Я веб-разработчик</LHeading>
          <br/>
          <br/>
          <br/>
          <br/>
          <LImage width="20%" src={dl}/>
          <RImage width="72%" src={pleeco}/>
          <SPAN/>
          <Notes>
            <p>Я 11 лет занимаюсь программированием, последние 5 лет моей
              карьеры — в этих логотипах. Год в Exante, три в Лаборатории данных
              и последний год — в Pleeco. Веб-разработка, визуализация данных,
              вот это всё.</p>
            <p>Для нашего сегодяншнего разговора самое важное — три года в
              Лаборатории. Благодаря компании и директору — Тане Бибиковой — у
              меня была возможность работать и...</p>
          </Notes>
        </Slide>
        <Slide bgColor="black" bgImage={perls} bgSize="contain"
               bgRepeat="no-repeat">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <LLText bgColor="primary" textColor="secondary">О себе →</LLText>
          <LLHeading bgColor="primary" size={2}>...и гештальтист</LLHeading>
          <SPAN/>
          <Notes>
            <p>Учиться в питерском институте гештальта!</p>
            <p>Три года — полная программа обучения, я научился психотерапии в
              гештальт-подходе.</p>
            <p>Для оценки масштаба: 200 часов групповой терапии, 400 часов
              теории и практики, от 20 часов личной терапии. Плюс супервизия — я
              буду сегодня ещё про это говорить — работа под наблюдением
              опытного специалиста.</p>
            <p>Это не единственный мой опыт в психологии. Я учился, читал книги,
              посещал тренинги, учился их вести, придумывал и вёл свои.</p>
            <p>Я не планирую делать какой-то центральный фокус на
              гештальт-терапии, но в некоторых местах рассказа буду опираться на
              гештальт-подход.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText>
            &nbsp;
          </LText>
          <LHeading size={2}>Дисклеймер</LHeading>
          <br/>
          <Image width="100%" src={expert}/>
          <SPAN/>
          <Notes>
            <p>Я начну с дисклеймера, расскажу об Стрессых выступления</p>
            <p>Я буду по большому счёту рассказывать про стресс связанный с
              работой, в чём его спефицика у айтишников и что с ним можно
              делать.</p>
            <p>Я буду субъективен и самокритичен, я рассказываю опираясь на
              собственный опыт и образование, не претендую на полноту и
              объевтивность.</p>
            <p>Мой рассказ — затравка. Я надеюсь что он послужит поводом другим
              говорить о том же.</p>
            <p>Я буду упоминать имена людей и давать ссылки на различные
              материалы и проекты. Ссылки в презентации, в конце покажу где
              скачать.</p>
          </Notes>
        </Slide>
        <Slide>
          <LText>
            Дисклеймер →
          </LText>
          <LLHeading bgColor="primary" size={2}>В предыдущих сериях</LLHeading>
          <Image15 width="75%" src={fest404}/>
          <Image15_2 width="75%" src={spbfe}/>
          <SPAN/>
        </Slide>
        {plan(planStep++)}
        <Slide>
          <Heading size={2}>Проблема — не&nbsp;в&nbsp;знаниях</Heading>
        </Slide>
        <Slide>
          <LText>
            В чём проблема? →
          </LText>
          <LHeading size={4}>Игнорируем ощущения</LHeading>
          <br/>
          <br/>
          <LCode size={1}>😅&nbsp;&nbsp;🤦🏻‍♀&nbsp;&nbsp;🤓&nbsp;&nbsp;😦</LCode>
          <br/>
          <LCode size={1}>&nbsp;&nbsp;😒&nbsp;&nbsp;😑&nbsp;&nbsp;😕</LCode>
          <br/>
          <LCode size={1}>😛&nbsp;&nbsp;😀&nbsp;&nbsp;🙅🏻‍♂️&nbsp;&nbsp;😆</LCode>
          <SPAN/>
        </Slide>
        <Slide bgImage={relax} bgSize="contain" bgRepeat="no-repeat">
          <LLText bgColor="primary">
            В чём проблема? →
          </LLText>
          <LLHeading size={4} bgColor="primary">Забываем
            расслабляться</LLHeading>
          <SPAN/>
        </Slide>
        <Slide>
          <LText>
            В чём проблема? →
          </LText>
          <LHeading size={2}>Копируем других</LHeading>
          <br/>
          <br/>
          <LImage width="100%" src={copycats}/>
          <SPAN/>
        </Slide>
        <Slide>
          <LText bgColor="primary">
            В чём проблема? →
          </LText>
          <LHeading size={4} bgColor="primary">Всё рационализруем</LHeading>
          <br/>
          <Image width="70%" src={cogs}/>
          <SPAN/>
        </Slide>
        <Slide bgImage={shame}>
          <LLText bgColor="primary" textColor="secondary">
            В чём проблема? →
          </LLText>
          <LLHeading size={4} bgColor="primary"
                     textColor="secondary">Стыдим и стыдимся</LLHeading>
          <SPAN/>
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText>
            Реабилитация →
          </LText>
          <LHeading size={3}>Берём паузу</LHeading>
          <br/>
          <Image width="100%" src={twix}/>
          <SPAN/>
        </Slide>
        <Slide bgImage={friends} bgRepeat="no-repeat">
          <LLText bgColor="primary" textColor="secondary">
            Реабилитация →
          </LLText>
          <LLHeading size={3} bgColor="primary" textColor="secondary">Ищем
            поддержку</LLHeading>
          <SPAN/>
        </Slide>
        <Slide>
          <LText>
            Реабилитация →
          </LText>
          <LHeading size={3}>Выделяем критика</LHeading>
          <Image width="80%" src={laika}/>
          <SPAN/>
        </Slide>
        <Slide bgImage={fireshow} bgColor="secondary" bgSize="contain"
               bgRepeat="no-repeat">
          <LLText bgColor="secondary" textColor="primary">
            Реабилитация →
          </LLText>
          <LLHeading size={2} bgColor="secondary" textColor="primary">Радуем
            тушку</LLHeading>
          <SPAN/>
        </Slide>
        <Slide>
          <LText>
            Реабилитация →
          </LText>
          <LHeading size={3}>Слушаем себя</LHeading>
          <br/>
          <Image width="100%" src={demons}/>
          <SPAN/>
        </Slide>
        <Slide>
          <LText>
            Реабилитация →
          </LText>
          <LHeading size={4}>Восстанавливаем баланс</LHeading>
          <br/>
          <Image width="50%" src={eightHour}/>
          <SPAN />
        </Slide>
        <Slide>
          <LText>
            Реабилитация →
          </LText>
          <LHeading size={4}>Восстанавливаем баланс</LHeading>
          <br/>
            <Appear><LCode size={5}>&nbsp;1.&nbsp;&nbsp;&nbsp;🇲🇽 2255</LCode></Appear>
            <Appear><LCode size={5}>&nbsp;2.&nbsp;&nbsp;&nbsp;🇨🇷 2205</LCode></Appear>
            <Appear><LCode size={5}>&nbsp;3.&nbsp;&nbsp;&nbsp;🇰🇷 2071</LCode></Appear>
            <Appear><LCode size={5}>&nbsp;4.&nbsp;<Thick>&nbsp;</Thick>🇷🇺🇨🇱<Thin>&nbsp;</Thin>1974</LCode></Appear>
            <HalfText>&nbsp;</HalfText>
            <Appear><LCode size={5}>&nbsp;8.&nbsp;&nbsp;&nbsp;🇵🇱 1832</LCode></Appear>
            <HalfText>&nbsp;</HalfText>
            <Appear><LCode size={5}>38.&nbsp;&nbsp;&nbsp;🇩🇪 1363</LCode></Appear>
            <RText>Статистика OECD, 2016</RText>
            <SPAN/>
        </Slide>
        <Slide bgImage={border} bgRepeat="no-repeat">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <LLText bgColor="primary" textColor="secondary">
            Реабилитация →
          </LLText>
          <LLHeading size={4} bgColor="primary" textColor="secondary">Восстанавливаем<br />границы</LLHeading>
          <SPAN/>
        </Slide>
        {plan(planStep++)}
        <Slide>
          <LText>
            Чиним голову →
          </LText>
          <LHeading size={2}>Психотерапия</LHeading>
          <Image width="60%" src={psychotherapist}/>
          <SPAN/>
        </Slide>
        <Slide>
          <LText>…психолог и психиатр — это последние точки, куда приходят люди.
            До них на карту обычно наносится алкоголь, наркотики, эксперименты с
            препаратами из интернета, секты, различные субкультуры, поездки в
            Тибет и многое другое.</LText>
          <br/>
          <RHeading size={4}>Адриана Имж</RHeading>
        </Slide>
        <Slide>
          <LText>
            Чиним голову →
          </LText>
          <LHeading size={2}>Зачем?</LHeading>
          <br/>
          <CustomList>
            <Appear><ListItem>Распознавание переживаний</ListItem></Appear>
            <Appear><ListItem>Работа с «внутренним критиком»</ListItem></Appear>
            <Appear><ListItem>Формирование «зоны комфорта»</ListItem></Appear>
            <Appear><ListItem>Формирование границ</ListItem></Appear>
            <Appear><ListItem>«Эмоциональный коучинг»</ListItem></Appear>
          </CustomList>
          <SPAN/>
        </Slide>
        <Slide>
          <LText>
            Чиним голову →
          </LText>
          <LHeading size={2}>Кого ищем?</LHeading>
          <br/>
          <CustomList>
            <Appear><ListItem>Высшее образование</ListItem></Appear>
            <Appear><ListItem>Терапевтическое образование</ListItem></Appear>
            <Appear><ListItem>Супервизия / интервизия</ListItem></Appear>
            <Appear><ListItem>Личная терапия</ListItem></Appear>
            <Appear><ListItem>Без этических нарушений</ListItem></Appear>
          </CustomList>
          <SPAN/>
        </Slide>
        <Slide>
          <LText>
            Чиним голову →
          </LText>
          <LHeading size={2}>Под вопросом</LHeading>
          <br/>
          <CustomList>
            <Appear><ListItem>стаж в 100500 лет</ListItem></Appear>
            <Appear><ListItem>«Иванов, автор метода Иванова»</ListItem></Appear>
            <Appear><ListItem>«мясник»</ListItem></Appear>
            <Appear><ListItem>супер-автор</ListItem></Appear>
            <Appear><ListItem>эзотерик</ListItem></Appear>
          </CustomList>
          <SPAN/>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Чиним голову →
          </LText>
          <LHeading size={3}>Ассортимент</LHeading>
          <br />
          <LText>Психоанализ</LText>
          <LText>Трансактный анализ</LText>
          <LText>Когнитивно-поведенческая терапия</LText>
          <LText>Экзистенциальная терапия</LText>
          <LText>Гештальт-терапия</LText>
          <LText>EMDR</LText>
          <LText>Психодрама</LText>
          <LText>Арт-терапия</LText>
          <Notes>
            <p>Здесь — далеко не полный перечень психотерапевтических подходов, появившихся в 20 веке. Некоторые из них между собой похожи. Изучать их все жизни не хватит.</p>
            <p>На самом деле среди подходов часто встречаются родственные.</p>
            <p>Почти любой вид терапии так или иначе наследует психоанализу, использует часть его понятий и инструментов</p>
            <p>А семейная терапия, например, может по сути быть обычной терапией в одном из подходов, адаптированном для работы с группой людей.</p>
          </Notes>
          <SPAN />
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Чиним голову →
          </LText>
          <LHeading size={2}>Поисковики</LHeading>
          <br/>
          <RHeading size={1}>BEMETA.CO</RHeading>
          <LHeading size={1}>PSYALTER.RU</LHeading>
          <RHeading size={1}>BREEZE.LIVE</RHeading>
          <LHeading size={1}>YASNO.LIVE</LHeading>
          <br/>
          <SPAN/>
        </Slide>
        <Slide>
          <LText textColor="secondary">
            Чиним голову →
          </LText>
          <LHeading size={2}>«Адриатика»</LHeading>
          <br/>
          <br/>
          <br/>
          <br/>
          <LHeading size={3}>bit.ly/imj-adriatika</LHeading>
          <br/>
          <SPAN/>
        </Slide>
        <Slide bgColor="red" id="fin">
          <Text caps fit textColor="primary">Всё</Text>
        </Slide>

        <Slide id="contact">
          <LHeading size={2}>Пишите!</LHeading>
          <br/>
          <Layout>
            <Fill>
              <LImage width="80%" src={me}/>
            </Fill>
            <Fill>
              <LText>devg.ru</LText>
              <br/>
              <LText>t.me/dima_devgru</LText>
              <br/>
              <LText>t.me/life_refactoring</LText>
            </Fill>
          </Layout>
          <SPAN/>
        </Slide>
        <Slide>
          <LHeading size={2}>Что почитать?</LHeading>
          <br/>
          <CustomList>
            <ListItem><a href="https://tonsky.livejournal.com/317265.html">Никита Прокопов о выгорании</a></ListItem>
            <ListItem><a href="https://askd.livejournal.com/127949.html">Анна Селезнёва о выгорании</a></ListItem>
            <ListItem><a href="https://www.youtube.com/watch?v=IzRYFdXXnqI">Экзистенциализация психотерапии</a></ListItem>
            <ListItem>Книги Ирвина Ялома</ListItem>
          </CustomList>
          <SPAN/>
        </Slide>
        <Slide>
          <LHeading size={2}>Про рабочее время</LHeading>
          <br/>
          <CustomList>
            <ListItem><a href="https://m.signalvnoise.com/why-we-only-work-4-days-a-week-during-summer/">Пятница — выходной летом в Basecamp</a></ListItem>
            <ListItem><a href="https://habr.com/ru/post/443680/">Четырехдневная рабочая неделя. Российский опыт</a></ListItem>
            <ListItem><a href="https://vc.ru/flood/19479-new-flexibility">Опыт Ultimate Guitar</a></ListItem>
          </CustomList>
          <SPAN/>
        </Slide>
      </Deck>
    );
  }
}
