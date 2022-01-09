import React, { useState } from 'react'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const beers = [
        { name: "Guinness", type: "Stout" },
        { name: "Boneyard", type: "IPA" },
        { name: "Melvin", type: "Double IPA" },
        { name: "Pelican", type: "IPA" },
        { name: "Stemma", type: "Juicy IPA" },
    ];
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    if (searchInput.length > 0) {
        beers.filter((beer) => {
            return beer.name.match(searchInput);
        });
    }
    return (
        <div>
            <input
                id="search"
                type="search"
                placeholder="Photos, people, or groups"
                onChange={handleChange}
                value={searchInput} />
            {/* <table>
                <tr>
                <th>Beer</th>
                <th>Type</th>
            </tr> */}
                {beers.map((beer, index) => {
                    <div>
                        <tr>
                            <td>{beer.name}</td>
                            <td>{beer.type}</td>
                        </tr>
                    </div>
                })}
            {/* </table> */}
        </div>
    )
};
export default SearchBar;