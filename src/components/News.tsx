import { useState } from "react";

export default function News({ ListNew }: any) {
  const [currentTab, setCurrentTab] = useState('tab1');
  const tabList = [
    {
      name: 'tab1',
      label: 'Сейчас в СМИ',
      content: (
        <div className="tab-content">
          {ListNew.map((e:any) => {
            if (e.name === 'tab1') {
              return (
                <a href="" key={e.id}>
                  <img src={e.url} />
                  <h5>{e.title}</h5>
                </a>)
            }
            else {
              return null;
            }
          })}
        </div>
      )
    },
    {
      name: 'tab2',
      label: 'в Германии',
      content: (
        <div className="tab-content">
          {ListNew.map((e:any) => {
            if (e.name === 'tab2') {
              return (
              <a href="" key={e.id}>
                <img src={e.url} />
                <h5>{e.title}</h5>
              </a>)
            } else {
              return null;
            }
          })}
        </div>
      )
    },
    {
      name: 'tab3',
      label: 'Рекомендуем',
      content: (
        <div className="tab-content">
          {ListNew.map((e:any) => {
            if (e.name === 'tab3') {
              return (
              <a href="" key={e.id}>
                <img src={e.url} />
                <h5>{e.title}</h5>
              </a>)
            } else {
              return null;
            }
          })}
        </div>
      )
    }
  ];

  return (
    <div className="simple-tabs">
      <div className="tabs">
        {
          tabList.map((tab, i) => (
            <button
              key={i}
              onClick={() => setCurrentTab(tab.name)}
              className={(tab.name === currentTab) ? 'active' : ''}>
              {tab.label}
            </button>
          ))
        }
      </div>

      {
        tabList.map((tab, i) => {
          if (tab.name === currentTab) {
            return <div key={i}>{tab.content}</div>;
          } else {
            return null;
          }
        })
      }
    </div>
  )
}
// Компонент для новостей с разными вкладками
//Через Props вставляем любой массив с данными
