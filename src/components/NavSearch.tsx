import { useState, useEffect } from "react";

export default function NavSearch({ NavBar, children }: any) {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);

        useEffect(() => {
            const results = children.filter((p:any) =>
                p.toLowerCase().includes(search)
            );
            setSearchResults(results);
        }, [search]);
    }
    return (
        <div>
            <div className="NavBar">
                <img src="" alt="Logotip" />
                {NavBar.map((e: any) => {
                    return (
                        <nav key={e.id} >
                            <a href={e.url}>{e.title}</a>
                        </nav>
                    )
                })}
            </div>
            <div className="Search">
                <input
                    name="Search"
                    type="text"
                    value={search}
                    onChange={onSearch}
                />
                <button>Найти</button>
            </div>
            <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}
// Компонент для меню, строки поиска 
//Через Props вставляем любой массив с данным