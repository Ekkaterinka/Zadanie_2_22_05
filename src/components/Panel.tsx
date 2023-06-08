export default function Panel({ PanelList, children}: any) {

    return (
        <div >
            {children}
            {
                PanelList.map((e: any) => {
                    return (
                        <div key={e.id}>
                            <a href={e.link}>
                            {e.img ? <img src={e.img} alt="IMG"/> : null }
                            <p>{e.text}</p>
                            </a>
                        </div>
                    )
                })
            }

        </div>
    )
}
// Компонент для погоды, телепрограммы, карт и т.д. 
//Через Props вставляем любой массив с данным, через children указываем любую тему